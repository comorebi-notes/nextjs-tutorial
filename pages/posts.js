import Layout from '../components/Layout'
import Link from 'next/link'

const PostLink = ({ id }) => (
  <li>
    <Link href="/posts/[id]" as={`/posts/${id}`}>
      <a>{id}</a>
    </Link>
  </li>
)

const Posts = () => (
  <Layout>
    <ul>
      {[
        'hello-nextjs',
        'learn-nextjs',
        'deploy-nextjs'
      ].map((id) => <PostLink key={id} id={id} />)}
    </ul>
  </Layout>
)

export default Posts
