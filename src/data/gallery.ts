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
    title: "Untitled I",
    medium: "Oil on Canvas",
    src: "https://jalandharart.in/images/upload/footer-gallery-thumbnail1.jpg",
    width: 400,
    height: 300,
  },
  {
    id: 2,
    title: "Untitled II",
    medium: "Oil on Canvas",
    src: "https://jalandharart.in/images/upload/footer-gallery-thumbnail2.jpg",
    width: 400,
    height: 300,
  },
  {
    id: 3,
    title: "Untitled III",
    medium: "Nature on Handmade Sheet",
    src: "https://jalandharart.in/images/upload/footer-gallery-thumbnail3.jpg",
    width: 400,
    height: 300,
  },
  {
    id: 4,
    title: "Untitled IV",
    medium: "Oil on Canvas",
    src: "https://jalandharart.in/images/upload/footer-gallery-thumbnail4.jpg",
    width: 400,
    height: 300,
  },
  {
    id: 5,
    title: "Untitled V",
    medium: "Portrait",
    src: "https://jalandharart.in/images/upload/footer-gallery-thumbnail5.jpg",
    width: 400,
    height: 300,
  },
  {
    id: 6,
    title: "Untitled VI",
    medium: "Oil on Canvas",
    src: "https://jalandharart.in/images/upload/footer-gallery-thumbnail6.jpg",
    width: 400,
    height: 300,
  },
  {
    id: 7,
    title: "Untitled VII",
    medium: "Nature on Handmade Sheet",
    src: "https://jalandharart.in/images/upload/footer-gallery-thumbnail7.jpg",
    width: 400,
    height: 300,
  },
  {
    id: 8,
    title: "Untitled VIII",
    medium: "Oil on Canvas",
    src: "https://jalandharart.in/images/upload/footer-gallery-thumbnail8.jpg",
    width: 400,
    height: 300,
  },
];
