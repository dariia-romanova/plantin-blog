import { postsFromServer } from "../../api/posts";
import { Post } from "../Post";

export const PostsTop = () => {
  const firstPost = postsFromServer.find(post => post.id === 12);
  const secondPost = postsFromServer.find(post => post.id === 10);

  return (
    <section className="posts-top">
      <div className="posts-top__content">
        <h3 className="posts-top__title">
          TOP of the Day
        </h3>
        <ul className="posts-top__list">
            <li className="posts-top__post">
              <Post
                minRead={firstPost.minRead}
                date={firstPost.date}
                photoId={firstPost.photoId}
                title={firstPost.title}
                text={firstPost.text}
                isHorizontal={false}
              />
            </li>
            <li className="posts-top__post">
              <Post
                minRead={secondPost.minRead}
                date={secondPost.date}
                photoId={secondPost.photoId}
                title={secondPost.title}
                text={secondPost.text}
                isHorizontal={false}
              />
            </li>
        </ul>
      </div>
    </section>

  )
};
