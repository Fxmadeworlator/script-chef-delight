import { Mail, Phone, MapPin } from "lucide-react";

const pastors = [
  {
    id: "senior-pastor",
    name: "Pastor Emmanuel Asante",
    title: "Senior Pastor & AGTV Director",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
    bio: "Pastor Emmanuel Asante is the visionary founder and Senior Pastor of AGTV, with over 25 years of ministry experience. A graduate of Trinity Theological Seminary, he holds a Master's in Divinity and has planted over 50 churches across Ghana. His passion for media evangelism led to the establishment of AGTV in 2018, and under his leadership, the network has grown to reach millions across Africa.",
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
    bio: "Pastor Grace Owusu serves as Associate Pastor and Youth Director, bringing 15 years of ministry experience focused on youth and women's empowerment. She holds a Bachelor's in Christian Education and hosts the popular youth program 'Next Generation' on AGTV. Her innovative approach to youth ministry has reached over 100,000 young people across Africa through television and social media platforms.",
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
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
    bio: "Dr. Isaac Adjei is our Teaching Pastor and Chief Bible Scholar, holding a PhD in Biblical Theology from the University of Ghana and a Master's in Ancient Languages. With 20 years of teaching experience, he oversees all doctrinal content on AGTV and hosts the weekly program 'Deep in the Word.' He has authored three books on African Christianity and speaks fluent Hebrew and Greek.",
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
    bio: "Pastor Mary Asante leads our Community Outreach and Social Impact initiatives, with 18 years of experience in humanitarian work. She coordinates AGTV's charitable programs including the 'Feed the Hungry' initiative that has provided over 500,000 meals, and the 'Hope for Orphans' program supporting 200+ children. She holds a Master's in Social Work and has been recognized by the Ghana Ministry of Social Welfare for her outstanding community service.",
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