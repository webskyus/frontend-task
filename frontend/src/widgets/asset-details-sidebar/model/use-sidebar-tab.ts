import React from 'react';
import { SidebarTab, TABS } from '@widgets/asset-details-sidebar/model/tabs';

const useSidebarTab = () => {
  const [tab, setTab] = React.useState<SidebarTab>(TABS.OVERVIEW);

  return { tab, setTab };
};

export default useSidebarTab;
