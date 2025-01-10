import type { FC } from "hono/jsx";

import type { YoutubeResponse } from "@/types";
import { daysFrom } from "@/utils/days-ago";

interface TrackerProps {
  videoId: string;
  data: YoutubeResponse["items"][0]["snippet"];
}

export const Tracker: FC<TrackerProps> = ({ data, videoId }) => {
  const days = daysFrom(new Date(data.publishedAt));

  return (
    <article class="mx-auto w-full max-w-xs">
      <header class="mb-4">
        <p class="text-pretty text-center font-bold text-5xl text-white tracking-tight">
          {days <= 0 ? "He just uploaded, check it out!" : days}
        </p>
      </header>
      <section>
        <a
          href={`https://www.youtube.com/watch?v=${videoId}`}
          title="Go to latest video"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={data.thumbnails.medium.url}
            alt={`${data.title} video thumbnail`}
            width={data.thumbnails.medium.width}
            height={data.thumbnails.medium.height}
            class="mx-auto rounded-lg transition-transform hover:scale-120"
          />
        </a>
      </section>
    </article>
  );
};
