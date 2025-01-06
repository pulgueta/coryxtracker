import type { FC, PropsWithChildren } from "hono/jsx";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Track how many days Cory has not uploaded a video" />
        <meta name="author" content="pulgueta" />
        <meta property="og:title" content="CoryxTracker" />
        <meta property="og:url" content="https://coryxtracker.retardix456.workers.dev/" />
        <link
          rel="icon"
          type="image/jpeg"
          href="https://yt3.googleusercontent.com/ytc/AIdro_mLkQYpmL7WNNEHOzLZGIrFuEZZluLQkKPfV5-_b1Ngl2s=s160-c-k-c0x00ffffff-no-rj"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Geist:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdn.tailwindcss.com" />
      </head>
      <title>CoryxTracker</title>
      <body class="flex min-h-dvh w-screen items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] bg-neutral-900 bg-neutral-950">
        <main class="container mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
};
