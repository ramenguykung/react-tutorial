import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      ref.current.play();  // Calling these while rendering isn't allowed.
    } else {
      ref.current.pause(); // Also, this crashes.
    }
  })

  return <video ref={ref} src={src} loop playsInline />;
}
VideoPlayer.propTypes = {
  src: PropTypes.any,
  isPlaying: PropTypes.any
}