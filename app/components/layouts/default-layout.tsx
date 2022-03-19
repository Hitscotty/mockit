import Header from "../sections/header";
import Footer from "../sections/footer";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
