import Link from 'next/link';

const Navbar = () => {
  return (
    <aside>
      <nav className="w-60 h-screen flex-col justify-between border-r border-gray-200 pt-8 max-md:hidden sm:p-4 xl:p-6 2xl:w-[355px]">
        <h1 className="text-3xl font-bold font-lora">My App</h1>
        <ul className="flex-col mt-7">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Navbar;
