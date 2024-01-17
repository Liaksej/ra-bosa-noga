"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const listOfLinks = [
  {
    name: "Главная",
    href: "/",
  },
  {
    name: "Каталог",
    href: "/catalog",
  },
  {
    name: "О магазине",
    href: "/about",
  },
  {
    name: "Контакты",
    href: "/contacts",
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="collapse navbar-collapse" id="navbarMain">
      <ul className="navbar-nav mr-auto">
        {listOfLinks.map((link) => (
          <li className="nav-item" key={link.href}>
            <Link
              className={
                pathname === link.href ? "nav-link active" : "nav-link"
              }
              href={link.href}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <div className="header-controls-pics">
          <div
            data-id="search-expander"
            className="header-controls-pic header-controls-search"
          />
          {/* Do programmatic navigation on click to /cart.html */}
          <div className="header-controls-pic header-controls-cart">
            <div className="header-controls-cart-full">1</div>
            <div className="header-controls-cart-menu" />
          </div>
        </div>
        <form
          data-id="search-form"
          className="header-controls-search-form form-inline invisible"
        >
          <input className="form-control" placeholder="Поиск" />
        </form>
      </div>
    </div>
  );
}
