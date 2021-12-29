import { useState } from 'react';
import { postsFromServer } from '../../api/posts'
import { Post } from '../Post/Post';
import InfiniteScroll from "react-infinite-scroll-component";
import './PostsInteresting.scss'


export const PostsInteresting = () => {
  const [posts, setPosts] = useState(postsFromServer);
  
  const fetchData = () => {
    setTimeout(() => {
      setPosts([
        ...posts,
        ...postsFromServer,
      ]);
    }, 1500);
  }
  
  return (
    <section className="insteresting-posts">
      <InfiniteScroll
        dataLength={posts.length}
        next={fetchData}
        hasMore={true}
        loader={<h4>Loading..</h4>}
      >
        <ul className="insteresting-posts__list">
          {posts.map(({ id, photoId, title, minRead, date, text }) => (
            <li key={id} className="insteresting-posts__post">
              <Post
                minRead={minRead}
                date={date}
                photoId={photoId}
                title={title}
                text={text}
              />
            </li>
          ))}
        </ul>
      </InfiniteScroll>
    </section>
  )
}
