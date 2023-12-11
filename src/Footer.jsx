import NavItems from "./NavItems";
import navItems from "./nav-items";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

const socialItems = [
  { name: <FaFacebook />, link: "/facebook" },
  { name: <FaInstagram />, link: "/instagram" },
  { name: <FaGithub />, link: "/github" },
  { name: <FaYoutube />, link: "/youtube" },
  { name: <FaTiktok />, link: "/tiktok" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white px-4 py-20 flex flex-col gap-8 xl:px-32 ">
     <div className="flex flex-col gap-8 xl:flex-row xl:justify-between">
     <NavItems navItems={navItems} className="gap-2 flex-col xl:flex-row xl:gap-6" />
      <ul className="flex gap-4">
        {socialItems.map((socialItem) => (
          <li>
            <a target="_blank" href={socialItem.link}>{socialItem.name}</a>
          </li>
        ))}
      </ul>
     </div>
      <div className="h-px w-full bg-neutral-800" />

      <div className="flex flex-col xl:flex-row xl:justify-between">
        <p>
          &copy; 2023 Malindu Bandara &nbsp;·&nbsp;
          <a
            className="underline"
            href="https://github.com/thisismalindu/thisismalindu"
            target="_blank"
          >
            Source code (MIT)
          </a>
        </p>
        <p>
          Made with{" "}
          <a target="_blank" href="https://react.dev/" className="underline">
            ReactJS
          </a>
          ,{" "}
          <a target="_blank" href="https://vitejs.dev/" className="underline">
            Vite
          </a>
          , and{" "}
          <a
            target="_blank"
            href="https://tailwindcss.com/"
            className="underline"
          >
            TailwindCSS
          </a>{" "}
          🤍
        </p>
      </div>
    </footer>
  );
}
