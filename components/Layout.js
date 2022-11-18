import Head from 'islandy/head';
import Footer from './Footer';
import Nav from './Nav';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="stylesheet" href="/src/styles.css" />
      </Head>
      <main class="font-sans bg-zinc-900 text-white">
        <div class="h-screen overflow-hidden flex flex-col">
          <Nav />
          <div id="container" class="h-full flex-1 overflow-y-auto">
            <div id="content">
              {children}
            </div>
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}
