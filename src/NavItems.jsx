
export default function NavItems({navItems,className}) {
  return (
    <ul className={className+" flex  "}>
      {navItems.map((navItem) => (
        <li>
          <a className="mono hover:underline" href={navItem.link}>{navItem.name}</a>
        </li>
      ))}
    </ul>
  );
}
