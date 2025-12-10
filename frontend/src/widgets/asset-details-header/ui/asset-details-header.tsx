import React from 'react';
import Header from '@widgets/asset-header/ui/header';
import { pageInfo } from '@widgets/asset-details-header/model/data';

const AssetDetailsHeader = () => {
  return <Header breadcrumbs={null} tags={null} pageInfo={pageInfo} />;
};

export default AssetDetailsHeader;
