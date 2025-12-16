"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Zap,
  Timer,
  CheckCircle2,
  Database,
  Lock,
  Palette,
  CreditCard,
  Sparkles,
  Rocket
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export default function Home() {
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

  const features = [
    { 
      icon: Zap, 
      title: "Build with AI Power", 
      desc: "Leverage cutting-edge AI tools to prototype, develop, and ship production-ready applications faster than ever." 
    },
    { 
      icon: Timer, 
      title: "Ship in Record Time", 
      desc: "From idea to launch in days, not months. AI-powered development workflow that scales with your ambition." 
    },
    { 
      icon: CheckCircle2, 
      title: "Production-Ready Stack", 
      desc: "Pre-configured backend, database, auth, and deployment tools so you can focus on building features users love." 
    }
  ];

  const integrations = [
    { icon: Database, name: "Supabase", desc: "PostgreSQL database with real-time capabilities" },
    { icon: Lock, name: "Auth", desc: "Complete authentication with social providers" },
    { icon: Palette, name: "UI Components", desc: "Beautiful, accessible component library" },
    { icon: CreditCard, name: "Stripe", desc: "Payments and subscription management" },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      desc: "Perfect for solo developers building side projects",
      features: ["5 Projects", "AI-powered dev tools", "Community support", "Basic analytics"],
      cta: "Start Building"
    },
    {
      name: "Pro",
      price: "$79",
      period: "/month",
      desc: "For professional developers shipping products",
      features: ["Unlimited projects", "Advanced AI features", "Priority support", "Advanced analytics", "Custom domains", "Team collaboration"],
      cta: "Go Pro",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      desc: "For teams and organizations at scale",
      features: ["Everything in Pro", "Dedicated support", "Custom integrations", "SLA guarantees", "Advanced security", "Training & onboarding"],
      cta: "Contact Sales"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-foreground relative overflow-hidden">
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
        <section className="px-6 py-24 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            
            <h1 className="text-5xl md:text-6xl font-medium mb-8 leading-tight text-gray-300">
              For <span className="text-white font-semibold">AI Builders</span> Who Ship
            </h1>
            
            <div className="space-y-2 text-lg text-gray-400 max-w-3xl leading-relaxed">
              <p>Build with AI. Ship to production. Scale with confidence.</p>
              <p>The complete toolkit for developers who use AI to build real products.</p>
              <p>No more cobbling together tools. Everything you need, ready to go.</p>
            </div>
          </motion.div>
        </section>

        <section className="px-6 py-24 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}>
                <Card className="p-8 bg-[#111] border-border/50 h-full">
                  <feature.icon className="w-12 h-12 mb-6 text-primary" strokeWidth={1.5} />
                  <h3 className="font-semibold text-xl mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="integration" className="px-6 py-24 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">Integrations</Badge>
            <h2 className="text-4xl font-semibold mb-4 text-white">Everything You Need, Pre-configured</h2>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl">Stop wasting time on boilerplate. We've integrated the best tools so you can focus on shipping.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {integrations.map((integration, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}>
                <Card className="p-6 bg-[#111] border-border/50 hover:border-primary/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <integration.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{integration.name}</h3>
                      <p className="text-muted-foreground text-sm">{integration.desc}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="pricing" className="px-6 py-24 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">Pricing</Badge>
            <h2 className="text-4xl font-semibold mb-4 text-white">Build More, Pay Less</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">Choose the plan that fits your ambition. All plans include core AI building tools.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}>
                <Card className={`p-8 bg-[#111] border-border/50 h-full relative ${plan.popular ? 'border-primary/50' : ''}`}>
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  )}
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{plan.desc}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                  </div>
                  <Button className={`w-full mb-6 ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`} variant={plan.popular ? 'default' : 'outline'}>
                    {plan.cta}
                  </Button>
                  <ul className="space-y-3">
                    {plan.features.map((feature, fi) => (
                      <li key={fi} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="px-6 py-24 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <Card className="p-12 bg-gradient-to-br from-primary/10 via-[#111] to-[#111] border-primary/20">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Rocket className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-semibold mb-4 text-white">Ready to Ship Faster?</h2>
                <p className="text-lg text-gray-400 max-w-xl mx-auto">Join the waitlist and be the first to access the complete AI builder toolkit.</p>
              </div>
              <form onSubmit={handleWaitlistSignup} className="max-w-md mx-auto">
                <div className="flex gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-[#0a0a0a] border-border/50 focus:border-primary"
                  />
                  <Button type="submit" disabled={isSubmitting} className="bg-primary hover:bg-primary/90 whitespace-nowrap">
                    {isSubmitting ? (
                      <Sparkles className="w-4 h-4 animate-spin" />
                    ) : (
                      'Join Waitlist'
                    )}
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div>
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
    </div>
  );
}