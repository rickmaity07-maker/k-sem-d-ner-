// ─────────────────────────────────────────────────────────────
// All real-world business info lives here. Edit this file to
// update the address, phone number, hours or socials anywhere
// on the site.
// ─────────────────────────────────────────────────────────────

export const business = {
  name: "Kösem Food House",
  tagline: "Frisch vom Spieß, seit Herzen Schweinfurt",
  address: {
    street: "Ignaz-Schön-Straße 42",
    zipCity: "97421 Schweinfurt",
  },
  phone: "09721 801354",
  phoneHref: "tel:09721801354",
  email: "info@koesem-foodhouse.de", // placeholder — replace with real inbox
  hours: [
    { day: "Montag", time: "11:00 – 20:00" },
    { day: "Dienstag", time: "11:00 – 20:00" },
    { day: "Mittwoch", time: "11:00 – 20:00" },
    { day: "Donnerstag", time: "11:00 – 20:00" },
    { day: "Freitag", time: "11:00 – 20:00" },
    { day: "Samstag", time: "11:00 – 18:00" },
    { day: "Sonntag", time: "Geschlossen" },
  ],
  social: {
    instagram: "#", // placeholder — add real link
    facebook: "#", // placeholder — add real link
  },
  mapEmbedQuery: "Kösem Food House, Ignaz-Schön-Straße 42, 97421 Schweinfurt",
};

export type MenuItem = {
  name: string;
  description: string;
  price: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
};

// PLACEHOLDER MENU — realistic döner-shop items and Schweinfurt-area
// price points so the site looks complete today. Swap in Kösem's
// real dishes, descriptions and prices whenever ready.
export const menu: MenuCategory[] = [
  {
    id: "doener",
    title: "Döner Klassiker",
    subtitle: "Frisch vom Spieß geschnitten",
    items: [
      {
        name: "Döner Kebab",
        description: "Kalbfleisch, Salat, Zwiebeln, Tomaten, Haussoße",
        price: "6,50 €",
      },
      {
        name: "Döner Box",
        description: "Fleisch, Pommes, Salat und Soße nach Wahl",
        price: "7,00 €",
      },
      {
        name: "Döner Teller",
        description: "Mit Reis oder Pommes, Salat, Haussoße",
        price: "9,50 €",
      },
      {
        name: "Vegi Döner",
        description: "Gegrilltes Gemüse, Salat, Feta, Haussoße",
        price: "6,50 €",
      },
    ],
  },
  {
    id: "duerum",
    title: "Dürüm & Wraps",
    subtitle: "Im dünnen Yufka-Fladen gerollt",
    items: [
      {
        name: "Dürüm Kebab",
        description: "Kalbfleisch, Salat, Zwiebeln, Haussoße, dünn gerollt",
        price: "7,00 €",
      },
      {
        name: "Chicken Dürüm",
        description: "Hähnchen, Krautsalat, scharfe Soße",
        price: "7,00 €",
      },
      {
        name: "Falafel Dürüm",
        description: "Hausgemachte Falafel, Hummus, Salat",
        price: "6,50 €",
      },
    ],
  },
  {
    id: "lahmacun",
    title: "Lahmacun & Pide",
    subtitle: "Aus dem Steinofen",
    items: [
      {
        name: "Lahmacun",
        description: "Dünner Teig, würzig, mit Salat gefüllt",
        price: "4,50 €",
      },
      {
        name: "Lahmacun Menü",
        description: "Zwei Lahmacun mit Salat, gerollt",
        price: "8,00 €",
      },
      {
        name: "Pide mit Käse",
        description: "Ofenfrisches Fladenbrot, überbacken",
        price: "7,50 €",
      },
      {
        name: "Pide mit Hackfleisch",
        description: "Würziges Rinderhack, Kräuter",
        price: "8,50 €",
      },
    ],
  },
  {
    id: "beilagen",
    title: "Beilagen & Salate",
    items: [
      { name: "Pommes Frites", description: "Klein oder groß", price: "3,00 €" },
      { name: "Portion Falafel", description: "5 Stück, mit Hummus", price: "4,00 €" },
      { name: "Gemischter Salat", description: "Mit Haussoße", price: "4,50 €" },
      { name: "Ayran", description: "Hausgemacht, 0,3 l", price: "2,00 €" },
    ],
  },
  {
    id: "getraenke",
    title: "Getränke",
    items: [
      { name: "Softdrinks", description: "0,33 l", price: "2,00 €" },
      { name: "Wasser still / spritzig", description: "0,5 l", price: "2,00 €" },
      { name: "Türkischer Tee", description: "Frisch aufgebrüht", price: "1,50 €" },
      { name: "Ayran", description: "0,3 l", price: "2,00 €" },
    ],
  },
];
