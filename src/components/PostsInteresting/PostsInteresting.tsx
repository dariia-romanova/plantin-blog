import { useState } from "react";
import { postsFromServer } from "../../api/posts";
import { Post } from "../Post/Post";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect } from "react";
import { TemplatePosts } from "../TampatePosts";
import { Banner } from "../Banner";

interface Props {
  searchQuery: string;
}

export const PostsInteresting: React.FC<Props> = ({ searchQuery }) => {
  const [posts, setPosts] = useState(postsFromServer);
  const [visiblePosts, setVisiblePosts] = useState(posts);
  const [pagesLoad, setPagesLoad] = useState(12);

  useEffect(() => {
    const visible = posts.filter((post) => {
      const text = post.text.toLowerCase();
      const title = post.title.toLowerCase();
      const query = searchQuery.toLowerCase();

      return text.includes(query) || title.includes(query);
    });

    setVisiblePosts(visible);
  }, [searchQuery, posts]);

  const fetchData = () => {
    const additionalPosts = postsFromServer.map((post) => ({
      ...post,
      id: post.id + pagesLoad,
    }));

    setTimeout(() => {
      setPosts([...posts, ...additionalPosts]);
    }, 1500);

    setPagesLoad(pagesLoad * 2);
  };

  return (
    <section className="insteresting-posts">
      <div className="insteresting-posts__content">
        {!searchQuery && (
          <h3 className="insteresting-posts__title">Interesting</h3>
        )}
        <InfiniteScroll
          dataLength={posts.length}
          next={fetchData}
          hasMore={true}
          loader={visiblePosts.length > 0 && <TemplatePosts />}
          endMessage={""}
          style={{ overflow: "visible" }}
        >
          {visiblePosts.length ? (
            <ul className="insteresting-posts__list">
              {visiblePosts.map(
                ({ id, photoId, title, minRead, date, text }, index) => {
                  return (
                    <>
                      <li key={id} className="insteresting-posts__post">
                        <Post
                          minRead={minRead}
                          date={date}
                          photoId={photoId}
                          title={title}
                          text={text}
                          isHorizontal={false}
                        />
                      </li>
                      {(index + 7) % 12 === 0 && (
                        <li className="insteresting-posts__post--banner">
                          <Banner />
                        </li>
                      )}
                    </>
                  );
                }
              )}
            </ul>
          ) : (
            <p className="insteresting-posts__message">Nothing was found</p>
          )}
        </InfiniteScroll>
      </div>
    </section>
  );
};
