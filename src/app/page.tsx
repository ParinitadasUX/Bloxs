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
  Terminal,
  Sparkles,
  Layers,
  Lock,
  BarChart3,
  X,
  FileText,
  Scale,
  Clock,
  Bot,
  Copy,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { DashboardMockup } from "@/components/dashboard-mockup";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const aiToolExamples = [
    {
      name: "Cursor",
      logo: "⌘",
      prompt: '"Add a gradient button that says \'Upgrade to Pro\' and links to https://payflow.dev/checkout/prod_abc123"',
      result: "Cursor generates a beautiful button with your branding"
    },
    {
      name: "v0",
      logo: "▼",
      prompt: '"Create a pricing section with two cards: Starter (free) and Pro ($49/mo). The Pro card should have a button linking to my PayFlow checkout"',
      result: "v0 generates a complete pricing section"
    },
    {
      name: "Bolt",
      logo: "⚡",
      prompt: '"Add a checkout button to my pricing page that redirects to payflow.dev/checkout/prod_abc123"',
      result: "Bolt adds the button and handles the redirect"
    },
    {
      name: "Replit",
      logo: "🔄",
      prompt: '"I need a payment button. When clicked, redirect to https://payflow.dev/checkout/prod_abc123"',
      result: "Replit Agent creates the button with proper routing"
    }
  ];

  const problems = [
    {
      icon: X,
      title: "Payments aren't actually 'no-code'",
      description: "You can build a tool in hours, but adding payments still means wrestling with backend logic, webhooks, subscription state, and entitlement checks. Most builders ship—but never monetize."
    },
    {
      icon: Scale,
      title: "Legal & tax anxiety blocks launches",
      description: "Do I need a business entity? Sales tax? VAT? Am I breaking the law? These fears keep builders from ever hitting 'launch' or charging customers."
    },
    {
      icon: Layers,
      title: "Too many moving parts",
      description: "Stripe for payments. Google for legal docs. Custom code for access control. Manual support for billing issues. It's overwhelming, fragmented, and error-prone."
    },
    {
      icon: Clock,
      title: "Time-to-first-dollar is too slow",
      description: "Building is fast. Monetization is slow. By the time you figure out subscriptions, failed payments, and compliance, your momentum is dead."
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "One-Line Integration",
      description: "Add payments to your vibe-coded app with a single import. No backend, no webhooks, no state management required."
    },
    {
      icon: Shield,
      title: "Built-in Compliance",
      description: "PCI-DSS, GDPR, and SOC 2 compliant out of the box. We handle security audits so you can focus on building."
    },
    {
      icon: FileText,
      title: "Legal Guidance Included",
      description: "Plain-English guides on business registration, tax obligations, and when you need them. Launch with confidence, not confusion."
    },
    {
      icon: Globe,
      title: "Global Tax Handling",
      description: "Automatic sales tax, VAT, and GST calculation for 190+ countries. We collect, report, and remit so you don't have to."
    },
    {
      icon: Layers,
      title: "Smart Access Control",
      description: "Built-in user gating and entitlements. No custom middleware, no sessions to manage—just works with your auth."
    },
    {
      icon: Lock,
      title: "Fraud Protection",
      description: "AI-powered fraud detection that blocks bad actors without blocking good customers. Chargebacks handled automatically."
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Beautiful dashboards showing revenue, MRR, churn, and customer insights—without connecting analytics tools."
    },
    {
      icon: CreditCard,
      title: "One Dashboard for Everything",
      description: "Payments, subscriptions, customer support, refunds, and disputes—all in one place. No tab-switching between tools."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "Free",
      period: "forever",
      description: "Perfect for side projects and MVPs",
      features: [
        "2.9% + 30¢ per transaction",
        "Up to $10k monthly volume",
        "Basic tax handling (US only)",
        "Getting started legal guide",
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
      description: "For growing startups ready to scale",
      features: [
        "2.5% + 25¢ per transaction",
        "Unlimited volume",
        "Global tax automation",
        "Legal compliance dashboard",
        "Priority support",
        "Custom checkout & branding",
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
        "Custom transaction rates",
        "Unlimited everything",
        "Dedicated legal advisor",
        "Tax filing assistance",
        "Dedicated account manager",
        "SLA guarantees",
        "Custom integrations",
        "On-premise option"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <CreditCard className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl tracking-tight">PayFlow</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</Link>
            <Link href="#integration" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Integration</Link>
            <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
            <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Docs</Link>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">Sign in</Button>
            <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      <main>
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center max-w-4xl mx-auto"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm font-medium border border-primary/20 bg-primary/10 text-primary">
                  <Bot className="w-3.5 h-3.5 mr-1.5" />
                  Built for AI Builders
                </Badge>
              </motion.div>
              
              <motion.h1 
                variants={fadeInUp}
                className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
              >
                Add Payments to Your{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
                  AI-Built App
                </span>
                <br />
                <span className="text-4xl md:text-5xl">Without Writing Code</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
              >
                No SDKs. No webhooks. No backend logic. Just tell your AI what you want—
                Cursor, Bolt, v0, Replit, Lovable—and start getting paid.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="h-12 px-8 text-base bg-gradient-to-r from-primary to-accent hover:opacity-90 group">
                  Start Building Free
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 text-base border-border/50 hover:bg-secondary">
                  <Terminal className="mr-2 w-4 h-4" />
                  Watch Demo
                </Button>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" />
                  No credit card required
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" />
                  5-minute setup
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" />
                  Works with any AI tool
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="mt-20"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="text-center mb-8">
                <Badge variant="outline" className="mb-4">
                  1️⃣ Create your product in the dashboard
                </Badge>
              </div>
              <DashboardMockup />
              
              <div className="mt-16 text-center">
                <Badge variant="outline" className="mb-6">
                  2️⃣ Tell your AI tool
                </Badge>
                <div className="max-w-2xl mx-auto">
                  <div className="rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 shadow-xl">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0">
                        <Bot className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="text-sm font-medium text-muted-foreground mb-2">Your prompt:</div>
                        <div className="text-base font-mono bg-background/80 rounded-lg p-4 border border-border/50">
                          &quot;Add a Buy Now button that links to https://payflow.dev/checkout/prod_abc123&quot;
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="mt-3"
                          onClick={() => {
                            navigator.clipboard.writeText("Add a Buy Now button that links to https://payflow.dev/checkout/prod_abc123");
                            setCopiedPrompt(true);
                            setTimeout(() => setCopiedPrompt(false), 2000);
                          }}
                        >
                          {copiedPrompt ? (
                            <>
                              <CheckCircle2 className="w-4 h-4 mr-2" />
                              Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4 mr-2" />
                              Copy prompt
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 text-center">
                <Badge variant="outline" className="mb-6">
                  3️⃣ Your AI generates the button
                </Badge>
                <div className="max-w-xl mx-auto rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 shadow-xl">
                  <Button size="lg" className="w-full h-14 text-lg bg-gradient-to-r from-primary to-accent hover:opacity-90">
                    <CreditCard className="w-5 h-5 mr-3" />
                    Buy Now - $49/mo
                  </Button>
                  <p className="text-xs text-muted-foreground mt-4">
                    ↑ Generated automatically by your AI tool
                  </p>
                </div>
              </div>

              <div className="mt-16 text-center">
                <Badge variant="outline" className="mb-4">
                  4️⃣ Start getting paid 💰
                </Badge>
                <p className="text-muted-foreground">No code written. No webhooks configured. Just works.</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="problem" className="py-24 px-6 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge variant="secondary" className="mb-4 border-destructive/30 bg-destructive/10 text-destructive">
                The Problem
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                You can ship fast.{" "}
                <span className="text-muted-foreground">But can you charge?</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Vibe-coding platforms let solopreneurs build tools in hours—but monetization still takes weeks. 
                The issue isn't just technical. <span className="font-semibold text-foreground">It's a confidence problem.</span>
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {problems.map((problem, index) => (
                <motion.div
                  key={problem.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full bg-card/50 border-border/50">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                        <problem.icon className="w-6 h-6 text-destructive" />
                      </div>
                      <CardTitle className="text-xl">{problem.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {problem.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="mt-12 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                <span className="font-semibold text-foreground">PayFlow solves the confidence problem.</span> We don't just make payments work—we make sure you know you're doing it right.
              </p>
            </motion.div>
          </div>
        </section>

        <section id="features" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge variant="secondary" className="mb-4 border-primary/20 bg-primary/10 text-primary">Features</Badge>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Everything you need to monetize with confidence
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Payments that just work. Legal clarity that removes fear. All-in-one simplicity that eliminates overwhelm.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="integration" className="py-24 px-6 bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge variant="secondary" className="mb-4 border-primary/20 bg-primary/10 text-primary">
                <Code2 className="w-3.5 h-3.5 mr-1.5" />
                Works With Your AI Tool
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Prompt, pay, done
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Works seamlessly with every AI coding tool. No special setup. Just paste your checkout link.
              </p>
            </motion.div>

            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden">
                <div className="flex border-b border-border/50 overflow-x-auto">
                  {aiToolExamples.map((tool, index) => (
                    <button
                      key={tool.name}
                      onClick={() => setActiveTab(index)}
                      className={`px-6 py-3 text-sm font-medium transition-all whitespace-nowrap ${
                        activeTab === index 
                          ? "text-primary border-b-2 border-primary bg-primary/5" 
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <span className="mr-2">{tool.logo}</span>
                      {tool.name}
                    </button>
                  ))}
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <div className="text-xs font-medium text-muted-foreground mb-2">Your prompt:</div>
                    <div className="text-sm font-mono bg-background/80 rounded-lg p-4 border border-border/50">
                      {aiToolExamples[activeTab].prompt}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="w-4 h-4" />
                    <span>{aiToolExamples[activeTab].result}</span>
                  </div>
                </div>
                <div className="px-6 py-4 border-t border-border/50 bg-secondary/30 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    No API keys. No configuration. Just works.
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {["Cursor", "v0", "Bolt", "Replit", "Lovable"].map((tool) => (
                <div key={tool} className="flex items-center justify-center">
                  <div className="px-4 py-2 rounded-full border border-border/50 bg-card/50 text-sm font-medium text-muted-foreground">
                    {tool}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="pricing" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge variant="secondary" className="mb-4 border-primary/20 bg-primary/10 text-primary">Pricing</Badge>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Simple, transparent pricing
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Start free, scale as you grow. No hidden fees, no surprise charges.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                      <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <Card className={`h-full ${plan.popular ? "border-primary/50 shadow-lg shadow-primary/10" : "border-border/50"} bg-card/50`}>
                    <CardHeader className="pb-4">
                      <CardTitle className="text-xl">{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                      <div className="pt-4">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-muted-foreground">{plan.period}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Button 
                        className={`w-full ${plan.popular ? "bg-gradient-to-r from-primary to-accent hover:opacity-90" : ""}`}
                        variant={plan.popular ? "default" : "outline"}
                      >
                        {plan.cta}
                      </Button>
                      <ul className="space-y-3 pt-4">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3 text-sm">
                            <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-border/50 bg-gradient-to-br from-card via-card to-primary/5 p-12 md:p-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Ready to start accepting payments?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
                Join thousands of developers who ship payment flows in minutes, not months.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-12 px-8 bg-gradient-to-r from-primary to-accent hover:opacity-90">
                  Get Started for Free
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8">
                  Talk to Sales
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/50 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <CreditCard className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-bold text-xl">PayFlow</span>
              </Link>
              <p className="text-sm text-muted-foreground max-w-xs">
                The payment infrastructure designed for AI-first development. Ship faster, get paid sooner.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition-colors">Features</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Pricing</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Integrations</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Changelog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Developers</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition-colors">Documentation</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">API Reference</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">SDKs</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Status</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 PayFlow. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Security</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}