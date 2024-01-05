'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import data from '@/app/json/data.json';
import { capitalizeFirstLetter } from '@/app/lib/utils';

export function MainNav() {
  const categories = data.categories;
  const pathname = usePathname();

  return (
    <nav className="main-nav" aria-label="Main Menu">
      <ul className={`flex flex-row flex-wrap justify-start`}>
        <li>
          {pathname === '/' ? (
            <a
              className="active m-1 p-2 hover:underline"
              aria-current="page"
              href="/"
            >
              All
            </a>
          ) : (
            <a className="m-1 p-2 hover:underline" href="/">
              All
            </a>
          )}
        </li>
        {categories.map(function (category, index) {
          let attributes = {
            href: '/' + category,
            className:
              'm-1 p-2 hover:underline' +
              (pathname === '/' + category ? ' active' : ''),
            'aria-current': pathname === '/' + category ? 'page' : undefined,
          };

          return (
            <li key={index}>
              <Link {...attributes}>{capitalizeFirstLetter(category)}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
