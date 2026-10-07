# UI prompt pack — Syndicate (working name)

Prompts for generating every screen of the cohort platform in Google Stitch, with notes for v0 and Figma Make. Every prompt follows DESIGN.md. Keep both files together.

---

## How to use these prompts

**Which tool for what**
- **Google Stitch** (stitch.withgoogle.com): best for exploring the look quickly. Choose **Mobile** for member screens and **Web** for the cohort desk and super admin console before you paste a prompt.
- **v0 by Vercel**: best when you want real code. It outputs React with Tailwind and shadcn/ui, which matches the planned Next.js stack. Use the handoff prompt in section 6.
- **Figma Make / Figma**: best once the look is settled and you want an editable design file to share with the class lead and LBS.

**Working method**
1. Start a new Stitch project. Paste the **style foundation** (section 1) first and generate the Directory screen. This anchors the look.
2. Generate one screen per prompt. Stitch drifts when asked for several screens at once.
3. In each new prompt, start with the line: "Use the same design system as the previous screens." Then paste the screen prompt.
4. Fix things with small, specific follow-ups (section 5), not by regenerating from scratch.
5. Check every result against the review checklist (section 7) before moving on.
6. Never paste real cohort data into any AI tool. Use the fictional people in the prompts.

---

## 1. Style foundation (paste at the start of every new project or chat)

```
Design system for "Syndicate", a private networking app for an executive-education cohort at a business school in Lagos, Nigeria. Users are senior professionals aged 35–55: heads of department, directors, business owners. The feel is calm, confident and executive, like a well-run seminar room. Not a social network, not playful.

Visual idea: brass name plates and folded tent cards on a seminar table, and the deep blue-green of the Lagos lagoon.

Colours:
- Lagoon (primary, buttons, links, active states): #0E3B43; hover #2A6B73; light tint #DCEBEC; faint tint #EEF5F5; deep sidebar #0A2E34
- Brass (identity accent, used sparingly: avatar rings, a thin rule on top of name cards, badges for the cohort lead): #B8862B; brass text #9A6F1E; brass tint #F3E7CE
- Text: #1A2224 primary, #5B6669 secondary, #8A9497 placeholder
- Borders #DDE2E1, app background #F5F7F6, cards and inputs #FFFFFF
- Success #2E7D4F, warning #B26B00, danger #B3261E

Typography:
- People's names and page titles in Newsreader (a serif), weight 500.
- All other text in IBM Plex Sans: body 16px regular, metadata 14px, labels 13px medium, card headings 17px semibold.
- Sentence case everywhere. No all-caps labels. No small labels above headings.

Shape and spacing:
- Inputs, buttons and chips radius 6px. Cards and sheets radius 12px. Avatars fully round.
- 1px borders instead of shadows. Shadows only on menus, dialogs and bottom sheets.
- Generous spacing on an 8px grid. Mobile page padding 16px, desktop 32px.
- Lucide-style outline icons, 1.5px stroke, always paired with a text label.

Avoid: gradients, glassmorphism, glowing effects, stock photos, emoji, illustrations of people, arrows in button text, text separated by middle dots, identical cards for every kind of content.

Avatars: when there is no photo, show initials in the serif font on #EEF5F5 with a 2px brass ring.

All people and companies are fictional. Use these sample people:
Adaeze Okafor, Head of Treasury, Harbourline Bank, Financial services
Tunde Bakare, Chief Operating Officer, Kestrel Energy, Energy (oil and gas) — the cohort lead
Halima Yusuf, Head, Legal and Compliance, Odu Legal Partners, Legal services
Chinedu Eze, Director of Customer Experience, Lumen Telecom, Telecommunications
Folake Adeyemi, Founder and CEO, Ayo Home Appliances, Manufacturing
Emeka Nwosu, Head of IT and Admin, Grid Power Company, Energy (power)
Kemi Olatunji, Head of HR, Bloom Cosmetics, FMCG
Ibrahim Danjuma, Mediator and Partner, Accord Resolution Centre, Conflict resolution
The cohort is "SMP 102", 81 members.
```

---

## 2. Member app — mobile screens (set Stitch to Mobile)

