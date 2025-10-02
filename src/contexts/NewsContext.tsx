import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  featured?: boolean;
}

interface NewsContextType {
  newsItems: NewsItem[];
  addNewsItem: (item: NewsItem) => void;
  updateNewsItem: (id: string, item: NewsItem) => void;
  deleteNewsItem: (id: string) => void;
}

const NewsContext = createContext<NewsContextType | undefined>(undefined);

const defaultNewsItems: NewsItem[] = [
  {
    id: "new-studio-opening",
    title: "AGTV Opens New State-of-the-Art Studio",
    excerpt: "Our latest broadcasting facility will enable us to reach even more communities across Africa with high-quality Christian programming.",
    category: "Ministry News",
    date: "15 Nov 2024",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true
  },
  {
    id: "partnership-announcement",
    title: "Strategic Partnership with African Churches",
    excerpt: "AGTV announces new partnerships with major church networks to expand our reach and impact across the continent.",
    category: "Partnerships",
    date: "12 Nov 2024",
    image: "https://images.pexels.com/photos/8468470/pexels-photo-8468470.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "youth-program-launch",
    title: "New Youth Program 'Next Generation' Launches",
    excerpt: "Exciting new weekly show designed specifically for young adults, addressing relevant topics from a biblical perspective.",
    category: "Programs",
    date: "08 Nov 2024",
    image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "community-outreach",
    title: "AGTV Community Outreach Reaches 10,000 Families",
    excerpt: "Our latest humanitarian initiative has provided food, clothing, and spiritual support to communities in need across Ghana.",
    category: "Community",
    date: "05 Nov 2024",
    image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "awards-recognition",
    title: "AGTV Wins Excellence in Christian Broadcasting",
    excerpt: "We are honored to receive this prestigious award recognizing our commitment to quality Christian television programming.",
    category: "Recognition",
    date: "01 Nov 2024",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "expansion-announcement",
    title: "Expanding to 5 New African Countries",
    excerpt: "AGTV's signal will soon reach millions more viewers as we expand our broadcasting coverage across West and East Africa.",
    category: "Expansion",
    date: "28 Oct 2024",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

export const NewsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>(defaultNewsItems);

  const addNewsItem = (item: NewsItem) => {
    setNewsItems(prev => [item, ...prev]);
  };

  const updateNewsItem = (id: string, item: NewsItem) => {
    setNewsItems(prev => prev.map(n => n.id === id ? item : n));
  };

  const deleteNewsItem = (id: string) => {
    setNewsItems(prev => prev.filter(n => n.id !== id));
  };

  return (
    <NewsContext.Provider value={{ newsItems, addNewsItem, updateNewsItem, deleteNewsItem }}>
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = () => {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error('useNews must be used within NewsProvider');
  }
  return context;
};
