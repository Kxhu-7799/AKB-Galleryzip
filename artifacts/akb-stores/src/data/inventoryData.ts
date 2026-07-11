export type Product = {
  id: string;
  name: string;
  spec: string;
  category: string;
  material: string;
  edition: string;
  year: number;
  price: string;
  status: 'available' | 'reserved' | 'sold';
  gradient: string;
};

export const inventory: Product[] = [
  // Figurative
  {
    id: "inv-01", name: "The Watcher", spec: "Cast Bronze, Ed. 5/12", category: "Figurative",
    material: "Cast Bronze", edition: "Ed. 5/12", year: 2024, price: "£2,400", status: "available",
    gradient: "radial-gradient(ellipse at 50% 30%, #7A5C38 0%, #3A2D1E 55%, #0F0D0B 100%)",
  },
  {
    id: "inv-02", name: "Torso Study No. 4", spec: "Cast Iron, Unique", category: "Figurative",
    material: "Cast Iron", edition: "Unique", year: 2023, price: "£4,200", status: "available",
    gradient: "radial-gradient(ellipse at 45% 35%, #5C4A32 0%, #2A2018 55%, #0F0D0B 100%)",
  },
  {
    id: "inv-03", name: "Ancestral Mask", spec: "Bronze with Verdigris, Ed. 2/6", category: "Figurative",
    material: "Bronze with Verdigris", edition: "Ed. 2/6", year: 2024, price: "£3,600", status: "available",
    gradient: "radial-gradient(ellipse at 55% 40%, #4A6A5C 0%, #2A3D35 55%, #0C100F 100%)",
  },
  {
    id: "inv-04", name: "Seated Form I", spec: "Dark Patina Bronze, Ed. 3/8", category: "Figurative",
    material: "Dark Patina Bronze", edition: "Ed. 3/8", year: 2023, price: "£3,100", status: "available",
    gradient: "radial-gradient(ellipse at 40% 45%, #6A5040 0%, #302520 55%, #0F0D0B 100%)",
  },
  {
    id: "inv-05", name: "The Dreamer", spec: "Polished Bronze, Ed. 4/10", category: "Figurative",
    material: "Polished Bronze", edition: "Ed. 4/10", year: 2022, price: "£2,800", status: "reserved",
    gradient: "radial-gradient(ellipse at 60% 30%, #C9A66B 0%, #5C4A32 55%, #0F0D0B 100%)",
  },
  {
    id: "inv-06", name: "Youth Resting", spec: "Bronze on Marble, Ed. 1/5", category: "Figurative",
    material: "Bronze on Marble", edition: "Ed. 1/5", year: 2024, price: "£5,600", status: "available",
    gradient: "radial-gradient(ellipse at 50% 35%, #9A7A50 0%, #4A3A28 55%, #0F0D0B 100%)",
  },
  {
    id: "inv-07", name: "Fragment II", spec: "Marble Dust Composite", category: "Figurative",
    material: "Marble Composite", edition: "Unique", year: 2023, price: "£1,200", status: "available",
    gradient: "radial-gradient(ellipse at 45% 50%, #C8C4BE 0%, #7A766E 55%, #1A1814 100%)",
  },
  {
    id: "inv-08", name: "Standing Nude Study", spec: "Cast Bronze, Ed. 6/12", category: "Figurative",
    material: "Cast Bronze", edition: "Ed. 6/12", year: 2022, price: "£2,950", status: "sold",
    gradient: "radial-gradient(ellipse at 55% 35%, #8A7060 0%, #3D3028 55%, #0F0D0B 100%)",
  },
  // Relief
  {
    id: "inv-09", name: "Slab Relief — Fauna", spec: "Stone Composite Panel", category: "Relief",
    material: "Stone Composite", edition: "Unique", year: 2024, price: "£1,100", status: "available",
    gradient: "radial-gradient(ellipse at 40% 40%, #3A5A40 0%, #1E2E22 55%, #0C100F 100%)",
  },
  {
    id: "inv-10", name: "Wave Form Panel", spec: "Bronze on Steel Frame, Ed. 3/8", category: "Relief",
    material: "Bronze on Steel", edition: "Ed. 3/8", year: 2023, price: "£7,200", status: "available",
    gradient: "radial-gradient(ellipse at 60% 35%, #2A4A6A 0%, #15253A 55%, #0A0D10 100%)",
  },
  {
    id: "inv-11", name: "Botanical Study No. 2", spec: "Verdigris Bronze, Ed. 4/10", category: "Relief",
    material: "Verdigris Bronze", edition: "Ed. 4/10", year: 2024, price: "£3,200", status: "available",
    gradient: "radial-gradient(ellipse at 50% 40%, #4A6A4A 0%, #25352A 55%, #0C100F 100%)",
  },
  {
    id: "inv-12", name: "Dawn Progression", spec: "Dark Bronze, Ed. 2/4", category: "Relief",
    material: "Dark Bronze", edition: "Ed. 2/4", year: 2022, price: "£10,800", status: "reserved",
    gradient: "radial-gradient(ellipse at 45% 30%, #8A6A50 0%, #3D3028 55%, #0F0D0B 100%)",
  },
  {
    id: "inv-13", name: "Harvest Panel", spec: "Warm Patina Bronze, Ed. 5/6", category: "Relief",
    material: "Warm Patina Bronze", edition: "Ed. 5/6", year: 2023, price: "£5,900", status: "available",
    gradient: "radial-gradient(ellipse at 55% 45%, #9A7A40 0%, #4A3A20 55%, #0F0D0B 100%)",
  },
  // Functional
  {
    id: "inv-14", name: "Meridian Vase", spec: "Patinated Copper, Ed. 3/8", category: "Functional",
    material: "Patinated Copper", edition: "Ed. 3/8", year: 2024, price: "£1,850", status: "available",
    gradient: "radial-gradient(ellipse at 50% 30%, #8A6A40 0%, #4A3A20 55%, #0F0D0B 100%)",
  },
  {
    id: "inv-15", name: "Fragment I", spec: "Marble Dust Composite", category: "Functional",
    material: "Marble Composite", edition: "Unique", year: 2023, price: "£680", status: "available",
    gradient: "radial-gradient(ellipse at 45% 45%, #C8C4BE 0%, #7A766E 55%, #1A1814 100%)",
  },
  {
    id: "inv-16", name: "Helix Candlestand", spec: "Blackened Steel, Ed. 8/20", category: "Functional",
    material: "Blackened Steel", edition: "Ed. 8/20", year: 2024, price: "£920", status: "available",
    gradient: "radial-gradient(ellipse at 55% 35%, #3A3830 0%, #1E1C18 55%, #0A0A08 100%)",
  },
  {
    id: "inv-17", name: "The Plinth Series", spec: "Cast Brass, Ed. 12/24", category: "Functional",
    material: "Cast Brass", edition: "Ed. 12/24", year: 2023, price: "£760", status: "available",
    gradient: "radial-gradient(ellipse at 50% 40%, #C9A040 0%, #5C4A20 55%, #0F0D0B 100%)",
  },
  {
    id: "inv-18", name: "Pillar Candleholder", spec: "Polished Bronze, Ed. 6/20", category: "Functional",
    material: "Polished Bronze", edition: "Ed. 6/20", year: 2024, price: "£580", status: "available",
    gradient: "radial-gradient(ellipse at 55% 30%, #C9A66B 0%, #5C4A32 55%, #0F0D0B 100%)",
  },
  {
    id: "inv-19", name: "Ink Vessel", spec: "Polished Bronze, Ed. 8/20", category: "Functional",
    material: "Polished Bronze", edition: "Ed. 8/20", year: 2023, price: "£420", status: "available",
    gradient: "radial-gradient(ellipse at 50% 35%, #B8956A 0%, #5A4530 55%, #0F0D0B 100%)",
  },
  {
    id: "inv-20", name: "Limestone Bowl", spec: "Limestone, Ed. 3/8", category: "Functional",
    material: "Limestone", edition: "Ed. 3/8", year: 2022, price: "£740", status: "available",
    gradient: "radial-gradient(ellipse at 45% 50%, #9A9080 0%, #4A4438 55%, #0F0D0B 100%)",
  },
  {
    id: "inv-21", name: "Vase Study No. I", spec: "Bronze with Verdigris, Ed. 2/6", category: "Functional",
    material: "Bronze with Verdigris", edition: "Ed. 2/6", year: 2024, price: "£1,100", status: "reserved",
    gradient: "radial-gradient(ellipse at 60% 35%, #4A6A5C 0%, #2A3D35 55%, #0C100F 100%)",
  },
  {
    id: "inv-22", name: "Incense Burner", spec: "Dark Patina Bronze, Ed. 5/12", category: "Functional",
    material: "Dark Patina Bronze", edition: "Ed. 5/12", year: 2023, price: "£640", status: "available",
    gradient: "radial-gradient(ellipse at 50% 40%, #6A5040 0%, #302520 55%, #0F0D0B 100%)",
  },
  {
    id: "inv-23", name: "Sundial", spec: "Bronze on Slate, Ed. 1/5", category: "Functional",
    material: "Bronze on Slate", edition: "Ed. 1/5", year: 2022, price: "£1,800", status: "sold",
    gradient: "radial-gradient(ellipse at 45% 35%, #9A8060 0%, #4A3C2E 55%, #0F0D0B 100%)",
  },
  {
    id: "inv-24", name: "Quill Stand", spec: "Bronze & Amber, Ed. 7/15", category: "Functional",
    material: "Bronze & Amber", edition: "Ed. 7/15", year: 2024, price: "£380", status: "available",
    gradient: "radial-gradient(ellipse at 55% 30%, #C89040 0%, #5C4A20 55%, #0F0D0B 100%)",
  },
];

export const CATEGORIES = ['All', 'Figurative', 'Relief', 'Functional'] as const;
export type Category = typeof CATEGORIES[number];
