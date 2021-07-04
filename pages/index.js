import Head from 'next/head'
import Link from 'next/link'
import 'tailwindcss/tailwind.css'
import config from '../src/aws-exports';

import { DataStore } from 'aws-amplify'
import { useState, useEffect } from 'react'
import { Post } from '../src/models'

// Amplify.configure({
//   ...config, ssr: true
// });

export default function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchPosts()
    async function fetchPosts() {
      const postData = await DataStore.query(Post)
      setPosts(postData)
    }
    const subscription = DataStore.observe(Post).subscribe(() => fetchPosts())
    return () => subscription.unsubscribe()
  }, [])


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

        <div>
          <h1>Posts</h1>
          {
            posts.map(post => (
              <Link href={`/posts/${post.id}`}>
                <a>
                  <h2>{post.title}</h2>
                </a>
              </Link>
            ))
          }
        </div>

      </main>

      <footer>
      </footer>
    </div>
  )
}
