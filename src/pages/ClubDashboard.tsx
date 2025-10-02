import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useClub } from '@/contexts/ClubContext';
import { useToast } from '@/hooks/use-toast';
import { LogOut, Crown, Save } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ClubDashboardProps {
  onLogout: () => void;
}

export const ClubDashboard = ({ onLogout }: ClubDashboardProps) => {
  const { tiers, stats, updateTier, updateStats } = useClub();
  const { toast } = useToast();
  const [selectedTier, setSelectedTier] = useState(tiers[0].id);
  const currentTier = tiers.find(t => t.id === selectedTier) || tiers[0];

  const [editedTier, setEditedTier] = useState(currentTier);
  const [editedStats, setEditedStats] = useState(stats);

  const handleSaveTier = () => {
    updateTier(selectedTier, editedTier);
    toast({
      title: "Changes Saved",
      description: "Tier updated successfully",
    });
  };

  const handleSaveStats = () => {
    updateStats(editedStats);
    toast({
      title: "Statistics Updated",
      description: "Club statistics saved successfully",
    });
  };

  const updateFeature = (index: number, value: string) => {
    const newFeatures = [...editedTier.features];
    newFeatures[index] = value;
    setEditedTier({ ...editedTier, features: newFeatures });
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

        <Tabs defaultValue="tiers" className="space-y-6">
          <TabsList>
            <TabsTrigger value="tiers">Membership Tiers</TabsTrigger>
            <TabsTrigger value="stats">Statistics</TabsTrigger>
          </TabsList>

          <TabsContent value="tiers" className="space-y-6">
            <div className="bg-card rounded-lg p-6 border">
              <Label>Select Tier to Edit</Label>
              <div className="flex gap-2 mt-2 mb-6">
                {tiers.map(tier => (
                  <Button
                    key={tier.id}
                    variant={selectedTier === tier.id ? "default" : "outline"}
                    onClick={() => {
                      setSelectedTier(tier.id);
                      setEditedTier(tiers.find(t => t.id === tier.id) || tiers[0]);
                    }}
                  >
                    {tier.name}
                  </Button>
                ))}
              </div>

              <div className="space-y-4">
                <div>
                  <Label>Tier Name</Label>
                  <Input
                    value={editedTier.name}
                    onChange={(e) => setEditedTier({ ...editedTier, name: e.target.value })}
                  />
                </div>
                <div>
                  <Label>Title</Label>
                  <Input
                    value={editedTier.title}
                    onChange={(e) => setEditedTier({ ...editedTier, title: e.target.value })}
                  />
                </div>
                <div>
                  <Label>Monthly Amount</Label>
                  <Input
                    value={editedTier.amount}
                    onChange={(e) => setEditedTier({ ...editedTier, amount: e.target.value })}
                  />
                </div>
                
                <div>
                  <Label className="mb-2 block">Features</Label>
                  {editedTier.features.map((feature, index) => (
                    <Input
                      key={index}
                      value={feature}
                      onChange={(e) => updateFeature(index, e.target.value)}
                      className="mb-2"
                    />
                  ))}
                </div>

                <Button onClick={handleSaveTier} className="w-full">
                  <Save className="w-4 h-4 mr-2" />
                  Save Tier Changes
                </Button>
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
