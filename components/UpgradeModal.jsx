"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { AlertCircle } from "lucide-react";
import { PricingTable } from "@clerk/nextjs";

export default function UpgradeModal({ open, onOpenChange, reason }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#0f0f11] border border-amber-400/20 rounded-2xl min-w-[70vw] max-h-[90vh] overflow-y-auto shadow-[0_0_60px_rgba(251,191,36,0.06)] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-white/5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-amber-400/50 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-amber-400">
        <DialogHeader>
          <div className="flex items-start gap-3 mb-2 px-1">
            <AlertCircle className="text-amber-400 mt-1 shrink-0" size={20} />
            <div>
              <DialogTitle className="font-serif text-2xl tracking-tight text-white">
                Upgrade your plan
              </DialogTitle>
              {reason && (
                <DialogDescription className="text-amber-400/80 mt-1 text-xs font-light">
                  {reason}
                </DialogDescription>
              )}
            </div>
          </div>
          {/* Subtle amber divider */}
          <div className="h-px bg-gradient-to-r from-amber-400/30 via-amber-400/10 to-transparent mt-2" />
        </DialogHeader>

        <div className="px-2 pb-6 pt-2">
          <PricingTable
            appearance={{
              variables: {
                colorBackground: "#141416",
                colorText: "#e7e5e4",
                colorTextSecondary: "#78716c",
                colorPrimary: "#f59e0b",
                colorDanger: "#ef4444",
                borderRadius: "0.75rem",
                fontFamily: "inherit",
              },
              elements: {
                pricingTableCard:
                  "bg-[#1a1a1d] border border-white/10 rounded-xl hover:border-amber-400/30 transition-all duration-200",
                pricingTableCardTitle: "text-white font-semibold",
                pricingTableCardPrice: "text-amber-400",
                pricingTableCardFeatureText: "text-stone-400",
                pricingTableCardFeatureIcon: "text-amber-400",
                badge:
                  "bg-amber-400/15 text-amber-400 border border-amber-400/30 text-xs",
                formButtonPrimary:
                  "bg-amber-400 hover:bg-amber-300 text-black font-semibold rounded-xl transition-all duration-200",
              },
            }}
            checkoutProps={{
              appearance: {
                elements: {
                  drawerRoot: {
                    zIndex: 2000,
                  },
                },
              },
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}