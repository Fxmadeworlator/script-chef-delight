import { useState } from 'react';
import { ProgramsLoginPage } from '@/pages/ProgramsLoginPage';
import { ProgramsDashboard } from '@/pages/ProgramsDashboard';

export const ProgramsLoginRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (isAuthenticated) {
    return <ProgramsDashboard onLogout={() => setIsAuthenticated(false)} />;
  }

  return <ProgramsLoginPage onLogin={() => setIsAuthenticated(true)} />;
};