### 2.1 Directory (generate this first)
```
Mobile screen: Directory.

Top bar 56px tall: page title "Directory" in Newsreader 24px on the left; search and bell outline icons on the right, the bell with a small lagoon dot.

Below: a full-width search field, 48px tall, radius 6px, magnifier icon, placeholder "Search by name, company, role or skill".

Below: a horizontally scrolling row of filter chips, 32px tall, radius 6px, outlined: "Industry", "Company", "Location", "Can help with", "Joined only". Then a text button "All filters".

A line of secondary text: "81 classmates", and on the right a small "Name A–Z" sort menu and a list/grid view toggle (list selected).

Then a list of person rows, each 64px tall: round avatar 40px (initials with brass ring), name in IBM Plex Sans semibold 16px, second line "Head of Treasury, Harbourline Bank" in 14px secondary text, a chevron on the right. Rows separated by 1px #DDE2E1 dividers. Show 8 rows using the sample people in alphabetical order.

On the right edge, a slim A–Z alphabet scrubber in 11px secondary text.

Bottom tab bar, 64px, white with a top border: Home, Directory (active, lagoon icon and label), Messages (with a small "3" badge), Board, Me. Icons 24px with labels under them.
```

### 2.2 Directory — card view and filter sheet
```
Same Directory screen, but in card view. Each person is a "name card": white, radius 12px, 1px border, 20px padding, with a 3px brass line along the top edge of the card. Inside: avatar 56px with brass ring, name in Newsreader 20px, role in 16px primary text, company in 16px secondary text, a thin divider, then two small chips (industry chip with #DCEBEC fill, location chip outlined "Lagos"), then "Can help with: FX risk, treasury operations" in 14px. Bottom row: "Message" secondary button (white, bordered) and "View profile" text button in lagoon. Cards stacked vertically, 12px apart. Show Adaeze Okafor, Tunde Bakare (with a small brass-tinted badge "Cohort lead" under his name), and Halima Yusuf.

Then a second state: a bottom sheet opened over the screen (dark scrim behind), with a drag handle, title "Filters", sections "Industry" (checkbox list with counts, e.g. "Financial services 19", "Telecommunications 8", "Information technology 10"), "Location", "Joined only" toggle. Sticky footer with "Clear all" text button and "Show 19 classmates" primary button.
```

### 2.3 Profile — viewing a classmate
```
Mobile screen: a classmate's profile (Chinedu Eze).

Top bar: back arrow, and an overflow (three dots) icon on the right.

Header block, left aligned: avatar 96px with brass ring, name "Chinedu Eze" in Newsreader 30px, "Director of Customer Experience" in 16px, "Lumen Telecom" in 16px secondary, "Lagos" with a pin icon in 14px secondary. Then a full-width primary button "Message" in lagoon, 52px tall.

Sections below, each with a Newsreader 20px title and 24px spacing between sections:
- "About": two-sentence bio in 16px.
- "Can help with": chips "Contact centres", "CX design", "Customer analytics".
- "Looking for": chips "Fintech partners", "Board roles".
- "Work": rows for Company, Industry (Telecommunications), Role.
- "Contact": a row with a phone icon and "+234 803 555 0142" and two small buttons "Call" and "WhatsApp"; a row with a mail icon and "chinedu.eze@lumentelecom.com" with a copy icon.
- "Shared with you": "# general", "# telecommunications".

No placeholders for hidden fields: fields the person hid simply don't appear.
```

### 2.4 My profile with completion prompt
```
Mobile screen: "Me" tab showing the user's own profile (Adaeze Okafor).

A lagoon faint-tint banner at top: eye icon, "This is how classmates see you", and a small toggle "Preview as classmate".

A card "Your profile is 60% complete": a 6px rounded progress bar in lagoon on a faint tint track, then a list of missing items each with an "Add" text button: "Short bio", "What you can help with", "Profile photo".

Then the same profile layout as a classmate's profile, but the primary button reads "Edit profile" (secondary style). Contact fields marked "Only me" show a small lock icon and the caption "Only you can see this".

Below the profile: a list of settings rows with icons and chevrons: "Notifications", "Privacy", "Appearance", "Help", and a "Sign out" row in danger red text.

Bottom tab bar with "Me" active.
```

