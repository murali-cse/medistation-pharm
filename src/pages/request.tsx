import { CONFIG } from 'src/config-global';

import { RequestView } from '../sections/request/view';



// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`Request - ${CONFIG.appName}`}</title>

      <RequestView />
    </>
  );
}