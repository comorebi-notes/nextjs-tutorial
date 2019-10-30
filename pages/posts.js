import Layout from '../components/Layout'
import Link from 'next/link'

const getPosts = () => ([
  { id: 'hello-nextjs', title: 'Hello Next.js' },
  { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
  { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
])

const PostLink = ({ id, title }) => (
  <li>
    <Link href="/posts/[id]" as={`/posts/${id}`}>
      <a>{title}</a>
    </Link>
  </li>
)

const Posts = () => (
  <Layout>
    <ul>
      {getPosts().map(({ id, title }) => (
        <PostLink key={id} id={id} title={title} />
      ))}
    </ul>
    <style jsx global>{`
      h1, a {
        font-family: 'Arial';
      }
      ul {
        padding-left: 1rem;
      }
      li {
        list-style: none;
        margin: 5px 0;
      }
      a {
        text-decoration: none;
        color: blue;
      }
      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </Layout>
)

export default Posts
