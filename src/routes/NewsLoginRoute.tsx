import { useState } from 'react';
import { NewsLoginPage } from '@/pages/NewsLoginPage';
import { NewsDashboard } from '@/pages/NewsDashboard';

export const NewsLoginRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (isAuthenticated) {
    return <NewsDashboard onLogout={() => setIsAuthenticated(false)} />;
  }

  return <NewsLoginPage onLogin={() => setIsAuthenticated(true)} />;
};
