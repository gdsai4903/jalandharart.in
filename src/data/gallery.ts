/**
 * Gallery paintings data for Sukhwinder Singh.
 * To add a new painting, append an object to the array below.
 * Images are hosted on jalandharart.in (added to next.config remotePatterns).
 */

export interface Painting {
  id: number;
  title: string;
  medium: string;
  src: string;
  width: number;
  height: number;
}

export const paintings: Painting[] = [
  {
    id: 1,
    title: "Self Portrait",
    medium: "Oil on Canvas",
    src: "/images/paintings/self-portrait.jpg",
    width: 400,
    height: 300,
  },
  {
    id: 2,
    title: "10 Gurus",
    medium: "Oil on Canvas",
    src: "/images/paintings/10-gurus.jpg",
    width: 400,
    height: 300,
  },
  {
    id: 3,
    title: "Baba Deep Singh Ji Shaheed",
    medium: "Oil on Canvas",
    src: "/images/paintings/Baba deep Singh ji.jpg",
    width: 400,
    height: 300,
  },
  {
    id: 4,
    title: "Budha-1",
    medium: "Oil on Canvas",
    src: "/images/paintings/Budha-1.jpg",
    width: 400,
    height: 300,
  },
  {
    id: 5,
    title: "Nature-1",
    medium: "Oil on Canvas",
    src: "/images/paintings/Nature-1.jpg",
    width: 400,
    height: 300,
  },
  {
    id: 6,
    title: "Oil-painting-1",
    medium: "Oil on Canvas",
    src: "/images/paintings/Oil-painting-1.jpg",
    width: 400,
    height: 300,
  },
  {
    id: 7,
    title: "Sikhism-1",
    medium: "Oil on Canvas",
    src: "/images/paintings/Sikhism-1.jpg",
    width: 400,
    height: 300,
  }
];
