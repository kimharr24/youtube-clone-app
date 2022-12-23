interface Thumbnail {
    url: string;
    width: number;
    height: number;
}

interface Video {
    kind: string;
    id: {
        kind: string,
        videoId: string
    };
    snippet: {
        publishedAt: string,
        channelId: string,
        title: string,
        description: string,
        thumbnails: {
            default: Thumbnail,
            medium: Thumbnail,
            high: Thumbnail
        },
        channelTitle: string,
        liveBroadcastContent: string,
        publishTime: string
    };
}

export default Video;