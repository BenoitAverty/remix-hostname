import type { ReactElement } from "react";
import { useLoaderData } from "remix";

import type { LoaderArguments } from "~/types/LoaderArguments";
import type { LoaderResult } from "~/types/LoaderResult";

export default function UserSettings(): ReactElement {
  const data = useLoaderData();

  return (
    <>
      <h1>Settings for {data.name}</h1>
    </>
  );
}

export function loader({ params }: LoaderArguments): LoaderResult {
  return {
    name: params.user,
  };
}
