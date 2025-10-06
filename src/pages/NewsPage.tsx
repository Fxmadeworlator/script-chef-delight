import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNews, NewsItem } from "@/contexts/NewsContext";
import { ArrowLeft, Facebook, Twitter, Linkedin, Link as LinkIcon } from "lucide-react";
import { toast } from "sonner";

export const NewsPage = () => {
  const { newsItems } = useNews();
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);
  const featuredNews = newsItems.find(item => item.featured);
  const regularNews = newsItems.filter(item => !item.featured);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = selectedArticle?.title || "";
    
    let shareUrl = "";
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        toast.success("Link copied to clipboard!");
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400");
    }
  };

  if (selectedArticle) {
    return (
      <div className="min-h-screen">
        {/* Article Hero */}
        <section className="relative py-20 px-4 text-white overflow-hidden pt-20">
          <img
            src={selectedArticle.image}
            alt={selectedArticle.title}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/70" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <Button
              variant="ghost"
              onClick={() => setSelectedArticle(null)}
              className="mb-6 text-white hover:bg-white/20"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to News
            </Button>
            
            <div className="mb-4">
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                {selectedArticle.category}
              </span>
              <span className="ml-4 text-sm opacity-90">{selectedArticle.date}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              {selectedArticle.title}
            </h1>
          </div>
        </section>

        {/* Article Content */}
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="bg-card rounded-lg p-8 shadow-lg mb-8">
            <div className="prose prose-lg max-w-none">
              {selectedArticle.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Share Buttons */}
          <div className="bg-card rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Share this article</h3>
            <div className="flex flex-wrap gap-3">
              <Button
                variant="outline"
                onClick={() => handleShare("facebook")}
                className="flex items-center gap-2"
              >
                <Facebook className="h-4 w-4" />
                Facebook
              </Button>
              <Button
                variant="outline"
                onClick={() => handleShare("twitter")}
                className="flex items-center gap-2"
              >
                <Twitter className="h-4 w-4" />
                Twitter
              </Button>
              <Button
                variant="outline"
                onClick={() => handleShare("linkedin")}
                className="flex items-center gap-2"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                onClick={() => handleShare("copy")}
                className="flex items-center gap-2"
              >
                <LinkIcon className="h-4 w-4" />
                Copy Link
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative py-20 px-4 text-white overflow-hidden mb-16 pt-20">
        <img
          src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            Latest News
          </h1>
          <p className="text-lg md:text-xl opacity-90 leading-relaxed">
            Stay updated with the latest developments in our ministry and Christian broadcasting
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-16">

        {/* FEATURED NEWS */}
        {featuredNews && (
          <div className="mb-16">
            <div 
              className="relative h-96 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
              onClick={() => setSelectedArticle(featuredNews)}
            >
              <img
                src={featuredNews.image}
                alt={featuredNews.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute top-6 left-6 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                FEATURED
              </div>
              <div className="absolute top-6 right-6 bg-white/90 text-foreground px-3 py-2 rounded-lg font-bold text-center shadow-lg">
                <div className="text-sm">{featuredNews.date}</div>
              </div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="mb-3">
                  <span className="bg-primary/80 text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {featuredNews.category}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display drop-shadow-lg">
                  {featuredNews.title}
                </h2>
                <p className="text-lg opacity-90 leading-relaxed drop-shadow-md max-w-3xl">
                  {featuredNews.excerpt}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* REGULAR NEWS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularNews.map((item, index) => (
            <div 
              key={item.id} 
              className={`card-program group cursor-pointer ${index === 0 ? 'md:col-span-2' : ''}`}
              onClick={() => setSelectedArticle(item)}
            >
              <div className={`relative overflow-hidden ${index === 0 ? 'h-64' : 'h-48'}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-4 right-4 bg-white/90 text-foreground px-3 py-2 rounded-lg font-bold text-center z-10 shadow-lg">
                  <div className="text-xs">{item.date}</div>
                </div>
                <div className="absolute top-4 left-4 bg-primary/80 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                  {item.category}
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className={`font-bold mb-2 font-display drop-shadow-lg ${index === 0 ? 'text-xl' : 'text-lg'}`}>
                    {item.title}
                  </h3>
                  <p className={`opacity-90 leading-relaxed drop-shadow-md ${index === 0 ? 'text-sm' : 'text-xs'} line-clamp-2`}>
                    {item.excerpt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
