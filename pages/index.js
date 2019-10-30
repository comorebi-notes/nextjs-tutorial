import Layout from '../components/Layout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = ({ shows }) => (
  <Layout>
    <h1>Batman TV shows</h1>
    <ul>
      {shows.map(({ id, name }) => (
        <li key={id}>
          <Link href="posts/[id]" as={`/posts/${id}`}>
            <a>{name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async () => {
  const response = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await response.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data.map((entry) => entry.show)
  }
}

export default Index
