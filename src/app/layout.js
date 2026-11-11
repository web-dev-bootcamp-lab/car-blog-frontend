import { useEffect, useState } from 'react';
import Home from './page.js';
import Article from './blog/[slug]/page.js';

function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePathChange = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handlePathChange);
    return () => window.removeEventListener('popstate', handlePathChange);
  }, []);

  if (path.startsWith('/blog/')) {
    const slug = path.replace('/blog/', '');
    return <Article slug={slug} />;
  }
  return <Home />;
}

export default App;
