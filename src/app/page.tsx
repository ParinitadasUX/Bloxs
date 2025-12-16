"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  MessageCircleHeart,
  Gavel,
  CalendarHeart,
  ArrowRight,
  Sparkles,
  Code2,
  CreditCard,
  Zap,
  CheckCircle2,
  Copy,
  Bot } from
"lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const emailFormRef = useRef<HTMLFormElement>(null);

  const [demoStep, setDemoStep] = useState<"select" | "subscription-form" | "feature-lock-form" | "generated">("select");
  const [selectedPath, setSelectedPath] = useState<"subscription" | "feature-lock" | null>(null);

  const [subscriptionTiers, setSubscriptionTiers] = useState<Array<{
    name: string;
    price: string;
    features: string[];
  }>>([{ name: "", price: "", features: [""] }]);

  const [availableFeatures] = useState([
  "Advanced Analytics",
  "Team Collaboration",
  "Dark Mode",
  "API Access",
  "Priority Support",
  "Custom Branding"]
  );
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [featureLockTier, setFeatureLockTier] = useState<string>("Pro Plan");

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
            <Link href="#how-it-works" className="hover:text-white transition-colors">How it Works</Link>
          </div>
            <div className="flex items-center gap-3">
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

        <section id="how-it-works" className="px-6 py-32 max-w-7xl mx-auto">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20">
                <Badge className="mb-4 bg-purple-500/10 text-purple-300 border-purple-500/20 text-xs">How it Works</Badge>
                <h2 className="text-4xl font-bold mb-4 text-white !whitespace-pre-line !whitespace-pre-line">Simple prompt to production ready</h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">Tell your AI tool what you need, and Bloxs generates production-ready payment code</p>
            </motion.div>

            <div className="relative max-w-5xl mx-auto mb-20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                <svg className="hidden md:block absolute top-1/2 left-0 w-full h-24 -translate-y-1/2 pointer-events-none z-0" viewBox="0 0 800 100" preserveAspectRatio="none">
                  <motion.path
                  d="M 100 50 L 350 50 M 450 50 L 700 50"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeInOut" }} />

                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                </svg>

                  {[
              {
                icon: Sparkles,
                title: "One-time",
                badge: "Popular",
                desc: "Single payment checkout with automated receipt generation and tax calculation."
              },
              {
                icon: CheckCircle2,
                title: "Subscription",
                badge: "Best Value",
                desc: "Recurring billing with automatic renewals, upgrade/downgrade flows, and failed payment handling."
              },
              {
                icon: Bot,
                title: "Usage-based",
                badge: "Flexible",
                desc: "Metered billing based on consumption with real-time usage tracking and threshold alerts."
              }].
              map((item, i) =>
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative z-10 group">
                    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300 hover:bg-white/[0.05] h-full">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-purple-500/10 border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors">
                          <item.icon className="w-8 h-8 text-purple-400" strokeWidth={1.5} />
                        </div>
                        <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-xs">{item.badge}</Badge>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
              )}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 text-center">
              <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-6 py-3">
                <Zap className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-300">One-time, subscription, or usage-based billing supported</span>
              </div>
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col">
                <h3 className="text-2xl font-semibold mb-4 text-white">See it in action</h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Watch how Bloxs transforms a simple prompt into a complete payment system in seconds.
                </p>
              </motion.div>

            <div className="space-y-6">
              {demoStep === "select" &&
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative">
                    <div className="absolute -left-4 top-0 bottom-0 w-1 bg-purple-500/30"></div>
                        <div className="bg-[#1A1A23] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-[#0D0D12]">
                            <Bot className="w-4 h-4 text-purple-400" />
                            <span className="text-xs text-purple-300 font-mono !whitespace-pre-line">Select Prompt</span>
                          </div>
                        
                        <div className="p-6 space-y-4">
                          <div className="flex items-start gap-3 mb-4">
                            <span className="text-purple-400 font-mono text-xs">{'>'}</span>
                            <div className="flex-1">
                              <p className="text-white text-sm font-mono mb-2">What would you like to build?</p>
                            </div>
                          </div>
                          
                          <div className="space-y-3">
                          <button
                          onClick={() => {
                            setSelectedPath("subscription");
                            setDemoStep("subscription-form");
                          }}
                          className="w-full bg-[#16161D] hover:bg-white/10 border border-white/10 hover:border-purple-500/50 rounded-lg p-3 text-left transition-all group flex items-center gap-3">
                            <span className="text-purple-400 font-mono text-xs">1.</span>
                            <div className="flex-1">
                              <div className="text-sm text-white font-mono group-hover:text-purple-300 transition-colors">Create subscription tiers</div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-purple-400 transition-colors" />
                          </button>

                          <button
                          onClick={() => {
                            setSelectedPath("feature-lock");
                            setDemoStep("feature-lock-form");
                          }}
                          className="w-full bg-[#16161D] hover:bg-white/10 border border-white/10 hover:border-purple-500/50 rounded-lg p-3 text-left transition-all group flex items-center gap-3">
                            <span className="text-purple-400 font-mono text-xs">2.</span>
                            <div className="flex-1">
                              <div className="text-sm text-white font-mono group-hover:text-purple-300 transition-colors">Lock features behind payment</div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-purple-400 transition-colors" />
                          </button>
                        </div>
                        </div>
                    </div>
                  </motion.div>
                }

                {demoStep === "subscription-form" &&
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative">
                    <div className="absolute -left-4 top-0 bottom-0 w-1 bg-purple-500/30"></div>
                        <div className="bg-[#1A1A23] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-[#0D0D12]">
                            <Bot className="w-4 h-4 text-purple-400" />
                            <span className="text-xs text-purple-300 font-mono">bloxs_cli</span>
                          </div>
                        
                        <div className="px-6 pt-4 pb-2 border-b border-white/10 bg-[#16161D]">
                          <div className="flex items-start gap-3">
                            <span className="text-purple-400 font-mono text-xs">{'>'}</span>
                            <p className="text-white text-xs font-mono">Create subscription tiers</p>
                          </div>
                        </div>
                      
                      <div className="p-6 space-y-6 max-h-96 overflow-y-auto">
                        {subscriptionTiers.map((tier, tierIdx) =>
                      <div key={tierIdx} className="space-y-3 pb-6 border-b border-white/10 last:border-b-0">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-semibold text-purple-400">Tier {tierIdx + 1}</span>
                              {subscriptionTiers.length > 1 &&
                          <button
                            onClick={() => setSubscriptionTiers(subscriptionTiers.filter((_, i) => i !== tierIdx))}
                            className="text-xs text-gray-500 hover:text-red-400 transition-colors">
                                  Remove
                                </button>
                          }
                            </div>
                            
                            <Input
                          placeholder="Tier name (e.g., Basic, Pro)"
                          value={tier.name}
                          onChange={(e) => {
                            const updated = [...subscriptionTiers];
                            updated[tierIdx].name = e.target.value;
                            setSubscriptionTiers(updated);
                          }}
                          className="bg-white/5 border-white/10 focus:border-purple-500 text-white placeholder:text-gray-500 text-xs" />

                            <div className="flex gap-2">
                              <div className="relative flex-1">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">$</span>
                                <Input
                              placeholder="29"
                              type="number"
                              value={tier.price}
                              onChange={(e) => {
                                const updated = [...subscriptionTiers];
                                updated[tierIdx].price = e.target.value;
                                setSubscriptionTiers(updated);
                              }}
                              className="bg-white/5 border-white/10 focus:border-purple-500 text-white placeholder:text-gray-500 text-xs pl-7" />
                              </div>
                              <span className="text-xs text-gray-400 flex items-center">/month</span>
                            </div>

                            <div className="space-y-2">
                              <label className="text-xs text-gray-400">Features:</label>
                              {tier.features.map((feature, featIdx) =>
                          <div key={featIdx} className="flex gap-2">
                                  <Input
                              placeholder="e.g., Email support"
                              value={feature}
                              onChange={(e) => {
                                const updated = [...subscriptionTiers];
                                updated[tierIdx].features[featIdx] = e.target.value;
                                setSubscriptionTiers(updated);
                              }}
                              className="bg-white/5 border-white/10 focus:border-purple-500 text-white placeholder:text-gray-500 text-xs flex-1" />
                                  {tier.features.length > 1 &&
                            <button
                              onClick={() => {
                                const updated = [...subscriptionTiers];
                                updated[tierIdx].features = updated[tierIdx].features.filter((_, i) => i !== featIdx);
                                setSubscriptionTiers(updated);
                              }}
                              className="text-xs text-gray-500 hover:text-red-400 px-2">
                                      ×
                                    </button>
                            }
                                </div>
                          )}
                              <button
                            onClick={() => {
                              const updated = [...subscriptionTiers];
                              updated[tierIdx].features.push("");
                              setSubscriptionTiers(updated);
                            }}
                            className="text-xs text-purple-400 hover:text-purple-300 transition-colors">
                                + Add feature
                              </button>
                            </div>
                          </div>
                      )}

                        <button
                        onClick={() => setSubscriptionTiers([...subscriptionTiers, { name: "", price: "", features: [""] }])}
                        className="w-full bg-white/5 border border-white/10 hover:bg-white/10 text-purple-400 text-xs py-2 rounded transition-colors">
                          + Add Another Tier
                        </button>
                      </div>

                      <div className="p-4 border-t border-white/10 flex gap-2">
                        <Button
                        onClick={() => {
                          setDemoStep("select");
                          setSubscriptionTiers([{ name: "", price: "", features: [""] }]);
                        }}
                        variant="ghost"
                        className="flex-1 text-gray-400 text-xs py-2">
                          Back
                        </Button>
                        <Button
                        onClick={() => {
                          const hasValidTier = subscriptionTiers.some((t) => t.name && t.price);
                          if (hasValidTier) {
                            setDemoStep("generated");
                            toast.success("Generating payment UI...");
                          } else {
                            toast.error("Please fill in at least one tier");
                          }
                        }}
                        className="flex-1 bg-purple-500 hover:bg-purple-600 text-white text-xs py-2">
                          Generate UI
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                }

                {demoStep === "feature-lock-form" &&
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative">
                    <div className="absolute -left-4 top-0 bottom-0 w-1 bg-purple-500/30"></div>
                        <div className="bg-[#1A1A23] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-[#0D0D12]">
                            <Bot className="w-4 h-4 text-purple-400" />
                            <span className="text-xs text-purple-300 font-mono">bloxs_cli</span>
                          </div>
                        
                        <div className="px-6 pt-4 pb-2 border-b border-white/10 bg-[#16161D]">
                          <div className="flex items-start gap-3">
                            <span className="text-purple-400 font-mono text-xs">{'>'}</span>
                            <p className="text-white text-xs font-mono">Lock features behind payment</p>
                          </div>
                        </div>
                      
                      <div className="p-6 space-y-4">
                        <div className="space-y-2">
                          <label className="text-xs text-gray-400">Which features to lock?</label>
                          <div className="space-y-2">
                            {availableFeatures.map((feature) =>
                          <label key={feature} className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all cursor-pointer">
                                <input
                              type="checkbox"
                              checked={selectedFeatures.includes(feature)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setSelectedFeatures([...selectedFeatures, feature]);
                                } else {
                                  setSelectedFeatures(selectedFeatures.filter((f) => f !== feature));
                                }
                              }}
                              className="w-4 h-4 rounded border-white/20 bg-white/5 checked:bg-purple-500" />
                                <span className="text-xs text-white">{feature}</span>
                              </label>
                          )}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs text-gray-400">Unlock with:</label>
                          <select
                          value={featureLockTier}
                          onChange={(e) => setFeatureLockTier(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 focus:border-purple-500 text-white text-xs rounded-lg p-3">
                            <option value="Pro Plan">Pro Plan</option>
                            <option value="Premium Plan">Premium Plan</option>
                            <option value="Enterprise Plan">Enterprise Plan</option>
                          </select>
                        </div>
                      </div>

                      <div className="p-4 border-t border-white/10 flex gap-2">
                        <Button
                        onClick={() => {
                          setDemoStep("select");
                          setSelectedFeatures([]);
                        }}
                        variant="ghost"
                        className="flex-1 text-gray-400 text-xs py-2">
                          Back
                        </Button>
                        <Button
                        onClick={() => {
                          if (selectedFeatures.length > 0) {
                            setDemoStep("generated");
                            toast.success("Generating feature gates...");
                          } else {
                            toast.error("Please select at least one feature");
                          }
                        }}
                        className="flex-1 bg-purple-500 hover:bg-purple-600 text-white text-xs py-2">
                          Generate UI
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                }

                {demoStep === "generated" &&
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative">
                    <div className="absolute -left-4 top-0 bottom-0 w-1 bg-purple-500/30"></div>
                      <div className="bg-[#1A1A23] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-[#0D0D12]">
                          <Bot className="w-4 h-4 text-purple-400" />
                          <span className="text-xs text-purple-300 font-mono">bloxs_cli</span>
                          <button
                        onClick={() => {
                          setDemoStep("select");
                          setSubscriptionTiers([{ name: "", price: "", features: [""] }]);
                          setSelectedFeatures([]);
                        }}
                        className="ml-auto text-xs text-purple-400 hover:text-purple-300 transition-colors font-mono">
                            [reset]
                          </button>
                        </div>
                        
                        <div className="px-6 pt-4 pb-2 border-b border-white/10 bg-[#16161D]">
                          <div className="flex items-start gap-3">
                            <span className="text-green-400 font-mono text-xs">✓</span>
                            <p className="text-green-400 text-xs font-mono">
                              {selectedPath === "subscription" ? "Generated subscription UI" : "Generated feature lock UI"}
                            </p>
                          </div>
                        </div>
                      
                      <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
                        {selectedPath === "subscription" &&
                      <div className="grid grid-cols-2 gap-3">
                            {subscriptionTiers.filter((t) => t.name && t.price).map((tier, idx) =>
                        <div
                          key={idx}
                          className={`${idx === 0 ? 'bg-white/5 border border-white/10' : 'bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/40'} rounded-lg p-4 hover:border-purple-500/50 transition-all cursor-pointer group relative overflow-hidden`}>
                                {idx > 0 && <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/20 rounded-full blur-2xl"></div>}
                                <div className="flex items-center justify-between mb-2 relative z-10">
                                  <span className="text-sm font-semibold text-white">{tier.name}</span>
                                  <Badge className={`${idx === 0 ? 'bg-purple-500/20 text-purple-300 border-purple-500/30' : 'bg-purple-500 text-white border-purple-400'} text-[10px] px-2 py-0.5`}>
                                    {idx === 0 ? 'Popular' : 'Best Value'}
                                  </Badge>
                                </div>
                                <div className="mb-3 relative z-10">
                                  <span className="text-2xl font-bold text-white">${tier.price}</span>
                                  <span className={`text-xs ${idx === 0 ? 'text-gray-400' : 'text-gray-300'}`}>/month</span>
                                </div>
                                <ul className="space-y-1.5 mb-4 relative z-10">
                                  {tier.features.filter((f) => f.trim()).map((feature, featIdx) =>
                            <li key={featIdx} className={`flex items-center gap-2 text-xs ${idx === 0 ? 'text-gray-300' : 'text-gray-200'}`}>
                                      <CheckCircle2 className={`w-3 h-3 ${idx === 0 ? 'text-purple-400' : 'text-purple-300'} flex-shrink-0`} />
                                      <span>{feature}</span>
                                    </li>
                            )}
                                </ul>
                                <button className={`w-full ${idx === 0 ? 'bg-white/10 hover:bg-white/20 group-hover:bg-purple-500' : 'bg-purple-500 hover:bg-purple-600 group-hover:bg-purple-400'} text-white text-xs py-2 rounded transition-colors relative z-10`}>
                                  Select {tier.name}
                                </button>
                              </div>
                        )}
                          </div>
                      }

                        {selectedPath === "feature-lock" &&
                      <div className="space-y-3">
                            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                              <div className="flex items-center justify-between mb-3">
                                <span className="text-sm font-semibold text-white">Locked Features</span>
                                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-[10px]">
                                  Requires {featureLockTier}
                                </Badge>
                              </div>
                              <div className="space-y-2">
                                {selectedFeatures.map((feature) =>
                            <div key={feature} className="flex items-center justify-between p-2 bg-white/5 rounded border border-white/10">
                                    <span className="text-xs text-gray-300">{feature}</span>
                                    <Gavel className="w-4 h-4 text-purple-400" />
                                  </div>
                            )}
                              </div>
                            </div>
                            <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/40 rounded-lg p-4">
                              <div className="text-sm font-semibold text-white mb-2">{featureLockTier}</div>
                              <div className="text-xs text-gray-300 mb-4">Unlock all premium features</div>
                              <button className="w-full bg-purple-500 hover:bg-purple-600 text-white text-xs py-2 rounded transition-colors">
                                Upgrade to {featureLockTier}
                              </button>
                            </div>
                          </div>
                      }
                      </div>
                    </div>
                  </motion.div>
                }
              </div>
          </div>
        </div>
        </section>

          <section id="features" className="px-6 py-32 max-w-6xl mx-auto">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20">
              <Badge className="mb-4 bg-purple-500/10 text-purple-300 border-purple-500/20 text-xs !whitespace-pre-line">Features</Badge>
              <h2 className="text-3xl md:text-4xl font-normal mb-6 !whitespace-pre-line">What Bloxs  Coder's Dilemma
              <span className="text-gray-400 !whitespace-pre-line">Does?</span>
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

              <div className="relative overflow-hidden mb-24">
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
                <p className="text-lg text-gray-400 mb-2 max-w-xl mx-auto !whitespace-pre-line"></p>
                <p className="text-sm text-gray-500 mb-8 !whitespace-pre-line">Join the waitlist to try the product</p>
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
    </div>);

}