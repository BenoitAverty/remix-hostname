// Need to rename this one because it conflicts with the index inside __userLayout. If you still need a "global home" you'll need to treat 
// it as any other name but make a special case when it's empty

import type { ReactElement } from "react";

export default function Home(): ReactElement {
  return <h1>Home</h1>;
}
