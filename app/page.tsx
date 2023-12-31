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
      <h1 className="mb-6 text-3xl leading-none text-gray-900 dark:text-white lg:text-4xl">
        All Recipes
      </h1>
      <div className="cardset rounded border border-gray-200 font-medium text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:focus:ring-gray-800">
        <h2 className="rounded-t border-b border-gray-200 bg-blue-50 p-4 text-2xl text-blue-800 dark:bg-gray-800 dark:text-blue-400">
          <Link href="/entrees" className="">
            Entrees
          </Link>
        </h2>
        <div className="carddeck flex flex-row flex-wrap gap-4 p-4">
          <div>Card1</div>
          <div>Card2</div>
          <div>Card3</div>
          <div>Card4</div>
        </div>
      </div>

      <div className="mx-auto flex flex-row gap-4">
        <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
          <a href="/">
            <Image
              src="/public/customers/amy-burns.png"
              width={400}
              height={250}
              className="rounded-t-lg"
              alt="Image of this recipe"
              style={{
                width: '100%',
                height: 'auto',
              }}
            />

            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>

              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </a>
        </div>

        <a
          href="/"
          className="flex flex-col items-center rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:max-w-xl md:flex-row"
        >
          {/* <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt=""> */}
          <Image
            src="/public/customers/amy-burns.png"
            width={300}
            height={500}
            className="rounded-t-lg"
            alt="Image of this recipe"
            // style={{
            //   width: '100%',
            //   height: 'auto',
            // }}
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </a>
      </div>
    </>
  );
}
