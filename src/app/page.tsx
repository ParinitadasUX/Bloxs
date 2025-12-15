"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  CreditCard, 
  ArrowRight,
  Check,
  Globe,
  Shield,
  BarChart3
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  React.useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const aiToolExamples = [
    { name: "Cursor", prompt: '"Add a Buy Now button linking to payflow.dev/checkout/prod_abc"' },
    { name: "v0", prompt: '"Create checkout button at payflow.dev/checkout/prod_abc"' },
    { name: "Bolt", prompt: '"Payment button to payflow.dev/checkout/prod_abc"' },
  ];

  const features = [
    { icon: Zap, title: "Zero-Code Integration", desc: "Tell your AI what you want. No SDKs, no backend." },
    { icon: Shield, title: "Security Handled", desc: "PCI-DSS, GDPR, SOC 2 compliant automatically." },
    { icon: Globe, title: "Global Tax Autopilot", desc: "Automatic sales tax, VAT, GST for 190+ countries." },
    { icon: BarChart3, title: "Analytics Built-In", desc: "Revenue, MRR, churn tracking in one place." },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary/30 glow-orb" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent/30 glow-orb" />
        <div className="absolute top-[40%] right-[20%] w-[30%] h-[30%] rounded-full bg-primary/20 glow-orb" />
      </div>

      <nav className="relative z-10 border-b border-border/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <CreditCard className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-lg">PayFlow</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link href="#features" className="hover:text-primary transition-colors">Features</Link>
            <Link href="#integration" className="hover:text-primary transition-colors">Integration</Link>
            <Link href="#pricing" className="hover:text-primary transition-colors">Pricing</Link>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">Sign in</Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">Get Started</Button>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        <section className="px-6 py-32 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge variant="outline" className="mb-6 border-primary/30 text-primary">
              Payment Infrastructure
            </Badge>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Payments for<br/>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AI-first builders
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Zero-code payment integration. Tell your AI tool what you need, and PayFlow handles the rest—checkout, tax, compliance, analytics.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="h-12 px-8 bg-primary hover:bg-primary/90">
                Start Free
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 glass">
                View Demo
              </Button>
            </div>
          </motion.div>
        </section>

        <section className="px-6 py-24 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="glass p-6 hover:border-primary/50 transition-colors h-full">
                  <feature.icon className="w-8 h-8 mb-4 text-primary" />
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="integration" className="px-6 py-24 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Integration</Badge>
            <h2 className="text-5xl font-bold mb-4">Works with your AI tool</h2>
            <p className="text-muted-foreground">Just prompt. No code required.</p>
          </div>

          <Card className="glass p-0 overflow-hidden max-w-3xl mx-auto">
            <div className="flex border-b border-border/50">
              {aiToolExamples.map((tool, index) => (
                <button
                  key={tool.name}
                  onClick={() => setActiveTab(index)}
                  className={`flex-1 px-6 py-3 text-sm font-medium transition-colors ${
                    activeTab === index 
                      ? "bg-primary/20 text-primary border-b-2 border-primary" 
                      : "hover:bg-primary/5"
                  }`}
                >
                  {tool.name}
                </button>
              ))}
            </div>
            <div className="p-8">
              <div className="text-xs font-medium text-muted-foreground mb-3">Your prompt:</div>
              <div className="font-mono text-sm p-4 rounded-lg bg-muted/30 border border-border/50">
                {aiToolExamples[activeTab].prompt}
              </div>
            </div>
          </Card>
        </section>

        <section id="pricing" className="px-6 py-24 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Pricing</Badge>
            <h2 className="text-5xl font-bold mb-4">Simple pricing</h2>
            <p className="text-muted-foreground">Start free. Scale as you grow.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { 
                name: "Starter", 
                price: "Free", 
                period: "forever", 
                features: ["2.9% + 30¢ per transaction", "Up to $10k/month", "Basic tax (US only)", "Email support"] 
              },
              { 
                name: "Pro", 
                price: "$49", 
                period: "/month", 
                features: ["2.5% + 25¢ per transaction", "Unlimited volume", "Global tax automation", "Priority support", "Custom branding"],
                popular: true
              },
              { 
                name: "Enterprise", 
                price: "Custom", 
                period: "", 
                features: ["Custom rates", "Dedicated advisor", "Tax filing help", "SLA guarantees"] 
              }
            ].map((plan) => (
              <Card key={plan.name} className={`glass p-8 ${plan.popular ? "border-primary/50 shadow-xl shadow-primary/10" : ""}`}>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground text-sm ml-2">{plan.period}</span>
                </div>
                <Button className="w-full mb-6" variant={plan.popular ? "default" : "outline"}>
                  {plan.popular ? "Start Trial" : "Get Started"}
                </Button>
                <ul className="space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        <section className="px-6 py-32 max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Start accepting payments</h2>
          <p className="text-xl text-muted-foreground mb-8">Join thousands shipping faster.</p>
          <Button size="lg" className="h-12 px-8 bg-primary hover:bg-primary/90">
            Get Started Free
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </section>
      </main>

      <footer className="relative z-10 border-t border-border/50 backdrop-blur-xl px-6 py-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <CreditCard className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-semibold">PayFlow</span>
          </div>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Docs</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}