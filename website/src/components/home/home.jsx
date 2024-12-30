import { motion, useScroll, useTransform } from "framer-motion";
import {
  Leaf,
  Sprout,
  TreePine,
  Users,
  BarChart3,
  Globe,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import React, { useEffect, useState } from "react";
import { Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FeatureSection = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        <FeatureCard2
          icon={<Leaf className="h-12 w-12 text-white" />}
          title="Sustainable Practices"
          description="Implement proven regenerative techniques that restore soil health and boost productivity"
          backgroundUrl="/farm1.jpeg"
          link="/services"
        />
        <FeatureCard2
          icon={<Globe className="h-12 w-12 text-white" />}
          title="Global Impact"
          description="Join a network of farmers making a positive impact on climate change"
          backgroundUrl="/farm2.jpeg"
          link="/case-studies"
        />
        <FeatureCard2
          icon={<BarChart3 className="h-12 w-12 text-white" />}
          title="Measurable Results"
          description="Track your progress with advanced soil monitoring and carbon measurement"
          backgroundUrl="/farm3.jpeg"
          link="/case-studies"
        />
      </div>
    </div>
  </section>
);

const FeatureCard2 = ({ icon, title, description, backgroundUrl, link }) => (
  <Card className="overflow-hidden group relative h-96">
    <div className="absolute inset-0">
      <img
        src={backgroundUrl}
        alt=""
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-green-900 via-green-900/70 to-green-900/40" />
    </div>

    <CardContent className="relative h-full p-6 flex flex-col justify-end text-white">
      <div className="mb-4 transform transition-transform duration-500 group-hover:-translate-y-2">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 transform transition-transform duration-500 group-hover:-translate-y-2">
        {title}
      </h3>
      <p className="text-gray-100 transform transition-transform duration-500 group-hover:-translate-y-2 mb-6">
        {description}
      </p>
      <a
        href={link}
        className="inline-flex items-center text-white border border-white/30 rounded-lg px-4 py-2 
                 transition-all duration-500 transform translate-y-8 opacity-0 group-hover:translate-y-0 
                 group-hover:opacity-100 hover:bg-white hover:text-green-900 w-fit"
      >
        Learn More
        <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </CardContent>
  </Card>
);

const Home = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote:
        "Green Axis transformed our farm into a thriving ecosystem. Our yields have increased by 40% while improving soil health.",
      author: "Sarah Johnson",
      role: "Organic Farmer",
    },
    {
      quote:
        "The regenerative practices we learned helped us reduce water usage by 30% and increased our profit margins significantly.",
      author: "Michael Chen",
      role: "Agricultural Director",
    },
    {
      quote:
        "Their carbon credit program opened new revenue streams while helping us contribute to climate change mitigation.",
      author: "David Martinez",
      role: "Farm Owner",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-full flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity }}
          className="absolute inset-0 bg-gradient-to-br from-green-800 to-green-600"
        >
          <img
            src="/reg.jpg"
            alt="Aerial view of regenerative farm"
            className="w-full h-full object-cover opacity-40 mix-blend-overlay "
          />
        </motion.div>

        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: 0.2,
              }}
              className=""
            >
              <br />
              <br />
              <div
                className="relative  mx-auto flex items-center justify-center
                 transform hover:scale-105 transition-transform duration-300 rounded-lg"
              >
                <img
                  src="/carbon4.jpeg"
                  alt="Green Axis Logo"
                  className="object-contain rounded-full "
                  style={{
                    height: "300px",
                    width: "300px",
                    borderRadius: "20px",
                  }}
                />
                <div
                  className="absolute inset-0 rounded-full mix-blend-overlay"
                />
              </div>
            </motion.div>
            <h1
              className="font-bold tracking-tight leading-tight mb-6
                       text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                       px-2 sm:px-4 md:px-6
                       text-balance"
            >
              <span className="inline-block mb-2 sm:mb-3">Green Axis</span>
              <span className="inline-block mb-2 sm:mb-3">Agro Solutions</span>
              <span className="inline-block">Limited</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Leading the transformation to regenerative agriculture for a
              sustainable future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-2">
              <a
                href="#learn-more"
                className="inline-flex items-center px-8 py-4 bg-white text-green-800 rounded-lg hover:bg-green-50 transition-colors"
                onClick={() => navigate("/services")}
              >
                Learn More
                <ArrowRight className="ml-2" />
              </a>

              <a
                href="/gallery?autoplay=true"
                className="inline-flex items-center px-8 py-4 bg-green-700 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                Watch Video
                <Play className="ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <FeatureSection />
      <section className="py-24 bg-white">
        {" "}
        <div className="max-w-7xl mx-auto px-4">
          {" "}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {" "}
            <FeatureCard
              icon={<Leaf className="h-12 w-12" />}
              title="Sustainable Practices"
              description="Implement proven regenerative techniques that restore soil health and boost productivity"
            />{" "}
            <FeatureCard
              icon={<Globe className="h-12 w-12" />}
              title="Global Impact"
              description="Join a network of farmers making a positive impact on climate change"
            />{" "}
            <FeatureCard
              icon={<BarChart3 className="h-12 w-12" />}
              title="Measurable Results"
              description="Track your progress with advanced soil monitoring and carbon measurement"
            />{" "}
          </div>{" "}
        </div>{" "}
      </section>

      {/* Impact Numbers */}
      <section id="learn-more" className="py-24 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Impact Numbers</h2>
              <div className="space-y-6">
                <ImpactMetric
                  icon={<Users className="h-6 w-6 text-green-600" />}
                  label="Farmers Trained"
                  value="1,500+"
                  progress={85}
                />
                <ImpactMetric
                  icon={<TreePine className="h-6 w-6 text-green-600" />}
                  label="Hectare under Regen Program"
                  value="700,000"
                  progress={75}
                />
                {/*<ImpactMetric
                  icon={<Sprout className="h-6 w-6 text-green-600" />}
                  label="Carbon Sequestered"
                  value="50,000 tons"
                  progress={90}
                />*/}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="/reg2.jpg"
                alt="Regenerative farming in action"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section 
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            What Our Partners Say
          </h2>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              key={currentSlide}
              className="bg-green-50 p-8 rounded-2xl max-w-3xl mx-auto"
            >
              <div className=" mb-6">
                <small>"{testimonials[currentSlide].quote}"</small>
              </div>
              <div className="flex items-center">
                <div className="h-12 w-12 bg-green-200 rounded-full flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-green-700" />
                </div>
                <div>
                  <div className="font-bold">
                    {testimonials[currentSlide].author}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentSlide].role}
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === currentSlide ? "bg-green-600" : "bg-green-200"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>*/}
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
    <CardContent className="p-6">
      <div className="mb-4 text-green-600">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

