import p1 from "../../assets/UNSALTED-SWEET-CREAM-BUTTER.jpg";
import p2 from "../../assets/Kuber-Dairy-Group-Anhydrous-Milk-Fat.png";

export interface Product {
  id: number;
  slug: string;
  title: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
}

export const products: Product[] = [
  {
    id: 1,
    slug: "sweet-cream-butter",
    title: "Sweet Cream Butter",
    image: p1,
    shortDesc:
      "Crafted with excellence and global quality standards.",
    fullDesc:
      "Overview: Our milk replacers at KUBER Dairy Group are premium substitutes for full powdered milk and skimmed varieties. These items are flexible and perfect for usage in many different sectors, including ice cream, chocolate, bakery, sauces, and dairy manufacture. They provide a reasonably priced fix without sacrificing any nutritional value or use-fulness.",
  },
  {
    id: 2,
    slug: "anhydrous-milk-fat",
    title: "Anhydrous Milk Fat",
    image: p2,
    shortDesc:
      "Premium fat source for food and dairy industries.",
    fullDesc:
      "Kuber Dairy Group AMF provides 99.8% milk fat purity...",
  },
  {
    id: 3,
    slug: "anhydrous-milk-fat",
    title: "Anhydrous Milk Fat",
    image: p2,
    shortDesc:
      "Premium fat source for food and dairy industries.",
    fullDesc:
      "Kuber Dairy Group AMF provides 99.8% milk fat purity...",
  },
  {
    id: 4,
    slug: "anhydrous-milk-fat",
    title: "Anhydrous Milk Fat",
    image: p2,
    shortDesc:
      "Premium fat source for food and dairy industries.",
    fullDesc:
      "Kuber Dairy Group AMF provides 99.8% milk fat purity...",
  },
    {
    id: 5,
    slug: "anhydrous-milk-fat",
    title: "Anhydrous Milk Fat",
    image: p2,
    shortDesc:
      "Premium fat source for food and dairy industries.",
    fullDesc:
      "Kuber Dairy Group AMF provides 99.8% milk fat purity...",
  },
];