### 2.5 Edit profile with visibility controls
```
Mobile screen: Edit profile.

Top bar: "Cancel" text button left, title "Edit profile" centre, nothing right.

Form sections with Newsreader 20px section titles: "About you", "Work", "Contact", "Personal".

Each field: label above in 14px medium, input 48px tall with radius 6px and 1px border, helper text below in 14px secondary. To the right of each field label, a small segmented control with two options: "Cohort" (eye icon) and "Only me" (lock icon). Name fields have no control and the helper text "Your name is always visible to your cohort."

Fields:
- About you: First name "Adaeze", Surname "Okafor", Other name (empty, placeholder "Optional"), Short bio (textarea, counter "0/300").
- Work: Role "Head of Treasury", Company "Harbourline Bank", Industry (select showing "Financial services").
- Contact: Work email, Personal email (set to Only me), Phone with a fixed "+234" prefix segment and "803 555 0198" (set to Only me).
- Personal: Nickname, Hobbies and interests, both empty with placeholder text, both Only me.

A sticky footer bar with a primary button "Save profile", 52px tall, full width, shown because there are unsaved changes.

Show one field in an error state: Work email with red border and the message "Enter a full email address, like name@company.com" with an alert icon.
```

### 2.6 Home
```
Mobile screen: Home.

Top bar: title "Good morning, Adaeze" in Newsreader 24px; bell icon on the right.

Content, top to bottom, 24px between blocks:
1. A pinned announcement: white card with a 3px brass left border (no rounding on that left side), pin icon, title "Module 3 venue change", two lines of body text, then a small row with avatar 24px, "Tunde Bakare", a brass-tinted "Cohort lead" badge, and "2 hours ago".
2. Section title "New this week" with a "See all" text button; a horizontally scrolling row of compact name cards, 240px wide, each with avatar, name, role and company.
3. Section title "Open asks"; three list rows, each with an "Ask" badge, a title such as "Looking for an introduction to a logistics partner in Kano", the author name and "3 replies".
4. Section title "People you might want to meet"; two name cards with a one-line reason in secondary text, e.g. "Also in financial services".

Bottom tab bar with Home active.
```

### 2.7 Messages — inbox
```
Mobile screen: Messages inbox.

Top bar: title "Messages", compose (pencil) icon on the right.

Segmented control under the top bar: "Direct" (selected) and "Channels".

Search field "Search messages".

List of conversations, 72px rows: avatar 48px (with a small green online dot on two of them), name in semibold, one-line preview of the last message in secondary text (truncated), time on the right ("10:42", "Yesterday", "Mon"), and an unread count badge in lagoon with white text on two rows. Unread rows have the name and preview in primary text colour.

Use the sample people. Bottom tab bar with Messages active.
```

### 2.8 Messages — conversation
```
Mobile screen: a conversation with Halima Yusuf.

Header: back arrow, avatar 36px, name "Halima Yusuf", and below it in 13px "Head, Legal and Compliance, Odu Legal Partners". Overflow icon on the right.

A centred day separator "Today" in 13px secondary text.

Message bubbles: other person's on the left, white with a 1px border, radius 12px with the bottom-left corner 4px; own messages on the right in lagoon #0E3B43 with white text, bottom-right corner 4px. Max width 75%. Show a realistic exchange of 6 messages about reviewing a supplier contract, including one message with an attached PDF shown as a file row (PDF icon, "Supplier_terms_v2.pdf", "420 KB").

Under the last own message: "Read 10:42" in 13px secondary text.

Composer pinned to the bottom: attach (paperclip) icon, an auto-growing text field with radius 6px and placeholder "Message Halima", and a round send button in lagoon.

Second state: the same screen with a thin warning-tinted bar under the header: "You're offline. Messages will send when you reconnect." and the last own message showing a small clock icon and "Waiting for connection".
```

### 2.9 Messages — first message to someone
```
Mobile screen: a new, empty conversation with Folake Adeyemi.

Header as in a conversation. In the empty thread area, a centred panel: avatar 64px with brass ring, "Folake Adeyemi", "Founder and CEO, Ayo Home Appliances", then the text "Start a conversation with Folake. Say who you are and why you're reaching out." Below it, three tappable suggestion chips stacked vertically: "Hello Folake, I'd love to hear how you built your distribution network.", "Could I ask your advice on retail partnerships?", "Would you be open to a quick call this week?"

Composer at the bottom with the placeholder "Message Folake".
```

