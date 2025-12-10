import React from 'react';
import Header from '@widgets/asset-header/ui/header';
import { breadcrumbs, pageInfo, tags } from '@widgets/asset-header/model/data';

const AssetHeader = () => {
  return <Header breadcrumbs={breadcrumbs} tags={tags} pageInfo={pageInfo} />;
};

export default AssetHeader;
