import { useState } from 'react';
import { TitleSection } from '../TitleSection/TitleSection';
import { PostsInteresting } from '../PostsInteresting';
import { Breadcrumbs } from '../../Breadcrumbs/Breadcrumbs';
import { PostsTop } from '../PostsTop';
import { PostsNew } from '../PostsNew';

export const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const changeSearchQuery = (query: string) => {
    setSearchQuery(query);
  }

  return (
    <>
      <Breadcrumbs page={'Blog'} />

      <TitleSection
        searchQuery={searchQuery}
        changeSearchQuery={changeSearchQuery}
      />

      {!searchQuery && (
        <>
          <PostsNew />
          <PostsTop />
        </>
      )}

      <PostsInteresting
        searchQuery={searchQuery}
      />
    </>
  )
};
