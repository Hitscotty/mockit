import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";

import AuthProvider from "./providers/auth";

import styles from "~/tailwind.css";
import bpStyles from "@blueprintjs/core/lib/css/blueprint.css";
import bpIconStyles from "@blueprintjs/icons/lib/css/blueprint-icons.css";
import Layout from "./components/layouts/default-layout";

export const links = () => [
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: bpStyles },
  { rel: "stylesheet", href: bpIconStyles },
];

export const meta = () => ({ title: "MockIT" });

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body style={{ margin: 0 }}>
        <AuthProvider>
          <Layout>
            <Outlet />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
          </Layout>
        </AuthProvider>
      </body>
    </html>
  );
}
