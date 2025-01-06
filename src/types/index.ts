export type YoutubeResponse = {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: PageInfo;
  items: Item[];
};

type Item = {
  kind: string;
  etag: string;
  id: ID;
  snippet: Snippet;
};

type ID = {
  kind: string;
  videoId: string;
};

type Snippet = {
  publishedAt: Date;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: Date;
};

type Thumbnails = {
  default: Default;
  medium: Default;
  high: Default;
};

type Default = {
  url: string;
  width: number;
  height: number;
};

type PageInfo = {
  totalResults: number;
  resultsPerPage: number;
};
