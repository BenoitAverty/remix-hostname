import type { ReactElement } from "react";
import { useLoaderData } from "remix";

import type { LoaderArguments } from "~/types/LoaderArguments";
import type { LoaderResult } from "~/types/LoaderResult";

export default function UserHome(): ReactElement {
  const data = useLoaderData();

  return (
    <>
      <h1>Username ( from host header ): {data.name}</h1>
    </>
  );
}

export function loader({ request }: LoaderArguments): LoaderResult {
  let host = request.headers.get("host");
  return {
    name: new URL(host ? `http://${host}` : "http://default.example.com").host.split('.')[0],
  };
}
