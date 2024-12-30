import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Leaf, 
  Sprout,
  TreePine,
  Users,
  BarChart3,
  Globe,
  ArrowRight,
  CheckCircle2,
  Play,
  Pause,
  X,
  Maximize2,
  Image as ImageIcon
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// New Gallery component
const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  
  // Media items - in a real application, this would come from your CMS or API
  const mediaItems = [
    {
      type: 'video',
      thumbnail: 'reg.jpg',
      title: 'Our Regenerative Journey',
      description: 'Learn about our approach to sustainable farming',
      url: 'vid.mp4' // Replace with actual video URL
    },
    {
      type: 'image',
      url: '/farm9.jpeg',
      title: 'Aerial View of Farm',
      description: 'Bird\'s eye view of our regenerative farming practices'
    },
    {
      type: 'image',
      url: '/farm8.jpeg',
      title: 'Soil Health Assessment',
      description: 'Our team conducting soil analysis'
    },
    {
      type: 'image',
      url: '/farm7.jpeg',
      title: 'Community Training',
      description: 'Local farmers learning regenerative techniques'
    },
    // Add more media items as needed
  ];

  // Check for autoplay parameter in URL
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('autoplay') === 'true') {
      const videoItem = mediaItems.find(item => item.type === 'video');
      if (videoItem) {
        setSelectedMedia(videoItem);
        setIsPlaying(true);
      }
    }
  }, []);

  const handleMediaClick = (media) => {
    setSelectedMedia(media);
    if (media.type === 'video') {
      setIsPlaying(true);
    }
  };

  const handleClose = () => {
    setSelectedMedia(null);
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Media Gallery</h1>
        
        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card 
                className="cursor-pointer hover:shadow-lg transition-shadow overflow-hidden"
                onClick={() => handleMediaClick(item)}
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={item.type === 'video' ? item.thumbnail : item.url}
                      alt={item.title}
                      className="w-full aspect-video object-cover"
                    />
                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                        <Play className="w-12 h-12 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      {item.type === 'video' ? (
                        <Play className="w-4 h-4 text-green-600" />
                      ) : (
                        <ImageIcon className="w-4 h-4 text-green-600" />
                      )}
                      <h3 className="font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Media Viewer Dialog */}
        <Dialog open={selectedMedia !== null} onOpenChange={() => handleClose()}>
          <DialogContent className="max-w-4xl w-full p-0">
            <div className="relative">
              {selectedMedia?.type === 'video' ? (
                <div className="relative">
                  <video
                    ref={videoRef}
                    className="w-full"
                    controls={false}
                    autoPlay={isPlaying}
                  >
                    <source src={selectedMedia.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-4">
                    <button
                      onClick={togglePlayPause}
                      className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
                    >
                      {isPlaying ? (
                        <Pause className="w-6 h-6 text-green-600" />
                      ) : (
                        <Play className="w-6 h-6 text-green-600" />
                      )}
                    </button>
                  </div>
                </div>
              ) : (
                <img
                  src={selectedMedia?.url}
                  alt={selectedMedia?.title}
                  className="w-full"
                />
              )}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{selectedMedia?.title}</h2>
              <p className="text-gray-600">{selectedMedia?.description}</p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export { Gallery };