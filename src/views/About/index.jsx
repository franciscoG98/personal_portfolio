import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import Terminal from '../../components/terminal'

// import Proxy from '../../../functions/proxy'
import { gql, useQuery } from '@apollo/client'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { useEffect } from 'react'

// const API_URL = 'https://api.hashnode.com/';
const TOKEN = import.meta.env.VITE_HASHNODE_AUTH_TOKEN;

// shorter query
// const GET_POSTS = gql`
//   query Publication {
//     publication(host: "franciscog98.hashnode.dev") {
//       posts(first: 4) {
//         edges {
//           node {
//             title
//             brief
//             url
//           }
//         }
//         totalDocuments
//       }
//     }
//   }
// `;

// function Posts() {

//   const { loading, error, data } = useQuery(GET_POSTS, {
//     client: new ApolloClient({
//       uri: "https://api.hashnode.com",
//       cache: new InMemoryCache(),
//       fetchOptions: {
//         mode: 'no-cors'
//       },
//       mode: 'no-cors'
//     }),
//     context: {
//       headers: {
//         "api-key": TOKEN,
//       },
//     }
//   });

  // if (loading) return 'Loading...';
  // if (error) return `Error! ${error.message}`;

//   // const posts = data.publication.posts.edges

//   console.log('data', data);

//   return (
//     <ul>
//       <h2>Hola?</h2>
//     </ul>
//   );
// }

const GET_POSTS = gql`
  query GetUserArticles {
    user(username: "franciscog98") {
      publication {
        posts(page: 0) {
          title
          brief
          slug
          coverImage
        }
      }
    }
  }
`;

const Widget = () => {
  const { data, loading, error } = useQuery(GET_POSTS, {
    client: new ApolloClient({
      uri: "https://api.hashnode.com",
      cache: new InMemoryCache(),
      fetchOptions: {
        mode: 'no-cors',
      }
    }),
    context: {
      headers: {
        "api-key": TOKEN,
        "Access-Control-Allow-Origin": "*" // Required for CORS support to work
      },
    }
  });

  useEffect(() => {
    // console.log(loading, data, error);
    console.log('data: ', data);
  }, [data, error, loading])

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <h1>paso?</h1>
    </>
  )
}

const About = () => {

  return (
    <main>
      <Navbar />
      <div className='about__container'>
        <Terminal />

        <section className="hashnode__posts">
          <h2>Hashnode Posts</h2>

          {/* <Posts /> */}
          <Widget />

          {/* <ul>
            {posts.map(post => (
              <li key={post.node.url}>
                <h3>{post.node.title}</h3>
                <p>{post.node.brief}</p>
                <a href={post.node.url} target="_blank" rel="noopener noreferrer">Read more</a>
              </li>
            ))}
          </ul> */}
        </section>


        <h3>A ver la renegrida concha de tu madre</h3>

      </div>
      <Footer />
    </main>
  )
}

export default About