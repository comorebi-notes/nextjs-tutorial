import Layout from '../../components/Layout'
import fetch from 'isomorphic-unfetch'

const Post = ({ show }) => {
  return (
    <Layout>
      <h1>{show.name}</h1>
      <p>{show.summary.replace(/<[/]?[pb]>/g, '')}</p>
      <img src={show.image.medium} alt={show.name} />
    </Layout>
  )
}

Post.getInitialProps = async ({ query: { id } }) => {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await response.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default Post
