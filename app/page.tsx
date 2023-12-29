import type { Metadata } from 'next';
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import recipes from '@/app/lib/recipes';

export const metadata: Metadata = {
  openGraph: {},
  title: 'Home | Recipes',
};

export default function Page() {
  console.log('recipes', recipes);

  return (
    <>
      <div className="flex grow flex-col gap-4 md:flex-row">
        {/* <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          /> */}
      </div>
    </>
  );
}
