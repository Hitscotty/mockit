import Header from "../sections/header";
import Footer from "../sections/footer";
import { useMatch } from "react-router-dom";

const Layout = ({ children }) => {
  const isLoggingIn = useMatch("/login");

  if (isLoggingIn) {
    return children;
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
