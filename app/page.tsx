import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CardImageTop } from '@/app/ui/cards/cardImageTop';
import { getCategories, getRecipes } from '@/app/lib/localdata';
import { capitalizeFirstLetter } from '@/app/lib/utils';

export const metadata: Metadata = {
  // openGraph: {},
  title: 'Home | Recipes',
};

export default async function Page() {
  const categories = await getCategories();
  const recipes = await getRecipes();

  return (
    <>
      <h1 className="mb-8 text-3xl leading-none text-gray-900 dark:text-white lg:text-4xl">
        All Recipes
      </h1>

      {/* Loop through each category */}
      {categories.map((category) => {
        return (
          <>
            <section
              key={category}
              className="deck"
              aria-labelledby={`deck__title-${category.toLowerCase()}`}
            >
              <h2
                id={`deck__title-${category.toLowerCase()}`}
                className="bg-blue-100 px-4 py-2 text-2xl text-blue-800 dark:bg-gray-800 dark:text-blue-400"
              >
                <Link href={category.toLowerCase()} className="">
                  {capitalizeFirstLetter(category)}
                </Link>
              </h2>
              <ul className="deck--grid-card-image-upper mb-10 mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {recipes
                  .filter((recipe) =>
                    recipe.category
                      .toLowerCase()
                      .includes(category.toLowerCase()),
                  )
                  .map((recipe, index) => {
                    return (
                      <>
                        <CardImageTop
                          key={recipe.id}
                          className=""
                          card={recipe}
                        ></CardImageTop>
                      </>
                    );
                  })}
              </ul>
            </section>
          </>
        );
      })}
    </>
  );
}

{
  /* <button
        type="button"
        className="d-inline mb-2 me-2 w-32 rounded-lg bg-blue-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add Recipe
      </button>
      <button
        type="button"
        className="mb-2 me-2 w-32 rounded-lg border border-blue-800 bg-white px-5 py-2.5 text-sm font-medium text-blue-800 text-gray-900 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
      >
        Alternative
      </button> */
}
