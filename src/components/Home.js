import React, {useState} from 'react';
import Sound from 'react-sound';
import song from '../song.mp3';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const PlaySound =(
  handleSongLoading,
  handleSongPlaying,
  handleSongFinishedPlaying
) => {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
<article>

      <Box>
                  <img src="https://www.medievalists.net/wp-content/uploads/2013/06/westeros.jpg" alt="Logo" />
      </Box>


    <Box>

      <Button variant="contained" onClick ={() => setIsPlaying(!isPlaying)}>
        {!isPlaying ? 'Play' : 'Stop'}
      </Button>
      <Sound
        url= {song}
        playStatus={
          isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED
        }
        playFromPosition={300}
        onLoading={handleSongLoading}
        onPlaying={handleSongPlaying}
        onFinishedPlaying={handleSongFinishedPlaying}
        />

    </Box>


    </article>
  );
}

export default PlaySound;