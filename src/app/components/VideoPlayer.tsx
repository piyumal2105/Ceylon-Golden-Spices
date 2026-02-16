import { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

interface VideoPlayerProps {
  thumbnail: string;
  title?: string;
  duration?: string;
  autoplay?: boolean;
  className?: string;
}

export function VideoPlayer({ thumbnail, title, duration, autoplay = false, className = '' }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className={`relative group overflow-hidden rounded-lg ${className}`}>
      {/* Video Thumbnail */}
      <img 
        src={thumbnail} 
        alt={title || 'Video thumbnail'} 
        className="w-full h-full object-cover"
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300" />
      
      {/* Play/Pause Overlay */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={() => setIsPlaying(true)}
            className="w-20 h-20 rounded-full bg-[#D4AF37] hover:bg-[#C09F2F] flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300"
          >
            <Play className="w-10 h-10 text-white ml-1" fill="white" />
          </button>
        </div>
      )}
      
      {/* Video Controls */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-white hover:text-[#D4AF37] transition-colors"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </button>
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="text-white hover:text-[#D4AF37] transition-colors"
            >
              {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
            </button>
            {duration && <span className="text-white text-sm">{duration}</span>}
          </div>
          <button className="text-white hover:text-[#D4AF37] transition-colors">
            <Maximize className="w-5 h-5" />
          </button>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-2 h-1 bg-white/30 rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#D4AF37] transition-all duration-300"
            style={{ width: isPlaying ? '45%' : '0%' }}
          />
        </div>
      </div>
      
      {/* Video Badge */}
      <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
        <Play className="w-3 h-3" fill="white" />
        <span>Video</span>
      </div>
      
      {/* Title */}
      {title && (
        <div className="absolute bottom-16 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="font-semibold">{title}</p>
        </div>
      )}
    </div>
  );
}
