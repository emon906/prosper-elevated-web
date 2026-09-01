import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Check, HardHat, Menu, Phone, Play, ShieldCheck, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Prosper Roofing | Premium Roofing Services" },
    { name: "description", content: "Prosper Roofing delivers refined roofing craftsmanship and honest guidance. Call Moses Caballero at 512-632-6878 for a free estimate." },
    { property: "og:title", content: "Prosper Roofing | Premium Roofing Services" },
    { property: "og:description", content: "Elevated roofing craftsmanship, thoughtful service, and lasting protection." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

const nav = ["About", "Services", "Projects", "Why Us", "Contact"];
const services = ["Roof Replacement", "Roof Repair", "Storm Restoration", "Detailed Inspections"];

function MediaPlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return <div className={`group relative grid overflow-hidden border border-primary/15 bg-sky-soft/45 ${className}`}>
    <div className="absolute inset-4 border border-primary/10 transition-all duration-700 group-hover:inset-3" />
    <div className="m-auto flex flex-col items-center gap-3 text-center text-primary/55">
      <HardHat className="size-6 stroke-[1.2]" aria-hidden="true" />
      <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">{label}</span>
    </div>
  </div>;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-50 border-b border-primary-foreground/20">
        <div className="mx-auto grid h-20 max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center px-5 sm:px-8 lg:px-12">
          <a href="#top" className="flex min-w-0 items-center gap-3 text-primary-foreground" aria-label="Prosper Roofing home">
            <span className="grid size-10 shrink-0 place-items-center border border-primary-foreground/40"><span className="font-display text-xl font-bold">P</span></span>
            <span className="truncate text-sm font-semibold uppercase tracking-[0.18em]">Prosper Roofing</span>
          </a>
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {nav.map((item) => <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary-foreground/80 transition-colors hover:text-primary-foreground">{item}</a>)}
          </nav>
          <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && <nav className="border-t border-primary-foreground/15 bg-primary px-6 py-5 lg:hidden">{nav.map((item) => <a key={item} onClick={() => setMenuOpen(false)} href={`#${item.toLowerCase().replace(" ", "-")}`} className="block py-3 text-sm font-semibold uppercase tracking-[0.15em] text-primary-foreground">{item}</a>)}</nav>}
      </header>

      <section id="top" className="relative flex min-h-[92svh] items-end overflow-hidden bg-primary pt-28 text-primary-foreground">
        <div className="absolute inset-0 opacity-45 [background:linear-gradient(115deg,transparent_0%,transparent_52%,var(--color-sky)_52%,var(--color-sky)_53%,transparent_53%)]" />
        <div className="absolute right-0 top-20 h-[65%] w-[36%] border-l border-primary-foreground/15 bg-secondary/15" />
        <div className="relative mx-auto grid w-full max-w-[1440px] gap-10 px-5 pb-14 sm:px-8 sm:pb-20 lg:grid-cols-[1fr_0.55fr] lg:px-12 lg:pb-24">
          <div className="reveal-up max-w-4xl">
            <div className="mb-7 flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-primary-foreground/70"><span className="h-px w-12 bg-accent" />Crafted to protect. Designed to endure.</div>
            <h1 className="max-w-4xl text-6xl font-semibold leading-[0.88] sm:text-7xl lg:text-[7.5rem]">Elevated roofing,<br/><em className="font-medium text-secondary">built with purpose.</em></h1>
            <p className="mt-8 max-w-xl text-sm leading-7 text-primary-foreground/75 sm:text-base">Premium craftsmanship, clear guidance, and lasting protection for the place you call home.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="luxury" size="luxury" className="bg-accent text-accent-foreground hover:bg-accent/90"><a href="tel:5126326878">Free estimate <ArrowRight /></a></Button>
              <Button asChild variant="luxuryOutline" size="luxury" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary"><a href="#projects">View our work</a></Button>
            </div>
          </div>
          <div className="flex items-end justify-between gap-6 border-t border-primary-foreground/20 pt-5 lg:flex-col lg:items-end lg:justify-end lg:border-t-0">
            <div className="text-right"><span className="block font-display text-3xl">512-632-6878</span><span className="text-[10px] uppercase tracking-[0.2em] text-primary-foreground/60">Speak directly with Moses</span></div>
            <a href="#about" aria-label="Explore" className="grid size-12 shrink-0 place-items-center border border-primary-foreground/30 transition-colors hover:bg-primary-foreground/10"><ArrowDown className="size-4" /></a>
          </div>
        </div>
      </section>

      <section id="about" className="px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.55fr_1fr]">
          <div><p className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary/60">01 — About & trust</p><p className="mt-8 max-w-xs text-sm leading-7 text-muted-foreground">A hands-on, relationship-first approach from the first conversation to the final inspection.</p></div>
          <div><h2 className="max-w-4xl text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">Roofing is more than a structure. <span className="text-sky">It’s peace of mind.</span></h2><div className="mt-10 grid gap-8 border-t border-border pt-8 sm:grid-cols-2"><p className="text-sm leading-7 text-muted-foreground">Prosper Roofing brings thoughtful planning and meticulous execution to every home. We believe the experience should feel as solid as the finished roof.</p><div><p className="font-display text-3xl font-semibold">Moses Caballero</p><p className="mt-1 text-xs uppercase tracking-[0.18em] text-primary/55">Owner, Prosper Roofing</p></div></div></div>
        </div>
      </section>

      <section id="services" className="bg-sky-soft px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1280px] gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div><p className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary/60">02 — Our services</p><h2 className="mt-5 text-5xl font-semibold leading-none sm:text-6xl">One roof.<br/>Every detail.</h2><p className="mt-6 max-w-md text-sm leading-7 text-muted-foreground">From focused repairs to complete replacements, every solution is considered, clearly explained, and built around your home.</p><div className="mt-9 divide-y divide-primary/15 border-y border-primary/15">{services.map((service, i) => <div key={service} className="flex items-center justify-between py-4"><span className="text-sm font-semibold">{service}</span><span className="font-display text-lg text-primary/35">0{i + 1}</span></div>)}</div></div>
          <MediaPlaceholder label="Your service image" className="aspect-[4/5] min-h-[420px]" />
        </div>
      </section>

      <section id="projects" className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1280px]"><div className="flex flex-col justify-between gap-5 border-b border-border pb-8 sm:flex-row sm:items-end"><div><p className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary/60">03 — Selected work</p><h2 className="mt-4 text-5xl font-semibold sm:text-6xl">Built beautifully.</h2></div><p className="max-w-sm text-sm leading-7 text-muted-foreground">A considered gallery for the workmanship, finishes, and transformations that define Prosper Roofing.</p></div>
          <div className="mt-8 grid gap-4 md:grid-cols-12"><MediaPlaceholder label="Project image 01" className="aspect-[4/3] md:col-span-7"/><MediaPlaceholder label="Project image 02" className="aspect-[4/3] md:col-span-5"/><MediaPlaceholder label="Project image 03" className="aspect-[4/3] md:col-span-5"/><MediaPlaceholder label="Project image 04" className="aspect-[4/3] md:col-span-7"/></div>
        </div>
      </section>

      <section className="bg-forest px-5 py-24 text-primary-foreground sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1280px]"><div className="mb-8 flex items-end justify-between"><div><p className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary-foreground/55">04 — In motion</p><h2 className="mt-4 text-4xl font-semibold sm:text-5xl">The craft, up close.</h2></div><Play className="hidden size-8 stroke-[1.2] text-accent sm:block" /></div><div className="group relative grid aspect-video min-h-[260px] border border-primary-foreground/20 bg-primary-foreground/5"><div className="absolute inset-4 border border-primary-foreground/10"/><div className="m-auto text-center"><span className="mx-auto grid size-16 place-items-center rounded-full border border-primary-foreground/35 transition-transform duration-500 group-hover:scale-110"><Play className="ml-1 size-5" /></span><p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-primary-foreground/55">Your roofing reel</p></div></div></div>
      </section>

      <section id="why-us" className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1280px] gap-14 lg:grid-cols-2 lg:items-center"><MediaPlaceholder label="Your craftsmanship image" className="aspect-square"/><div className="lg:pl-12"><p className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary/60">05 — Why Prosper</p><h2 className="mt-5 text-5xl font-semibold leading-none sm:text-6xl">The standard is<br/><em className="text-sky">in the details.</em></h2><div className="mt-9 space-y-6">{["Owner-led attention from start to finish", "Clear communication and honest recommendations", "Refined workmanship made to last"].map((item) => <div key={item} className="flex gap-4 border-t border-border pt-5"><span className="grid size-7 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"><Check className="size-3.5" /></span><p className="pt-1 text-sm font-semibold">{item}</p></div>)}</div><div className="mt-10 flex items-center gap-4 bg-sky-soft p-5"><ShieldCheck className="size-8 shrink-0 stroke-[1.4] text-primary"/><p className="text-xs leading-6 text-muted-foreground">Thoughtful service. Enduring quality. A roof you can feel confident beneath.</p></div></div></div>
      </section>

      <section id="contact" className="bg-cream-deep px-5 pt-24 sm:px-8 lg:px-12 lg:pt-32">
        <div className="mx-auto max-w-[1280px]"><div className="grid gap-10 border-b border-primary/20 pb-20 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary/60">06 — Free estimate</p><h2 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.95] sm:text-7xl lg:text-8xl">Let’s put a better roof over your head.</h2></div><Button asChild variant="luxury" size="luxury" className="w-full sm:w-auto"><a href="tel:5126326878"><Phone /> Call 512-632-6878</a></Button></div>
          <footer className="grid gap-6 py-8 text-xs sm:grid-cols-3 sm:items-center"><div className="font-semibold uppercase tracking-[0.15em]">Prosper Roofing</div><div className="sm:text-center">Moses Caballero, Owner</div><div className="text-muted-foreground sm:text-right">Quality above all.</div></footer>
        </div>
      </section>
    </main>
  );
}
