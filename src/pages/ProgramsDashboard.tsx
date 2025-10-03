import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { usePrograms } from '@/contexts/ProgramsContext';
import { useNews } from '@/contexts/NewsContext';
import { useToast } from '@/hooks/use-toast';
import { LogOut, Tv, Save, Plus, Trash2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ProgramsDashboardProps {
  onLogout: () => void;
}

export const ProgramsDashboard = ({ onLogout }: ProgramsDashboardProps) => {
  const { 
    tiers, 
    headerContent, 
    schedulePrograms, 
    events,
    updateTier, 
    updateHeaderContent,
    addScheduleProgram,
    updateScheduleProgram,
    deleteScheduleProgram,
    addEvent,
    updateEvent,
    deleteEvent
  } = usePrograms();
  
  const { newsItems, addNewsItem, updateNewsItem, deleteNewsItem } = useNews();
  const { toast } = useToast();

  // Subscription Tiers State
  const [selectedTier, setSelectedTier] = useState(tiers[0].id);
  const currentTier = tiers.find(t => t.id === selectedTier) || tiers[0];
  const [editedTier, setEditedTier] = useState(currentTier);
  const [editedHeader, setEditedHeader] = useState(headerContent);

  // Schedule State
  const [newProgram, setNewProgram] = useState({
    title: '',
    day: 0,
    startHour: 9,
    startMinute: 0,
    durationMinutes: 60
  });

  // Events State
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    description: '',
    image: ''
  });

  // News State
  const [newNews, setNewNews] = useState({
    title: '',
    excerpt: '',
    category: '',
    image: ''
  });

  const handleSaveTier = () => {
    updateTier(selectedTier, editedTier);
    toast({ title: "Changes Saved", description: "Tier updated successfully" });
  };

  const handleSaveHeader = () => {
    updateHeaderContent(editedHeader);
    toast({ title: "Header Updated", description: "Header content saved successfully" });
  };

  const handleAddProgram = () => {
    if (!newProgram.title) {
      toast({ title: "Error", description: "Please enter a program title", variant: "destructive" });
      return;
    }
    
    const startTime = newProgram.startHour * 60 + newProgram.startMinute;
    const program = {
      id: `prog-${Date.now()}`,
      title: newProgram.title,
      day: newProgram.day,
      startTime,
      duration: newProgram.durationMinutes
    };
    
    addScheduleProgram(program);
    setNewProgram({ title: '', day: 0, startHour: 9, startMinute: 0, durationMinutes: 60 });
    toast({ title: "Program Added", description: "Schedule updated successfully" });
  };

  const handleDeleteProgram = (id: string) => {
    deleteScheduleProgram(id);
    toast({ title: "Program Deleted", description: "Program removed from schedule" });
  };

  const handleAddEvent = () => {
    if (!newEvent.title || !newEvent.date) {
      toast({ title: "Error", description: "Please fill in required fields", variant: "destructive" });
      return;
    }
    
    const event = {
      id: `event-${Date.now()}`,
      ...newEvent
    };
    
    addEvent(event);
    setNewEvent({ title: '', date: '', time: '', location: '', description: '', image: '' });
    toast({ title: "Event Added", description: "Event created successfully" });
  };

  const handleDeleteEvent = (id: string) => {
    deleteEvent(id);
    toast({ title: "Event Deleted", description: "Event removed successfully" });
  };

  const handleAddNews = () => {
    if (!newNews.title || !newNews.excerpt) {
      toast({ title: "Error", description: "Please fill in required fields", variant: "destructive" });
      return;
    }
    
    const news = {
      id: `news-${Date.now()}`,
      ...newNews,
      date: new Date().toISOString().split('T')[0]
    };
    
    addNewsItem(news);
    setNewNews({ title: '', excerpt: '', category: '', image: '' });
    toast({ title: "News Added", description: "News item created successfully" });
  };

  const handleDeleteNews = (id: string) => {
    deleteNewsItem(id);
    toast({ title: "News Deleted", description: "News item removed successfully" });
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

  const formatTime = (minutes: number) => {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
  };

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Tv className="w-8 h-8 text-primary" />
              <h1 className="text-3xl font-bold">Programs Department Dashboard</h1>
            </div>
            <p className="text-muted-foreground">Manage schedule, events, news, and subscriptions</p>
          </div>
          <Button onClick={onLogout} variant="outline">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        <Tabs defaultValue="schedule" className="space-y-6">
          <TabsList>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="news">News</TabsTrigger>
            <TabsTrigger value="tiers">Subscription Tiers</TabsTrigger>
            <TabsTrigger value="header">Header Content</TabsTrigger>
          </TabsList>

          {/* SCHEDULE TAB */}
          <TabsContent value="schedule" className="space-y-6">
            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-xl font-bold mb-4">Add New Program</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label>Program Title</Label>
                  <Input
                    value={newProgram.title}
                    onChange={(e) => setNewProgram({ ...newProgram, title: e.target.value })}
                    placeholder="e.g., Morning Glory"
                  />
                </div>
                <div>
                  <Label>Day</Label>
                  <select
                    className="w-full h-10 px-3 rounded-md border border-input bg-background"
                    value={newProgram.day}
                    onChange={(e) => setNewProgram({ ...newProgram, day: parseInt(e.target.value) })}
                  >
                    {days.map((day, idx) => (
                      <option key={idx} value={idx}>{day}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label>Start Time</Label>
                  <div className="flex gap-2">
                    <Input
                      type="number"
                      min="0"
                      max="23"
                      value={newProgram.startHour}
                      onChange={(e) => setNewProgram({ ...newProgram, startHour: parseInt(e.target.value) })}
                      placeholder="Hour"
                    />
                    <Input
                      type="number"
                      min="0"
                      max="59"
                      value={newProgram.startMinute}
                      onChange={(e) => setNewProgram({ ...newProgram, startMinute: parseInt(e.target.value) })}
                      placeholder="Minute"
                    />
                  </div>
                </div>
                <div>
                  <Label>Duration (minutes)</Label>
                  <Input
                    type="number"
                    min="30"
                    step="30"
                    value={newProgram.durationMinutes}
                    onChange={(e) => setNewProgram({ ...newProgram, durationMinutes: parseInt(e.target.value) })}
                  />
                </div>
              </div>
              <Button onClick={handleAddProgram} className="w-full">
                <Plus className="w-4 h-4 mr-2" />
                Add Program to Schedule
              </Button>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-xl font-bold mb-4">Current Programs</h2>
              <div className="space-y-2">
                {schedulePrograms.map((program) => (
                  <div key={program.id} className="flex justify-between items-center p-3 bg-muted rounded">
                    <div>
                      <strong>{program.title}</strong> - {days[program.day]} at {formatTime(program.startTime)} ({program.duration} min)
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDeleteProgram(program.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* EVENTS TAB */}
          <TabsContent value="events" className="space-y-6">
            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-xl font-bold mb-4">Add New Event</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label>Event Title</Label>
                  <Input
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                    placeholder="e.g., Youth Conference 2024"
                  />
                </div>
                <div>
                  <Label>Date</Label>
                  <Input
                    type="date"
                    value={newEvent.date}
                    onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                  />
                </div>
                <div>
                  <Label>Time</Label>
                  <Input
                    value={newEvent.time}
                    onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                    placeholder="e.g., 9:00 AM"
                  />
                </div>
                <div>
                  <Label>Location</Label>
                  <Input
                    value={newEvent.location}
                    onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                    placeholder="e.g., AGTV Main Auditorium"
                  />
                </div>
                <div className="md:col-span-2">
                  <Label>Description</Label>
                  <Textarea
                    value={newEvent.description}
                    onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                    placeholder="Event description"
                  />
                </div>
                <div className="md:col-span-2">
                  <Label>Image URL</Label>
                  <Input
                    value={newEvent.image}
                    onChange={(e) => setNewEvent({ ...newEvent, image: e.target.value })}
                    placeholder="https://..."
                  />
                </div>
              </div>
              <Button onClick={handleAddEvent} className="w-full">
                <Plus className="w-4 h-4 mr-2" />
                Add Event
              </Button>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-xl font-bold mb-4">Current Events</h2>
              <div className="space-y-2">
                {events.map((event) => (
                  <div key={event.id} className="flex justify-between items-center p-3 bg-muted rounded">
                    <div>
                      <strong>{event.title}</strong> - {event.date} at {event.time}
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDeleteEvent(event.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* NEWS TAB */}
          <TabsContent value="news" className="space-y-6">
            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-xl font-bold mb-4">Add News Item</h2>
              <div className="grid grid-cols-1 gap-4 mb-4">
                <div>
                  <Label>Title</Label>
                  <Input
                    value={newNews.title}
                    onChange={(e) => setNewNews({ ...newNews, title: e.target.value })}
                    placeholder="News title"
                  />
                </div>
                <div>
                  <Label>Category</Label>
                  <Input
                    value={newNews.category}
                    onChange={(e) => setNewNews({ ...newNews, category: e.target.value })}
                    placeholder="e.g., Community, Ministry, Youth"
                  />
                </div>
                <div>
                  <Label>Excerpt</Label>
                  <Textarea
                    value={newNews.excerpt}
                    onChange={(e) => setNewNews({ ...newNews, excerpt: e.target.value })}
                    placeholder="Brief description"
                    rows={3}
                  />
                </div>
                <div>
                  <Label>Image URL</Label>
                  <Input
                    value={newNews.image}
                    onChange={(e) => setNewNews({ ...newNews, image: e.target.value })}
                    placeholder="https://..."
                  />
                </div>
              </div>
              <Button onClick={handleAddNews} className="w-full">
                <Plus className="w-4 h-4 mr-2" />
                Add News Item
              </Button>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-xl font-bold mb-4">Current News Items</h2>
              <div className="space-y-2">
                {newsItems.map((news) => (
                  <div key={news.id} className="flex justify-between items-center p-3 bg-muted rounded">
                    <div>
                      <strong>{news.title}</strong> - {news.category}
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDeleteNews(news.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* SUBSCRIPTION TIERS TAB */}
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

          {/* HEADER CONTENT TAB */}
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