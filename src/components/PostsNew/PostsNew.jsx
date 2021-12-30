import { postsFromServer } from "../../api/posts";
import { Post } from "../Post";

export const PostsNew = () => {
  const post = postsFromServer.find(post => post.id === 8);

  return (
    <section className="posts-new">
      <div className="posts-new__content">
        <div className="posts-new__tag">
          New
        </div>
        <Post
          minRead={post.minRead}
          date={post.date}
          photoId={post.photoId}
          title={post.title}
          text={post.text}
          isHorizontal={true}
        />
      </div>
  </section>
  )
}