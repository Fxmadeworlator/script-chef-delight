import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useClub } from '@/contexts/ClubContext';
import { useToast } from '@/hooks/use-toast';
import { LogOut, Crown, Save, Trash2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ClubDashboardProps {
  onLogout: () => void;
}

export const ClubDashboard = ({ onLogout }: ClubDashboardProps) => {
  const { tiers, stats, donations, updateTier, updateStats, deleteDonation } = useClub();
  const { toast } = useToast();
  const [editedStats, setEditedStats] = useState(stats);

  const handleSaveStats = () => {
    updateStats(editedStats);
    toast({
      title: "Statistics Updated",
      description: "Club statistics saved successfully",
    });
  };

  const handleDeleteDonation = (id: string) => {
    deleteDonation(id);
    toast({
      title: "Donation Deleted",
      description: "Donation record removed successfully",
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Crown className="w-8 h-8 text-primary" />
              <h1 className="text-3xl font-bold">Club 1000+ Dashboard</h1>
            </div>
            <p className="text-muted-foreground">Manage membership tiers and statistics</p>
          </div>
          <Button onClick={onLogout} variant="outline">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        <Tabs defaultValue="giving" className="space-y-6">
          <TabsList>
            <TabsTrigger value="giving">Give Online</TabsTrigger>
            <TabsTrigger value="donations">Donation Records</TabsTrigger>
            <TabsTrigger value="stats">Statistics</TabsTrigger>
          </TabsList>

          <TabsContent value="giving" className="space-y-6">
            <div className="bg-card rounded-lg p-8 border">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-8 text-center">Ways to Give</h2>
                
                <div className="bg-primary/10 rounded-2xl p-8 border-2 border-primary/20">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Crown className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">Give Online</h3>
                      <p className="text-muted-foreground text-lg mb-6">
                        Give once or give regularly by setting up a recurring gift.
                      </p>
                      <Button size="lg" className="rounded-full px-8">
                        Give Now
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground text-center">
                    Your generosity helps us continue our mission and impact lives in our community.
                    All donations are tax-deductible.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="donations" className="space-y-6">
            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-xl font-bold mb-4">Donation Records</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold">Donor Name</th>
                      <th className="text-left p-3 font-semibold">Amount</th>
                      <th className="text-left p-3 font-semibold">Date</th>
                      <th className="text-left p-3 font-semibold">Frequency</th>
                      <th className="text-left p-3 font-semibold">Payment Method</th>
                      <th className="text-left p-3 font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {donations.map((donation) => (
                      <tr key={donation.id} className="border-b hover:bg-muted/50">
                        <td className="p-3">{donation.donorName}</td>
                        <td className="p-3 font-semibold text-primary">
                          {formatCurrency(donation.amount)}
                        </td>
                        <td className="p-3">{new Date(donation.date).toLocaleDateString()}</td>
                        <td className="p-3">{donation.frequency}</td>
                        <td className="p-3">{donation.paymentMethod}</td>
                        <td className="p-3">
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => handleDeleteDonation(donation.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Total Donations: <span className="font-bold text-foreground">
                    {formatCurrency(donations.reduce((sum, d) => sum + d.amount, 0))}
                  </span>
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="stats" className="space-y-6">
            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-xl font-bold mb-4">Club Statistics</h2>
              <div className="space-y-4">
                {editedStats.map((stat, index) => (
                  <div key={index} className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Number</Label>
                      <Input
                        value={stat.number}
                        onChange={(e) => {
                          const newStats = [...editedStats];
                          newStats[index].number = e.target.value;
                          setEditedStats(newStats);
                        }}
                      />
                    </div>
                    <div>
                      <Label>Label</Label>
                      <Input
                        value={stat.label}
                        onChange={(e) => {
                          const newStats = [...editedStats];
                          newStats[index].label = e.target.value;
                          setEditedStats(newStats);
                        }}
                      />
                    </div>
                  </div>
                ))}
                <Button onClick={handleSaveStats} className="w-full">
                  <Save className="w-4 h-4 mr-2" />
                  Save Statistics
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
