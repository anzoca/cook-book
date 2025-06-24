import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex-col w-xs h-screen border-r border-gray-400 justify-items-center">
      <div className="mt-5">{'MyApp'}</div>
      <ul className="flex-col mt-7">
        <li>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
