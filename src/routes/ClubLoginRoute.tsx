import { useState } from 'react';
import { ClubLoginPage } from '@/pages/ClubLoginPage';
import { ClubDashboard } from '@/pages/ClubDashboard';

interface ClubLoginRouteProps {
  onBack?: () => void;
}

export const ClubLoginRoute = ({ onBack }: ClubLoginRouteProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (isAuthenticated) {
    return <ClubDashboard onLogout={() => setIsAuthenticated(false)} />;
  }

  return <ClubLoginPage onLogin={() => setIsAuthenticated(true)} onBack={onBack} />;
};
