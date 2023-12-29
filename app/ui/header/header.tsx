import clsx from 'clsx';
import { MainNav } from '@/app/ui/header/mainnav';
// import categories from '@/app/lib/categories';

export function Header() {
  return (
    <header
      className={clsx(
        'flex flex-col justify-between gap-4 bg-blue-800 p-4 text-white md:flex-row',
      )}
    >
      <MainNav />
      <div>Search Bar</div>
    </header>
  );
}
