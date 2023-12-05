import NavItems from "./NavItems";
import logo from "./assets/logo.png";

export default function Navbar({ navItems }) {
  return (
    <nav className="fixed  w-full flex justify-between p-4 items-center border-b bg-white xl:px-32 ">
      <a href="/">
        <img src={logo} alt="malindu logo" className="h-10" />
      </a>

      <NavItems navItems={navItems} className="gap-10" />
    </nav>
  );
}
