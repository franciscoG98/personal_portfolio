import hashnodeHandler from '../../../netlify/functions/graphql'
import { useState, useEffect } from 'react'
import PostCard from '../../components/postCard'

const Blog = () => {

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
    <section className='blog__container'>
      <h2 className='hashnode__title'>Hashnode Posts</h2>
      <div className="hashnode__posts">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}

export default Blog