const PostCard = ({ post }) => {
  return (
    <div className=" post__card__container">
      <img
        src={post.coverImage.url}
        className="post__card__img"
        alt={`Cover image - ${post.title}`}
      />
      <a className="post__card__link" href={post.url}>{post.title}</a>
    </div>
  )
}

export default PostCard