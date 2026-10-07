/*
 * Static sample data for the member app (no backend yet).
 * Every person and company here is fictional — see UI_PROMPTS.md › Style foundation.
 * Fields a member has hidden are simply absent, never empty strings.
 */

export type Person = {
  id: string;
  firstName: string;
  surname: string;
  role: string;
  company: string;
  industry: string;
  location: string;
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
};

/** The signed-in member on the desktop screens: the cohort lead. */
export const currentUserId = "tunde-bakare";

export const people: Person[] = [
  {
    id: "adaeze-okafor",
    firstName: "Adaeze",
    surname: "Okafor",
    role: "Head of Treasury",
    company: "Harbourline Bank",
    industry: "Financial services",
    location: "Lagos",
    bio: "I run treasury and liquidity for Harbourline's corporate book. Before that I spent eight years on the FX desk.",
    canHelpWith: ["FX risk", "Treasury operations", "Liquidity planning"],
    lookingFor: ["Fintech partners"],
    email: "adaeze.okafor@harbourline.com",
    channels: ["general", "financial-services"],
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
  {
    id: "halima-yusuf",
    firstName: "Halima",
    surname: "Yusuf",
    role: "Head, Legal and Compliance",
    company: "Odu Legal Partners",
    industry: "Legal services",
    location: "Abuja",
    bio: "I advise on commercial contracts and regulatory compliance for clients in energy and financial services.",
    canHelpWith: ["Contract review", "Regulatory compliance", "Data protection"],
    lookingFor: ["Board roles"],
    phone: "+234 805 555 0163",
    email: "halima.yusuf@odulegal.com",
    channels: ["general"],
  },
  {
    id: "chinedu-eze",
    firstName: "Chinedu",
    surname: "Eze",
    role: "Director of Customer Experience",
    company: "Lumen Telecom",
    industry: "Telecommunications",
    location: "Lagos",
    bio: "I lead customer operations and service design for Lumen's 14 million subscribers. Lately my focus is moving our contact centres from cost centre to a source of insight.",
    canHelpWith: ["Contact centres", "CX design", "Customer analytics"],
    lookingFor: ["Fintech partners", "Board roles"],
    phone: "+234 803 555 0142",
    email: "chinedu.eze@lumentelecom.com",
    channels: ["general", "telecommunications"],
  },
  {
    id: "folake-adeyemi",
    firstName: "Folake",
    surname: "Adeyemi",
    role: "Founder and CEO",
    company: "Ayo Home Appliances",
    industry: "Manufacturing",
    location: "Lagos",
    bio: "I started Ayo in 2011 with two blenders and a market stall. We now make and distribute small appliances across West Africa.",
    canHelpWith: ["Distribution networks", "Retail partnerships", "Local manufacturing"],
    lookingFor: ["Export markets", "Board advisers"],
    email: "folake@ayohome.com",
    channels: ["general"],
  },
  {
    id: "emeka-nwosu",
    firstName: "Emeka",
    surname: "Nwosu",
    role: "Head of IT and Admin",
    company: "Grid Power Company",
    industry: "Energy (power)",
    location: "Lagos",
    canHelpWith: ["IT infrastructure", "Vendor management", "Cybersecurity basics"],
    lookingFor: [],
    phone: "+234 809 555 0121",
    channels: ["general", "energy"],
  },
  {
    id: "kemi-olatunji",
    firstName: "Kemi",
    surname: "Olatunji",
    role: "Head of HR",
    company: "Bloom Cosmetics",
    industry: "FMCG",
    location: "Lagos",
    bio: "I build HR teams for fast-growing consumer brands. Happy to talk hiring, pay structures and performance reviews.",
    canHelpWith: ["Talent acquisition", "Performance management", "HR policy"],
    lookingFor: ["Leadership coaches"],
    email: "kemi.olatunji@bloomcosmetics.com",
    channels: ["general"],
  },
  {
    id: "ibrahim-danjuma",
    firstName: "Ibrahim",
    surname: "Danjuma",
    role: "Mediator and Partner",
    company: "Accord Resolution Centre",
    industry: "Conflict resolution",
    location: "Abuja",
    bio: "I mediate commercial and boardroom disputes, mostly before they reach court.",
    canHelpWith: ["Dispute resolution", "Negotiation", "Stakeholder mediation"],
    lookingFor: [],
    phone: "+234 806 555 0188",
    email: "ibrahim@accordresolution.com",
    channels: ["general"],
  },
];

export const conversations: Conversation[] = [
  {
    personId: "halima-yusuf",
    lastActivity: "10:41",
    unread: 0,
    online: true,
    readAt: "10:42",
    messages: [
      {
        id: "h1",
        from: "them",
        day: "Today",
        time: "09:40",
        text: "Good morning Tunde. I've been through the revised supplier terms you sent on Friday.",
      },
      {
        id: "h2",
        from: "me",
        day: "Today",
        time: "09:52",
        text: "Thank you, Halima. Was the indemnity clause the main concern?",
      },
      {
        id: "h3",
        from: "them",
        day: "Today",
        time: "10:05",
        text: "Yes, it's broader than it needs to be. I've drafted a cap at twelve months of fees and tightened the force majeure wording.",
      },
      {
        id: "h4",
        from: "them",
        day: "Today",
        time: "10:06",
        attachment: { name: "Supplier_terms_v2.pdf", size: "420 KB" },
      },
      {
        id: "h5",
        from: "me",
        day: "Today",
        time: "10:38",
        text: "That's very helpful. I'll share it with our procurement lead this afternoon.",
      },
      {
        id: "h6",
        from: "me",
        day: "Today",
        time: "10:41",
        text: "Could we speak briefly before Thursday's session?",
      },
    ],
  },
  {
    personId: "adaeze-okafor",
    lastActivity: "Yesterday",
    unread: 2,
    online: true,
    messages: [
      {
        id: "a1",
        from: "me",
        day: "Yesterday",
        time: "16:20",
        text: "Adaeze, how are you handling FX exposure on dollar-denominated supplier contracts at the moment?",
      },
      {
        id: "a2",
        from: "them",
        day: "Yesterday",
        time: "18:02",
        text: "Mostly with forwards, plus a small natural hedge from our export clients.",
      },
      {
        id: "a3",
        from: "them",
        day: "Yesterday",
        time: "18:04",
        text: "Happy to walk you through our hedging framework after class.",
      },
    ],
  },
  {
    personId: "chinedu-eze",
    lastActivity: "Mon",
    unread: 1,
    messages: [
      {
        id: "c1",
        from: "me",
        day: "Monday",
        time: "11:15",
        text: "Chinedu, I've copied you on an email to our customer service lead. She'd value your view on contact centre staffing.",
      },
      {
        id: "c2",
        from: "them",
        day: "Monday",
        time: "13:47",
        text: "Thanks for the introduction. I'll reach out to her this week.",
      },
    ],
  },
  {
    personId: "emeka-nwosu",
    lastActivity: "Mon",
    unread: 0,
    messages: [
      {
        id: "e1",
        from: "them",
        day: "Monday",
        time: "09:02",
        text: "Is Module 3 still at the main campus?",
      },
      {
        id: "e2",
        from: "me",
        day: "Monday",
        time: "09:30",
        text: "It's moving to the Victoria Island centre. I'll post the details in announcements.",
      },
      {
        id: "e3",
        from: "them",
        day: "Monday",
        time: "09:31",
        text: "Perfect, see you there.",
      },
    ],
  },
  {
    personId: "kemi-olatunji",
    lastActivity: "28 Sep",
    unread: 0,
    messages: [
      {
        id: "k1",
        from: "me",
        day: "28 September",
        time: "14:10",
        text: "Kemi, would you share the hybrid work policy you mentioned in class?",
      },
      {
        id: "k2",
        from: "them",
        day: "28 September",
        time: "15:22",
        text: "Of course. Sending the HR policy template now.",
      },
    ],
  },
  {
    personId: "ibrahim-danjuma",
    lastActivity: "24 Sep",
    unread: 0,
    messages: [
      {
        id: "i1",
        from: "them",
        day: "24 September",
        time: "10:05",
        text: "Good to meet you at the opening dinner, Tunde.",
      },
      {
        id: "i2",
        from: "me",
        day: "24 September",
        time: "10:40",
        text: "Likewise. Let's continue the conversation on joint venture disputes.",
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
    preview: "Kemi: Who's joining the study group on Saturday?",
    unread: 5,
  },
  {
    name: "financial-services",
    members: 19,
    lastActivity: "Yesterday",
    preview: "Adaeze: Sharing the CBN circular from this morning",
  },
  {
    name: "telecommunications",
    members: 8,
    lastActivity: "Mon",
    preview: "Chinedu: Anyone at the spectrum auction briefing?",
  },
  {
    name: "energy",
    members: 6,
    lastActivity: "29 Sep",
    preview: "Emeka: Notes from the grid stability session",
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
    id: "kano-logistics",
    type: "ask",
    title: "Looking for an introduction to a logistics partner in Kano",
    authorId: "folake-adeyemi",
    posted: "Yesterday",
    replies: 3,
  },
  {
    id: "payments-licensing",
    type: "ask",
    title: "Seeking benchmark terms for cross-border payments licensing",
    authorId: "adaeze-okafor",
    posted: "3 days ago",
    replies: 5,
  },
  {
    id: "shift-hr-system",
    type: "ask",
    title: "Recommendations for an HR system that handles shift workers",
    authorId: "kemi-olatunji",
    posted: "5 days ago",
    replies: 2,
  },
];

/** Classmates who joined the platform since Monday, newest first. */
export const newThisWeek = ["halima-yusuf", "adaeze-okafor", "chinedu-eze"];

/** Suggested introductions for the signed-in member, each with a one-line reason. */
export const suggestions = [
  { personId: "emeka-nwosu", reason: "Also in energy" },
  { personId: "folake-adeyemi", reason: "Looking for board advisers" },
];

export function fullName(person: Person) {
  return `${person.firstName} ${person.surname}`;
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
