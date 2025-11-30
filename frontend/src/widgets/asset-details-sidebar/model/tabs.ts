enum TABS {
  OVERVIEW = 'overview',
  MESSAGES = 'messages',
}

const tabs = [
  { key: TABS.OVERVIEW, label: 'Overview' },
  { key: TABS.MESSAGES, label: 'Messages' },
] as const;

type SidebarTab = (typeof tabs)[number]['key'];

export { tabs, TABS, type SidebarTab };
