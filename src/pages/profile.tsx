import { CONFIG } from 'src/config-global';

import { ProfileView } from '../sections/profile/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`Request - ${CONFIG.appName}`}</title>

      <ProfileView />
    </>
  );
}