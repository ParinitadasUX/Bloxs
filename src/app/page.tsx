"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Code2, 
  Shield, 
  Globe, 
  CreditCard, 
  ArrowRight,
  Check,
  Layers,
  Lock,
  BarChart3,
  X,
  FileText,
  Scale,
  Clock
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { DashboardMockup } from "@/components/dashboard-mockup";

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  const aiToolExamples = [
    {
      name: "Cursor",
      prompt: '"Add a Buy Now button linking to https://payflow.dev/checkout/prod_abc123"'
    },
    {
      name: "v0",
      prompt: '"Create a pricing card with a checkout button at payflow.dev/checkout/prod_abc123"'
    },
    {
      name: "Bolt",
      prompt: '"Add payment button redirecting to payflow.dev/checkout/prod_abc123"'
    },
    {
      name: "Replit",
      prompt: '"Payment button that opens https://payflow.dev/checkout/prod_abc123"'
    }
  ];

  const problems = [
    {
      icon: X,
      title: "Payments aren't actually 'no-code'",
      description: "You can build a tool in hours, but adding payments still means wrestling with backend logic, webhooks, subscription state, and entitlement checks."
    },
    {
      icon: Scale,
      title: "Legal & tax anxiety blocks launches",
      description: "Do I need a business entity? Sales tax? VAT? These fears keep builders from ever hitting 'launch'."
    },
    {
      icon: Layers,
      title: "Too many moving parts",
      description: "Stripe for payments. Google for legal docs. Custom code for access control. It's overwhelming and error-prone."
    },
    {
      icon: Clock,
      title: "Time-to-first-dollar is too slow",
      description: "Building is fast. Monetization is slow. By the time you figure out compliance, your momentum is dead."
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Zero-Code Integration",
      description: "Tell your AI what you want. No SDKs, no API keys, no backend code."
    },
    {
      icon: Shield,
      title: "Security Handled",
      description: "PCI-DSS, GDPR, SOC 2 compliant automatically."
    },
    {
      icon: FileText,
      title: "Legal Clarity",
      description: "Plain-English guides on registration and tax obligations."
    },
    {
      icon: Globe,
      title: "Global Tax Autopilot",
      description: "Automatic sales tax, VAT, GST for 190+ countries."
    },
    {
      icon: Layers,
      title: "Access Control",
      description: "Built-in user gating. No custom middleware."
    },
    {
      icon: Lock,
      title: "Fraud Blocked",
      description: "AI-powered fraud detection. Chargebacks handled."
    },
    {
      icon: BarChart3,
      title: "Analytics Built-In",
      description: "Revenue, MRR, churn tracking without extra tools."
    },
    {
      icon: CreditCard,
      title: "All-in-One",
      description: "Payments, subscriptions, refunds in one dashboard."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "Free",
      period: "forever",
      description: "For side projects and MVPs",
      features: [
        "2.9% + 30¢ per transaction",
        "Up to $10k monthly volume",
        "Basic tax (US only)",
        "Email support",
        "Checkout links"
      ],
      cta: "Start Free",
      popular: false
    },
    {
      name: "Pro",
      price: "$49",
      period: "/month",
      description: "For growing startups",
      features: [
        "2.5% + 25¢ per transaction",
        "Unlimited volume",
        "Global tax automation",
        "Priority support",
        "Custom branding",
        "Webhook management",
        "Team members"
      ],
      cta: "Start Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For high-volume businesses",
      features: [
        "Custom rates",
        "Dedicated legal advisor",
        "Tax filing assistance",
        "Account manager",
        "SLA guarantees",
        "Custom integrations"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border">
        <div className="max-w-[1400px] mx-auto px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 border-2 border-foreground flex items-center justify-center">
              <CreditCard className="w-5 h-5" />
            </div>
            <span className="font-bold text-2xl">PayFlow</span>
          </Link>
          <div className="hidden md:flex items-center gap-12 text-sm font-medium">
            <Link href="#features" className="hover:text-primary transition-colors">Features</Link>
            <Link href="#integration" className="hover:text-primary transition-colors">Integration</Link>
            <Link href="#pricing" className="hover:text-primary transition-colors">Pricing</Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost">Sign in</Button>
            <Button className="bg-primary hover:bg-primary/90">Get Started</Button>
          </div>
        </div>
      </nav>

      <main>
        <section className="px-8 py-32">
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-[900px]">
              <h1 className="text-[5rem] leading-[0.95] font-black mb-8 tracking-tight">
                Add payments<br/>
                without code
              </h1>
              
              <p className="text-2xl text-muted-foreground mb-12 max-w-[600px] font-normal">
                Tell your AI tool what you want. Get a checkout link. Paste it. Done.
              </p>
              
              <div className="flex gap-4 mb-16">
                <Button size="lg" className="h-14 px-10 text-base bg-primary hover:bg-primary/90">
                  Start Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground">
                <div>No credit card</div>
                <div>5-minute setup</div>
                <div>Works with any AI tool</div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-8 py-24 border-t border-border">
          <div className="max-w-[1400px] mx-auto">
            <DashboardMockup />
          </div>
        </section>

        <section id="problem" className="px-8 py-24 border-t border-border">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-20">
              <Badge variant="outline" className="mb-6 border-destructive text-destructive">The Problem</Badge>
              <h2 className="text-5xl font-black mb-6 max-w-[700px] leading-tight">
                You can ship fast.<br/>
                <span className="text-muted-foreground">But can you charge?</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-[1000px]">
              {problems.map((problem) => (
                <Card key={problem.title} className="border-border">
                  <CardHeader>
                    <problem.icon className="w-8 h-8 mb-4 text-destructive" />
                    <CardTitle className="text-xl font-bold">{problem.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {problem.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="px-8 py-24 border-t border-border">
          <div className="max-w-[1400px] mx-auto">
            <Badge variant="outline" className="mb-6">Features</Badge>
            <h2 className="text-5xl font-black mb-20 max-w-[700px] leading-tight">
              Everything you need
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="border-l-4 border-border pl-6 hover:border-primary transition-colors">
                  <feature.icon className="w-6 h-6 mb-4" />
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="integration" className="px-8 py-24 border-t border-border">
          <div className="max-w-[1400px] mx-auto">
            <Badge variant="outline" className="mb-6">Integration</Badge>
            <h2 className="text-5xl font-black mb-20 max-w-[700px] leading-tight">
              Works with your AI tool
            </h2>

            <div className="border border-border">
              <div className="flex border-b border-border">
                {aiToolExamples.map((tool, index) => (
                  <button
                    key={tool.name}
                    onClick={() => setActiveTab(index)}
                    className={`px-8 py-4 text-sm font-bold border-r border-border last:border-r-0 ${
                      activeTab === index ? "bg-primary text-primary-foreground" : ""
                    }`}
                  >
                    {tool.name}
                  </button>
                ))}
              </div>
              <div className="p-12">
                <div className="text-sm font-bold mb-4 text-muted-foreground">Your prompt:</div>
                <div className="font-mono text-lg p-6 border border-border bg-muted/30">
                  {aiToolExamples[activeTab].prompt}
                </div>
              </div>
            </div>

            <div className="mt-16 flex gap-6">
              {["Cursor", "v0", "Bolt", "Replit", "Lovable"].map((tool) => (
                <div key={tool} className="px-6 py-3 border border-border text-sm font-medium">
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="px-8 py-24 border-t border-border">
          <div className="max-w-[1400px] mx-auto">
            <Badge variant="outline" className="mb-6">Pricing</Badge>
            <h2 className="text-5xl font-black mb-20 max-w-[700px] leading-tight">
              Simple pricing
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan) => (
                <Card key={plan.name} className={`border-2 ${plan.popular ? "border-primary" : "border-border"}`}>
                  <CardHeader>
                    <CardTitle className="text-2xl font-black">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="pt-6">
                      <span className="text-5xl font-black">{plan.price}</span>
                      <span className="text-muted-foreground ml-2">{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <Button 
                      className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.cta}
                    </Button>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex gap-3 text-sm">
                          <Check className="w-4 h-4 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="px-8 py-32 border-t border-border">
          <div className="max-w-[1400px] mx-auto text-center">
            <h2 className="text-5xl font-black mb-8">
              Start accepting payments
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-[600px] mx-auto">
              Join thousands shipping payment flows in minutes.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="h-14 px-10 bg-primary hover:bg-primary/90">
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-10">
                Talk to Sales
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-8 py-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 border-2 border-foreground flex items-center justify-center">
                  <CreditCard className="w-5 h-5" />
                </div>
                <span className="font-bold text-2xl">PayFlow</span>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs">
                Payment infrastructure for AI-first development.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm">Product</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition-colors">Features</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm">Developers</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition-colors">Documentation</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">API</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm">Company</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-border flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              © 2024 PayFlow
            </p>
            <div className="flex gap-8 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}