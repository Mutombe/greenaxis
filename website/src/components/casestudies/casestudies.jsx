import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Download,
  FileText,
  Video,
  Calendar,
  Users,
  Building2,
  ChevronRight,
  MapPin,
  CircleDollarSign,
  Leaf,
  LineChart
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { toast } from 'sonner';

const Programs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Programs</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive training and support programs designed to transform agricultural practices
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <ProgramCard
            title="Regenerative Agriculture Certification"
            duration="6 months"
            description="Comprehensive training program covering all aspects of regenerative farming practices"
            modules={[
              "Soil Health Management",
              "Water Conservation",
              "Biodiversity Enhancement",
              "Carbon Sequestration Techniques"
            ]}
            startDate="February 2025"
          />
          <ProgramCard
            title="Carbon Credit Program"
            duration="Ongoing"
            description="Support program for farmers implementing carbon sequestration practices"
            modules={[
              "Carbon Credit Basics",
              "Measurement & Verification",
              "Market Access",
              "Documentation Support"
            ]}
            startDate="Rolling Admission"
          />
        </div>

        {/*<UpcomingWorkshops />*/}
      </div>
    </div>
  );
};

const Resources = () => {
  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Learning Resources</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our comprehensive collection of educational materials and tools
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <ResourceSection
            title="Guides & Documents"
            icon={<FileText className="h-8 w-8" />}
            resources={[
              {
                title: "Regenerative Agriculture Handbook",
                type: "PDF",
                size: "2.5 MB"
              },
              {
                title: "Soil Health Guide",
                type: "PDF",
                size: "1.8 MB"
              }
            ]}
          />
          <ResourceSection
            title="Video Tutorials"
            icon={<Video className="h-8 w-8" />}
            resources={[
              {
                title: "Introduction to Carbon Farming",
                duration: "45 mins"
              },
              {
                title: "Soil Testing Methods",
                duration: "30 mins"
              }
            ]}
          />
          <ResourceSection
            title="Research Papers"
            icon={<BookOpen className="h-8 w-8" />}
            resources={[
              {
                title: "Impact of Regenerative Practices",
                publication: "Agricultural Journal"
              },
              {
                title: "Carbon Sequestration Studies",
                publication: "Climate Research"
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
};

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Success Stories</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from farmers implementing regenerative agriculture practices
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <CaseStudyCard
            title="Central Province, Mumbwa District"
            location="Zambia"
            results={{
              soilHealth: 45,
              yield: 35,
              carbon: 28
            }}
            story="A community of 1200 farmers in 6 Chiefdoms transformed their degraded land through regenerative practices, achieving remarkable improvements in soil health and crop yields."
          />
          {/*<CaseStudyCard
            title="Sustainable Cotton Initiative"
            location="Zimbabwe"
            results={{
              soilHealth: 52,
              yield: 40,
              carbon: 32
            }}
            story="Cotton farmers implemented regenerative practices, reducing water usage while increasing yield and soil organic matter."
          />*/}
        </div>
      </div>
    </div>
  );
};

const Partnerships = () => {
  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Partners</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Collaborating with organizations committed to sustainable agriculture
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <PartnershipCategory
            title="Research Institutions"
            partners={[
              {
                name: "Agricultural Research Institute",
                country: "Zambia",
                focus: "Soil Health Research"
              },
              {
                name: "University of Zambia Dept of Agricultural Sciences, Soil Dept",
                country: "Zambia",
                focus: "Soil Health Research"
              }
            ]}
          />
          <PartnershipCategory
            title="Government Agencies"
            partners={[
              {
                name: "Ministry of Agriculture, District Agricultural Coordinator, Mumbwa District",
                country: "Zambia",
                focus: "Policy Implementation"
              },
            ]}
          />
          {/*<PartnershipCategory
            title="Private Sector"
            partners={[
              {
                name: "Sustainable Agro Solutions",
                country: "Botswana",
                focus: "Technology Implementation"
              },
              {
                name: "Green Finance Initiative",
                country: "Kenya",
                focus: "Carbon Credit Trading"
              }
            ]}
          />*/}
        </div>
      </div>
    </div>
  );
};

// Helper Components
const ProgramCard = ({ title, duration, description, modules, startDate }) => (
  <Card className="hover:shadow-lg transition-shadow">
    <CardContent className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <span className="text-green-600 font-medium">{duration}</span>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="space-y-4">
        {modules.map((module, index) => (
          <div key={index} className="flex items-center space-x-2">
            <ChevronRight className="h-4 w-4 text-green-600" />
            <span>{module}</span>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-6 border-t">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Starts: {startDate}</span>
          <Button onClick={() => toast.success("Application submitted!")}>
            Apply Now
          </Button>
        </div>
      </div>
    </CardContent>
  </Card>
);

const UpcomingWorkshops = () => (
  <div className="bg-green-50 rounded-2xl p-8">
    <h2 className="text-2xl font-bold mb-6">Upcoming Workshops</h2>
    <div className="space-y-4">
      <Workshop
        title="Soil Health Masterclass"
        date="January 15, 2025"
        location="Lusaka, Zambia"
      />
      <Workshop
        title="Carbon Farming Workshop"
        date="February 1, 2025"
        location="Harare, Zimbabwe"
      />
      <Workshop
        title="Water Management Seminar"
        date="February 20, 2025"
        location="Gaborone, Botswana"
      />
    </div>
  </div>
);

const Workshop = ({ title, date, location }) => (
  <div className="flex items-center justify-between bg-white p-4 rounded-lg">
    <div className="flex items-center space-x-4">
      <Calendar className="h-6 w-6 text-green-600" />
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-gray-600">{location}</p>
      </div>
    </div>
    <div className="text-right">
      <p className="text-sm font-medium">{date}</p>
      <Button variant="outline" size="sm" className="mt-2">
        Register
      </Button>
    </div>
  </div>
);

const ResourceSection = ({ title, icon, resources }) => (
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center space-x-2">
        {icon}
        <span>{title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {resources.map((resource, index) => (
          <div key={index} className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">{resource.title}</h4>
              <p className="text-sm text-gray-600">
                {resource.type && `${resource.type} • `}
                {resource.size || resource.duration || resource.publication}
              </p>
            </div>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

const CaseStudyCard = ({ title, location, results, story }) => (
  <Card>
    <CardContent className="p-6">
      <div className="flex items-center space-x-2 mb-4">
        <MapPin className="h-5 w-5 text-green-600" />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-600 mb-6">{story}</p>
      <div className="space-y-4">
        <ResultMetric
          icon={<Leaf />}
          label="Soil Health Improvement"
          value={results.soilHealth}
        />
        <ResultMetric
          icon={<LineChart />}
          label="Yield Increase"
          value={results.yield}
        />
        {/*<ResultMetric
          icon={<CircleDollarSign />}
          label="Carbon Credits Generated"
          value={results.carbon}
        />*/}
      </div>
    </CardContent>
  </Card>
);

const ResultMetric = ({ icon, label, value }) => (
  <div>
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center space-x-2">
        {icon}
        <span>{label}</span>
      </div>
      <span className="font-bold">{value}%</span>
    </div>
    <Progress value={value} className="h-2" />
  </div>
);

const PartnershipCategory = ({ title, partners }) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {partners.map((partner, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium">{partner.name}</h4>
            <p className="text-sm text-gray-600">{partner.country}</p>
            <p className="text-sm text-green-600 mt-1">{partner.focus}</p>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export { Programs, Resources, CaseStudies, Partnerships };