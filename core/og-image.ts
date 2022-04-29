import { OpenGraphMedia } from "next-seo/lib/types";

export const getOpenGraphImage = (title: string): OpenGraphMedia => ({
  url: `https://baggins.me/api/og?title=${encodeURIComponent(title)}`,
  width: 1200,
  height: 630,
});
