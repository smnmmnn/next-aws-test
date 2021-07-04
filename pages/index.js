import Head from 'next/head'
import Link from 'next/link'
import 'tailwindcss/tailwind.css'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-6xl font-bold">
          Read{' '}
          <Link href="/posts/first-post">
            <a>this page!</a>
          </Link>
        </h1>

      </main>

      <footer>
      </footer>
    </div>
  )
}