const ImpactMetric = ({ icon, label, value, progress }) => (
  <div>
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-2">
        {icon}
        <span className="font-medium">{label}</span>
      </div>
      <span className="text-green-600 font-bold">{value}</span>
    </div>
    <Progress value={progress} className="h-2" />
  </div>
);

const Services = () => (
  <div className="min-h-screen py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Comprehensive solutions for regenerative agriculture implementation
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard1
          icon={<Sprout className="h-12 w-12 text-green-600" />}
          title="Training Programs"
          description="Comprehensive training on regenerative agriculture principles and practices"
          features={[
            "Hands-on workshops",
            "Field demonstrations",
            "Online learning resources",
          ]}
          backgroundImage="/reg5.jpg"
          link="/programs"
        />
        <ServiceCard1
          icon={<BarChart3 className="h-12 w-12 text-green-600" />}
          title="Soil Analysis"
          description="Regular monitoring and analysis of soil health indicators"
          features={[
            "Carbon content measurement",
            "Nutrient analysis",
            "Biodiversity assessment",
          ]}
          backgroundImage="/reg6.webp"
          link="/case-studies"
        />
        <ServiceCard1
          icon={<Globe className="h-12 w-12 text-green-600" />}
          title="Carbon Credits"
          description="Support in accessing carbon markets and certification"
          features={["Market access facilitation", "Documentation support"]}
          backgroundImage="/reg7.webp"
          link="/resources"
        />
      </div>
    </div>
  </div>
);

const ServiceCard1 = ({
  icon,
  title,
  description,
  features,
  backgroundImage,
  link,
}) => (
  <Card className="overflow-hidden group relative h-full transition-transform duration-300 hover:scale-105">
    <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/75 to-white/90 z-10" />
    <div
      className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-60 transition-opacity duration-300"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    />
    <CardContent className="p-6 relative z-20">
      <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="relative">
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white/90 to-transparent -mt-12" />
        <a
          href={link}
          className="relative flex items-center justify-center w-full px-6 py-3 bg-green-600 text-white rounded-lg 
                   transition-all duration-300 transform hover:bg-green-700 hover:shadow-lg
                   group-hover:translate-y-0 group-hover:opacity-100"
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </CardContent>
  </Card>
);

