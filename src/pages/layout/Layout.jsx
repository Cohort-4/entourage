// import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <section>
      <Navbar />
      {children}
      {/* <Footer /> */}
    </section>
  );
};
export default Layout;
