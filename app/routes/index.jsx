import Banner from "~/components/sections/banner";
import About from "~/components/sections/about";
import styles from "~/styles/index.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

export default function Index() {
  return (
    <div className="flex flex-col">
      <Banner className="mb-4 mt-4" />
      <About className="space-x-4" />
    </div>
  );
}
