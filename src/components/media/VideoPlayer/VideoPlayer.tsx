import * as React from "react"
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react"
import { Slider } from "../../elements/Slider"

export interface iVideoPlayerProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string
  poster?: string
}

export const VideoPlayer = React.forwardRef<HTMLVideoElement, iVideoPlayerProps>(
  ({ className, src, poster, ...props }, ref) => {
    const videoRef = React.useRef<HTMLVideoElement>(null)
    const containerRef = React.useRef<HTMLDivElement>(null)
    const [isPlaying, setIsPlaying] = React.useState(false)
    const [progress, setProgress] = React.useState(0)
    const [duration, setDuration] = React.useState(0)
    const [isMuted, setIsMuted] = React.useState(false)
    const [isHovering, setIsHovering] = React.useState(false)

    const [playbackRate, setPlaybackRate] = React.useState(1)
    const [isLooping, setIsLooping] = React.useState(false)

    // Sync refs if external ref is provided
    React.useImperativeHandle(ref, () => videoRef.current as HTMLVideoElement)

    const togglePlay = () => {
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause()
        } else {
          videoRef.current.play()
        }
        setIsPlaying(!isPlaying)
      }
    }

    const toggleMute = () => {
      if (videoRef.current) {
        videoRef.current.muted = !isMuted
        setIsMuted(!isMuted)
      }
    }
    
    const toggleSpeed = () => {
      const speeds = [1, 1.25, 1.5, 2, 0.5];
      const nextIndex = (speeds.indexOf(playbackRate) + 1) % speeds.length;
      const newSpeed = speeds[nextIndex];
      setPlaybackRate(newSpeed);
      if (videoRef.current) {
        videoRef.current.playbackRate = newSpeed;
      }
    }

    const toggleLoop = () => {
      if (videoRef.current) {
        videoRef.current.loop = !isLooping;
        setIsLooping(!isLooping);
      }
    }

    const toggleFullscreen = () => {
      if (containerRef.current) {
        if (document.fullscreenElement) {
          document.exitFullscreen()
        } else {
          containerRef.current.requestFullscreen()
        }
      }
    }

    const handleTimeUpdate = () => {
      if (videoRef.current) {
        const current = videoRef.current.currentTime
        const total = videoRef.current.duration
        if (total > 0) {
          setProgress((current / total) * 100)
        }
      }
    }

    const handleLoadedMetadata = () => {
      if (videoRef.current) {
        setDuration(videoRef.current.duration)
        videoRef.current.playbackRate = playbackRate
      }
    }

    const handleSeek = (value: number[]) => {
      if (videoRef.current && duration > 0) {
        const seekTime = (value[0] / 100) * duration
        videoRef.current.currentTime = seekTime
        setProgress(value[0])
      }
    }

    const formatTime = (timeInSeconds: number) => {
      if (isNaN(timeInSeconds)) return "0:00"
      const minutes = Math.floor(timeInSeconds / 60)
      const seconds = Math.floor(timeInSeconds % 60)
      return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
    }

    return (
      <div
        ref={containerRef}
        className={[
          "group relative flex overflow-hidden rounded-[var(--radius-lg)] bg-black shadow-md",
          className
        ].filter(Boolean).join(" ")}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          className="w-full h-full object-cover"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onClick={togglePlay}
          {...props}
        />

        {/* Overlay Play Button (when paused) */}
        {!isPlaying && (
          <button
            type="button"
            className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity hover:bg-black/40"
            onClick={togglePlay}
            aria-label="Play video"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-primary)] text-white shadow-lg transition-transform hover:scale-105">
              <Play className="h-8 w-8 ml-1" />
            </div>
          </button>
        )}

        {/* Floating Modern Controls Bar */}
        <div
          className={[
            "absolute bottom-4 left-1/2 -translate-x-1/2 w-[95%] max-w-2xl bg-zinc-900/95 backdrop-blur-sm border border-zinc-800 rounded-2xl p-3 flex flex-col gap-2 transition-all duration-300 shadow-xl",
            (isPlaying && !isHovering) ? "opacity-0 translate-y-4 pointer-events-none" : "opacity-100 translate-y-0"
          ].filter(Boolean).join(" ")}
        >
          {/* Progress Bar */}
          <div className="px-2 pt-1 cursor-pointer">
            <Slider
              value={[progress]}
              max={100}
              step={0.1}
              onValueChange={handleSeek}
              className="w-full"
            />
          </div>

          <div className="flex items-center justify-between text-zinc-100 px-2">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={togglePlay}
                className="hover:text-[var(--color-primary)] transition-colors"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 fill-current" />}
              </button>
              <button
                type="button"
                onClick={toggleMute}
                className="hover:text-[var(--color-primary)] transition-colors"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </button>
              <span className="text-xs font-medium tabular-nums text-zinc-300 hidden sm:inline-block">
                {formatTime((progress / 100) * duration)} / {formatTime(duration)}
              </span>
            </div>
            
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={toggleSpeed}
                className="text-xs font-bold hover:text-[var(--color-primary)] transition-colors w-8"
                aria-label="Playback Speed"
              >
                {playbackRate}x
              </button>
              <button
                type="button"
                onClick={toggleLoop}
                className={["hover:text-[var(--color-primary)] transition-colors", isLooping ? "text-[var(--color-primary)]" : "text-zinc-400"].join(" ")}
                aria-label="Toggle Loop"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/></svg>
              </button>
              <button
                type="button"
                onClick={toggleFullscreen}
                className="hover:text-[var(--color-primary)] transition-colors"
                aria-label="Fullscreen"
              >
                <Maximize className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
)

VideoPlayer.displayName = "VideoPlayer"
