import Footer from "./Footer";
import Header from "./Header";
import navItems from "./nav-items";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar navItems={navItems} />
      <Header/>
      <Footer/>
    </>
  );
}

export default App;
