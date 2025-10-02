import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Tv, ArrowLeft } from 'lucide-react';

interface ProgramsLoginPageProps {
  onLogin: () => void;
  onBack?: () => void;
}

export const ProgramsLoginPage = ({ onLogin, onBack }: ProgramsLoginPageProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock credentials: programs@agtv.com / progsagtv
    if (email === 'programs@agtv.com' && password === 'progsagtv') {
      toast({
        title: "Login Successful",
        description: "Welcome to Programs Department Dashboard",
      });
      onLogin();
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid credentials. Use: programs@agtv.com / progsagtv",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {onBack && (
        <Button
          onClick={onBack}
          variant="ghost"
          className="absolute top-4 left-4 flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Site
        </Button>
      )}
      
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
            <Tv className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Programs Department Portal</h1>
          <p className="text-muted-foreground">Manage subscription tiers and content</p>
        </div>

        <div className="bg-card rounded-lg p-8 shadow-lg border">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="programs@agtv.com"
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </form>

          <div className="mt-6 p-4 bg-muted rounded-lg">
            <p className="text-sm font-semibold mb-2">Demo Credentials:</p>
            <p className="text-xs text-muted-foreground">Email: programs@agtv.com</p>
            <p className="text-xs text-muted-foreground">Password: progsagtv</p>
          </div>
        </div>
      </div>
    </div>
  );
};
