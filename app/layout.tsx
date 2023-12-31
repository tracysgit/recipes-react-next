import '@/app/ui/global.css';
import { Metadata } from 'next';
// import { inter } from '@/app/ui/fonts';
import { Header } from '@/app/ui/header/header';
// import { Button } from './ui/button';

// const categories = [
//   'Entrees',
//   'Sides',
//   'Appetizers',
//   'Soups',
//   'Salads',
//   'Desserts',
//   'Drinks',
// ];

export const metadata: Metadata = {
  description: 'This is a collection of recipes popular in our family.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
  openGraph: {},
  title: {
    template: '%s | Recipes',
    default: 'Recipes',
  },
};

// export async function getStaticProps() {
//   const userData = await fetch('@/app/data.data.json');
//   const userJSON = await userData.json();

//   return {
//     props: {
//       users: userJSON,
//     },
//   };
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={`${inter.className} antialiased`}>{children}</body> */}
      <body>
        <Header></Header>
        {/* <main className="flex min-h-screen flex-col">{children}</main> */}
        <main className="flex flex-col p-4 md:p-8">{children}</main>
        {/* <footer>Footer</footer> */}
      </body>
    </html>
  );
}
