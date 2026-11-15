export type BoardMember = {
  name: string;
  role?: string;
  bio: string;
  accent: string;
};

// Contentful-ready array structure for the board of trustees.
// TODO: replace placeholder bios with each trustee's experience/bio.
export const boardMembers: BoardMember[] = [
  {
    name: "Suki Wan",
    role: "Chair",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    accent: "bg-weegee-teal text-weegee-white",
  },
  {
    name: "Selina Hales",
    role: "Trustee",
    bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    accent: "bg-weegee-black text-weegee-white",
  },
  {
    name: "Gordon Kennedy",
    role: "Trustee",
    bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    accent: "bg-weegee-yellow text-weegee-black",
  },
  {
    name: "Gerard O'Sullivan",
    role: "Trustee",
    bio: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    accent: "bg-weegee-teal text-weegee-white",
  },
  {
    name: "Leona Seaton",
    role: "Trustee",
    bio: "Curabitur pretium tincidunt lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit.",
    accent: "bg-weegee-black text-weegee-white",
  },
  {
    name: "James Osborne",
    role: "Trustee",
    bio: "Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient.",
    accent: "bg-weegee-yellow text-weegee-black",
  },
];
