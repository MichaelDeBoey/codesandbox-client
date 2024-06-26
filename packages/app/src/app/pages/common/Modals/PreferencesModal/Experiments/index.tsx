import { Text, Element } from "@codesandbox/components";
import React, { FunctionComponent } from "react";

import { SubContainer } from "../elements";
import { BetaSandboxEditor } from "./BetaSandboxEditor";

export const Experiments: FunctionComponent = () => (
  <>
    <Text block marginBottom={6} size={4} weight="regular">
      Experiments
    </Text>

    <SubContainer>
      <Element paddingTop={2}>
        <BetaSandboxEditor />
        {/* <Text size={13} variant="muted">
          No experiements available at the moment
        </Text> */}
      </Element>
    </SubContainer>
  </>
);
