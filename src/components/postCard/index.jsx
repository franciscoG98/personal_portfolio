const PostCard = ({ post }) => {

  const date = new Date(post.updatedAt)
  const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`

  return (
    <div className="card__container--post">
      <a className="card__link--post" href={post.url}>
        <img
          src={post.coverImage.url}
          className="card__img--post"
          alt={`Cover image - ${post.title}`}
        />
      </a>
      <section className="card__info">
        <h3>{post.title}</h3>
        <span className="card__time">{formattedDate}</span>
        <p className="post__brief"><b>Brief:</b> {post.brief.slice(0, 118)}...</p>
        <button className="post__button">See on Hashnode</button>
      </section>
    </div>
  )
}

export default PostCard