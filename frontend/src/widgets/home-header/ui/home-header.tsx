import React from 'react';
import Header from '@features/header/ui/header';
import { breadcrumbs, pageInfo, tags } from '@widgets/header/model/data';

const HeaderWidget = () => {
  return <Header breadcrumbs={breadcrumbs} tags={tags} pageInfo={pageInfo} />;
};

export default HeaderWidget;