### 2.10 Channels
```
Mobile screen: Messages with the "Channels" segment selected.

List of channels: "# announcements" (with a lock icon and caption "Only the cohort lead can post"), "# general" (81 members, unread badge 5), "# financial-services" (19 members), "# telecommunications" (8 members), "# energy" (6 members). Each row shows the channel name in semibold, member count and the last message preview in secondary text, and time on the right.

Then a second screen: inside "# general". Header with "# general", "81 members", and a topic line "Everything SMP 102". Messages show avatar 32px, name in semibold, time, and the message text (no bubbles in channels, a flat list). Include one message from the cohort lead with a brass "Cohort lead" badge next to the name.
```

### 2.11 Board — Offers and Asks
```
Mobile screen: Board.

Title "Board". Segmented control "Asks" (selected) and "Offers". A primary button "Post" at top right.

List of posts, each a white card with radius 12px, 1px border, 16px padding: author row (avatar 32px, name, time "3 days ago"), a small "Ask" badge in lagoon tint, a title in 17px semibold, three lines of body text, tags as small outlined chips, and a footer with "4 replies" in secondary text and a "Reply privately" secondary button.

Then a second state: the "Post" bottom sheet with fields: type (segmented "Ask" / "Offer"), Title (counter 0/80), Details (textarea, counter 0/500), Tags input, "Closes in" select (1 week, 2 weeks, 1 month), and a primary button "Post ask".
```

### 2.12 Notifications
```
Mobile screen: Notifications.

Top bar: back arrow, title "Notifications", text button "Mark all read".

Grouped list with group headers "Today", "This week", "Earlier" in 14px secondary semibold. Each item: an icon in a 36px round lagoon-tint circle (message, megaphone, reply icons), a sentence such as "Tunde Bakare posted an announcement: Module 3 venue change", time below in 13px secondary text, and unread items with a faint lagoon background and a small dot.

At the bottom: a text link "Choose what you're notified about".
```

### 2.13 Settings — privacy and delete account
```
Mobile screen: Settings, Privacy section.

Rows: "Default visibility for new fields" (value "Only me"), "Download my data" (chevron), "Delete my account" in danger red.

Second state: a bottom sheet "Delete your account?" with body text explaining: your profile is removed from the directory, you're removed from channels, and messages you've already sent stay visible to the people who received them, shown as "Former member". An input labelled "Type DELETE to confirm". Buttons: "Cancel" (secondary) and "Delete my account" (red, disabled until DELETE is typed).
```

### 2.14 Sign in and check email
```
Mobile screen: Sign in.

Centred column. At the top, a placeholder square for the school logo with the text "School logo", then the product name "Syndicate" small in Newsreader. Title "Sign in to your cohort" in Newsreader 24px. Email input with label "Email address". Primary full-width button "Email me a sign-in link". Helper text below: "Use the email address your programme office has on file."

Second screen: "Check your email". A simple line drawing of an envelope in lagoon outline. Title "Check your email". Text "We sent a sign-in link to a•••@harbourline.com. It expires in 15 minutes." Primary button "Open email app", text button "Resend link (0:42)" shown disabled with a countdown, text button "Use a different email".
```

### 2.15 Onboarding — four steps
Generate these as four separate prompts.
```
Mobile onboarding, step 1 of 4: Welcome.
A thin progress bar at the top (25% filled, lagoon) with "Step 1 of 4" in 13px secondary text. Large Newsreader 30px title "Welcome to SMP 102, Adaeze". Body: "Your class lead has set up a private space for the cohort. Here you can find classmates, see what they do, and message them without sharing your number." A row of five overlapping avatars with brass rings and the text "81 classmates". Primary button at the bottom "Get started".
```
```
Mobile onboarding, step 2 of 4: Your privacy.
Progress bar 50%. Title "Before you continue". Three short paragraphs in plain language: what we collect (your name, work details and the contact details you choose to share), who can see it (members of SMP 102 only; the cohort lead can see your invite status), how to remove it (delete your account anytime in Settings). Two text links: "Read the full privacy notice", "Terms of use". A checkbox: "I agree to my profile being shared with members of SMP 102." Primary button "Agree and continue" shown disabled, text button "Not now".
```
```
Mobile onboarding, step 3 of 4: Check your profile.
Progress bar 75%. Title "We've started your profile from the programme's records. Check it's right." A form pre-filled with Adaeze Okafor's details: First name, Surname, Role, Company, Industry select, Work email, Phone with +234 prefix. Each field has the small "Cohort / Only me" segmented control next to its label. Empty fields show only placeholder text. Sticky footer with "Back" secondary and "Continue" primary.
```
```
Mobile onboarding, step 4 of 4: How can you help?
Progress bar 100%. Title "What can classmates come to you for?" Tag input "I can help with" containing chips "FX risk", "Treasury operations" and suggestion chips below ("Corporate banking", "Trade finance") with a plus icon. Tag input "I'm looking for" with chip "Fintech partners". Optional short bio textarea with counter "0/300". Optional photo upload area with a dashed border, camera icon and "Add a photo". Primary button "Finish".
```
```
Mobile screen: onboarding complete. Centred finished name card for Adaeze Okafor (white, brass line on top, avatar with brass ring, name in Newsreader, role, company, industry chip, "Can help with: FX risk, treasury operations"). Above it the title "You're in." and below it "Here's how classmates will see you." Buttons: primary "Go to directory", text button "Edit something".
```

