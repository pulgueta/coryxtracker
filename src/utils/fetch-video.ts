import type { YoutubeResponse } from "@/types";

export const fetchLatestVideo = async (apiKey: string) => {
  // Template literal won't work, had to use URL constructor
  const url = new URL("https://youtube.googleapis.com/youtube/v3/search");

  url.searchParams.append("part", "snippet");
  url.searchParams.append("channelId", "UCiYcA0gJzg855iSKMrX3oHg");
  url.searchParams.append("maxResults", "1");
  url.searchParams.append("order", "date");
  url.searchParams.append("type", "video");
  url.searchParams.append("key", apiKey);
  url.searchParams.append("q", "CoryxKenshin");

  const response = await fetch(url.toString());

  const video = (await response.json()) as YoutubeResponse;

  return video;
};
