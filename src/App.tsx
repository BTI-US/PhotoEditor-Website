import { HelmetProvider } from 'react-helmet-async';
import AppNavigation from './navigation/Navigation';
import { useEffect } from 'react';
import { animationCreate } from "./utils/utils";
import TagManager from 'react-gtm-module';

const tagManagerArgs: { gtmId: string } = {
  gtmId: 'G-C229PR1E82'
};

TagManager.initialize(tagManagerArgs);

function App() {

  useEffect(() => {
    // animation
    const timer = setTimeout(() => {
      animationCreate();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <HelmetProvider>
        <AppNavigation />
      </HelmetProvider>
    </>
  );
}

export default App;
