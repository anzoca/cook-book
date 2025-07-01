'use client';
import Link from 'next/link';
import { routes } from '@/constants/routes';
import { usePathname } from 'next/navigation';
import DarkModeToggle from './DarkModeToggle';
import {
  Home,
  Search,
  LibraryBig,
  BookHeart,
  User as Profile,
} from 'lucide-react';

const Navbar = () => {
  const pathName = usePathname();

  const handleIcon = (routeName: string) => {
    if (routeName === 'Home') {
      return <Home className="w-4 h-4 mr-2" />;
    } else if (routeName === 'Search') {
      return <Search className="w-4 h-4 mr-2" />;
    } else if (routeName === 'My Recipes') {
      return <LibraryBig className="w-4 h-4 mr-2" />;
    } else if (routeName === 'Favorites') {
      return <BookHeart className="w-4 h-4 mr-2" />;
    } else if (routeName === 'Profile') {
      return <Profile className="w-4 h-4 mr-2" />;
    }
  };

  return (
    <aside className="navbar">
      <h1 className="text-3xl border-b border-warm-gray-soft dark:border-comp-dark font-bold font-mono mb-10 pb-2">
        Recipe
        <span className="text-accent-teal dark:text-accent-teal-light">N</span>
        ook
      </h1>
      <nav className="flex flex-col gap-2.5">
        {routes.map((route) => (
          <Link
            key={route.name}
            href={route.path}
            className={`navbar-item  ${pathName === route.path ? 'active' : 'not-active'}`}
          >
            {handleIcon(route.name)}
            {route.name}
          </Link>
        ))}
      </nav>
      <div className="mt-auto">
        <DarkModeToggle />
      </div>
    </aside>
  );
};

export default Navbar;
