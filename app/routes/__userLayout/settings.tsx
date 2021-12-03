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

export function loader({ request }: LoaderArguments): LoaderResult {
  return {
    name: new URL(request.url).host.split('.')[0],
  };
}
