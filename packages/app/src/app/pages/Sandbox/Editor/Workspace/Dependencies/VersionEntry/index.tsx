import { formatVersion } from '@codesandbox/common/lib/utils/ci';
import algoliaSearch from 'algoliasearch/lite';
import compareVersions from 'compare-versions';
import React, {
  ChangeEvent,
  FunctionComponent,
  useEffect,
  useState,
} from 'react';

import { useOvermind } from 'app/overmind';

import { EntryContainer } from '../../elements';

import { Link } from '../elements';

import { Actions } from './Actions';
import { BundleSizes } from './BundleSizes';
import { Version, VersionSelect } from './elements';

type Props = {
  dependencies: { [dependency: string]: string };
  dependency: string;
};
export const VersionEntry: FunctionComponent<Props> = ({
  dependencies,
  dependency,
}) => {
  const {
    actions: {
      editor: { addNpmDependency },
    },
  } = useOvermind();
  const [hovering, setHovering] = useState(false);
  const [showBundleSizes, setShowBundleSizes] = useState(false);
  const [version, setVersion] = useState(null);
  const [versions, setVersions] = useState([]);

  useEffect(() => {
    const client = algoliaSearch(
      'OFCNCOG2CU',
      '00383ecd8441ead30b1b0ff981c426f5'
    );
    const index = client.initIndex('npm-search');

    // @ts-ignore
    index.getObject(dependency, ['versions']).then(({ versions: results }) => {
      const versionsToInit = Object.keys(results).sort((a, b) => {
        try {
          return compareVersions(b, a);
        } catch (error) {
          return 0;
        }
      });

      setVersions(versionsToInit);
    });
  }, [dependency]);

  const setVersionsForLatestPkg = (pkg: string) =>
    fetch(`/api/v1/dependencies/${pkg}`)
      .then(response => response.json())
      .then(({ data }) => setVersion(data.version))
      .catch(error => {
        if (process.env.NODE_ENV === 'development') {
          console.error(error); // eslint-disable-line no-console
        }
      });
  useEffect(() => {
    const versionRegex = /^\d{1,3}\.\d{1,3}.\d{1,3}$/;

    if (!versionRegex.test(dependencies[dependency])) {
      setVersionsForLatestPkg(`${dependency}@${dependencies[dependency]}`);
    }
  }, [dependencies, dependency]);

  const selectVersion = ({
    target: { value },
  }: ChangeEvent<HTMLSelectElement>) => {
    addNpmDependency({ name: dependency, version: value });

    setHovering(false);
  };

  if (typeof dependencies[dependency] !== 'string') {
    return null;
  }

  return (
    <>
      <EntryContainer
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <Link href={`https://www.npmjs.com/package/${dependency}`}>
          {dependency}
        </Link>

        <VersionSelect
          hovering={hovering}
          defaultValue={versions.find(v => v === dependencies[dependency])}
          onChange={selectVersion}
        >
          {versions.map(a => (
            <option key={a}>{a}</option>
          ))}
        </VersionSelect>

        <Version hovering={hovering}>
          {`${formatVersion(dependencies[dependency])} ${
            hovering && version ? `(${formatVersion(version)})` : ''
          }`}
        </Version>

        {hovering && (
          <Actions
            dependencyName={dependency}
            showBundleSizes={showBundleSizes}
            setShowBundleSizes={setShowBundleSizes}
          />
        )}
      </EntryContainer>

      {showBundleSizes ? (
        <BundleSizes
          dependency={dependency}
          version={dependencies[dependency]}
        />
      ) : null}
    </>
  );
};
