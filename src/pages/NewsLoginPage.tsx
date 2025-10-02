import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Newspaper } from 'lucide-react';

interface NewsLoginPageProps {
  onLogin: () => void;
}

export const NewsLoginPage = ({ onLogin }: NewsLoginPageProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock credentials: news@agtv.com / newsagtv
    if (email === 'news@agtv.com' && password === 'newsagtv') {
      toast({
        title: "Login Successful",
        description: "Welcome to News Team Dashboard",
      });
      onLogin();
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid credentials. Use: news@agtv.com / newsagtv",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
            <Newspaper className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold mb-2">News Team Portal</h1>
          <p className="text-muted-foreground">Manage news articles and updates</p>
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
                placeholder="news@agtv.com"
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
            <p className="text-xs text-muted-foreground">Email: news@agtv.com</p>
            <p className="text-xs text-muted-foreground">Password: newsagtv</p>
          </div>
        </div>
      </div>
    </div>
  );
};
