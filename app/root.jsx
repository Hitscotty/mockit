import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import Header from "./components/sections/header";
import Footer from "./components/sections/footer";
import AuthProvider from "./providers/auth";

import bpStyles from "@blueprintjs/core/lib/css/blueprint.css";
import bpIconStyles from "@blueprintjs/icons/lib/css/blueprint-icons.css";

export const links = () => [
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
      <body>
        <AuthProvider>
          <Header />
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
