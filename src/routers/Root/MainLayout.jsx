import Navbar from "./../../components/ui/Navbar";
import Container from "./../../components/ui/Container";
import Footer from "./../../components/ui/Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";

export default function MainLayout() {
  return (
    <main>
      <Navbar />
      <Container>
        <Outlet />
        <Footer />
      </Container>
      <ScrollRestoration />
    </main>
  );
}
