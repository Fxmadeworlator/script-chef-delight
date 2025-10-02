import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface ClubTier {
  id: string;
  name: string;
  amount: string;
  frequency: string;
  title: string;
  icon: string;
  featured?: boolean;
  features: string[];
  subTiers: { name: string; price: string; savings?: string }[];
}

export interface ClubStats {
  number: string;
  label: string;
}

interface ClubContextType {
  tiers: ClubTier[];
  stats: ClubStats[];
  updateTier: (id: string, tier: ClubTier) => void;
  updateStats: (stats: ClubStats[]) => void;
}

const ClubContext = createContext<ClubContextType | undefined>(undefined);

const defaultTiers: ClubTier[] = [
  {
    id: "basic",
    icon: "Sprout",
    amount: "₵200",
    subTiers: [
      { name: "Monthly", price: "₵200" },
      { name: "Quarterly", price: "₵540", savings: "Save ₵60" },
      { name: "Yearly", price: "₵2,000", savings: "Save ₵400" }
    ],
    frequency: "Monthly",
    name: "Basic",
    title: "Basic Club Member",
    features: [
      "Access to live streams",
      "Monthly devotionals",
      "AGTV club member badge",
      "Weekly inspirational emails",
      "Prayer request submissions"
    ]
  },
  {
    id: "premium",
    icon: "Heart",
    amount: "₵500",
    subTiers: [
      { name: "Monthly", price: "₵500" },
      { name: "Quarterly", price: "₵1,350", savings: "Save ₵150" },
      { name: "Yearly", price: "₵5,000", savings: "Save ₵1,000" }
    ],
    frequency: "Monthly",
    name: "Premium",
    title: "Premium Club Member",
    featured: true,
    features: [
      "All basic benefits",
      "Exclusive premium content library",
      "Monthly pastor Q&A sessions",
      "Early access to new programs",
      "Quarterly ministry impact reports",
      "Priority prayer line access"
    ]
  },
  {
    id: "platinum",
    icon: "Crown",
    amount: "₵1,000",
    subTiers: [
      { name: "Monthly", price: "₵1,000" },
      { name: "Quarterly", price: "₵2,700", savings: "Save ₵300" },
      { name: "Yearly", price: "₵10,000", savings: "Save ₵2,000" }
    ],
    frequency: "Monthly",
    name: "Platinum",
    title: "Platinum Club Member",
    features: [
      "All premium benefits",
      "Personal ministry consultation calls",
      "Annual exclusive retreat invitations",
      "Behind-the-scenes content access",
      "Direct pastor communication line",
      "Custom prayer and blessing videos"
    ]
  }
];

const defaultStats: ClubStats[] = [
  { number: "1,247", label: "Club Members" },
  { number: "$62,350", label: "Monthly Support" },
  { number: "14", label: "Countries Reached" }
];

export const ClubProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tiers, setTiers] = useState<ClubTier[]>(defaultTiers);
  const [stats, setStats] = useState<ClubStats[]>(defaultStats);

  const updateTier = (id: string, tier: ClubTier) => {
    setTiers(prevTiers => prevTiers.map(t => t.id === id ? tier : t));
  };

  const updateStats = (newStats: ClubStats[]) => {
    setStats(newStats);
  };

  return (
    <ClubContext.Provider value={{ tiers, stats, updateTier, updateStats }}>
      {children}
    </ClubContext.Provider>
  );
};

export const useClub = () => {
  const context = useContext(ClubContext);
  if (!context) {
    throw new Error('useClub must be used within ClubProvider');
  }
  return context;
};
