import { ChatBox } from "../components/ChatBox";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "How It Works" },
  { href: "#portfolio", label: "Examples" },
  { href: "#about", label: "About" },
];

const services = [
  {
    title: "Review Reply Automation",
    description:
      "Reply faster to Google and Facebook reviews with drafts that sound professional, stay on-brand, and flag unhappy customers before problems grow.",
  },
  {
    title: "Lead Follow-Up Systems",
    description:
      "Turn missed calls, form leads, and inquiry messages into organized follow-up so potential customers do not slip through the cracks.",
  },
  {
    title: "Contractor Content Engine",
    description:
      "Turn job photos into social posts, captions, and simple local marketing content without needing to sit down and write everything yourself.",
  },
  {
    title: "FAQ and Customer Messaging",
    description:
      "Answer common questions about pricing, hours, services, availability, and policies without making customers wait on a reply.",
  },
  {
    title: "Custom AI Assistant for Your Business",
    description:
      "A practical assistant trained on your business info, documents, pricing, and workflow so your team gets useful help, not generic AI output.",
  },
  {
    title: "Small Workflow Automation",
    description:
      "We identify repetitive admin work and build small automations that save time every week instead of adding more software chaos.",
  },
];

const examples = [
  {
    label: "Restaurant or café",
    before:
      "Owners or managers spend time replying to reviews late at night and trying to keep the tone professional.",
    after:
      "A faster review workflow with suggested replies, issue flagging, and less time wasted inside review apps.",
  },
  {
    label: "Home service business",
    before:
      "Photos pile up, posts never get made, and potential customers do not see recent work often enough.",
    after:
      "A simple content pipeline that turns real job photos into usable posts and marketing material.",
  },
  {
    label: "Retail or appointment-based shop",
    before:
      "Customers send the same questions after hours and staff has to repeat the same answers every day.",
    after:
      "A cleaner customer-answer system for common questions, promos, pickup details, and handoff when a human is needed.",
  },
];

