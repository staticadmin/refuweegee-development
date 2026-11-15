export type Volunteer = {
  name: string;
  /** Optional photo path; a placeholder frame is shown when missing. */
  image?: string;
};

// Contentful-ready array structure for volunteer profiles.
// TODO: replace placeholders with real volunteer names and photos.
export const volunteers: Volunteer[] = [
  { name: "Volunteer name" },
  { name: "Volunteer name" },
  { name: "Volunteer name" },
  { name: "Volunteer name" },
  { name: "Volunteer name" },
  { name: "Volunteer name" },
  { name: "Volunteer name" },
  { name: "Volunteer name" },
];

/**
 * Bento sizes (from md breakpoint up, on a 4-column grid):
 * - small: 1 x 1
 * - wide:  2 x 1
 * - tall:  1 x 2
 * - large: 2 x 2
 */
export type PostSize = "small" | "wide" | "tall" | "large";

export type PhotoPost = {
  type: "photo";
  size: PostSize;
  image: string;
  alt: string;
  caption?: string;
};

export type VideoPost = {
  type: "video";
  size: PostSize;
  /** Poster image shown before playback. */
  poster: string;
  alt: string;
  /** Self-hosted video file (e.g. /assets/volunteering/clip.mp4). */
  src?: string;
  /** Embed URL (e.g. https://www.youtube-nocookie.com/embed/VIDEO_ID). */
  embedUrl?: string;
  caption?: string;
};

export type TestimonialPost = {
  type: "testimonial";
  size: PostSize;
  quote: string;
  name: string;
  detail?: string;
};

export type VolunteerPost = PhotoPost | VideoPost | TestimonialPost;

// TODO: replace placeholder testimonials, captions and video sources with real content.
export const volunteerPosts: VolunteerPost[] = [
  {
    type: "photo",
    size: "large",
    image: "/assets/volunteering/shop_volunteers.webp",
    alt: "Volunteers working in the Refuweegee shop",
    caption: "Volunteers in the shop",
  },
  {
    type: "testimonial",
    size: "wide",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Volunteer name",
    detail: "Volunteer since 2023",
  },
  {
    type: "video",
    size: "wide",
    poster: "/assets/volunteering/welcome_pack_volunteers.webp",
    alt: "Volunteers packing welcome packs",
    caption: "A day packing welcome packs",
  },
  {
    type: "photo",
    size: "tall",
    image: "/assets/volunteering/stacking_rails.webp",
    alt: "Volunteers stacking clothing rails",
  },
  {
    type: "testimonial",
    size: "small",
    quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    name: "Volunteer name",
  },
  {
    type: "photo",
    size: "small",
    image: "/assets/welcome/welcome_drawings.webp",
    alt: "Drawings made for welcome packs",
  },
  {
    type: "testimonial",
    size: "wide",
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    name: "Volunteer name",
    detail: "Corporate volunteer",
  },
  {
    type: "photo",
    size: "small",
    image: "/assets/welcome/welcome_postcard.webp",
    alt: "A handwritten welcome postcard",
  },
  {
    type: "video",
    size: "small",
    poster: "/assets/welcome/welcome_totes.webp",
    alt: "Welcome tote bags ready to go",
  },
  {
    type: "photo",
    size: "wide",
    image: "/assets/welcome/welcome_pack.webp",
    alt: "A finished welcome pack",
    caption: "Welcome packs ready for delivery",
  },
  {
    type: "testimonial",
    size: "wide",
    quote:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    name: "Volunteer name",
  },
];
