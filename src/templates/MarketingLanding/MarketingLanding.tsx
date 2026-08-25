import * as React from "react"
import { Hero } from "../../components/marketing/Hero"
import { FeatureGrid } from "../../components/marketing/FeatureGrid"
import { SponsorGrid } from "../../components/marketing/SponsorGrid"
import { Pricing } from "../../components/marketing/Pricing"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../components/data-display/Accordion"
import { VideoPlayer } from "../../components/media/VideoPlayer"
import { Button } from "../../components/elements/Button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "../../components/layout/Sheet"
import { ArrowRight, CheckCircle2, Zap, Shield, Globe, Menu } from "lucide-react"

export const MarketingLanding = () => {
  
  const sponsors = [
    { name: "Acme Corp", logo: <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png" className="h-8" alt="Acme" /> },
    { name: "Globex", logo: <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" className="h-8" alt="Globex" /> },
    { name: "Soylent", logo: <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" className="h-8" alt="Soylent" /> },
    { name: "Initech", logo: <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" className="h-8" alt="Initech" /> },
  ]

  const features = [
    {
      title: "Lightning Fast",
      description: "Optimized for speed. Every component is engineered to load instantly and perform beautifully at 60fps.",
      icon: <Zap className="h-6 w-6 text-yellow-500" />
    },
    {
      title: "Enterprise Security",
      description: "Bank-grade encryption and compliance built into the core. Your data is protected by industry-leading standards.",
      icon: <Shield className="h-6 w-6 text-green-500" />
    },
    {
      title: "Global CDN",
      description: "Deploy to edge networks worldwide with a single click. Your users get the same fast experience, anywhere.",
      icon: <Globe className="h-6 w-6 text-blue-500" />
    }
  ]

  const pricingTiers = [
    {
      id: "tier-1",
      name: "Starter",
      href: "#",
      priceMonthly: "$0",
      description: "Perfect for indie hackers and hobbyists.",
      features: [{ name: "1 Project" }, { name: "Basic Analytics" }, { name: "Community Support" }, { name: "1GB Storage" }],
      buttonText: "Start for free",
      buttonVariant: "outline" as const
    },
    {
      id: "tier-2",
      name: "Pro",
      href: "#",
      priceMonthly: "$29",
      description: "For professional developers building serious apps.",
      features: [{ name: "Unlimited Projects" }, { name: "Advanced Analytics" }, { name: "Priority Support" }, { name: "50GB Storage" }, { name: "Custom Domains" }],
      buttonText: "Upgrade to Pro",
      buttonVariant: "primary" as const,
      isPopular: true
    },
    {
      id: "tier-3",
      name: "Enterprise",
      href: "#",
      priceMonthly: "Custom",
      description: "For large teams with advanced security needs.",
      features: [{ name: "Unlimited Everything" }, { name: "Custom Contracts" }, { name: "24/7 Phone Support" }, { name: "Dedicated Success Manager" }, { name: "SSO/SAML" }],
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const
    }
  ]

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      {/* Navbar */}
      <header className="sticky top-0 z-40 w-full border-b border-[var(--color-border)] bg-[var(--color-background)]/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <button className="md:hidden p-2 -ml-2 text-[var(--color-foreground)]">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <SheetTitle>Navigation Menu</SheetTitle>
                <nav className="flex flex-col gap-4 mt-6 font-medium text-[var(--color-foreground)]">
                  <a href="#features" className="transition-colors hover:text-[var(--color-primary)]">Features</a>
                  <a href="#demo" className="transition-colors hover:text-[var(--color-primary)]">Demo</a>
                  <a href="#pricing" className="transition-colors hover:text-[var(--color-primary)]">Pricing</a>
                  <div className="h-px bg-[var(--color-border)] my-2" />
                  <a href="#" className="transition-colors hover:text-[var(--color-primary)]">Log in</a>
                </nav>
              </SheetContent>
            </Sheet>

            <div className="flex items-center gap-2 text-xl font-bold tracking-tighter">
              <div className="h-8 w-8 rounded-lg bg-[var(--color-primary)] flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" />
              </div>
              CordLab UI
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--color-muted-foreground)]">
            <a href="#features" className="hover:text-[var(--color-foreground)] transition-colors">Features</a>
            <a href="#demo" className="hover:text-[var(--color-foreground)] transition-colors">Demo</a>
            <a href="#pricing" className="hover:text-[var(--color-foreground)] transition-colors">Pricing</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="#" className="hidden sm:inline-block text-sm font-medium text-[var(--color-foreground)] hover:underline">Log in</a>
            <Button variant="primary" size="sm">Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <Hero 
        title="Build beautiful software, faster than ever."
        description="CordLab UI is a comprehensive suite of React components designed to help you ship products that look and feel incredibly premium."
        primaryAction={<Button variant="primary">Start Building</Button>}
        secondaryAction={<Button variant="outline">Read the Docs</Button>}
        badge="VERSION 2.0 IS LIVE"
      />

      {/* Social Proof */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-secondary)]/30">
        <div className="container mx-auto px-4 py-12">
          <p className="text-center text-sm font-medium text-[var(--color-muted-foreground)] mb-8 uppercase tracking-widest">
            Trusted by innovative teams worldwide
          </p>
          <SponsorGrid sponsors={sponsors} />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container mx-auto px-4 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--color-foreground)] mb-4">
            Everything you need to scale.
          </h2>
          <p className="text-lg text-[var(--color-muted-foreground)]">
            Stop reinventing the wheel. We've built the complex, accessible, and responsive components so you can focus on your business logic.
          </p>
        </div>
        <FeatureGrid features={features} />
      </section>

      {/* Demo / Video */}
      <section id="demo" className="bg-[var(--color-secondary)]/30 border-y border-[var(--color-border)]">
        <div className="container mx-auto px-4 py-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-foreground)] mb-4">
              See it in action
            </h2>
            <p className="text-lg text-[var(--color-muted-foreground)]">
              Watch how quickly you can assemble a dashboard using our building blocks.
            </p>
          </div>
          <div className="max-w-4xl mx-auto shadow-2xl rounded-2xl overflow-hidden ring-1 ring-[var(--color-border)]">
            <VideoPlayer 
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
              poster="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="container mx-auto px-4 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--color-foreground)] mb-4">
            Simple, transparent pricing.
          </h2>
          <p className="text-lg text-[var(--color-muted-foreground)]">
            No hidden fees. No surprise charges. Upgrade or downgrade at any time.
          </p>
        </div>
        <Pricing 
          tiers={pricingTiers} 
        />
      </section>

      {/* FAQs */}
      <section className="container mx-auto px-4 py-24 border-t border-[var(--color-border)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--color-foreground)] mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is this library accessible?</AccordionTrigger>
              <AccordionContent>
                Yes! We follow WAI-ARIA guidelines closely. Components are built with keyboard navigation and screen reader support out of the box.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Can I use this for commercial projects?</AccordionTrigger>
              <AccordionContent>
                Absolutely. The Pro and Enterprise tiers allow for unlimited commercial usage in client projects or SaaS products.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Do you offer refunds?</AccordionTrigger>
              <AccordionContent>
                We offer a 30-day money-back guarantee, no questions asked. If you're not happy with the product, just let us know.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--color-border)] bg-[var(--color-background)]">
        <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-xl font-bold tracking-tighter">
            <div className="h-6 w-6 rounded-md bg-[var(--color-primary)] flex items-center justify-center">
              <Zap className="h-3 w-3 text-white" />
            </div>
            CordLab UI
          </div>
          <p className="text-sm text-[var(--color-muted-foreground)]">
            &copy; {new Date().getFullYear()} CordLab Technologies. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm font-medium text-[var(--color-muted-foreground)]">
            <a href="#" className="hover:text-[var(--color-foreground)] transition-colors">Twitter</a>
            <a href="#" className="hover:text-[var(--color-foreground)] transition-colors">GitHub</a>
            <a href="#" className="hover:text-[var(--color-foreground)] transition-colors">Discord</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

MarketingLanding.displayName = "MarketingLanding"