const processSteps = [
  {
    title: "1. Short discovery call",
    description:
      "We figure out where time is being wasted, what is repetitive, and what is actually worth automating.",
  },
  {
    title: "2. Pick one high-value problem",
    description:
      "We start with one practical win instead of trying to automate your whole business at once.",
  },
  {
    title: "3. Build and test",
    description:
      "We build a working system around your real business information and adjust it until it is useful.",
  },
  {
    title: "4. Handoff and improve",
    description:
      "You get something your team can actually use, plus cleanup and refinement after launch.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050a14] text-slate-100">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-90"
        aria-hidden
      >
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] h-[380px] w-[380px] rounded-full bg-blue-600/10 blur-[100px]" />
        <div className="absolute bottom-0 left-[-5%] h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-[90px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#050a14]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a
            href="#top"
            className="group flex items-center gap-3 text-lg font-semibold tracking-tight text-white"
          >
            <span
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 text-[#050a14] shadow-[0_0_24px_-4px_rgba(34,211,238,0.65)] transition group-hover:shadow-[0_0_32px_-2px_rgba(34,211,238,0.85)]"
              aria-hidden
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className="shrink-0"
              >
                <path
                  d="M12 3L4 7v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V7l-8-4z"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 12l2 2 4-5"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>AI Forge Advantage</span>
          </a>

          <nav
            className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex"
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-cyan-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="tel:3253891081"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-black shadow-[0_0_24px_-6px_rgb(34,211,238,0.9)] transition hover:bg-cyan-300 hover:shadow-[0_0_36px_-4px_rgb(34,211,238,1)]"
          >
            Call Now
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-24">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-200">
            Fort Worth–focused AI automation
          </p>

          <h1 className="max-w-4xl text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.08]">
            Practical AI systems for Fort Worth small businesses
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate-300 sm:text-xl">
            We help local businesses save time, follow up faster, and handle
            repetitive work with simple AI tools built around real workflows.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="tel:3253891081"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-8 py-3.5 text-base font-semibold text-black shadow-[0_0_28px_-8px_rgba(34,211,238,0.9)] transition hover:bg-cyan-300"
            >
              Call Now (325) 389-1081
            </a>

            <a
              href="mailto:ai.advantage.freelance.consulting@gmail.com?subject=Free%20AI%20Discovery%20Call"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-8 py-3.5 text-base font-semibold text-white transition hover:border-cyan-400/40 hover:bg-white/10"
            >
              Email for a Free Call
            </a>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-sm font-medium text-slate-400">
                Built for real operations
              </p>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-white">
                Practical over flashy
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-sm font-medium text-slate-400">
                Start with one win
              </p>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-white">
                Small systems that pay off
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-sm font-medium text-slate-400">
                Local-first approach
              </p>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-white">
                Fort Worth aware
              </p>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="border-t border-white/5 bg-[#060f1f]/80 py-20 sm:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                What we can build for you
              </h2>
              <p className="mt-4 text-lg text-slate-300">
                Clear, useful automations for businesses that want less wasted
                time and better follow-through.
              </p>
            </div>

            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((item) => (
                <li
                  key={item.title}
                  className="group flex flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 transition hover:border-cyan-400/35 hover:shadow-[0_20px_60px_-30px_rgba(34,211,238,0.35)]"
                >
                  <span
                    className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/25"
                    aria-hidden
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="shrink-0"
                    >
                      <path
                        d="M12 6v6l4 2"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="9"
                        stroke="currentColor"
                        strokeWidth="1.75"
                      />
                    </svg>
                  </span>

                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                    {item.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-cyan-300 opacity-0 transition group-hover:opacity-100">
                    Ask about this
                    <span aria-hidden>→</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="process" className="py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                How it works
              </h2>
              <p className="mt-4 text-lg text-slate-300">
                We keep this simple. No giant tech overhaul. No buzzword maze.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((step) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-white/10 bg-[#071225] p-6"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="portfolio"
          className="border-t border-white/5 bg-[#060f1f]/80 py-20 sm:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Example outcomes
              </h2>
              <p className="mt-4 text-lg text-slate-300">
                These are sample scenarios based on common local business
                problems we can help solve.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {examples.map((item) => (
                <article
                  key={item.label}
                  className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#071225]"
                >
                  <div className="border-b border-white/10 px-5 py-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-200/90">
                      {item.label}
                    </h3>
                  </div>

                  <div className="grid flex-1 gap-0 sm:grid-cols-2 lg:grid-cols-1">
                    <div className="border-white/10 p-5 sm:border-r lg:border-r-0 lg:border-b">
                      <p className="text-xs font-bold uppercase tracking-wider text-rose-300/90">
                        Before
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400">
                        {item.before}
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-cyan-500/10 to-transparent p-5">
                      <p className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                        After
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-200">
                        {item.after}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Built for local businesses that do not have time to waste
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                AI Forge Advantage helps Fort Worth businesses use AI in ways
                that are practical, understandable, and actually useful day to
                day.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                We are not trying to bury you in tech jargon or sell you some
                giant complicated system. We focus on the repetitive work that
                costs you time every week and build around that.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-[#050a14] to-[#050a14] p-8 shadow-[0_0_60px_-20px_rgba(34,211,238,0.45)]">
              <blockquote className="text-lg font-medium leading-relaxed text-white">
                “We are not here to sell buzzwords. We build small, reliable AI
                systems that earn their place in your business.”
              </blockquote>

              <ul className="mt-8 space-y-3 text-sm text-slate-300">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  Clear scope and plain-English recommendations
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  Systems built around your business, not generic templates
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  Simple handoff so you are not stuck with mystery tech
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  Follow-up refinement after launch
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          id="cta"
          className="border-t border-white/5 py-20 sm:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl border border-cyan-400/25 bg-gradient-to-br from-[#0a1f33] via-[#061018] to-[#050a14] px-6 py-14 text-center shadow-[0_0_80px_-24px_rgba(34,211,238,0.55)] sm:px-12 sm:py-16">
              <div
                className="pointer-events-none absolute inset-0 opacity-40"
                aria-hidden
              >
                <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-cyan-400/30 blur-[80px]" />
                <div className="absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-blue-500/25 blur-[70px]" />
              </div>

              <div className="relative">
                <h2 className="mx-auto max-w-3xl text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Ready to see what AI could actually do for your business?
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-slate-300">
                  Call or email for a short discovery conversation. We will look
                  at where your time is being wasted and tell you honestly what
                  is worth automating first.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href="tel:3253891081"
                    className="inline-flex w-full items-center justify-center rounded-full bg-cyan-400 px-10 py-4 text-base font-semibold text-[#050a14] shadow-[0_0_48px_-8px_rgba(34,211,238,0.9)] transition hover:bg-cyan-300 sm:w-auto"
                  >
                    Call Now
                  </a>

                  <a
                    href="mailto:ai.advantage.freelance.consulting@gmail.com?subject=Free%20AI%20Discovery%20Call"
                    className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-10 py-4 text-base font-semibold text-white transition hover:border-cyan-400/40 hover:bg-white/10 sm:w-auto"
                  >
                    Email Me
                  </a>
                </div>

                <p className="mt-6 text-sm text-slate-400">
                  Prefer email?{" "}
                  <a
                    href="mailto:ai.advantage.freelance.consulting@gmail.com?subject=Free%20AI%20Discovery%20Call"
                    className="font-medium text-cyan-300 underline-offset-4 hover:underline"
                  >
                    ai.advantage.freelance.consulting@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#040814] py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-lg font-semibold text-white">AI Forge Advantage</p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-400">
              Practical AI systems for Fort Worth small businesses.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm font-medium text-slate-400">
            <a href="#services" className="hover:text-cyan-300">
              Services
            </a>
            <a href="#process" className="hover:text-cyan-300">
              How It Works
            </a>
            <a href="#portfolio" className="hover:text-cyan-300">
              Examples
            </a>
            <a href="#about" className="hover:text-cyan-300">
              About
            </a>
          </div>

          <p className="text-xs text-slate-500 lg:text-right">
            Call or text: (325) 389-1081
            <br />
            ai.advantage.freelance.consulting@gmail.com
          </p>
        </div>
      </footer>
      <ChatBox />
    </div>
  );
}