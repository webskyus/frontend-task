import { Breadcrumb } from '@entities/breadcrumbs/model/types';
import { Tag } from '@entities/tag/model/types';

const breadcrumbs: Breadcrumb[] = [
  {
    id: 'breadcrumbs-0',
    name: 'Brands',
    link: '#',
  },
  {
    id: 'breadcrumbs-1',
    name: 'BrandX',
    link: '#',
  },
  {
    id: 'breadcrumbs-2',
    name: 'KyraPlatformChallenge',
    link: '#',
  },
  {
    id: 'breadcrumbs-3',
    name: '#KyraChallenge',
    link: '#',
  },
];

const tags: Tag[] = [
  {
    id: 'tags-0',
    name: 'IG & TT',
    color: 'red',
  },
  {
    id: 'tags-1',
    name: 'BCA',
    color: 'light',
  },
];

const pageInfo = {
  name: breadcrumbs[breadcrumbs.length - 1].name,
  link: breadcrumbs[breadcrumbs.length - 1].link,
};

export { breadcrumbs, tags, pageInfo };
