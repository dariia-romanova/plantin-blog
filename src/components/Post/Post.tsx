import classNames from 'classnames';
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
  isHorizontal: boolean;
}

export const Post: React.FC<PostType> = ({ photoId, title, minRead, date, text, isHorizontal }) => {
  const images = [image_1, image_2, image_3, image_4, image_5, image_6];

  return (
    <article className="post">
      <a
        href="/plantin-blog"
        className={classNames(
          'post__content',
          {
            'post__content--horizontal': isHorizontal,
          },
        )}
      >
        <div className="post_image-wrapper">
          <img src={images[photoId - 1]} alt="plant" className="post__image"/>
        </div>
        <div>
          <p className="post__info">
            {date}
            {' · '}
            {minRead}
            {' '}
            min read
          </p>
          <h4
            className={classNames(
              'post__title',
              {
                'post__title--horizontal': isHorizontal,
              },
            )}
          >
            {title}
          </h4>
          <p className="post__text">
            {!isHorizontal ? text.slice(0, 102) + '...' : text.slice(0, 200) + '...'}
          </p>
        </div>
      </a>
    </article>
  )
}
