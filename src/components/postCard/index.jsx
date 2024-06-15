const PostCard = ({ post }) => {

  const date = new Date(post.updatedAt)
  const formattedDate = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`

  return (
    <div className="post__card__container">
      <a className="post__card__link" href={post.url}>
        <img
          src={post.coverImage.url}
          className="post__card__img"
          alt={`Cover image - ${post.title}`}
        />
        <h3>{post.title}</h3>
        <span className="post__card__time">{formattedDate}</span>
        <p><b>Brief:</b> {post.brief}</p>
      </a>
    </div>
  )
}

export default PostCard