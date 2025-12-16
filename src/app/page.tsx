"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Zap,
  CreditCard,
  ArrowRight,
  Check,
  Globe,
  Shield,
  BarChart3 } from
"lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const handleWaitlistSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await res.json();

      if (res.ok) {
        toast.success('You\'re on the waitlist! We\'ll notify you when we launch.');
        setEmail("");
      } else {
        toast.error(data.error || 'Something went wrong');
      }
    } catch (error) {
      toast.error('Failed to join waitlist. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const aiToolLogos = [
  { name: "Cursor", logo: "/logos/cursor.svg" },
  { name: "v0", logo: "/logos/v0.svg" },
  { name: "Bolt", logo: "/logos/bolt.png" },
  { name: "Replit", logo: "/logos/replit.png" },
  { name: "GitHub Copilot", logo: "/logos/github.svg" },
  { name: "Windsurf", logo: "/logos/windsurf.svg" },
  { name: "Lovable", logo: "/logos/lovable.svg" },
  { name: "Figma", logo: "/logos/figma.svg" },
  { name: "Gemini", logo: "/logos/gemini.svg" },
  { name: "Perplexity", logo: "/logos/perplexity.svg" },
  { name: "Tabnine", logo: "/logos/tabnine.svg" },
  { name: "Cody", logo: "/logos/cody.svg" },
  { name: "CodeWhisperer", logo: "/logos/codewhisperer.svg" },
  { name: "Devin", logo: "/logos/devin.svg" }];


  const features = [
  { icon: Zap, title: "Zero-Code Integration", desc: "Tell your AI what you want. No SDKs, no backend." },
  { icon: Shield, title: "Security Handled", desc: "PCI-DSS, GDPR, SOC 2 compliant automatically." },
  { icon: Globe, title: "Global Tax Autopilot", desc: "Automatic sales tax, VAT, GST for 190+ countries." },
  { icon: BarChart3, title: "Analytics Built-In", desc: "Revenue, MRR, churn tracking in one place." }];


  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <nav className="relative z-10 border-b border-border/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/bloxs-logo.png"
              alt="bloxs logo"
              width={32}
              height={32}
              className="w-8 h-8" />

            <span className="font-semibold text-lg">bloxs</span>
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
            className="text-center max-w-4xl mx-auto">

            <Badge variant="outline" className="mb-6 border-primary/30 text-primary">
              Payment Infrastructure
            </Badge>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Payments for<br />
              <span className="text-primary">
                AI-first builders
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Zero-code payment integration. Tell your AI tool what you need, and bloxs handles the rest—checkout, tax, compliance, analytics.
            </p>
            <p className="text-sm text-muted-foreground mb-4">Join early access. No credit card required.</p>
            <form onSubmit={handleWaitlistSignup} className="flex gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 glass" />

              <Button
                type="submit"
                size="lg"
                className="h-12 px-8 bg-primary hover:bg-primary/90"
                disabled={isSubmitting}>

                {isSubmitting ? "Joining..." : "Join Waitlist"}
              </Button>
            </form>
          </motion.div>
        </section>

        <section className="px-6 py-24 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature, i) =>
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}>

                <Card className="glass p-6 hover:border-primary/50 transition-colors h-full">
                  <feature.icon className="w-8 h-8 mb-4 text-primary" />
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                </Card>
              </motion.div>
            )}
          </div>
        </section>

        <section id="integration" className="px-6 py-24 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Integration</Badge>
            <h2 className="text-5xl font-bold mb-4">Works with your AI tool</h2>
            <p className="text-muted-foreground">Just prompt. No code required.</p>
          </div>

          <div className="relative max-w-5xl mx-auto overflow-hidden py-12">
            
            <motion.div
              className="flex gap-12 items-center"
              animate={{
                x: [0, -1400]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear"
                }
              }}>

              {[...aiToolLogos, ...aiToolLogos, ...aiToolLogos].map((tool, i) =>
              <div
                key={i}
                className="flex-shrink-0 px-8 py-6 min-w-[200px] flex items-center justify-center">

                  <Image
                  src={tool.logo}
                  alt={tool.name}
                  width={120}
                  height={40}
                  className="opacity-70 hover:opacity-100 transition-opacity object-contain w-[120px] h-[40px]" />

                </div>
              )}
            </motion.div>
          </div>
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
            }].
            map((plan) =>
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
                  {plan.features.map((f) =>
                <li key={f} className="flex gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                )}
                </ul>
              </Card>
            )}
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
            <Image
              src="/bloxs-logo.png"
              alt="bloxs logo"
              width={32}
              height={32}
              className="w-8 h-8" />

            <span className="font-semibold">bloxs</span>
          </div>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Docs</Link>
          </div>
        </div>
      </footer>
    </div>);

}