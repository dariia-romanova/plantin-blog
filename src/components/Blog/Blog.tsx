import { useState } from 'react';
import { TitleSection } from '../TitleSection/TitleSection';
import { PostsInteresting } from '../PostsInteresting';
import { Breadcrumbs } from '../../Breadcrumbs/Breadcrumbs';

export const Blog = () => {
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
      <PostsInteresting
        searchQuery={searchQuery}
      />
    </>
  )
};
