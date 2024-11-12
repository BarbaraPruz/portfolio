export const NavLink = ({ href, label }) => (
  <a
    href={href}
    className={`
        block py-2 pl-3 pr-4m 
        text-lg text-gray-700 
        hover:underline hover:text-purple-700 `}
    >
    {label}
  </a>
);

