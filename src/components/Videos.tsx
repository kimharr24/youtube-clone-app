import React from 'react';
import Video from './VideoInterface';
import { Stack, Box } from '@mui/material';
import VideoCard from './VideoCard';

interface VideoProps {
    videos: Video[];
}

const Videos: React.FC<VideoProps> = ({ videos }) => {
    return (
        <Stack direction="row" sx={{
            flexWrap: 'wrap',
            justifyContet:"flex-start",
            gap: 2
        }}>
            {videos.map((video, index) => {
                return (
                    <Box key={index}>
                        {video.id.videoId && <VideoCard video={video}/>}
                    </Box>
                );
            })}
        </Stack>
    );
};

export default Videos;