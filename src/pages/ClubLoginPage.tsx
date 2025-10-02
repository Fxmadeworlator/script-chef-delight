import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Crown, ArrowLeft } from 'lucide-react';

interface ClubLoginPageProps {
  onLogin: () => void;
  onBack?: () => void;
}

export const ClubLoginPage = ({ onLogin, onBack }: ClubLoginPageProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock credentials: club@agtv.com / club1000
    if (email === 'club@agtv.com' && password === 'club1000') {
      toast({
        title: "Login Successful",
        description: "Welcome to Club 1000+ Dashboard",
      });
      onLogin();
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid credentials. Use: club@agtv.com / club1000",
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
            <Crown className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Club 1000+ Portal</h1>
          <p className="text-muted-foreground">Manage club memberships and benefits</p>
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
                placeholder="club@agtv.com"
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
            <p className="text-xs text-muted-foreground">Email: club@agtv.com</p>
            <p className="text-xs text-muted-foreground">Password: club1000</p>
          </div>
        </div>
      </div>
    </div>
  );
};
