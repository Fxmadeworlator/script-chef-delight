import { useState } from 'react';
import { NewsLoginPage } from '@/pages/NewsLoginPage';
import { NewsDashboard } from '@/pages/NewsDashboard';

interface NewsLoginRouteProps {
  onBack?: () => void;
}

export const NewsLoginRoute = ({ onBack }: NewsLoginRouteProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (isAuthenticated) {
    return <NewsDashboard onLogout={() => setIsAuthenticated(false)} />;
  }

  return <NewsLoginPage onLogin={() => setIsAuthenticated(true)} onBack={onBack} />;
};
