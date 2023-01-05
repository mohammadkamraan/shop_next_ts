export interface PossibilityItem {
  imageUrl: string;
  imageAlt: string;
  possibility: string;
}

export const possibilities: ReadonlyArray<PossibilityItem> = [
  { imageUrl: "/images/005-delivery-truck-2.webp", possibility: "express delivery", imageAlt: "delivery" },
  { imageUrl: "/images/003-cash-on-delivery.webp", possibility: "payment on the spot", imageAlt: "money" },
  { imageUrl: "/images/004-headphones.webp", possibility: "24/7 support", imageAlt: "support" },
  { imageUrl: "/images/006-best-seller.webp", possibility: "Guarantee the originality", imageAlt: "guarantee" },
];
