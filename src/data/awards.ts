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
}

export const awards: Award[] = [
  {
    id: 1,
    title: "All India Cash Award",
    body: "NDMC, New Delhi",
    year: "2014",
    category: "national",
  },
  {
    id: 2,
    title: "All India Award — Highly Recommended",
    body: "IAFA, Amritsar",
    year: "2014",
    category: "national",
  },
  {
    id: 3,
    title: "State Award",
    body: "Punjab Lalit Kala Academy, Chandigarh",
    year: "2009",
    category: "state",
  },
  {
    id: 4,
    title: "North India Cash Award",
    body: "Bank of Punjab",
    year: "2007",
    category: "state",
  },
  {
    id: 5,
    title: "Merit Award",
    body: "Punjab Lalit Kala Academy, Virsa Vihar, Jalandhar",
    year: "2007",
    category: "state",
  },
  {
    id: 6,
    title: "CM of Punjab Honour",
    body: "Acknowledged by the Chief Minister of Punjab alongside 550 distinguished national artists across music, film, and visual arts",
    year: "",
    category: "state",
  },
  {
    id: 7,
    title: "Annual Exhibition Award",
    body: "Bank of Punjab",
    year: "1998",
    category: "institutional",
  },
  {
    id: 8,
    title: "Annual Art Exhibition Award",
    body: "Govt. College of Art, Chandigarh",
    year: "1996",
    category: "institutional",
  },
  {
    id: 9,
    title: "Surtaal Award",
    body: "State Government of Punjab",
    year: "",
    category: "state",
  },
];
