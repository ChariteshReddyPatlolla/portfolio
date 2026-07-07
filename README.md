# Charitesh-OS: Cyber-OS Portfolio Workstation

A retro, cyberpunk operating system-themed portfolio workstation designed and built for **Patlolla Charitesh Reddy** (Computer Science Undergraduate — Software Engineering & Distributed Systems).

🔗 **Live Deployment Link:** [https://portfolio-mot539ykr-charitesh.vercel.app/](portfolio-6kvbzokkr-charitesh.vercel.app)

---

## 🖥️ Core Features

*   **Retro BIOS Boot Sequence:** An old-school computer initialization loading screen testing CPU cores, system RAM, local disk mounts, and machine learning models (skippable with `ESC` or `ENTER`).
*   **Locked Security Lock Screen:** Displays real-time digital clock, calendar dates, network nodes uptime, and an override system entry gateway.
*   **Interactive Desktop Dashboard:** Curated grid mesh styling with CRT scanline flicker filter. Renders draggable/resizable window app panels powered by Framer Motion.
*   **Programmatic Soundtrack Synthesizer:** Renders a lo-fi ambient background hum using browser Web Audio API oscillators (100% code-generated, zero external assets).
*   **Fully Functional Shell Terminal:** A retro CLI prompt supporting custom executable commands:
    *   `help` - lists shell commands.
    *   `ls` - directories mapping (`about.txt`, `skills.json`, `contact.sh`, `secret.enc`).
    *   `cat <file>` - prints file data (obj description, tech stack JSON matrix).
    *   `neofetch` - displays CPU ASCII art alongside specs.
    *   `./contact.sh` - resolves contact details (email, phone, LinkedIn, GitHub, LeetCode).
    *   `clear` - wipes terminal history logs.
*   **Seamless Database Portfolio:** Scroll down past the desktop to load a content-dense linear portfolio mapping algorithm metrics (LeetCode 1836+ Knight, Codeforces 1400+ Specialist), education timeline, project grid breakdowns (OmniAgent, Finance Tracker, Sign Language System), achievements, and a message dispatch console.
*   **Custom Sub-routes:**
    *   `/who-is-charitesh` - Q&A panel.
    *   `/guestbook` - client-side LocalStorage guestbook log commits.
    *   `/blog` & `/blog/[slug]` - retro engineering blogs.
    *   `/now` & `/uses` - current focuses and developer setup gear index.
    *   `/stack` - full technologies index.
    *   `/charitesh` - printable resume layout.

---

## 🛠️ Tech Stack

*   **Framework:** Next.js 16 (App Router)
*   **Core:** React 19, TypeScript
*   **Styling:** Tailwind CSS v4 (configured with CSS theme variables, CRT monitors flicker keyframes, text shadows)
*   **Animations:** Framer Motion (window dragging / spring animations)
*   **Icons:** Lucide React

---

## 🚀 Getting Started

### Local Development

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Compiles

To compile and verify the build locally:
```bash
npm run build
npm run start
```
