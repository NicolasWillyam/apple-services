import { appleTVList } from "@/data/apple-tv";
import { serviceSection } from "./props";
import { appleMusicList } from "@/data/apple-music";
import { appleArcadeList } from "@/data/apple-arcade";
import { appleFitnessList } from "@/data/apple-fitness";
import { applePodCastList } from "@/data/apple-podcast";
import { appleNewList } from "@/data/apple-new";
import { appleBooksList } from "@/data/apple-books";

export const servicesList: serviceSection[] = [
  {
    service: {
      appIcon: "apple-tv.png",
      appName: "Apple TV+",
      videoUrl:
        "https://www.apple.com/105/media/us/services/2023/4757c394-0f2b-4ec2-888b-7a24de67705c/anim/hero-sizzle/large.mp4",
      title: "Stream award-winning Apple Originals on every screen.",
      type: "landscape",
    },
    type: appleTVList,
  },
  {
    service: {
      appIcon: "apple-music.png",
      appName: "Apple Music",
      videoUrl:
        "https://www.apple.com/105/media/us/services/2021/8b95cfe0-0534-48a6-8777-91d87ebf7298/anim/music/large.mp4",
      title: "Listen to music you love in Spatial Audio with Dolby Atmos.",
      type: "square",
    },

    type: appleMusicList,
  },
  {
    service: {
      appIcon: "apple-arcade.png",
      appName: "Apple Arcade",
      videoUrl:
        "https://www.apple.com/105/media/us/services/2024/416d7ef9-e5f1-4bdb-9443-3b7a1958236f/anim/hero/large.mp4",
      title: "Best collection of mobile games for every player.",
      type: "landscape",
    },
    type: appleArcadeList,
  },
  {
    service: {
      appIcon: "apple-fitness.png",
      appName: "Apple Fitness+",
      videoUrl:
        "https://www.apple.com/105/media/us/services/2022/813eaad1-9102-4bd6-9851-2e57eeae5b12/anim/fitness/large.mp4",
      title: "From HIIT to Meditation, there’s something for everyone.",
      type: "landscape",
    },
    type: appleFitnessList,
  },
  {
    service: {
      appIcon: "apple-news.png",
      appName: "Apple News+",
      // videoUrl: "",
      title: "Hundreds of magazines and leading newspapers. One subscription.",
      type: "portrait",
    },
    type: appleNewList,
  },
  {
    service: {
      appIcon: "apple-podcast.png",
      appName: "Apple Podcasts",
      // videoUrl: "",
      title:
        "Millions of shows, from the biggest names to the best independents.",
      type: "square",
    },
    type: applePodCastList,
  },
  {
    service: {
      appIcon: "apple-books.png",
      appName: "Apple Books",
      // videoUrl: "",
      title: "Read, listen, discover. All in one place.",
      type: "cover",
    },
    type: appleBooksList,
  },
];
