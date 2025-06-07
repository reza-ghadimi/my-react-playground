import { Outlet } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';

function RootLayout() {
  return (
    <>
      <MainNavigation />

      <main>
        <Outlet />{/* Renders the matched child route component */}
      </main>
    </>
  );
}

export default RootLayout;
