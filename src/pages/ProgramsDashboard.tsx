import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { usePrograms } from '@/contexts/ProgramsContext';
import { useToast } from '@/hooks/use-toast';
import { LogOut, Tv, Save } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ProgramsDashboardProps {
  onLogout: () => void;
}

export const ProgramsDashboard = ({ onLogout }: ProgramsDashboardProps) => {
  const { tiers, headerContent, updateTier, updateHeaderContent } = usePrograms();
  const { toast } = useToast();
  const [selectedTier, setSelectedTier] = useState(tiers[0].id);
  const currentTier = tiers.find(t => t.id === selectedTier) || tiers[0];

  const [editedTier, setEditedTier] = useState(currentTier);
  const [editedHeader, setEditedHeader] = useState(headerContent);

  const handleSaveTier = () => {
    updateTier(selectedTier, editedTier);
    toast({
      title: "Changes Saved",
      description: "Tier updated successfully",
    });
  };

  const handleSaveHeader = () => {
    updateHeaderContent(editedHeader);
    toast({
      title: "Header Updated",
      description: "Header content saved successfully",
    });
  };

  const updateFeature = (index: number, value: string) => {
    const newFeatures = [...editedTier.features];
    newFeatures[index] = value;
    setEditedTier({ ...editedTier, features: newFeatures });
  };

  const updateDescription = (index: number, value: string) => {
    const newDescriptions = [...editedHeader.description];
    newDescriptions[index] = value;
    setEditedHeader({ ...editedHeader, description: newDescriptions });
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Tv className="w-8 h-8 text-primary" />
              <h1 className="text-3xl font-bold">Programs Department Dashboard</h1>
            </div>
            <p className="text-muted-foreground">Manage subscription tiers and content</p>
          </div>
          <Button onClick={onLogout} variant="outline">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        <Tabs defaultValue="tiers" className="space-y-6">
          <TabsList>
            <TabsTrigger value="tiers">Subscription Tiers</TabsTrigger>
            <TabsTrigger value="header">Header Content</TabsTrigger>
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
                  <Label>Price (USD)</Label>
                  <Input
                    type="number"
                    value={editedTier.price}
                    onChange={(e) => setEditedTier({ ...editedTier, price: parseFloat(e.target.value) })}
                  />
                </div>
                <div>
                  <Label>Description</Label>
                  <Textarea
                    value={editedTier.description}
                    onChange={(e) => setEditedTier({ ...editedTier, description: e.target.value })}
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

          <TabsContent value="header" className="space-y-6">
            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-xl font-bold mb-4">Header Content</h2>
              <div className="space-y-4">
                <div>
                  <Label>Title</Label>
                  <Input
                    value={editedHeader.title}
                    onChange={(e) => setEditedHeader({ ...editedHeader, title: e.target.value })}
                  />
                </div>
                
                <div>
                  <Label className="mb-2 block">Description Paragraphs</Label>
                  {editedHeader.description.map((desc, index) => (
                    <Textarea
                      key={index}
                      value={desc}
                      onChange={(e) => updateDescription(index, e.target.value)}
                      rows={4}
                      className="mb-2"
                    />
                  ))}
                </div>

                <Button onClick={handleSaveHeader} className="w-full">
                  <Save className="w-4 h-4 mr-2" />
                  Save Header Changes
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
