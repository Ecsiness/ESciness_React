import Navbar from "./Navbar";
import Container from "./Container";
import Footer from "./Footer";

const Wrapper = ({ children }) => {
  return (
    <main>
      <Navbar />
      <Container>
        {children}
        <Footer />
      </Container>
    </main>
  );
};

export default Wrapper;
