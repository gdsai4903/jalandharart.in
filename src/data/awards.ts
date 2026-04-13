/**
 * Awards & achievements data for Sukhwinder Singh.
 * To add a new award, append an object to the array below.
 * Categories: "national" | "state" | "institutional"
 */

export type AwardCategory = "national" | "state" | "institutional";

export interface Award {
  id: number;
  title: string;
  body: string;
  year: string;
  category: AwardCategory;
  Type: string;
}

export const awards: Award[] = [
  {
    id: 1,
    title: "State Award",
    body: "Indian Academy of Fine Arts, Amritsar",
    year: "2024",
    category: "state",
    Type: "Cash Award",
  },
  {
    id: 2,
    title: "Teacher Fest State Award",
    body: "State Government of Punjab",
    year: "2022",
    category: "state",
    Type: "Cash Award",
  },
  {
    id: 3,
    title: "State Award",
    body: "IAFA Gallery, Amritsar",
    year: "2020",
    category: "state",
    Type: "Cash Award",
  },
  {
    id: 4,
    title: "Honoured on 550th Parkash Purab of Shri Guru Nanak Dev Ji",
    body: "State Government of Punjab",
    year: "2019",
    category: "state",
    Type: "Cash Award",
  },
  {
    id: 5,
    title: "All India Award",
    body: "NDMC, New Delhi",
    year: "2014",
    category: "national",
    Type: "Cash Award",
  },
  {
    id: 6,
    title: "All India Award — Highly Recommended",
    body: "IAFA Gallery, Amritsar",
    year: "2014",
    category: "national",
    Type: "Cash Award",
  },
  {
    id: 7,
    title: "State Award",
    body: "Punjab Lalit Kala Akademi, Chandigarh",
    year: "2009",
    category: "state",
    Type: "Cash Award",
  },
  {
    id: 8,
    title: "Merit Award",
    body: "Punjab Lalit Kala Academy, Virsa Vihar, Jalandhar",
    year: "2007",
    category: "state",
    Type: "Cash Award",
  },
  {
    id: 9,
    title: "Award in Annual Exhibition",
    body: "Bank of Punjab",
    year: "2007",
    category: "institutional",
    Type: "Cash Award",
  },
  {
    id: 10,
    title: "Surtaal Award",
    body: "State Government of Punjab",
    year: "2003",
    category: "state",
    Type: "Cash Award",
  },
  {
    id: 11,
    title: "Award in Annual Exhibition",
    body: "Bank of Punjab",
    year: "1998",
    category: "institutional",
    Type: "Cash Award",
  },
];