---

## 3. Member app — desktop screens (set Stitch to Web)

### 3.1 Desktop shell and directory
```
Desktop web app, 1440px wide: Directory.

Left sidebar 248px wide in deep lagoon #0A2E34: at the top a placeholder for the school logo and "SMP 102" in white Newsreader; navigation items with icons and labels in light text: Home, Directory (active, with a lighter lagoon background and a brass 3px left marker), Messages (badge 3), Board. A divider, then "Cohort desk" (only for the cohort lead). At the bottom: the user's avatar, name "Tunde Bakare" and an overflow icon.

Main area on #F5F7F6 background with 32px padding: page title "Directory" in Newsreader 28px on the left, bell icon and user avatar in the top right. Search field 480px wide, filter chips in a row, result line "81 classmates", sort menu and grid/list toggle on the right.

A grid of name cards, 3 columns with 24px gaps: white, radius 12px, 1px border, 3px brass line along the top edge, avatar 56px with brass ring, name in Newsreader 22px, role, company in secondary text, divider, industry chip and location chip, "Can help with" line, and "Message" secondary button with "View profile" text button. Show 6 cards using the sample people.
```

### 3.2 Desktop messages
```
Desktop web app: Messages, using the same sidebar as the directory with Messages active.

Two panes. Left pane 360px wide, white, with a right border: segmented control "Direct" / "Channels", search field, list of conversations (avatar, name, preview, time, unread badges). The conversation with Halima Yusuf is selected with a lagoon light tint background.

Right pane: conversation header with avatar, "Halima Yusuf", "Head, Legal and Compliance, Odu Legal Partners", and icons for "View profile" and overflow. Message thread with lagoon own bubbles on the right and white bordered bubbles on the left, a "Today" day separator, a PDF attachment row, "Read 10:42" status. Composer at the bottom with attach icon, text field and send button.
```

### 3.3 Desktop profile
```
Desktop web app: profile of Chinedu Eze, same sidebar.

Two columns. Left column 360px, sticky: avatar 128px with brass ring, name in Newsreader 40px, role, company, location, primary button "Message", secondary button "Copy profile link". Right column max 680px: sections "About", "Can help with", "Looking for", "Work", "Contact" (phone with Call and WhatsApp buttons, email with copy icon), "Shared with you". Section titles in Newsreader 22px. Plenty of white space.
```

---

## 4. Cohort desk and super admin (set Stitch to Web)

### 4.1 Cohort desk — overview
```
Desktop web app for the cohort lead: "SMP 102 cohort desk". Same lagoon sidebar, with "Cohort desk" active and sub-items: Overview (active), Members, Invites, Announcements, Moderation, Settings.

Main area: title "SMP 102 cohort desk" in Newsreader 28px. A row of four stat tiles (white, radius 12px, 1px border, no icons): "Invited 81 of 81", "Joined 54 of 81 (67%)", "Profiles complete 38 of 81 (47%)", "Active this week 41". Numbers in IBM Plex Sans 36px semibold with tabular figures; labels in 14px secondary; a small "+6 this week" in success green under Joined.

Below, two columns. Left (wider): "Needs attention" list with rows: "9 invites not opened after 3 days" with "Resend" button; "2 invites bounced" with "Fix email"; "16 profiles under 50%" with "Send nudge"; "1 open report" with "Review". Each row has a status badge on the left.
Right: "Joined over time", a simple single-line chart in lagoon showing cumulative joined members over 14 days, light gridlines, no fill under the line. Below it, "Latest announcement" card with brass left border and a "Post new" button.
```

