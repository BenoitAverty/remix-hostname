import type { ReactElement } from "react";
import { Outlet, useCatch } from "remix";

import { Document } from "~/components/Document";
import type { MetaResult } from "~/types/MetaResult";

export default function Root(): ReactElement {
  return (
    <Document>
        <Outlet />
    </Document>
  );
}

export function meta(): MetaResult {
  return {
    title: "remix-hostname",
  };
}

export function CatchBoundary(): ReactElement {
  const caught = useCatch();

  switch (caught.status) {
    case 401:
    case 404:
      return (
        <Document>
          <main>
            <h1>
              {caught.status} {caught.statusText}
            </h1>
          </main>
        </Document>
      );

    default:
      throw new Error(
        `Unexpected caught response with status: ${caught.status}`
      );
  }
}

export function ErrorBoundary({ error }: { error: Error }): ReactElement {
  return (
    <Document>
      <main>
        <h1>Something threw an error!</h1>
        <pre>{error.message}</pre>
      </main>
    </Document>
  );
}
