import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useClub } from '@/contexts/ClubContext';
import { useToast } from '@/hooks/use-toast';
import { LogOut, Crown, Save, Trash2, Mail, CheckCircle2, XCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

interface ClubDashboardProps {
  onLogout: () => void;
}

export const ClubDashboard = ({ onLogout }: ClubDashboardProps) => {
  const { tiers, stats, donations, updateTier, updateStats, deleteDonation } = useClub();
  const [editedTiers, setEditedTiers] = useState(tiers);
  const { toast } = useToast();
  const [editedStats, setEditedStats] = useState(stats);

  const handleSaveStats = () => {
    updateStats(editedStats);
    toast({
      title: "Statistics Updated",
      description: "Club statistics saved successfully",
    });
  };

  const handleSaveTier = (id: string) => {
    const tier = editedTiers.find(t => t.id === id);
    if (tier) {
      updateTier(id, tier);
      toast({
        title: "Tier Updated",
        description: "Membership tier saved successfully",
      });
    }
  };

  const handleDeleteDonation = (id: string) => {
    deleteDonation(id);
    toast({
      title: "Donation Deleted",
      description: "Donation record removed successfully",
    });
  };

  const handleRemindUnpaid = () => {
    const unpaidDonors = donations.filter(d => !d.isPaid);
    if (unpaidDonors.length === 0) {
      toast({
        title: "No Unpaid Donations",
        description: "All donors have paid!",
      });
      return;
    }
    
    const emails = unpaidDonors.map(d => d.email).join(', ');
    toast({
      title: "Reminder Sent",
      description: `Reminders sent to ${unpaidDonors.length} unpaid donor(s): ${emails}`,
    });
  };

  const chartData = stats.map(stat => ({
    label: stat.label,
    value: parseInt(stat.number) || 0
  }));

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

        <Tabs defaultValue="tiers" className="space-y-6">
          <TabsList>
            <TabsTrigger value="tiers">Membership Tiers</TabsTrigger>
            <TabsTrigger value="donations">Donation Records</TabsTrigger>
            <TabsTrigger value="stats">Statistics</TabsTrigger>
          </TabsList>

          <TabsContent value="tiers" className="space-y-6">
            {editedTiers.map((tier) => (
              <div key={tier.id} className="bg-card rounded-lg p-6 border">
                <h2 className="text-xl font-bold mb-4">{tier.title}</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Title</Label>
                      <Input
                        value={tier.title}
                        onChange={(e) => {
                          const newTiers = editedTiers.map(t => 
                            t.id === tier.id ? { ...t, title: e.target.value } : t
                          );
                          setEditedTiers(newTiers);
                        }}
                      />
                    </div>
                    <div>
                      <Label>Amount</Label>
                      <Input
                        value={tier.amount}
                        onChange={(e) => {
                          const newTiers = editedTiers.map(t => 
                            t.id === tier.id ? { ...t, amount: e.target.value } : t
                          );
                          setEditedTiers(newTiers);
                        }}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label>Features (one per line)</Label>
                    <Textarea
                      value={tier.features.join('\n')}
                      rows={6}
                      onChange={(e) => {
                        const newTiers = editedTiers.map(t => 
                          t.id === tier.id 
                            ? { ...t, features: e.target.value.split('\n').filter(f => f.trim()) } 
                            : t
                        );
                        setEditedTiers(newTiers);
                      }}
                    />
                  </div>

                  <div>
                    <Label className="mb-3 block">Sub-Tiers</Label>
                    {tier.subTiers.map((subTier, index) => (
                      <div key={index} className="grid grid-cols-3 gap-2 mb-2">
                        <Input
                          placeholder="Name"
                          value={subTier.name}
                          onChange={(e) => {
                            const newTiers = editedTiers.map(t => 
                              t.id === tier.id 
                                ? { 
                                    ...t, 
                                    subTiers: t.subTiers.map((st, i) => 
                                      i === index ? { ...st, name: e.target.value } : st
                                    )
                                  }
                                : t
                            );
                            setEditedTiers(newTiers);
                          }}
                        />
                        <Input
                          placeholder="Price"
                          value={subTier.price}
                          onChange={(e) => {
                            const newTiers = editedTiers.map(t => 
                              t.id === tier.id 
                                ? { 
                                    ...t, 
                                    subTiers: t.subTiers.map((st, i) => 
                                      i === index ? { ...st, price: e.target.value } : st
                                    )
                                  }
                                : t
                            );
                            setEditedTiers(newTiers);
                          }}
                        />
                        <Input
                          placeholder="Savings (optional)"
                          value={subTier.savings || ''}
                          onChange={(e) => {
                            const newTiers = editedTiers.map(t => 
                              t.id === tier.id 
                                ? { 
                                    ...t, 
                                    subTiers: t.subTiers.map((st, i) => 
                                      i === index ? { ...st, savings: e.target.value } : st
                                    )
                                  }
                                : t
                            );
                            setEditedTiers(newTiers);
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  <Button onClick={() => handleSaveTier(tier.id)} className="w-full">
                    <Save className="w-4 h-4 mr-2" />
                    Save {tier.name} Tier
                  </Button>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="donations" className="space-y-6">
            <div className="bg-card rounded-lg p-6 border">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Donation Records</h2>
                <Button onClick={handleRemindUnpaid} variant="outline">
                  <Mail className="w-4 h-4 mr-2" />
                  Remind Unpaid
                </Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold">Status</th>
                      <th className="text-left p-3 font-semibold">Donor Name</th>
                      <th className="text-left p-3 font-semibold">Email</th>
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
                        <td className="p-3">
                          {donation.isPaid ? (
                            <Badge variant="default" className="bg-green-500">
                              <CheckCircle2 className="w-3 h-3 mr-1" />
                              Paid
                            </Badge>
                          ) : (
                            <Badge variant="destructive">
                              <XCircle className="w-3 h-3 mr-1" />
                              Unpaid
                            </Badge>
                          )}
                        </td>
                        <td className="p-3">{donation.donorName}</td>
                        <td className="p-3 text-sm text-muted-foreground">{donation.email}</td>
                        <td className="p-3 font-semibold text-primary">
                          {formatCurrency(donation.amount)}
                        </td>
                        <td className="p-3">{new Date(donation.date).toLocaleDateString()}</td>
                        <td className="p-3 capitalize">{donation.frequency}</td>
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
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Total Donations: <span className="font-bold text-foreground">
                      {formatCurrency(donations.reduce((sum, d) => sum + d.amount, 0))}
                    </span>
                  </p>
                </div>
                <div className="p-4 bg-green-500/10 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Paid: <span className="font-bold text-green-600">
                      {formatCurrency(donations.filter(d => d.isPaid).reduce((sum, d) => sum + d.amount, 0))}
                    </span>
                    <span className="ml-2 text-xs">({donations.filter(d => d.isPaid).length} donors)</span>
                  </p>
                </div>
                <div className="p-4 bg-red-500/10 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Unpaid: <span className="font-bold text-red-600">
                      {formatCurrency(donations.filter(d => !d.isPaid).reduce((sum, d) => sum + d.amount, 0))}
                    </span>
                    <span className="ml-2 text-xs">({donations.filter(d => !d.isPaid).length} donors)</span>
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="stats" className="space-y-6">
            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-xl font-bold mb-6">Club Statistics</h2>
              
              {/* Visual Chart */}
              <div className="mb-8 h-[300px]">
                <ChartContainer
                  config={{
                    value: {
                      label: "Value",
                      color: "hsl(var(--primary))",
                    },
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis 
                        dataKey="label" 
                        angle={-45}
                        textAnchor="end"
                        height={80}
                      />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar 
                        dataKey="value" 
                        fill="hsl(var(--primary))"
                        radius={[8, 8, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>

              {/* Edit Statistics */}
              <div className="space-y-4">
                <h3 className="font-semibold">Edit Statistics</h3>
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
