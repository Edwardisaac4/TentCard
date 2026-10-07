/*
 * Static sample data for the member app (no backend yet).
 * The four classmates are real people, with only the details the owner supplied for them.
 * The signed-in lead (Tunde Bakare), the messages, channels and board posts are sample content.
 * Fields a member has hidden or not given are simply absent, never empty strings.
 */

export type Person = {
  id: string;
  firstName: string;
  middleName?: string;
  surname: string;
  role: string;
  company: string;
  industry: string;
  location?: string;
  /** Square headshot in public/pictures; without one the avatar shows initials. */
  photo?: string;
  isLead?: boolean;
  bio?: string;
  canHelpWith: string[];
  lookingFor: string[];
  phone?: string;
  email?: string;
  channels: string[];
};

export type Message = {
  id: string;
  from: "me" | "them";
  day: string;
  time: string;
  text?: string;
  attachment?: { name: string; size: string };
};

export type Conversation = {
  personId: string;
  lastActivity: string;
  unread: number;
  online?: boolean;
  readAt?: string;
  messages: Message[];
};

export type Channel = {
  name: string;
  members: number;
  lastActivity: string;
  preview: string;
  unread?: number;
  leadOnly?: boolean;
};

export type Announcement = {
  id: string;
  title: string;
  body: string;
  authorId: string;
  posted: string;
  pinned?: boolean;
};

export type BoardPost = {
  id: string;
  type: "ask" | "offer";
  title: string;
  authorId: string;
  posted: string;
  replies: number;
};

export const cohort = {
  name: "SMP 102",
  school: "Lagos Business School",
  memberCount: 81,
  /** White on transparent for the navy sidebar, cut from the SMP 102 mixer flier. */
  schoolLogo: { src: "/schools/lagos-business-school/logo-white.png", width: 376, height: 133 },
  /** The shield alone, for the 80px icon rail. */
  schoolCrest: { src: "/schools/lagos-business-school/crest-white.png", width: 114, height: 124 },
};

/** The signed-in member on the desktop screens: the cohort lead. */
export const currentUserId = "tunde-bakare";

export const people: Person[] = [
  {
    id: "yetunde-ayeni",
    firstName: "Yetunde",
    surname: "Ayeni",
    role: "Group Head, Human Resources & Administration",
    company: "Avon Healthcare Limited (Avon HMO)",
    industry: "Healthcare",
    photo: "/pictures/yetunde-ayeni.jpg",
    canHelpWith: [],
    lookingFor: [],
    phone: "+234 803 603 4639",
    channels: ["general"],
  },
  {
    id: "aderonke-adebanjo",
    firstName: "Aderonke",
    surname: "Adebanjo",
    role: "Senior Manager, Communications & Executive Projects, Africa",
    company: "American Tower Corporation",
    industry: "Telecommunications",
    photo: "/pictures/aderonke-adebanjo.jpg",
    canHelpWith: [],
    lookingFor: [],
    phone: "+234 911 507 0984",
    channels: ["general", "telecommunications"],
  },
  {
    id: "obinna-uwadoka",
    firstName: "Obinna",
    middleName: "Chijioke",
    surname: "Uwadoka",
    role: "Zonal Head",
    company: "Keystone Bank",
    industry: "Financial services",
    location: "Abuja",
    photo: "/pictures/obinna-uwadoka.jpg",
    canHelpWith: [],
    lookingFor: [],
    phone: "+234 803 320 9530",
    channels: ["general", "financial-services"],
  },
  {
    id: "tunde-tunde-awe",
    firstName: "Tunde",
    surname: "Tunde-Awe",
    role: "Head, PMO",
    company: "EAN Aviation Limited",
    industry: "Aviation",
    photo: "/pictures/tunde-tunde-awe.jpg",
    canHelpWith: [],
    lookingFor: [],
    phone: "+234 810 018 1018",
    channels: ["general"],
  },
  {
    id: "tunde-bakare",
    firstName: "Tunde",
    surname: "Bakare",
    role: "Chief Operating Officer",
    company: "Kestrel Energy",
    industry: "Energy (oil and gas)",
    location: "Lagos",
    isLead: true,
    bio: "I lead operations across Kestrel's upstream and distribution business. Class lead for SMP 102.",
    canHelpWith: ["Operations scale-up", "Upstream contracts", "Board governance"],
    lookingFor: ["Renewables partners"],
    phone: "+234 803 555 0107",
    email: "tunde.bakare@kestrelenergy.com",
    channels: ["announcements", "general", "energy"],
  },
];

