"use client";

import { CalendarClock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function CtaDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg">
          <CalendarClock className="mr-2 h-4 w-4" />
          Book a strategy call
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Start your next build with Digistart</DialogTitle>
          <DialogDescription>
            Tell us about your goals, timeline, and technical needs. We will
            respond within 24 hours with a tailored engagement plan.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-4 text-sm text-slate-600">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="font-medium text-slate-900">What happens next?</p>
            <ul className="mt-2 list-disc space-y-1 pl-4">
              <li>We review your project requirements.</li>
              <li>You receive a tailored roadmap and estimate.</li>
              <li>We align on scope and launch the build.</li>
            </ul>
          </div>
          <p>
            Prefer email? Reach us at <strong>hello@digistartjp.com</strong>.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
