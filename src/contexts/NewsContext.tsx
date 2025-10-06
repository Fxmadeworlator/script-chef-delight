import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
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
    content: "We are thrilled to announce the opening of our new state-of-the-art broadcasting studio in Accra, Ghana. This cutting-edge facility represents a significant milestone in our mission to spread the Gospel across Africa through quality Christian television programming.\n\nThe new studio features the latest in broadcast technology, including 4K cameras, advanced audio systems, and modern production equipment. This will enable us to produce even higher quality content that resonates with our growing audience.\n\nOur General Manager stated, 'This investment in our infrastructure demonstrates our commitment to excellence in Christian broadcasting. We believe that the Gospel deserves the best presentation possible, and this facility will help us achieve that goal.'\n\nThe studio will house multiple production sets, allowing us to create a variety of programs simultaneously. This increased capacity will enable us to expand our programming schedule and reach more viewers across the continent.",
    category: "Ministry News",
    date: "15 Nov 2024",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true
  },
  {
    id: "partnership-announcement",
    title: "Strategic Partnership with African Churches",
    excerpt: "AGTV announces new partnerships with major church networks to expand our reach and impact across the continent.",
    content: "AGTV is proud to announce strategic partnerships with several major church networks across Africa. These partnerships will significantly expand our reach and enable us to bring quality Christian programming to millions more viewers.\n\nThe partnerships include collaborations with churches in Nigeria, Kenya, South Africa, and Uganda. Together, we will work to create content that addresses the spiritual needs of African communities while maintaining our commitment to biblical truth.\n\nThrough these partnerships, we will also be able to share resources, expertise, and best practices in Christian media production. This collaborative approach will strengthen the entire Christian broadcasting community across the continent.\n\nWe are excited about the opportunities these partnerships present and look forward to the impact we can make together for the Kingdom of God.",
    category: "Partnerships",
    date: "12 Nov 2024",
    image: "https://images.pexels.com/photos/8468470/pexels-photo-8468470.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "youth-program-launch",
    title: "New Youth Program 'Next Generation' Launches",
    excerpt: "Exciting new weekly show designed specifically for young adults, addressing relevant topics from a biblical perspective.",
    content: "We are excited to introduce 'Next Generation,' a dynamic new weekly program designed specifically for young adults across Africa. This innovative show addresses contemporary issues from a biblical perspective, helping young people navigate the challenges of modern life while staying rooted in faith.\n\nThe program features engaging discussions, real-life testimonies, and practical applications of biblical principles. Topics include relationships, career choices, social media, mental health, and social justice - all examined through the lens of Scripture.\n\n'Next Generation' will air every Saturday evening at 7 PM and will also be available on our digital platforms. The show is hosted by a team of young, passionate believers who understand the unique challenges facing today's youth.\n\nWe believe this program will become a vital resource for young people seeking to live out their faith in an increasingly complex world.",
    category: "Programs",
    date: "08 Nov 2024",
    image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "community-outreach",
    title: "AGTV Community Outreach Reaches 10,000 Families",
    excerpt: "Our latest humanitarian initiative has provided food, clothing, and spiritual support to communities in need across Ghana.",
    content: "Our community outreach program has reached a significant milestone, providing assistance to over 10,000 families across Ghana. This humanitarian initiative demonstrates our commitment to not just broadcasting the Gospel, but living it out through practical service.\n\nThe outreach program has distributed food packages, clothing, and essential supplies to families in need. In addition to meeting physical needs, our team has also provided spiritual counseling and prayer support to thousands of individuals.\n\nVolunteers from local churches have been instrumental in making this initiative successful. Their dedication and compassion have touched countless lives and demonstrated the love of Christ in tangible ways.\n\nWe plan to continue and expand this program, reaching even more communities in the coming months. Your support and prayers make this work possible.",
    category: "Community",
    date: "05 Nov 2024",
    image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "awards-recognition",
    title: "AGTV Wins Excellence in Christian Broadcasting",
    excerpt: "We are honored to receive this prestigious award recognizing our commitment to quality Christian television programming.",
    content: "AGTV has been honored with the Excellence in Christian Broadcasting Award at the Pan-African Christian Media Conference. This prestigious recognition acknowledges our dedication to producing high-quality, biblically sound programming that impacts lives across the continent.\n\nThe award was presented by a panel of industry experts and Christian leaders who evaluated broadcasters based on content quality, reach, impact, and innovation. AGTV was recognized for its consistent excellence across all these categories.\n\nOur CEO expressed gratitude: 'This award belongs to our entire team - from our production crew to our on-air personalities, and especially to our supporters who make our ministry possible. We are humbled by this recognition and renewed in our commitment to excellence.'\n\nThis achievement motivates us to continue raising the standard for Christian broadcasting in Africa and beyond.",
    category: "Recognition",
    date: "01 Nov 2024",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "expansion-announcement",
    title: "Expanding to 5 New African Countries",
    excerpt: "AGTV's signal will soon reach millions more viewers as we expand our broadcasting coverage across West and East Africa.",
    content: "AGTV is expanding its broadcast coverage to five new African countries: Senegal, Côte d'Ivoire, Tanzania, Rwanda, and Zambia. This expansion will bring our signal to millions of additional viewers across West and East Africa.\n\nThe expansion is made possible through new satellite agreements and partnerships with local broadcasters in each country. We are working to ensure that our content is accessible to as many people as possible across the continent.\n\nIn addition to expanding our broadcast footprint, we are also developing localized content that addresses the specific needs and contexts of viewers in each region. This approach ensures that our programming remains relevant and impactful.\n\nThis expansion represents a significant step forward in our mission to reach all of Africa with the Gospel through quality Christian television. We are grateful for the support that makes this growth possible.",
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