### 4.2 Cohort desk — members table
```
Desktop web app: cohort desk, Members page.

Toolbar: search field "Search members", a status filter dropdown "All statuses", "Export CSV" secondary button, "Invite members" primary button.

Table with sticky header (header text 14px semibold secondary): checkbox column; Member (avatar 32px + name + email below in 13px secondary); Company; Industry; Status badge (Joined in green tint, Invited in lagoon tint, Not invited neutral, Invite expired in amber tint, Bounced in red tint); Profile (a small progress bar with "80%"); Last active ("Today", "3 days ago", "Never"); and an overflow menu column. Row height 56px, 1px row dividers, no zebra stripes.

Show 10 rows with the sample people plus generic fictional names. Two rows selected, revealing a bulk action bar above the table: "2 selected", "Resend invites", "Send nudge", "Clear".
```

### 4.3 Cohort desk — invite members dialog
```
Desktop web app: the "Invite members" dialog open over the Members page with a dark scrim.

Dialog 720px wide, radius 12px. Title "Invite members to SMP 102". Tabs: "One person" and "Paste a list" (selected). A large textarea with pasted rows "Name, email". Below, a preview table showing 5 parsed rows with a status column: 4 rows "Ready" in green tint, 1 row "Invalid email" in red tint with the email underlined in red. On the right side of the dialog, a narrow preview of the invite email: school logo placeholder, "Tunde Bakare invited you to join SMP 102 on Syndicate", a lagoon button "Join your cohort", and small print "This link expires in 7 days."

Footer: "Cancel" secondary, "Send 4 invites" primary.
```

### 4.4 Cohort desk — announcement composer
```
Desktop web app: cohort desk, Announcements, composing a new announcement.

Two columns. Left: Title input, a body editor with a small toolbar (bold, italic, link, bulleted list), toggles "Pin to top of Home" and "Also send by email" (on), a "When" control with "Now" and "Pick date and time". Primary button "Post announcement".
Right: "Preview" showing the announcement card as members will see it (white card, 3px brass left border with no rounding on that side, pin icon, title, body, author row with "Cohort lead" badge).

Below: "Past announcements" list with title, date and read rate "64 of 81 read".
```

### 4.5 Super admin — overview
```
Desktop web app: super admin console. This must look clearly different from the member app.

Top bar 48px in brass #B8862B across the full width with dark text #0A2E34: "Super admin" on the left, a red-tinted "Production" badge, and the admin's avatar on the right.

Left sidebar white with a right border (not lagoon): Overview (active), Schools and cohorts, Import, People, Reports, Privacy requests, Audit log, Feature flags, System health.

Main area: a row of seven compact stat tiles: Schools 1, Cohorts 1, Members 81, Weekly active 41, Messages this week 312, Open reports 1, Privacy requests 0. Below, a table "Cohorts" with columns: Cohort, School, Members, Joined %, Active %, Last activity, Errors (24h). One row: SMP 102, Lagos Business School, 81, 67%, 51%, "4 min ago", 0.
```

### 4.6 Super admin — import wizard (review step)
```
Desktop web app, super admin console: Import wizard, step 3 of 4 "Review and clean". A horizontal stepper at the top: Upload, Map columns, Review and clean (current), Confirm.

Summary line: "81 rows. 72 ready, 9 need attention."

Table of rows with columns: Row, Name, Email, Phone, Industry, Issues. Issue cells show short messages in red or amber tint: "Phone has 11 digits after +234", "Duplicate of row 14", "Industry 'Financial servicies' — did you mean Financial services?" with an inline "Accept" text button, "No email". Each problem cell is editable inline (show one cell in edit mode with an input).

Filter tabs above the table: "All 81", "Needs attention 9", "Ready 72". Footer: "Back", "Skip 2 rows and continue" secondary, "Continue" primary.
```

### 4.7 Super admin — view as
```
Desktop web app: the member Directory screen (lagoon sidebar, name cards) while the super admin is viewing as a member.

A full-width bar fixed above everything, 44px tall, in brass #B8862B with dark text: an eye icon, "You are viewing as Adaeze Okafor. Everything you do is logged." and on the right a dark lagoon button "Exit view". The message composer anywhere on the page would be disabled, shown with the hint "Read-only while viewing as".

Then a second screen: the dialog that appears before viewing as: title "View as Adaeze Okafor", a required textarea "Reason" with placeholder "For example: checking a reported display bug on her profile", a checkbox "Allow actions (sending messages, editing)" unchecked, helper text "This is recorded in the audit log.", buttons "Cancel" and "Start viewing".
```

