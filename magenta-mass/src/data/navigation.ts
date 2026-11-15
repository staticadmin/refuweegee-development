export interface NavLink {
  label: string;
  href: string;
}

export interface NavDropdown {
  label: string;
  items: NavLink[];
}

export const navDropdowns: NavDropdown[] = [
  {
    label: "What we do",
    items: [
      { label: "About us", href: "/about-us" },
      { label: "Visit our welcome space", href: "/visit-our-welcome-space" },
      { label: "Our free shop", href: "/our-free-shop" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
  {
    label: "Who we are",
    items: [
      { label: "Meet the team", href: "/meet-the-team" },
      { label: "Meet the Board", href: "/meet-the-board" },
      { label: "Meet our volunteers", href: "/meet-our-volunteers" },
    ],
  },
  {
    label: "Get involved",
    items: [
      { label: "Volunteering", href: "/volunteering" },
      { label: "Fundraise for us", href: "/fundraise" },
      { label: "Your donations", href: "/your-donations" },
      { label: "Welcome pack building", href: "/welcome-packs" },
    ],
  },
];

export const navLinks: NavLink[] = [
  { label: "Safe With Me", href: "/safe-with-me" },
  { label: "Events", href: "/events" },
];
