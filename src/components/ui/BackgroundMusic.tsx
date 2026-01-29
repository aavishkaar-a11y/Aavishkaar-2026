import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import bgMusic from "@/assets/23 Theme.mp3";


const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Create audio element with Stranger Things theme music
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.loop = true;
    }
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
     <audio
         ref={audioRef}
        src={bgMusic}
        preload="auto"
     />

      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full glass-card neon-border-blue hover:scale-110 transition-transform duration-300"
        aria-label={isPlaying ? "Mute music" : "Play music"}
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6 text-primary animate-pulse" />
        ) : (
          <VolumeX className="w-6 h-6 text-muted-foreground" />
        )}
      </button>
    </>
  );
};

export default BackgroundMusic;