export const conversations: Conversation[] = [
  {
    personId: "yetunde-ayeni",
    lastActivity: "Yesterday",
    unread: 2,
    online: true,
    messages: [
      {
        id: "y1",
        from: "me",
        day: "Yesterday",
        time: "16:20",
        text: "Yetunde, count me in for the study group on Saturday. Should I bring anything?",
      },
      {
        id: "y2",
        from: "them",
        day: "Yesterday",
        time: "18:02",
        text: "Just the Module 2 case notes.",
      },
      {
        id: "y3",
        from: "them",
        day: "Yesterday",
        time: "18:04",
        text: "We start at 10:00 in the library.",
      },
    ],
  },
  {
    personId: "obinna-uwadoka",
    lastActivity: "Mon",
    unread: 1,
    messages: [
      {
        id: "o1",
        from: "me",
        day: "Monday",
        time: "11:15",
        text: "Obinna, good to meet you at the opening session. Will you fly in from Abuja for Module 3?",
      },
      {
        id: "o2",
        from: "them",
        day: "Monday",
        time: "13:47",
        text: "Yes, I'll be in Lagos from Wednesday evening.",
      },
    ],
  },
  {
    personId: "tunde-tunde-awe",
    lastActivity: "Mon",
    unread: 0,
    messages: [
      {
        id: "t1",
        from: "them",
        day: "Monday",
        time: "09:02",
        text: "Is Module 3 still at the main campus?",
      },
      {
        id: "t2",
        from: "me",
        day: "Monday",
        time: "09:30",
        text: "It's moving to the Victoria Island centre. I'll post the details in announcements.",
      },
      {
        id: "t3",
        from: "them",
        day: "Monday",
        time: "09:31",
        text: "Perfect, see you there.",
      },
    ],
  },
];

export const channels: Channel[] = [
  {
    name: "announcements",
    members: 81,
    lastActivity: "09:15",
    preview: "Module 3 venue change",
    leadOnly: true,
  },
  {
    name: "general",
    members: 81,
    lastActivity: "10:12",
    preview: "Yetunde: Who's joining the study group on Saturday?",
    unread: 5,
  },
  {
    name: "financial-services",
    members: 19,
    lastActivity: "Yesterday",
    preview: "Obinna: Sharing the CBN circular from this morning",
  },
  {
    name: "telecommunications",
    members: 8,
    lastActivity: "Mon",
    preview: "Aderonke: Anyone at the spectrum auction briefing?",
  },
  {
    name: "energy",
    members: 6,
    lastActivity: "29 Sep",
    preview: "You: Notes from the grid stability session",
  },
];

export const announcements: Announcement[] = [
  {
    id: "module-3-venue",
    title: "Module 3 venue change",
    body: "Thursday's Module 3 session moves from the main campus to the Victoria Island centre. We start at 9:00, and there is parking in the basement.",
    authorId: "tunde-bakare",
    posted: "2 hours ago",
    pinned: true,
  },
];

export const boardPosts: BoardPost[] = [
  {
    id: "shift-hr-system",
    type: "ask",
    title: "Recommendations for an HR system that handles shift workers",
    authorId: "yetunde-ayeni",
    posted: "Yesterday",
    replies: 3,
  },
  {
    id: "portfolio-tools",
    type: "ask",
    title: "Looking for a project portfolio tool that suits a mid-sized PMO",
    authorId: "tunde-tunde-awe",
    posted: "3 days ago",
    replies: 5,
  },
];

/** Classmates who joined the platform since Monday, newest first. */
export const newThisWeek = ["yetunde-ayeni", "aderonke-adebanjo"];

/** Suggested introductions for the signed-in member, each with a one-line reason. */
export const suggestions = [
  { personId: "tunde-tunde-awe", reason: "Also works in operations" },
  { personId: "obinna-uwadoka", reason: "Banking contact in Abuja" },
];

export function fullName(person: Person) {
  return [person.firstName, person.middleName, person.surname].filter(Boolean).join(" ");
}

export function getPerson(id: string) {
  return people.find((person) => person.id === id);
}

export function getConversation(personId: string) {
  return conversations.find((conversation) => conversation.personId === personId);
}

export function classmates() {
  return people
    .filter((person) => person.id !== currentUserId)
    .sort((a, b) => fullName(a).localeCompare(fullName(b)));
}

export function unreadMessageCount() {
  return conversations.reduce((total, conversation) => total + conversation.unread, 0);
}

/** "FX risk, treasury operations" — keeps acronyms like FX and CX in capitals. */
export function toSentenceList(items: string[]) {
  return items
    .map((item, index) =>
      index === 0 || /^[A-Z]{2}/.test(item) ? item : item[0].toLowerCase() + item.slice(1),
    )
    .join(", ");
}
