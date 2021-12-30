import { useState } from 'react';
import { TitleSection } from '../TitleSection/TitleSection';
import { PostsInteresting } from '../PostsInteresting';
import { Breadcrumbs } from '../Breadcrumbs'
import { PostsTop } from '../PostsTop';
import { PostsNew } from '../PostsNew';
import { Footer } from '../Footer';
import { Banner } from '../Banner';

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

      <Banner />

      <PostsInteresting
        searchQuery={searchQuery}
      />

      <Footer />
    </>
  )
};
