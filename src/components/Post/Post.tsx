import image_1 from '../../img/image-interesting-1.png';
import image_2 from '../../img/image-interesting-2.png';
import image_3 from '../../img/image-interesting-3.png';

interface PostType {
  photoId: number;
  title: string;
  minRead: number;
  date: string;
  text: string;
}

export const Post: React.FC<PostType> = ({ photoId, title, minRead, date, text }) => {
  const images = [image_1, image_2, image_3];

  return (
    <article className="post">
      <img src={images[photoId - 1]} alt="plant" />
      <p>{date} · {minRead} min read</p>
      <h3>{title}</h3>
      <p>
        Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage...
      </p>
    </article>

  )
}
