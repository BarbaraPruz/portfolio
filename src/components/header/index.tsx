import { HamburgerIcon } from "@/icons";
import { NavLink } from "../navlink";

// ToDo: mobile hamburger menu expand / collapse
export const Header = () => (
  <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
    <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
      <a href="#" className="text-xl">
        barbara prusiewicz
      </a>
      <div className="flex items-center lg:order-2">
        <div className="hidden mt-2 mr-4 sm:inline-block">
          <span></span>
        </div>
        <button
          data-collapse-toggle="mobile-menu-2"
          type="button"
          className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu-2"
          aria-expanded="true"
        >
          <span className="sr-only">Open main menu</span>
          <HamburgerIcon />
        </button>
      </div>
      <div
        className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1"
        id="mobile-menu-2"
      >
        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          <li>
            <NavLink href="#" label="home" />
          </li>
          <li>
            <NavLink href="#" label="about" />
          </li>
          <li>
            <NavLink href="#" label="projects" />
          </li>
          <li>
            <NavLink href="#" label="contact" />
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
