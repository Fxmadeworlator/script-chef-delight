import { Mail, Phone, MapPin } from "lucide-react";

const pastors = [
  {
    id: "senior-pastor",
    name: "Pastor Emmanuel Asante",
    title: "Senior Pastor & AGTV Director",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
    bio: "Pastor Emmanuel Asante has been serving in ministry for over 20 years, with a heart for evangelism and media ministry. He founded AGTV with the vision of reaching every home in Africa with the Gospel. His dynamic preaching and leadership have transformed countless lives across the continent.",
    specialties: ["Television Ministry", "Evangelism", "Church Planting", "Leadership Development"],
    contact: {
      email: "pastor.emmanuel@agtv.org",
      phone: "+233 20 123 4567"
    }
  },
  {
    id: "associate-pastor",
    name: "Pastor Grace Owusu",
    title: "Associate Pastor & Youth Director",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
    bio: "Pastor Grace Owusu is passionate about youth ministry and women's empowerment. She leads our youth programs and hosts several popular shows on AGTV. Her heart for the next generation has impacted thousands of young people across Ghana and beyond.",
    specialties: ["Youth Ministry", "Women's Ministry", "Counseling", "Worship Leading"],
    contact: {
      email: "pastor.grace@agtv.org",
      phone: "+233 24 567 8901"
    }
  },
  {
    id: "teaching-pastor",
    name: "Dr. Isaac Adjei",
    title: "Teaching Pastor & Bible Scholar",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
    bio: "Dr. Isaac Adjei holds a PhD in Biblical Studies and has been teaching God's Word for over 15 years. He leads our Bible study programs and ensures all AGTV content maintains sound biblical doctrine. His deep knowledge of Scripture enriches our programming.",
    specialties: ["Biblical Teaching", "Theology", "Bible Study", "Discipleship"],
    contact: {
      email: "dr.isaac@agtv.org",
      phone: "+233 26 789 0123"
    }
  },
  {
    id: "outreach-pastor",
    name: "Pastor Mary Asante",
    title: "Outreach Pastor & Community Relations",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
    bio: "Pastor Mary Asante coordinates all community outreach programs and charitable initiatives. Her compassionate heart for the less privileged has led to numerous successful community projects, feeding programs, and medical outreaches across Ghana.",
    specialties: ["Community Outreach", "Charitable Work", "Family Ministry", "Social Services"],
    contact: {
      email: "pastor.mary@agtv.org",
      phone: "+233 27 890 1234"
    }
  }
];

export const PastorsPage = () => {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-display">
            Our Pastors
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet the dedicated spiritual leaders who guide AGTV's ministry and serve our community with passion and excellence
          </p>
        </div>

        {/* Pastors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {pastors.map((pastor) => (
            <div
              key={pastor.id}
              className="bg-card rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:translate-y-[-10px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
            >
              {/* Pastor Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={pastor.image}
                  alt={pastor.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-1 font-display">
                    {pastor.name}
                  </h3>
                  <p className="text-primary text-lg font-semibold">
                    {pastor.title}
                  </p>
                </div>
              </div>

              {/* Pastor Details */}
              <div className="p-8">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {pastor.bio}
                </p>

                {/* Specialties */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold mb-3 text-foreground font-display">
                    Ministry Specialties
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {pastor.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="border-t border-border pt-6">
                  <h4 className="text-lg font-bold mb-3 text-foreground font-display">
                    Contact Information
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Mail size={16} className="text-primary" />
                      <a
                        href={`mailto:${pastor.contact.email}`}
                        className="hover:text-primary transition-colors"
                      >
                        {pastor.contact.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Phone size={16} className="text-primary" />
                      <a
                        href={`tel:${pastor.contact.phone}`}
                        className="hover:text-primary transition-colors"
                      >
                        {pastor.contact.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin size={16} className="text-primary" />
                      <span>AGTV Studios, Accra, Ghana</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="text-center bg-gradient-to-br from-card to-card-secondary rounded-2xl p-12 shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-foreground font-display">
            Connect With Our Pastoral Team
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our pastors are here to serve you. Whether you need prayer, counseling, or spiritual guidance, 
            don't hesitate to reach out to any member of our pastoral team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Request Prayer
            </button>
            <button className="btn-secondary">
              Schedule Counseling
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};