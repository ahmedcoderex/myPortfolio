
import v14 from "/public/certificates/v14.png";
import v15 from "/public/courses.png";
import v16 from "/public/bookStore.png";

// UID
import { v4 as uuidv4 } from "uuid";

export const allProjects = [
  {
    category: ["react","tailwind"],
    id: uuidv4(),
    title: "Photographer",
    body: "A sleek photography site with quick language selection, leading straight to premium packages and exclusive offers.",
    link: "www.google.com",
    gitHub: "https://github.com/mohammed-ali-photographer/CairoPackages",
    image: v14,
  },
  {
    category: ["react","tailwind"],
    id: uuidv4(),
    title: "EDU-Learning",
    body: "Interactive Learning Platform - Lectures - Assessment Quizzes - Structured Flow - Instant Results",
    link: "www.google.com",
    gitHub: "https://github.com/ahmedcoderex/EDU-Learning",
    image: v15,
  },
  {
    category: ["react","tailwind"],
    id: uuidv4(),
    title: "بيت الكتاب",
    body: "Bait Al-Kitab Store is a modern online platform for selling books, offering a smooth browsing experience with direct access to the latest releases and exclusive offers for readers.",
    link: "www.google.com",
    gitHub: "https://github.com/ahmedcoderex/EDU-Learning",
    image: v16,
  },
];
