interface VideoID {
    kind: string;
    videoId?: string;
    channelId?: string;
    playlistId?: string;
}

interface Thumbnail {
    url: string;
    width: number;
    height: number;
}

export default interface Snippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
        default: Thumbnail,
        medium: Thumbnail,
        high: Thumbnail
    };
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
}

export default interface Video {
    kind: string;
    id: VideoID;
    snippet: Snippet;
}
