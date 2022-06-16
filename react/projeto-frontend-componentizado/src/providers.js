import App from "./App";
import { ResetCSS } from "./global/resetCSS";
import CelebrityProvider from "./providers/celebrity-provider";

export default function Providers() {
  return (
    <main>
      <CelebrityProvider>
        <ResetCSS />
        <App />
      </CelebrityProvider>
    </main>
  );
}
