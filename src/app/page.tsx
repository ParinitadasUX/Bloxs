"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Zap,
  Shield,
  Globe,
  BarChart3,
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
        toast.success('You\'re on the waitlist!');
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
      title: "Zero-Code Integration", 
      desc: "Tell your AI tool what you need, and bloxs handles the rest—checkout, tax, compliance, analytics." 
    },
    { 
      icon: Shield, 
      title: "Security Handled", 
      desc: "PCI-DSS, GDPR, SOC 2 compliant automatically." 
    },
    { 
      icon: Globe, 
      title: "Global Tax Autopilot", 
      desc: "Automatic sales tax, VAT, GST for 190+ countries." 
    },
    { 
      icon: BarChart3, 
      title: "Analytics Built-In", 
      desc: "Revenue, MRR, churn tracking in one place." 
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "Free",
      period: "forever",
      desc: "Up to $10k/month",
      features: ["2.5% + 25¢ per transaction", "Up to $10k/month", "Basic tax US only", "Email support"],
      cta: "Get Started"
    },
    {
      name: "Pro",
      price: "$49",
      period: "/month",
      desc: "Scale as you grow",
      features: ["2.5% + 25¢ per transaction", "Unlimited volume", "Global tax automation", "GDPR tax automation", "Priority support", "Custom branding"],
      cta: "Start Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      desc: "For teams and organizations at scale",
      features: ["Custom rates", "Dedicated advisor", "Tax filing TPA", "SLA guarantees", "Advanced security", "Training & onboarding"],
      cta: "Get Started"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B0B0F] text-foreground relative overflow-hidden">
      <nav className="relative z-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
              <div className="w-4 h-4 bg-[#0B0B0F] rounded-sm"></div>
            </motion.div>
            <span className="font-semibold text-base">bloxs</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <Link href="#features" className="hover:text-white transition-colors">Features</Link>
            <Link href="#integration" className="hover:text-white transition-colors">Integration</Link>
            <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">Sign in</Button>
            <Button size="sm" className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white rounded-lg">Get Started</Button>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        <section className="px-6 py-32 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            
            <Badge className="mb-6 bg-blue-500/10 text-blue-400 border-blue-500/20 text-xs px-3 py-1">
              Payment infrastructure
            </Badge>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Payments for<br />
              <span className="text-purple-400">AI-first builders</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
              Zero-code payment integration. Tell your AI tool what you need, and bloxs handles the rest—checkout, tax, compliance, analytics.
            </p>

            <form onSubmit={handleWaitlistSignup} className="max-w-md mx-auto mb-4">
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/5 border-white/10 focus:border-purple-500 text-white placeholder:text-gray-500 h-12"
                />
                <Button type="submit" disabled={isSubmitting} className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white whitespace-nowrap h-12 px-6 rounded-lg">
                  Join Waitlist
                </Button>
              </div>
            </form>
            <p className="text-sm text-gray-500">Join early access. No credit card required.</p>
          </motion.div>
        </section>

        <section className="px-6 py-16 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}>
                <Card className="p-6 bg-white/[0.02] border-white/10 h-full hover:bg-white/[0.04] transition-colors">
                  <feature.icon className="w-10 h-10 mb-4 text-purple-400" strokeWidth={1.5} />
                  <h3 className="font-semibold text-base mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
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
            transition={{ duration: 0.6 }}
            className="text-center mb-16">
            <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20 text-xs">Integration</Badge>
            <h2 className="text-4xl font-bold mb-4 text-white">Works with your AI tool</h2>
            <p className="text-lg text-gray-400 max-w-xl mx-auto">Just prompt. No code required.</p>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
            <motion.div
              animate={{ x: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0 }}>
              <Image src="/logos/bolt.png" alt="Bolt" width={120} height={40} className="h-8 w-auto grayscale hover:grayscale-0 transition-all" />
            </motion.div>
            <motion.div
              animate={{ x: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}>
              <Image src="/logos/replit.png" alt="Replit" width={120} height={40} className="h-8 w-auto grayscale hover:grayscale-0 transition-all" />
            </motion.div>
            <motion.div
              animate={{ x: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}>
              <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Logo-1-1765849507570.png?width=8000&height=8000&resize=contain" alt="Lovable" width={120} height={40} className="h-8 w-auto grayscale hover:grayscale-0 transition-all" />
            </motion.div>
            <motion.div
              animate={{ x: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2.4 }}>
              <Image src="/logos/windsurf.svg" alt="Windsurf" width={120} height={40} className="h-8 w-auto grayscale hover:grayscale-0 transition-all" />
            </motion.div>
            <motion.div
              animate={{ x: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 3.2 }}>
              <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Logo-2-1765849549634.png?width=8000&height=8000&resize=contain" alt="V0" width={120} height={40} className="h-8 w-auto grayscale hover:grayscale-0 transition-all" />
            </motion.div>
          </div>
        </section>

        <section id="pricing" className="px-6 py-24 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">
            <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20 text-xs">Pricing</Badge>
            <h2 className="text-4xl font-bold mb-4 text-white">Simple pricing</h2>
            <p className="text-lg text-gray-400 max-w-xl mx-auto">Start free. Scale as you grow.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}>
                <Card className={`p-8 bg-white/[0.02] border-white/10 h-full relative hover:bg-white/[0.04] transition-colors ${plan.popular ? 'border-purple-500/50 bg-white/[0.04]' : ''}`}>
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#8B5CF6] text-white border-0">
                      Most Popular
                    </Badge>
                  )}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-2 text-white">{plan.name}</h3>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      {plan.period && <span className="text-gray-400">{plan.period}</span>}
                    </div>
                    <p className="text-gray-400 text-sm">{plan.desc}</p>
                  </div>
                  <Button className={`w-full mb-6 h-11 rounded-lg ${plan.popular ? 'bg-[#8B5CF6] hover:bg-[#7C3AED] text-white' : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'}`}>
                    {plan.cta}
                  </Button>
                  <ul className="space-y-3">
                    {plan.features.map((feature, fi) => (
                      <li key={fi} className="flex items-start gap-3 text-sm">
                        <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
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
            transition={{ duration: 0.6 }}
            className="text-center">
            <h2 className="text-4xl font-bold mb-4 text-white">Start accepting payments</h2>
            <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">Join thousands shipping faster.</p>
            <Button className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white h-12 px-8 rounded-lg text-base">
              Get Started Free
            </Button>
          </motion.div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/5 px-6 py-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
              <div className="w-3 h-3 bg-[#0B0B0F] rounded-sm"></div>
            </motion.div>
            <span className="font-semibold">bloxs</span>
          </div>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Docs</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}