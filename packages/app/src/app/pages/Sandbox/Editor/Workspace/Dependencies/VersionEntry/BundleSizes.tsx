import React, { FunctionComponent, useEffect, useState } from 'react';
import { MoreData } from './elements';

const formatSize = (value: number) => {
  let unit: string;
  let size: number;

  if (Math.log10(value) < 3) {
    unit = 'B';
    size = value;
  } else if (Math.log10(value) < 6) {
    unit = 'kB';
    size = value / 1024;
  } else {
    unit = 'mB';
    size = value / 1024 / 1024;
  }

  return `${size.toFixed(1)}${unit}`;
};

type Bundle = {
  gzip: number;
  size: number;
};
type Props = {
  dependency: string;
  version: string;
};
export const BundleSizes: FunctionComponent<Props> = ({
  dependency,
  version,
}) => {
  const [bundle, setBundle] = useState<Bundle | null>(null);
  const [error, setError] = useState(null);

  const getSizeForPKG = (packageName: string) => {
    fetch(`https://bundlephobia.com/api/size?package=${packageName}`)
      .then(data => data.json())
      .then(setBundle)
      .catch(setError);
  };
  useEffect(() => {
    const cleanVersion = version.split('^');
    getSizeForPKG(`${dependency}@${cleanVersion[cleanVersion.length - 1]}`);
  }, [dependency, version]);

  if (error) {
    return (
      <MoreData>There was a problem getting the size for {dependency}</MoreData>
    );
  }

  return bundle ? (
    <MoreData>
      <li>
        <span>Gzip:</span> {formatSize(bundle.gzip)}
      </li>

      <li>
        <span>Size:</span> {formatSize(bundle.size)}
      </li>
    </MoreData>
  ) : null;
};
