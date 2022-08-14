import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    name: "Indian",
    posterUrl: "https://res.cloudinary.com/duddwta8d/video/upload/v1651992022/indian_cuisine_yh7kv7.jpg",
    videoUrl: "https://res.cloudinary.com/duddwta8d/video/upload/e_blur:100/v1651992022/indian_cuisine_yh7kv7.mp4"
  },
  {
    _id: uuid(),
    name: "Italian",
    posterUrl: "https://res.cloudinary.com/duddwta8d/video/upload/v1651993176/italian_cusine_emauxd.jpg",
    videoUrl: "https://res.cloudinary.com/duddwta8d/video/upload/v1651993176/italian_cusine_emauxd.mp4",
  },
  {
    _id: uuid(),
    name: "Chinese",
    posterUrl: "https://res.cloudinary.com/duddwta8d/video/upload/v1651992944/chinese_cuisine_tjtdlb.jpg",
    videoUrl: "https://res.cloudinary.com/duddwta8d/video/upload/v1651992944/chinese_cuisine_tjtdlb.mp4"
  }
];
