import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import Terminal from '../../components/terminal'
import hashnodeHandler from '../../../netlify/functions/graphql'
import { useState, useEffect } from 'react'
import PostCard from '../../components/postCard'

const About = () => {

  const [posts, setPosts] = useState([])

  const fetchPostsFromGraphql = async () => {
    try {
      const response = await hashnodeHandler();
      const cleanData = response.body.data.publication.posts.edges.map(edge => edge.node);

      return cleanData;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    const fetchAndSetPosts = async () => {
      const data = await fetchPostsFromGraphql();
      if (data) {
        const uniquePosts = Array.from(new Set([...posts, ...data.map(post => JSON.stringify(post))]))
          .map(post => JSON.parse(post));
        setPosts(uniquePosts);
      }
    };

    fetchAndSetPosts().catch(err => console.log(err));
  }, []);

  return (
    <main>
      <Navbar />
      <div className='about__container'>
        <Terminal />

        <h2 className='hashnode__title'>Hashnode Posts</h2>

        <section className="hashnode__posts">
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </section>
      </div>
      <Footer />
    </main>
  )
}

export default About