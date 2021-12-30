import image_1 from '../../img/article-img-1.png';
import image_2 from '../../img/article-img-2.png';
import image_3 from '../../img/article-img-3.png';
import image_4 from '../../img/article-img-4.png';
import image_5 from '../../img/article-img-5.png';
import image_6 from '../../img/article-img-6.png';

interface PostType {
  photoId: number;
  title: string;
  minRead: number;
  date: string;
  text: string;
}

export const Post: React.FC<PostType> = ({ photoId, title, minRead, date, text }) => {
  const images = [image_1, image_2, image_3, image_4, image_5, image_6];

  return (
    <article className="post">
      <a href='/blog' className="post__content">
        <div className="post_image-wrapper">
          <img src={images[photoId - 1]} alt="plant" className="post__image"/>
        </div>
        <p className="post__info">
          {date}
          {' · '}
          {minRead}
          {' '}
          min read
        </p>
        <h4 className="post__title">
          {title}
        </h4>
        <p className="post__text">
          {text.slice(0, 102) + '...'}
        </p>
      </a>
    </article>

  )
}
