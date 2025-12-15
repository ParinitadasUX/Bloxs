"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { 
  CreditCard, 
  Plus, 
  MoreVertical, 
  Copy, 
  Edit, 
  BarChart3,
  Check,
  X as XIcon
} from "lucide-react";
import { useState } from "react";

export function DashboardMockup() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [productName, setProductName] = useState("Pro Plan");
  const [productDescription, setProductDescription] = useState("Full access to all premium features");
  const [productPrice, setProductPrice] = useState("49.00");
  const [checkoutUrl] = useState("https://payflow.dev/checkout/prod_abc123xyz");
  const [copied, setCopied] = useState(false);

  const handleCreateProduct = () => {
    setShowCreateModal(false);
    setShowSuccessModal(true);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(checkoutUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm shadow-2xl">
        <div className="border-b border-border/50 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <CreditCard className="w-4 h-4 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold">PayFlow Dashboard</h1>
          </div>
          <Button 
            size="sm" 
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
            onClick={() => setShowCreateModal(true)}
          >
            <Plus className="w-4 h-4 mr-2" />
            Create Product
          </Button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                📦 Your Products
              </h2>
            </div>

            <div className="grid gap-4">
              <Card className="border-border/50 bg-card/80">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                          🚀
                        </div>
                        <div>
                          <CardTitle className="text-xl">Pro Plan</CardTitle>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="secondary" className="text-xs">
                              $49/month
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <CardDescription className="text-base">
                        Full access to all features
                      </CardDescription>
                    </div>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1.5">
                      <BarChart3 className="w-4 h-4" />
                      <span>12 sales</span>
                    </div>
                    <div className="text-foreground font-semibold">
                      $588 revenue
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Copy className="w-3.5 h-3.5 mr-2" />
                      Copy Link
                    </Button>
                    <Button size="sm" variant="outline">
                      <Edit className="w-3.5 h-3.5 mr-2" />
                      Edit
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/80">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary/20 to-muted/20 flex items-center justify-center">
                          ⚡
                        </div>
                        <div>
                          <CardTitle className="text-xl">Starter</CardTitle>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline" className="text-xs">
                              FREE
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <CardDescription className="text-base">
                        Get started with basic features
                      </CardDescription>
                    </div>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1.5">
                      <BarChart3 className="w-4 h-4" />
                      <span>45 signups</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                    <Button size="sm" variant="outline">
                      <Edit className="w-3.5 h-3.5 mr-2" />
                      Edit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={showCreateModal} onOpenChange={setShowCreateModal}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Create Product</DialogTitle>
            <DialogDescription>
              Set up a new product for your customers to purchase
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">
                Product Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Pro Plan"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                placeholder="Full access to all premium features"
              />
            </div>
            <div className="space-y-2">
              <Label>Pricing</Label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    $
                  </span>
                  <Input
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                    className="pl-7"
                    placeholder="49.00"
                  />
                </div>
                <select className="h-9 rounded-md border border-input bg-transparent px-3 text-sm">
                  <option>/month</option>
                  <option>/year</option>
                  <option>one-time</option>
                </select>
              </div>
            </div>
            <div className="space-y-3 pt-2">
              <Label className="flex items-center gap-2 font-normal cursor-pointer">
                <input type="radio" name="payment-type" className="w-4 h-4" />
                <span>One-time payment</span>
              </Label>
              <Label className="flex items-center gap-2 font-normal cursor-pointer">
                <input type="radio" name="payment-type" defaultChecked className="w-4 h-4" />
                <span>Recurring subscription</span>
              </Label>
            </div>
            <div className="space-y-2">
              <Label htmlFor="success-url">Success URL (optional)</Label>
              <Input
                id="success-url"
                placeholder="https://myapp.com/welcome"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowCreateModal(false)}>
              Cancel
            </Button>
            <Button 
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
              onClick={handleCreateProduct}
            >
              Create Product
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                <Check className="w-5 h-5 text-green-500" />
              </div>
              <DialogTitle>Product Created!</DialogTitle>
            </div>
            <DialogDescription>
              Your checkout link is ready to use
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <Label>Your checkout link:</Label>
              <div className="flex gap-2">
                <Input
                  value={checkoutUrl}
                  readOnly
                  className="font-mono text-xs"
                />
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={copyToClipboard}
                  className="shrink-0"
                >
                  {copied ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>

            <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <span className="text-lg">🚀</span>
                Next Steps:
              </h4>
              <ol className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <span className="font-bold text-primary shrink-0">1️⃣</span>
                  <span>Copy the link above</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary shrink-0">2️⃣</span>
                  <div className="flex-1">
                    <div>Tell your AI tool:</div>
                    <div className="mt-2 p-3 rounded-md bg-background/80 border border-border/50 font-mono text-xs">
                      &quot;Add a Buy Now button that links to {checkoutUrl}&quot;
                    </div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary shrink-0">3️⃣</span>
                  <span>Your AI will generate the button</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary shrink-0">4️⃣</span>
                  <span>Start getting paid! 💰</span>
                </li>
              </ol>
            </div>
          </div>
          <DialogFooter className="gap-2">
            <Button variant="outline" onClick={() => setShowSuccessModal(false)}>
              View Product
            </Button>
            <Button 
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
              onClick={() => {
                setShowSuccessModal(false);
                setShowCreateModal(true);
              }}
            >
              Create Another
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
