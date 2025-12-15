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
  BarChart3
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

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

  const codeExamples = [
    {
      title: "React / Next.js",
      code: `import { PayFlow } from '@payflow/react';

export function Checkout() {
  return (
    <PayFlow
      apiKey={process.env.PAYFLOW_KEY}
      amount={2999}
      currency="USD"
      onSuccess={(payment) => {
        console.log('Paid!', payment.id);
      }}
    />
  );
}`
    },
    {
      title: "API",
      code: `curl -X POST https://api.payflow.dev/v1/payments \\
  -H "Authorization: Bearer pf_live_xxx" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 2999,
    "currency": "USD",
    "customer_email": "user@example.com",
    "success_url": "https://app.com/success",
    "cancel_url": "https://app.com/cancel"
  }'`
    },
    {
      title: "Python",
      code: `from payflow import PayFlow

client = PayFlow(api_key="pf_live_xxx")

payment = client.payments.create(
    amount=2999,
    currency="USD",
    customer_email="user@example.com",
    metadata={"order_id": "12345"}
)

print(f"Checkout URL: {payment.checkout_url}")`
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "One-Line Integration",
      description: "Add payments to your vibe-coded app with a single import. No complex setup required."
    },
    {
      icon: Shield,
      title: "PCI Compliant",
      description: "Enterprise-grade security out of the box. We handle compliance so you don't have to."
    },
    {
      icon: Globe,
      title: "135+ Currencies",
      description: "Accept payments globally with automatic currency conversion and local payment methods."
    },
    {
      icon: Layers,
      title: "Subscriptions Built-in",
      description: "Recurring billing, trials, and usage-based pricing with zero configuration."
    },
    {
      icon: Lock,
      title: "Fraud Protection",
      description: "AI-powered fraud detection that blocks bad actors without blocking good customers."
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Beautiful dashboards showing revenue, MRR, churn, and customer insights."
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
        "Basic analytics dashboard",
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
      description: "For growing startups and businesses",
      features: [
        "2.5% + 25¢ per transaction",
        "Unlimited volume",
        "Advanced analytics & reports",
        "Priority support",
        "Custom checkout",
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
        "Unlimited everything",
        "Dedicated account manager",
        "SLA guarantees",
        "Custom integrations",
        "On-premise option",
        "Volume discounts"
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
                  <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                  Built for AI-first developers
                </Badge>
              </motion.div>
              
              <motion.h1 
                variants={fadeInUp}
                className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
              >
                Payments that{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
                  just work
                </span>
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
              >
                The payment infrastructure for vibe-coded apps. One line of code, 
                instant checkout, global payments. Ship your product, not payment logic.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-12 px-8 text-base bg-gradient-to-r from-primary to-accent hover:opacity-90 group">
                  Start Building Free
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 text-base border-border/50 hover:bg-secondary">
                  <Terminal className="mr-2 w-4 h-4" />
                  View Documentation
                </Button>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
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
                  Cancel anytime
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="mt-20 relative"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none h-full" />
              <div className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-1 shadow-2xl shadow-primary/5">
                <div className="rounded-xl bg-background/80 p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-destructive/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="ml-4 text-xs text-muted-foreground font-mono">checkout.tsx</span>
                  </div>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-muted-foreground">
                      <span className="text-purple-400">import</span>{" "}
                      <span className="text-foreground">{"{ PayFlow }"}</span>{" "}
                      <span className="text-purple-400">from</span>{" "}
                      <span className="text-accent">&apos;@payflow/react&apos;</span>;{"\n\n"}
                      <span className="text-purple-400">export function</span>{" "}
                      <span className="text-primary">Checkout</span>() {"{"}
                      {"\n  "}
                      <span className="text-purple-400">return</span> (
                      {"\n    "}
                      <span className="text-primary">{"<PayFlow"}</span>
                      {"\n      "}
                      <span className="text-foreground/70">amount</span>=<span className="text-accent">{"{"}</span><span className="text-orange-400">2999</span><span className="text-accent">{"}"}</span>
                      {"\n      "}
                      <span className="text-foreground/70">currency</span>=<span className="text-accent">&quot;USD&quot;</span>
                      {"\n      "}
                      <span className="text-foreground/70">onSuccess</span>=<span className="text-accent">{"{"}</span><span className="text-foreground">(payment) =&gt; redirect(&apos;/thanks&apos;)</span><span className="text-accent">{"}"}</span>
                      {"\n    "}
                      <span className="text-primary">/&gt;</span>
                      {"\n  "});
                      {"\n}{"}"}
                    </code>
                  </pre>
                </div>
              </div>
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
                Everything you need to get paid
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Built specifically for AI-generated apps. We handle the complexity so your vibe-coded product can focus on what matters.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                Integration
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Ship in minutes, not weeks
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Copy, paste, done. Our SDK works seamlessly with every AI coding tool and framework.
              </p>
            </motion.div>

            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden">
                <div className="flex border-b border-border/50">
                  {codeExamples.map((example, index) => (
                    <button
                      key={example.title}
                      onClick={() => setActiveTab(index)}
                      className={`px-6 py-3 text-sm font-medium transition-all ${
                        activeTab === index 
                          ? "text-primary border-b-2 border-primary bg-primary/5" 
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {example.title}
                    </button>
                  ))}
                </div>
                <div className="p-6">
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-muted-foreground whitespace-pre">
                      {codeExamples[activeTab].code}
                    </code>
                  </pre>
                </div>
                <div className="px-6 py-4 border-t border-border/50 bg-secondary/30 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Ready to copy into your project
                  </span>
                  <Button size="sm" variant="secondary">
                    Copy Code
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {["Cursor", "v0", "Bolt", "Replit"].map((tool) => (
                <div key={tool} className="flex items-center justify-center">
                  <div className="px-6 py-3 rounded-full border border-border/50 bg-card/50 text-sm font-medium text-muted-foreground">
                    Works with {tool}
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
