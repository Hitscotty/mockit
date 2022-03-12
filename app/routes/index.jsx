import Banner from "~/components/sections/banner";
import Main from "~/components/sections/main";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Banner />
      <Main />
    </div>
  );
}
