import { useState } from 'react';
import { ProgramsLoginPage } from '@/pages/ProgramsLoginPage';
import { ProgramsDashboard } from '@/pages/ProgramsDashboard';

interface ProgramsLoginRouteProps {
  onBack?: () => void;
}

export const ProgramsLoginRoute = ({ onBack }: ProgramsLoginRouteProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (isAuthenticated) {
    return <ProgramsDashboard onLogout={() => setIsAuthenticated(false)} />;
  }

  return <ProgramsLoginPage onLogin={() => setIsAuthenticated(true)} onBack={onBack} />;
};