const About = () => (
  <div className="min-h-screen">
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Green Axis Agro Solutions Limited
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A forward-thinking company dedicated to promoting regenerative
            agriculture and environmental stewardship
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg text-gray-600 mb-8">
              To inspire global transformation towards a thriving, regenerative
              planet, where ecological integrity is prioritized, by championing
              sustainable practices, advocating for environmental stewardship
              and empowering communities.
            </p>
            <div className="space-y-4">
              <ValuePoint
                title="Regeneration"
                description="Committed to improving soil health, enhancing biodiversity, and sequestering carbon"
              />
              <ValuePoint
                title="Restoration"
                description="Focused on restoring balance to ecosystems through responsible land management"
              />
              <ValuePoint
                title="Renewal"
                description="Dedicated to renewing community health through partnerships and education"
              />
            </div>
          </div>
          <TeamSection />
        </div>
      </div>
    </section>
  </div>
);

const Impact = () => (
  <div className="min-h-screen py-24 bg-gradient-to-b from-green-50 to-white">
    <div className="max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Impact</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transforming agriculture while addressing climate change and promoting
          sustainable development
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <ImpactCard
          title="Environmental"
          metrics={[
            {
              /*{ label: "Carbon Sequestered", value: "50,000+ tons" },*/
            },
            { label: "Soil Organic Matter Increase", value: "2.5%" },
            { label: "Water Retention Improved", value: "40%" },
          ]}
        />
        <ImpactCard
          title="Social"
          metrics={[
            { label: "Farmers Trained", value: "1200+" },
            { label: "Communities Impacted", value: "100+" },
            { label: "Jobs Created", value: "100+" },
          ]}
        />
        <ImpactCard
          title="Economic"
          metrics={[
            { label: "Yield Increase", value: "35%" },
            { label: "Income Growth", value: "45%" },
            { label: "Carbon Credits Generated", value: "Not Yet" },
          ]}
        />
      </div>

      <SDGSection />
    </div>
  </div>
);

// Helper Components

const Benefit = ({ title, description }) => (
  <div className="flex items-start space-x-3">
    <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
    <div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const ServiceCard = ({ icon, title, description, features }) => (
  <Card className="overflow-hidden">
    <CardContent className="p-6">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const ValuePoint = ({ title, description }) => (
  <div className="flex items-start space-x-3">
    <Leaf className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
    <div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const TeamSection = () => (
  <div className="bg-green-50 p-8 rounded-2xl">
    <h3 className="text-2xl font-bold mb-6">Our Leadership</h3>
    <div className="space-y-6">
      <TeamMember
        name="Adv. Nsikelelo Mafa Moyo 

"
        role="Chief Executive Officer"
      />
      <TeamMember name="Mrs Christabel Mubita Moyo" role="Finance Director" />
      <TeamMember name="Mr Tawanda Shamuyarira " role="Board Chairperson" />
    </div>
  </div>
);

const TeamMember = ({ name, role }) => (
  <div className="flex items-center space-x-4">
    <div className="h-12 w-12 bg-green-200 rounded-full flex items-center justify-center">
      <Users className="h-6 w-6 text-green-700" />
    </div>
    <div>
      <h4 className="font-semibold">{name}</h4>
      <p className="text-gray-600">{role}</p>
    </div>
  </div>
);

const ImpactCard = ({ title, metrics }) => (
  <Card>
    <CardContent className="p-6">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="space-y-4">
        {metrics.map((metric, index) => (
          <div key={index}>
            <p className="text-gray-600">{metric.label}</p>
            <p className="text-2xl font-bold text-green-600">{metric.value}</p>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SDGSection = () => (
  <div className="bg-white p-8 rounded-2xl shadow-lg">
    <h3 className="text-2xl font-bold mb-6">
      Supporting UN Sustainable Development Goals
    </h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <SDGItem number="2" title="Zero Hunger" />
      <SDGItem number="13" title="Climate Action" />
      <SDGItem number="15" title="Life on Land" />
      <SDGItem number="12" title="Responsible Consumption" />
    </div>
  </div>
);

const SDGItem = ({ number, title }) => (
  <div className="text-center p-4 bg-green-50 rounded-lg">
    <div className="text-2xl font-bold text-green-600 mb-2">SDG {number}</div>
    <p className="text-sm">{title}</p>
  </div>
);

export { Home, Services, About, Impact };
