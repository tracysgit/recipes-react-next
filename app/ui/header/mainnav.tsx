'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
// import clsx from 'clsx';
// import categories from '@/app/lib/categories';

const categories = [
  '',
  'Entree',
  'Side',
  'Appetizer',
  'Soup',
  'Salad',
  'Dessert',
  'Drink',
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="main-nav" aria-label="Main Menu">
      <ul className={`flex flex-row flex-wrap justify-start`}>
        {categories.map(function (category, index) {
          let attributes = {
            href: '/' + (category === 'All' ? '' : category.toLowerCase()),
            className:
              'm-1 p-2 hover:underline' +
              (pathname === '/' + category.toLowerCase() ? ' active' : ''),
            'aria-current':
              pathname === '/' + category.toLowerCase() ? 'page' : undefined,
          };

          return (
            <li key={index}>
              <Link {...attributes}>{category === '' ? 'All' : category}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
