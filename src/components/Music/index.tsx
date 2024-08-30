import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

type IMusicProps ={
  url: string
}

export const Music:React.FC<IMusicProps> = ({url}) => {
  return (
    <AudioPlayer
      autoPlay
      src={url}
      onPlay={(e) => console.log("onPlay")}
    />
  );
};
