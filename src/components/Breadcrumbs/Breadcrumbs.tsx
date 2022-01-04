interface Props {
  page: string;
}

export const Breadcrumbs: React.FC<Props> = ({ page }) => {
  return (
    <div className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <a href="/plantin-blog" className="breadcrumbs__link">
            Home
          </a>
        </li>
        <li className="breadcrumbs__item">{page}</li>
      </ul>
    </div>
  );
};
