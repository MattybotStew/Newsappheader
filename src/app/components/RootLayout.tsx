import { Outlet } from 'react-router';
import { BreakingNewsPopup } from './BreakingNewsPopup';

export function RootLayout() {
  return (
    <>
      <Outlet />
      <BreakingNewsPopup />
    </>
  );
}
