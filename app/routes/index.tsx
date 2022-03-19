import Banner from "~/components/sections/banner";
import About from "~/components/sections/about";

export default function Index() {
  return (
    <div className="flex flex-col">
      <Banner className="mb-4 mt-4" />
      <About className="space-x-4" />
    </div>
  );
}
