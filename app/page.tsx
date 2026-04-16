const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About" },
];

const services = [
  {
    title: "Restaurant Review Automation",
    description:
      "Draft thoughtful replies, route issues to managers, and keep your reputation polished—without living in review apps.",
  },
  {
    title: "Contractor Social Media Machine",
    description:
      "Turn job photos into scheduled posts, captions, and local SEO-friendly blurbs that showcase real Fort Worth work.",
  },
  {
    title: "Real Estate AI",
    description:
      "Listing summaries, buyer FAQs, and follow-up drafts tuned to your voice so you stay fast without sounding generic.",
  },
  {
    title: "Retail Chatbots",
    description:
      "After-hours answers for hours, returns, and promotions—grounded in your policies so customers feel helped, not bounced.",
  },
  {
    title: "Custom Business Brain",
    description:
      "One assistant trained on your docs, pricing, and process. Built for owners who want leverage, not another SaaS tab.",
  },
];

const portfolioItems = [
  {
    label: "Local restaurant group",
    before: "2+ hours nightly on Google/Yelp replies; inconsistent tone.",
    after:
      "90-second review queue with suggested replies and escalation tags—on-brand every time.",
  },
  {
    label: "Home services crew",
    before: "Social posts slipped for weeks; marketing lived in someone’s head.",
    after:
      "Photo → post pipeline with a Fort Worth–local voice and a simple weekly calendar.",
  },
  {
    label: "Boutique retail",
    before: "Staff answering the same DMs after close; lost sales overnight.",
    after:
      "Trained chat flow for sizing, pickup, and promos with human handoff when it matters.",
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
            className="group flex items-center gap-2 text-lg font-semibold tracking-tight text-white"
          >
            <span
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 text-[#050a14] shadow-[0_0_24px_-4px_rgba(34,211,238,0.65)] transition group-hover:shadow-[0_0_32px_-2px_rgba(34,211,238,0.85)]"
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
            href="#cta"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-[#050a14] shadow-[0_0_24px_-6px_rgba(34,211,238,0.9)] transition hover:bg-cyan-300 hover:shadow-[0_0_36px_-4px_rgba(34,211,238,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          >
            Book a Call
          </a>
        </div>
      </header>

      <main id="top">
        <section
          className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-24"
          aria-labelledby="hero-heading"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-200">
            Fort Worth–focused AI automation
          </p>
          <h1
            id="hero-heading"
            className="max-w-4xl text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.08]"
          >
            Forging AI Advantages for Fort Worth Businesses
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate-300 sm:text-xl">
            Save 10–20 hours per week with custom AI tools built for local
            businesses
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-8 py-3.5 text-base font-semibold text-[#050a14] shadow-[0_0_40px_-8px_rgba(34,211,238,0.85)] transition hover:bg-cyan-300"
            >
              Book a discovery call
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-base font-semibold text-white transition hover:border-cyan-400/40 hover:bg-white/10"
            >
              Explore services
            </a>
          </div>
          <dl className="mt-14 grid gap-6 border-t border-white/10 pt-10 sm:grid-cols-3">
            <div>
              <dt className="text-sm font-medium text-slate-400">
                Built for operators
              </dt>
              <dd className="mt-1 text-2xl font-semibold tracking-tight text-white">
                Hands-on delivery
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-slate-400">
                Grounded in your business
              </dt>
              <dd className="mt-1 text-2xl font-semibold tracking-tight text-white">
                Custom workflows
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-slate-400">
                Local context
              </dt>
              <dd className="mt-1 text-2xl font-semibold tracking-tight text-white">
                Fort Worth–aware
              </dd>
            </div>
          </dl>
        </section>

        <section
          id="services"
          className="border-t border-white/5 bg-[#060f1f]/80 py-20 sm:py-24"
          aria-labelledby="services-heading"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2
                id="services-heading"
                className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                Services designed for real-world small business
              </h2>
              <p className="mt-4 text-lg text-slate-300">
                Practical automations that plug into how you already work—no
                cookie-cutter chatbots unless you want one.
              </p>
            </div>
            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((item) => (
                <li
                  key={item.title}
                  className="group flex flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition hover:border-cyan-400/35 hover:shadow-[0_20px_60px_-30px_rgba(34,211,238,0.35)]"
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
                    Learn on your call
                    <span aria-hidden>→</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="portfolio"
          className="py-20 sm:py-24"
          aria-labelledby="portfolio-heading"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <h2
                  id="portfolio-heading"
                  className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                >
                  Outcomes you can recognize
                </h2>
                <p className="mt-4 text-lg text-slate-300">
                  Mock before/after snapshots—representative of the clarity and
                  time savings we build toward.
                </p>
              </div>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {portfolioItems.map((item) => (
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

        <section
          id="about"
          className="border-t border-white/5 bg-[#060f1f]/80 py-20 sm:py-24"
          aria-labelledby="about-heading"
        >
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
            <div>
              <h2
                id="about-heading"
                className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                Rooted in Fort Worth
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                AI Forge Advantage works with small businesses across Fort Worth
                and nearby neighborhoods—restaurants on Camp Bowie, contractors
                serving Tarrant County, retailers near Sundance Square, and
                independent pros who do not have time to babysit software.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                We prioritize trust: clear scope, sensible guardrails around
                customer data, and systems your team can actually run day to day.
              </p>
            </div>
            <div className="rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-[#050a14] to-[#050a14] p-8 shadow-[0_0_60px_-20px_rgba(34,211,238,0.45)]">
              <blockquote className="text-lg font-medium leading-relaxed text-white">
                “We are not here to sell buzzwords. We ship small, reliable
                automations that earn their place in your week.”
              </blockquote>
              <p className="mt-6 text-sm font-semibold text-cyan-200">
                — AI Forge Advantage
              </p>
              <ul className="mt-8 space-y-3 text-sm text-slate-300">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  Local-first discovery: we learn your real workflow, not a
                  generic intake form.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  Documentation and handoff so you are never locked into mystery
                  prompts.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  Iteration after launch—because the first version is never the
                  last.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          id="cta"
          className="py-20 sm:py-24"
          aria-labelledby="cta-heading"
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
                <h2
                  id="cta-heading"
                  className="mx-auto max-w-3xl text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl"
                >
                  Ready to reclaim your week?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-slate-300">
                  Book a short call. We will map your highest-friction tasks and
                  tell you honestly what AI can—and should—take off your plate.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href="mailto:hello@aiforgeadvantage.com?subject=Book%20a%20call%20%E2%80%94%20Fort%20Worth%20AI%20automation"
                    className="inline-flex w-full items-center justify-center rounded-full bg-cyan-400 px-10 py-4 text-base font-semibold text-[#050a14] shadow-[0_0_48px_-8px_rgba(34,211,238,0.9)] transition hover:bg-cyan-300 sm:w-auto"
                  >
                    Book a Call
                  </a>
                  <a
                    href="#services"
                    className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-10 py-4 text-base font-semibold text-white transition hover:border-cyan-400/40 hover:bg-white/10 sm:w-auto"
                  >
                    Review services first
                  </a>
                </div>
                <p className="mt-6 text-sm text-slate-400">
                  Prefer a quick note? Email{" "}
                  <a
                    href="mailto:hello@aiforgeadvantage.com"
                    className="font-medium text-cyan-300 underline-offset-4 hover:underline"
                  >
                    hello@aiforgeadvantage.com
                  </a>
                  .
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
              AI automation and custom tools for Fort Worth small businesses.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm font-medium text-slate-400">
            <a href="#services" className="hover:text-cyan-300">
              Services
            </a>
            <a href="#portfolio" className="hover:text-cyan-300">
              Portfolio
            </a>
            <a href="#about" className="hover:text-cyan-300">
              About
            </a>
            <a href="#cta" className="hover:text-cyan-300">
              Book a Call
            </a>
          </div>
          <p className="text-xs text-slate-500 lg:text-right">
            © {new Date().getFullYear()} AI Forge Advantage. Fort Worth, Texas.
          </p>
        </div>
      </footer>
    </div>
  );
}
