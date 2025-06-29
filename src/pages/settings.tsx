import { CONFIG } from 'src/config-global';

import { SettingsView } from '../sections/settings/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`Settings - ${CONFIG.appName}`}</title>

      <SettingsView/>
    </>
  );
}