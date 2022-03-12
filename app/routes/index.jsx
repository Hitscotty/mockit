import Header from "~/components/header";
import bpStyles from "@blueprintjs/core/lib/css/blueprint.css";
import bpIconStyles from "@blueprintjs/icons/lib/css/blueprint-icons.css";

export const links = () => [
  { rel: "stylesheet", href: bpStyles },
  { rel: "stylesheet", href: bpIconStyles },
];

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Header />
    </div>
  );
}
