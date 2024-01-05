import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
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
                  .map((recipe) => {
                    return (
                      <li
                        key={recipe.id}
                        className="deck__card h-auto max-w-full overflow-hidden rounded-lg border border-gray-300 bg-white shadow hover:border-gray-400 dark:border-gray-700 dark:bg-gray-800"
                      >
                        <Link href={`/recipes/${recipe.id}`}>
                          <Image
                            src={
                              '/images/' +
                              (recipe.image
                                ? recipe.image
                                : 'image_placeholder') +
                              '.webp'
                            }
                            width={400}
                            height={250}
                            className="card__image w-full"
                            alt={recipe.image ? 'Image of ' + recipe.name : ''}
                            style={{
                              objectFit: 'cover',
                              height: '150px',
                            }}
                          />
                          <div className="card__body flex flex-col justify-between px-4 py-4">
                            <h3 className="card__title mb-0 text-xl text-gray-900 dark:text-white">
                              {recipe.name}
                            </h3>
                            {/* <p className="card__copy mb-3 font-normal text-gray-700 dark:text-gray-400"></p> */}
                            {/* <div className="card__tags pb-1 pt-3">
                            {recipe.tags.map((tag, index) => {
                              return (
                                <span
                                  key={index}
                                  className="mb-1 mr-2 mt-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                                >
                                  #{tag}
                                </span>
                              );
                            })}
                          </div> */}
                          </div>
                        </Link>
                      </li>
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

// {categories.map((category) => {
//   return (
//     <div
//       key={category}
//       className="card__set mb-6 rounded border border-gray-200 font-medium text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:focus:ring-gray-800"
//     >
//       <h2 className="rounded-t border-b border-gray-200 bg-blue-50 p-4 text-2xl text-blue-800 dark:bg-gray-800 dark:text-blue-400">
//         <Link href={category.toLowerCase()} className="">
//           {category}
//         </Link>
//       </h2>
//       <div className="card__deck flex flex-row flex-wrap gap-4 p-4">
//         <div className="flex flex-row justify-between gap-4">
//           <div className="card__full max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
//             <a href="/">
//               <Image
//                 src="/images/cookie_sables.webp"
//                 width={400}
//                 height={250}
//                 className="rounded-t-lg"
//                 alt="Image of this recipe"
//                 style={{
//                   width: '100%',
//                   height: 'auto',
//                 }}
//               />
//               <div className="p-5">
//                 <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
//                   Noteworthy technology acquisitions 2021
//                 </h3>
//                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                   Here are the biggest enterprise technology acquisitions
//                   of 2021 so far, in reverse chronological order.
//                 </p>
//               </div>
//             </a>
//           </div>
//           <div>Card2</div>
//           <div>Card3</div>
//           <div>Card4</div>
//         </div>
//       </div>
//     </div>
//   );
// })}

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
