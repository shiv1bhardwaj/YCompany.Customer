export const headerMenu: Array<{
  label: string;
  icon: string;
  path: string;
}> = [
  { label: 'Dashboard', icon: '', path: '/' },
  { label: 'Address', icon: '', path: 'address' },
  { label: 'Profile', icon: '', path: 'profile' },
];

export const sideNavs: Array<{
  label: string;
  path: string;
  icon: string;
  isActive: boolean;
}> = [
  { label: 'Dashboard', path: '/', icon: '', isActive: false },
  { label: 'My Policy', path: 'my-policy', icon: '', isActive: false },
  { label: 'Policy', path: 'policy', icon: '', isActive: false },
];
