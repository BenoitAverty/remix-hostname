import type { ReactElement } from "react";
import { Outlet, useLoaderData } from "remix";

import type { LoaderArguments } from "~/types/LoaderArguments";
import type { LoaderResult } from "~/types/LoaderResult";

export default function User(): ReactElement {
  const data = useLoaderData();

  return (
    <>
      <h1>Username: {data.name}</h1>
      <Outlet />
    </>
  );
}

export function loader({ request }: LoaderArguments): LoaderResult {
  return {
    name: new URL(request.url).host.split('.')[0],
  };
}
