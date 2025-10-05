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

export interface ClubDonation {
  id: string;
  donorName: string;
  amount: number;
  date: string;
  frequency: string;
  paymentMethod: string;
}

interface ClubContextType {
  tiers: ClubTier[];
  stats: ClubStats[];
  donations: ClubDonation[];
  updateTier: (id: string, tier: ClubTier) => void;
  updateStats: (stats: ClubStats[]) => void;
  addDonation: (donation: ClubDonation) => void;
  updateDonation: (id: string, updatedDonation: ClubDonation) => void;
  deleteDonation: (id: string) => void;
}

const ClubContext = createContext<ClubContextType | undefined>(undefined);

const defaultTiers: ClubTier[] = [
  {
    id: "online",
    icon: "Heart",
    amount: "Flexible",
    subTiers: [
      { name: "One-time", price: "Any Amount" },
      { name: "Monthly", price: "Recurring" },
      { name: "Quarterly", price: "Every 3 Months" }
    ],
    frequency: "Choose Your Amount",
    name: "Online",
    title: "Give Online",
    featured: true,
    features: [
      "Instant digital receipt",
      "Secure payment processing",
      "Multiple payment methods",
      "Set up recurring donations",
      "Tax-deductible contributions",
      "Track your giving history"
    ]
  },
  {
    id: "in-person",
    icon: "HandHeart",
    amount: "Flexible",
    subTiers: [
      { name: "During Service", price: "Sundays" },
      { name: "Office Hours", price: "Mon-Fri 9AM-5PM" },
      { name: "Special Events", price: "As Scheduled" }
    ],
    frequency: "Choose Your Method",
    name: "In Person",
    title: "Give In Person",
    features: [
      "Cash or check accepted",
      "Give during Sunday service",
      "Visit our office location",
      "Personal receipt provided",
      "Envelope giving available",
      "Direct hand delivery"
    ]
  }
];

const defaultStats: ClubStats[] = [
  { number: "1,247", label: "Club Members" },
  { number: "$62,350", label: "Monthly Support" },
  { number: "14", label: "Countries Reached" }
];

const defaultDonations: ClubDonation[] = [
  {
    id: "don-1",
    donorName: "John Smith",
    amount: 1000,
    date: "2024-01-15",
    frequency: "Monthly",
    paymentMethod: "Credit Card"
  },
  {
    id: "don-2",
    donorName: "Sarah Johnson",
    amount: 500,
    date: "2024-01-18",
    frequency: "One-time",
    paymentMethod: "Bank Transfer"
  },
  {
    id: "don-3",
    donorName: "Michael Brown",
    amount: 2500,
    date: "2024-01-20",
    frequency: "Quarterly",
    paymentMethod: "Check"
  },
  {
    id: "don-4",
    donorName: "Emily Davis",
    amount: 750,
    date: "2024-01-22",
    frequency: "Monthly",
    paymentMethod: "Credit Card"
  },
  {
    id: "don-5",
    donorName: "David Wilson",
    amount: 5000,
    date: "2024-01-25",
    frequency: "Annually",
    paymentMethod: "Wire Transfer"
  },
];

export const ClubProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tiers, setTiers] = useState<ClubTier[]>(defaultTiers);
  const [stats, setStats] = useState<ClubStats[]>(defaultStats);
  const [donations, setDonations] = useState<ClubDonation[]>(defaultDonations);

  const updateTier = (id: string, tier: ClubTier) => {
    setTiers(prevTiers => prevTiers.map(t => t.id === id ? tier : t));
  };

  const updateStats = (newStats: ClubStats[]) => {
    setStats(newStats);
  };

  const addDonation = (donation: ClubDonation) => {
    setDonations([...donations, donation]);
  };

  const updateDonation = (id: string, updatedDonation: ClubDonation) => {
    setDonations(donations.map(d => d.id === id ? updatedDonation : d));
  };

  const deleteDonation = (id: string) => {
    setDonations(donations.filter(d => d.id !== id));
  };

  return (
    <ClubContext.Provider value={{ 
      tiers, 
      stats, 
      donations,
      updateTier, 
      updateStats,
      addDonation,
      updateDonation,
      deleteDonation
    }}>
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
