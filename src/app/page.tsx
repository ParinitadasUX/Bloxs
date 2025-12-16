"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  MessageCircleHeart,
  Gavel,
  CalendarHeart,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const emailFormRef = useRef<HTMLFormElement>(null);

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

  const scrollToEmailForm = () => {
    emailFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(() => {
      emailFormRef.current?.querySelector('input')?.focus();
    }, 500);
  };

  const features = [
  {
    icon: MessageCircleHeart,
    title: "Prompt it. It works.",
    desc: "One prompt in your AI tool creates working payments and subscriptions."
  },
  {
    icon: CalendarHeart,
    title: "Handle subscriptions",
    desc: "Bloxs manage upgrades, cancellations, renewals, and failed payments for you."
  },
  {
    icon: Gavel,
    title: "Legal clarity, not confusion",
    desc: "Bloxs surfaces the right legal and tax steps when you start charging without jargon or overwhelm."
  }];

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
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">Sign in</Button>
            <Button size="sm" className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white rounded-lg">Get Started</Button>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        <section className="px-6 py-40 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            
            <Badge className="mb-6 bg-purple-500/10 text-purple-300 border-purple-500/20 text-xs px-3 py-1">
              Payment infrastructure
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Payments for<br />
              <span className="text-gray-500">AI-first builders</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 !whitespace-pre-line">Zero-code payment integration. Tell your AI tool what you need, and bloxs handles the rest checkout, tax, compliance, analytics.

            </p>

            <p className="text-sm text-gray-500 !whitespace-pre-line mb-4 !whitespace-pre-line">Join the waitlist to try the product</p>

            <form ref={emailFormRef} onSubmit={handleWaitlistSignup} className="max-w-md mx-auto mb-4">
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/5 border-white/10 focus:border-purple-500 text-white placeholder:text-gray-500 h-12" />

                <Button type="submit" disabled={isSubmitting} className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white whitespace-nowrap h-12 px-6 rounded-lg">
                  Join Waitlist
                </Button>
              </div>
            </form>
          </motion.div>
        </section>

        <section id="features" className="px-6 py-32 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20">
            <h2 className="text-3xl md:text-4xl font-normal mb-6">
              The <span className="text-gray-400">Vibe</span> Coder's Dilemma
            </h2>
            <p className="text-base text-gray-400 max-w-3xl leading-relaxed !whitespace-pre-line">Your AI nails the prototype and users want it but when it's time to charge, subscriptions get messy, legal questions creep in, and momentum slows. Bloxs helps you understand what matters when money flows from billing setup to basic legal readiness.

            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}>
                <div className="h-[228px]">
                  <feature.icon className="w-12 h-12 mb-6 text-white" strokeWidth={1.5} />
                  <div className="border-t border-white/10 mb-6"></div>
                  <h3 className="font-normal text-lg mb-3 text-white whitespace-pre-line">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">{feature.desc}</p>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        <section id="integration" className="px-6 py-32 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">
            <Badge className="mb-4 bg-purple-500/10 text-purple-300 border-purple-500/20 text-xs">Integration</Badge>
            <h2 className="text-4xl font-bold mb-4 text-white">Works with your AI tool</h2>
            <p className="text-lg text-gray-400 max-w-xl mx-auto">Just prompt. No code required.</p>
          </motion.div>

          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-16 opacity-60"
              animate={{ x: [0, -600] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              }}>
              <Image src="/logos/bolt.png" alt="Bolt" width={120} height={40} className="h-8 w-auto grayscale hover:grayscale-0 transition-all flex-shrink-0" />
              <Image src="/logos/replit.png" alt="Replit" width={120} height={40} className="h-8 w-auto grayscale hover:grayscale-0 transition-all flex-shrink-0" />
              <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Logo-1-1765849507570.png?width=8000&height=8000&resize=contain" alt="Lovable" width={120} height={40} className="h-8 w-auto grayscale hover:grayscale-0 transition-all flex-shrink-0" />
              <Image src="/logos/windsurf.svg" alt="Windsurf" width={120} height={40} className="h-8 w-auto grayscale hover:grayscale-0 transition-all flex-shrink-0" />
              <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Logo-2-1765849549634.png?width=8000&height=8000&resize=contain" alt="V0" width={120} height={40} className="h-8 w-auto grayscale hover:grayscale-0 transition-all flex-shrink-0" />
              <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Logo-4-1765849749288.png?width=8000&height=8000&resize=contain" alt="Figma" width={120} height={40} className="h-8 w-auto grayscale hover:grayscale-0 transition-all flex-shrink-0" />
              <Image src="/logos/bolt.png" alt="Bolt" width={120} height={40} className="h-8 w-auto grayscale hover:grayscale-0 transition-all flex-shrink-0" />
              <Image src="/logos/replit.png" alt="Replit" width={120} height={40} className="h-8 w-auto grayscale hover:grayscale-0 transition-all flex-shrink-0" />
              <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Logo-1-1765849507570.png?width=8000&height=8000&resize=contain" alt="Lovable" width={120} height={40} className="h-8 w-auto grayscale hover:grayscale-0 transition-all flex-shrink-0" />
              <Image src="/logos/windsurf.svg" alt="Windsurf" width={120} height={40} className="h-8 w-auto grayscale hover:grayscale-0 transition-all flex-shrink-0" />
              <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Logo-2-1765849549634.png?width=8000&height=8000&resize=contain" alt="V0" width={120} height={40} className="h-8 w-auto grayscale hover:grayscale-0 transition-all flex-shrink-0" />
              <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Logo-4-1765849749288.png?width=8000&height=8000&resize=contain" alt="Figma" width={120} height={40} className="h-8 w-auto grayscale hover:grayscale-0 transition-all flex-shrink-0" />
            </motion.div>
          </div>
        </section>

        <section className="px-6 py-32 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center">
            <h2 className="text-4xl font-bold mb-4 text-white !whitespace-pre-line">Start accepting payments with Blox!</h2>
            <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto !whitespace-pre-line"></p>
            <Button onClick={scrollToEmailForm} className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white h-12 px-8 rounded-lg text-base !whitespace-pre-line">Join Now</Button>
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
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  MessageCircleHeart,
  Gavel,
  CalendarHeart,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const emailFormRef = useRef<HTMLFormElement>(null);

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

  const scrollToEmailForm = () => {
    emailFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(() => {
      emailFormRef.current?.querySelector('input')?.focus();
    }, 500);
  };

  const features = [
  {
    icon: MessageCircleHeart,
    title: "Prompt it. It works.",
    desc: "One prompt in your AI tool creates working payments and subscriptions."
  },
  {
    icon: CalendarHeart,
    title: "Handle subscriptions",
    desc: "Bloxs manage upgrades, cancellations, renewals, and failed payments for you."
  },
  {
    icon: Gavel,
    title: "Legal clarity, not confusion",
    desc: "Bloxs surfaces the right legal and tax steps when you start charging without jargon or overwhelm."
  }];

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
              <Link href="#how-it-works" className="hover:text-white transition-colors">How it Works</Link>
              <Link href="#integration" className="hover:text-white transition-colors">Integration</Link>
            </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">Sign in</Button>
            <Button size="sm" className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white rounded-lg">Get Started</Button>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        <section className="px-6 py-40 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            
            <Badge className="mb-6 bg-purple-500/10 text-purple-300 border-purple-500/20 text-xs px-3 py-1">
              Payment infrastructure
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Payments for<br />
              <span className="text-gray-500">AI-first builders</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 !whitespace-pre-line">Zero-code payment integration. Tell your AI tool what you need, and bloxs handles the rest checkout, tax, compliance, analytics.

            </p>

            <p className="text-sm text-gray-500 !whitespace-pre-line mb-4 !whitespace-pre-line">Join the waitlist to try the product</p>

            <form ref={emailFormRef} onSubmit={handleWaitlistSignup} className="max-w-md mx-auto mb-4">
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/5 border-white/10 focus:border-purple-500 text-white placeholder:text-gray-500 h-12" />

                <Button type="submit" disabled={isSubmitting} className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white whitespace-nowrap h-12 px-6 rounded-lg">
                  Join Waitlist
                </Button>
              </div>
            </form>
          </motion.div>
        </section>

        <section id="features" className="px-6 py-32 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20">
            <h2 className="text-3xl md:text-4xl font-normal mb-6">
              The <span className="text-gray-400">Vibe</span> Coder's Dilemma
            </h2>
            <p className="text-base text-gray-400 max-w-3xl leading-relaxed !whitespace-pre-line">Your AI nails the prototype and users want it but when it's time to charge, subscriptions get messy, legal questions creep in, and momentum slows. Bloxs helps you understand what matters when money flows from billing setup to basic legal readiness.

            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}>
                <div className="h-[228px]">
                  <feature.icon className="w-12 h-12 mb-6 text-white" strokeWidth={1.5} />
                  <div className="border-t border-white/10 mb-6"></div>
                  <h3 className="font-normal text-lg mb-3 text-white whitespace-pre-line">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">{feature.desc}</p>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        <section id="integration" className="px-6 py-32 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">
            <Badge className="mb-4 bg-purple-500/10 text-purple-300 border-purple-500/20 text-xs">Integration</Badge>
            <h2 className="text-4xl font-bold mb-4 text-white">Works with your AI tool</h2>
            <p className="text-lg text-gray-400 max-w-xl mx-auto">Just prompt. No code required.</p>
          </motion.div>

          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-16 opacity-60"
              animate={{ x: [0, -600] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              }}>
              <Image src="/logos/bolt.png" alt="Bolt" width={120} height={40} className="h-8 w-auto grayscale hover:grayscale-0 transition-all flex-shrink-0" />
              <Image src="/logos/replit.png" alt="Replit" width={120} height={40} className="h-8 w-auto grayscale hover:grayscale-0 transition-all flex-shrink-0" />
              <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Logo-1-1765849507570.png?width=8000&height=8000&resize=contain" alt="Lovable" width={120} height={40} className="h-8 w-auto grayscale hover:grayscale-0 transition-all flex-shrink-0" />
              <Image src="/logos/windsurf.svg" alt="Windsurf" width={120} height={40} className="h-8 w-auto grayscale hover:grayscale-0 transition-all flex-shrink-0" />
              <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Logo-2-1765849549634.png?width=8000&height=8000&resize=contain" alt="V0" width={120} height={40} className="h-8 w-auto grayscale hover:grayscale-0 transition-all flex-shrink-0" />
              <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Logo-4-1765849749288.png?width=8000&height=8000&resize=contain" alt="Figma" width={120} height={40} className="h-8 w-auto grayscale hover:grayscale-0 transition-all flex-shrink-0" />
              <Image src="/logos/bolt.png" alt="Bolt" width={120} height={40} className="h-8 w-auto grayscale hover:grayscale-0 transition-all flex-shrink-0" />
              <Image src="/logos/replit.png" alt="Replit" width={120} height={40} className="h-8 w-auto grayscale hover:grayscale-0 transition-all flex-shrink-0" />
              <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Logo-1-1765849507570.png?width=8000&height=8000&resize=contain" alt="Lovable" width={120} height={40} className="h-8 w-auto grayscale hover:grayscale-0 transition-all flex-shrink-0" />
              <Image src="/logos/windsurf.svg" alt="Windsurf" width={120} height={40} className="h-8 w-auto grayscale hover:grayscale-0 transition-all flex-shrink-0" />
              <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Logo-2-1765849549634.png?width=8000&height=8000&resize=contain" alt="V0" width={120} height={40} className="h-8 w-auto grayscale hover:grayscale-0 transition-all flex-shrink-0" />
              <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Logo-4-1765849749288.png?width=8000&height=8000&resize=contain" alt="Figma" width={120} height={40} className="h-8 w-auto grayscale hover:grayscale-0 transition-all flex-shrink-0" />
            </motion.div>
          </div>
        </section>

        <section className="px-6 py-32 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center">
            <h2 className="text-4xl font-bold mb-4 text-white !whitespace-pre-line">Start accepting payments with Blox!</h2>
            <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto !whitespace-pre-line"></p>
            <Button onClick={scrollToEmailForm} className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white h-12 px-8 rounded-lg text-base !whitespace-pre-line">Join Now</Button>
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
