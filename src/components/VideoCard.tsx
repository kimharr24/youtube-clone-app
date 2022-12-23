import React from 'react';
import Video from './VideoInterface';
import Snippet from './VideoInterface';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../assets/constants';

interface VideoCardProps {
    video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
    // should never be undefined since Videos.tsx checks if videoId exists before rendering this component
    const videoID: string | undefined = video.id.videoId; 
    const snippet: Snippet = video.snippet;

    return (
        <Card>
            Video Detail
        </Card>
    );
};

export default VideoCard;