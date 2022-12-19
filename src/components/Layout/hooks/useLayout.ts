import React from 'react';

export default function useLayout() {
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);

  return {
    isDrawerOpen,
    toggleDrawer: () => setDrawerOpen(!isDrawerOpen),
  };
}
