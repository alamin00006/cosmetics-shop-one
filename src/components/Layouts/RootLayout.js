import Footer from "../Home/Footer";
import Navber from "../Home/Navbar";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Navber />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
