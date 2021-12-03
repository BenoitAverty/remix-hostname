import type { ReactElement, ReactNode } from "react";
import { Links, LiveReload, Meta, Scripts } from "remix";

type DocumentProps = {
  children: ReactNode;
};

export function Document({ children }: DocumentProps): ReactElement {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <Links />
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === "development" && <LiveReload />}
        <Scripts />
      </body>
    </html>
  );
}