### 4.8 Super admin — audit log
```
Desktop web app, super admin console: Audit log.

Filters row: date range, "Actor" dropdown, "Action" dropdown, search. "Export CSV" secondary button.
Table: Time (e.g. "12 Oct 2026, 14:03:22 WAT"), Actor (avatar + name), Action (e.g. "Started view as", "Imported members", "Changed visibility", "Sent invites"), Target, Reason, IP address. Monospace is not used; all IBM Plex Sans with tabular figures. No edit or delete controls anywhere. A caption under the title: "Entries can't be edited or deleted."
```

---

## 5. Refinement prompts (use after any screen)

- "Keep everything the same but make the spacing more generous: 24px between sections, 20px card padding."
- "Names must be in Newsreader serif. Everything else in IBM Plex Sans. Fix any text that doesn't follow this."
- "Remove all shadows except on the bottom sheet. Use 1px #DDE2E1 borders instead."
- "Remove any gradient, emoji, illustration of people or decorative icon."
- "Make all text sentence case. Remove any all-caps labels."
- "Brass #B8862B should only appear on avatar rings, the top line of name cards, cohort lead badges and announcement borders. Remove it from everywhere else."
- "Show this screen in dark mode: background #0F1517, cards #172024, text #E8EDEC, secondary text #A3AEB0, borders #2B3A3F, primary #6FB3BA with #0A2E34 text on primary buttons, brass #D2A24A."
- "Show the loading state of this screen using grey skeleton blocks that match the layout. No spinners."
- "Show the empty state: a 32px outline icon, a one-line title, one sentence of guidance and one button."
- "Make this screen work at 360px wide without any horizontal scrolling."
- "Increase contrast: secondary text must be #5B6669 or darker on white."

---

## 6. Handoff prompt for v0 (to get code)

Upload or paste DESIGN.md into v0 first, then:

```
Build this as a Next.js App Router project with TypeScript, Tailwind CSS and shadcn/ui, following the attached DESIGN.md exactly.

1. Set up the design tokens from section 4 as CSS variables in globals.css for light and dark themes, and map them in tailwind.config (colours lagoon, brass, ink, slate, mist, line, canvas, surface, success, warning, danger; radii 6 and 12; the spacing scale). Load Newsreader and IBM Plex Sans with next/font.
2. Build the components in section 6 as reusable components in /components: NameCard, PersonRow, Avatar (with initials fallback and brass ring), VisibilityControl, FilterChip, StatusBadge, CompletionMeter, StatTile, MessageBubble, Composer, AnnouncementCard, EmptyState, ViewAsBanner, OfflineBar.
3. Build the member app shell: mobile bottom tab bar under 768px, collapsed sidebar 768–1023px, full 248px lagoon sidebar from 1024px.
4. Build these pages with static sample data from section 11 (no backend yet): /directory, /people/[id], /me, /me/edit, /messages, /messages/[id], /home.
5. Every list has a loading skeleton and an empty state using the copy in section 8.
6. Meet WCAG 2.2 AA: visible focus rings, labels on all inputs, aria-live for new messages.
7. Implement the motion system in section 4.8 with the Motion library (motion.dev): duration and easing tokens as CSS variables, the spring presets, button press/hover/loading/success states, list stagger on first load, layout animations when filtering, shared-element transition from name card to profile, and the lagoon tide background on sign-in and onboarding only. Respect prefers-reduced-motion and the in-app Reduce motion setting.

Start with tokens and the NameCard, Avatar and PersonRow components, then the Directory page.
```

---

## 7. Review checklist for every generated screen

- [ ] Names are in the serif; everything else is sans.
- [ ] No all-caps text, no gradients, no emoji, no stock people, no arrows in buttons.
- [ ] Brass appears only where DESIGN.md allows it.
- [ ] Primary actions say what they do ("Send invites", not "Submit").
- [ ] Hidden or empty fields are absent, never shown as "Not provided".
- [ ] Phone numbers are formatted +234 XXX XXX XXXX.
- [ ] Touch targets at least 44px; body text at least 16px on mobile.
- [ ] Status badges have text, not just colour.
- [ ] Super admin screens have the brass top bar; member screens never do.
- [ ] Only fictional people and companies appear.
