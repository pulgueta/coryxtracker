import { Hono } from "hono";
import { cache } from "hono/cache";

import { Layout } from "@/components/layout";
import { Tracker } from "@/components/tracker";
import { fetchLatestVideo } from "@/utils/fetch-video";

interface Bindings {
  YOUTUBE_API_KEY: string;
}

const app = new Hono<{ Bindings: Bindings }>();

app.get(
  "*",
  cache({
    cacheName: "coryxtracker",
    cacheControl: "max-age=3600",
  }),
);

app.get("/", async (c) => {
  const videoData = await fetchLatestVideo(c.env.YOUTUBE_API_KEY);

  const data = videoData.items[0].snippet;
  const videoId = videoData.items[0].id.videoId;

  return c.html(
    <Layout>
      <h1 class="text-balance text-center font-bold text-3xl text-white tracking-tight md:text-4xl">
        CoryxTracker
      </h1>
      <p class="my-2 text-pretty text-center text-white tracking-tight">
        Days since Cory hasn't uploaded a video:
      </p>

      <Tracker data={data} videoId={videoId} />
    </Layout>,
  );
});

export default app;
