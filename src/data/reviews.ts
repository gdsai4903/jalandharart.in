/**
 * Collector reviews data for Sukhwinder Singh.
 * To add a real review, replace or append an object to the array below.
 * Set showName to false to display "Anonymous collector" instead of the buyer's name.
 */

export interface Review {
  id: number;
  buyerName: string;
  buyerCity: string;
  reviewText: string;
  paintingTitle: string;
  paintingMedium: string;
  paintingImage: string;
  year: string;
  showName: boolean;
}

// --- Placeholder reviews — swap these out for real ones ---
export const reviews: Review[] = [
  {
    id: 1,
    buyerName: "Rajesh Mehra",
    buyerCity: "Chandigarh",
    reviewText:
      "The depth of colour in my oil painting is extraordinary. Every visitor stops to admire it — Sukhwinder ji truly captures the soul of Punjab in his brushwork.",
    paintingTitle: "Nature-1",
    paintingMedium: "Oil on Canvas",
    paintingImage: "/images/paintings/Nature-1.jpg",
    year: "2023",
    showName: true,
  },
  {
    id: 2,
    buyerName: "Harpreet Kaur",
    buyerCity: "Jalandhar",
    reviewText:
      "I commissioned a portrait of my late father and the likeness was uncanny. The painting now hangs in our living room and feels like he is still with us.",
    paintingTitle: "Self Portrait",
    paintingMedium: "Oil on Canvas",
    paintingImage: "/images/paintings/self-portrait.jpg",
    year: "2022",
    showName: false,
  },
  {
    id: 3,
    buyerName: "Vikram Sharma",
    buyerCity: "New Delhi",
    reviewText:
      "I have collected art for over twenty years and Sukhwinder's Sikh heritage series is among the finest work I own. The detail and reverence in every piece is remarkable.",
    paintingTitle: "10 Gurus",
    paintingMedium: "Oil on Canvas",
    paintingImage: "/images/paintings/10-gurus.jpg",
    year: "2024",
    showName: true,
  },
];
