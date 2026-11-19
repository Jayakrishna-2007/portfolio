import React, { useState } from 'react';
import { Plane, Eye, Navigation, Fingerprint, Scan, Utensils, Sparkles, CheckCircle2 } from 'lucide-react';

interface ProjectMockupProps {
  type: 'flight' | 'retina' | 'traffic' | 'biometric' | 'meal';
  accentColor?: 'blue' | 'lavender' | 'coral';
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ type }) => {
  // State for interactive elements in the mockups
  const [selectedSeat, setSelectedSeat] = useState<string>('3B');
  const [claheActive, setClaheActive] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<string>('live');

  if (type === 'flight') {
    return (
      <div className="w-full h-full min-h-[300px] bg-gradient-to-br from-electric/5 via-white to-soft-blue p-5 sm:p-6 rounded-2xl flex flex-col justify-between border border-electric/20 font-sans select-none">
        {/* App Header simulation */}
        <div className="flex items-center justify-between border-b border-ink/10 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-electric flex items-center justify-center text-white shadow-sm">
              <Plane className="w-4 h-4 transform -rotate-45" />
            </div>
            <div>
              <span className="text-xs font-bold text-ink tracking-tight block">AirLink Flights</span>
              <span className="text-[10px] text-ink-muted">MAA ➔ BLR • Non-stop</span>
            </div>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 font-semibold">
            ● Flight On-Time
          </span>
        </div>

        {/* Boarding & Seat Selector */}
        <div className="my-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Flight Card */}
          <div className="bg-white p-3 rounded-xl border border-electric/15 shadow-soft">
            <div className="flex justify-between items-center text-xs text-ink-muted font-medium mb-1">
              <span>Flight AL-408</span>
              <span className="text-electric font-semibold font-mono">₹3,450</span>
            </div>
            <div className="flex items-center justify-between my-2">
              <div>
                <span className="text-lg font-extrabold text-ink">MAA</span>
                <span className="text-[10px] text-ink-muted block">Chennai</span>
              </div>
              <div className="flex-1 mx-3 flex flex-col items-center">
                <span className="text-[10px] text-ink-muted font-mono">1h 10m</span>
                <div className="w-full h-0.5 bg-electric/30 relative flex items-center justify-center">
                  <Plane className="w-3 h-3 text-electric absolute" />
                </div>
                <span className="text-[9px] text-emerald-600 font-medium mt-0.5">Direct</span>
              </div>
              <div className="text-right">
                <span className="text-lg font-extrabold text-ink">BLR</span>
                <span className="text-[10px] text-ink-muted block">Bengaluru</span>
              </div>
            </div>
          </div>

          {/* Mini Seat Selection Grid */}
          <div className="bg-white p-3 rounded-xl border border-ink/10 shadow-soft">
            <div className="text-[11px] font-semibold text-ink flex items-center justify-between mb-2">
              <span>Select Seat</span>
              <span className="text-electric font-mono text-[10px]">Seat: {selectedSeat}</span>
            </div>
            <div className="grid grid-cols-4 gap-1.5 text-center">
              {['2A', '2B', '3A', '3B', '4A', '4B', '5A', '5B'].map((seat) => (
                <button
                  key={seat}
                  type="button"
                  onClick={() => setSelectedSeat(seat)}
                  className={`py-1 text-[10px] font-mono rounded transition-colors ${
                    selectedSeat === seat
                      ? 'bg-electric text-white font-bold shadow-sm'
                      : seat === '2A' || seat === '4B'
                      ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                      : 'bg-soft-blue text-electric hover:bg-electric/20'
                  }`}
                >
                  {seat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gemini Assistant Preview */}
        <div className="bg-soft-blue/60 p-2.5 rounded-xl border border-electric/20 flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-full bg-electric/15 flex items-center justify-center text-electric flex-shrink-0">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <div className="text-[11px] text-ink-muted leading-tight">
            <span className="font-semibold text-electric">Gemini Assistant: </span>
            Cabin baggage up to 7kg included. Ready for Razorpay checkout.
          </div>
        </div>
      </div>
    );
  }

  if (type === 'retina') {
    return (
      <div className="w-full h-full min-h-[300px] bg-gradient-to-br from-coral/5 via-white to-soft-coral p-5 sm:p-6 rounded-2xl flex flex-col justify-between border border-coral/20 font-sans select-none">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-coral/15 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-coral flex items-center justify-center text-white shadow-sm">
              <Eye className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-ink tracking-tight block">Vision One AI</span>
              <span className="text-[10px] text-ink-muted">Retinal Screening Engine</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setClaheActive(!claheActive)}
            className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-coral/10 hover:bg-coral/20 text-coral border border-coral/30 font-semibold transition-colors flex items-center gap-1"
          >
            <span>CLAHE: {claheActive ? 'Active' : 'Raw'}</span>
          </button>
        </div>

        {/* Retinal Fundus Viewport */}
        <div className="my-3 relative flex items-center justify-center">
          <div className={`relative w-44 h-44 rounded-full border-4 ${claheActive ? 'border-coral shadow-glow-coral' : 'border-ink/20'} overflow-hidden bg-gradient-to-br from-amber-950 via-rose-900 to-amber-900 transition-all duration-500 flex items-center justify-center`}>
            {/* Synthetic blood vessels & optic disc */}
            <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 opacity-80">
              <circle cx="35" cy="50" r="14" fill="#ffccaa" opacity="0.6" />
              <path d="M35 50 Q 55 30 75 25 Q 85 20 95 35" stroke="#7f1d1d" strokeWidth="2.5" fill="none" />
              <path d="M35 50 Q 60 65 75 75 Q 85 85 92 80" stroke="#7f1d1d" strokeWidth="2.5" fill="none" />
              <path d="M35 50 Q 45 40 65 52 Q 80 55 90 60" stroke="#991b1b" strokeWidth="1.8" fill="none" />
              <path d="M35 50 Q 25 70 15 80" stroke="#7f1d1d" strokeWidth="2" fill="none" />
              <circle cx="68" cy="40" r="4" fill="#ffedd5" opacity="0.4" />
            </svg>

            {/* Bounding box marker for lesion */}
            {claheActive && (
              <div className="absolute top-12 right-10 w-9 h-9 border-2 border-dashed border-coral rounded bg-coral/20 animate-pulse flex items-center justify-center">
                <span className="text-[7px] text-white font-mono bg-coral/90 px-1 rounded absolute -top-3">DR-L1</span>
              </div>
            )}

            {/* Crosshair Scanner */}
            <div className="absolute inset-0 border border-white/20 rounded-full pointer-events-none" />
            <div className="w-full h-0.5 bg-coral/40 absolute top-1/2 -translate-y-1/2" />
            <div className="h-full w-0.5 bg-coral/40 absolute left-1/2 -translate-x-1/2" />
          </div>
        </div>

        {/* Triage Confidence Metrics */}
        <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
          <div className="p-2 bg-white rounded-lg border border-coral/20">
            <span className="text-[10px] text-ink-muted block font-sans">Confidence Index</span>
            <span className="text-coral font-bold text-sm">92.4%</span>
          </div>
          <div className="p-2 bg-white rounded-lg border border-coral/20">
            <span className="text-[10px] text-ink-muted block font-sans">Microaneurysms</span>
            <span className="text-ink font-bold text-sm">Detected (L2)</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'traffic') {
    return (
      <div className="w-full h-full min-h-[300px] bg-gradient-to-br from-lavender/10 via-white to-soft-lavender p-5 sm:p-6 rounded-2xl flex flex-col justify-between border border-lavender/30 font-sans select-none">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-lavender/20 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-lavender flex items-center justify-center text-white shadow-sm">
              <Navigation className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-ink tracking-tight block">UrbanFlow AI</span>
              <span className="text-[10px] text-ink-muted">TomTom & Leaflet Telemetry</span>
            </div>
          </div>
          <div className="flex gap-1 text-[10px] font-mono">
            <button 
              type="button" 
              onClick={() => setActiveTab('live')}
              className={`px-2 py-0.5 rounded ${activeTab === 'live' ? 'bg-lavender text-white' : 'bg-lavender/10 text-ink-muted'}`}
            >
              Live
            </button>
            <button 
              type="button" 
              onClick={() => setActiveTab('ai')}
              className={`px-2 py-0.5 rounded ${activeTab === 'ai' ? 'bg-lavender text-white' : 'bg-lavender/10 text-ink-muted'}`}
            >
              ML Pred
            </button>
          </div>
        </div>

        {/* Synthetic Map Grid Visual */}
        <div className="my-3 relative bg-slate-900 rounded-xl overflow-hidden p-3 h-36 border border-lavender/20 flex flex-col justify-between">
          {/* Road Network Grid */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#A78BFA_1px,transparent_1px)] [background-size:16px_16px]" />
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 150">
            {/* Roads */}
            <path d="M 10 75 Q 80 40 150 75 T 290 80" stroke="#334155" strokeWidth="12" fill="none" />
            <path d="M 150 10 L 150 140" stroke="#334155" strokeWidth="10" fill="none" />
            {/* Congestion Overlays */}
            <path d="M 70 58 Q 110 52 150 75" stroke="#FF827A" strokeWidth="6" fill="none" strokeDasharray="4 2" />
            <path d="M 150 75 Q 220 78 280 80" stroke="#527BFF" strokeWidth="6" fill="none" />
            {/* Moving nodes */}
            <circle cx="150" cy="75" r="5" fill="#A78BFA" className="animate-ping" />
            <circle cx="150" cy="75" r="4" fill="#FFFFFF" />
          </svg>

          <div className="relative z-10 flex justify-between items-start">
            <span className="text-[10px] font-mono bg-slate-800/90 text-lavender px-2 py-0.5 rounded border border-lavender/30">
              Corridor 12 • High Density
            </span>
            <span className="text-[10px] font-mono bg-slate-800/90 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30">
              Alt Route: -8 mins
            </span>
          </div>

          <div className="relative z-10 flex justify-between items-end">
            <div className="text-[9px] text-slate-400 font-mono">
              FastAPI Latency: <span className="text-white">18ms</span>
            </div>
            <div className="text-[9px] text-slate-400 font-mono">
              Velocity: <span className="text-coral">24 km/h</span>
            </div>
          </div>
        </div>

        {/* Micro-metrics */}
        <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
          <div className="bg-white p-2 rounded-lg border border-lavender/25">
            <span className="text-ink-muted block text-[9px] font-sans">Leaflet Nodes</span>
            <span className="font-bold text-ink">1,420</span>
          </div>
          <div className="bg-white p-2 rounded-lg border border-lavender/25">
            <span className="text-ink-muted block text-[9px] font-sans">TomTom Sync</span>
            <span className="font-bold text-emerald-600">Active</span>
          </div>
          <div className="bg-white p-2 rounded-lg border border-lavender/25">
            <span className="text-ink-muted block text-[9px] font-sans">ML Confidence</span>
            <span className="font-bold text-electric">88%</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'biometric') {
    return (
      <div className="w-full h-full min-h-[300px] bg-gradient-to-br from-electric/5 via-white to-soft-blue p-5 sm:p-6 rounded-2xl flex flex-col justify-between border border-electric/25 font-sans select-none">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-electric/15 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-electric flex items-center justify-center text-white shadow-sm">
              <Scan className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-ink tracking-tight block">AurePrint</span>
              <span className="text-[10px] text-ink-muted">Contactless Biometric CV</span>
            </div>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-50 text-electric border border-electric/30 font-semibold">
            OpenCV Ridge Matcher
          </span>
        </div>

        {/* Biometric Scanning Reticle */}
        <div className="my-3 relative flex items-center justify-center">
          <div className="relative w-40 h-40 rounded-2xl bg-slate-900 border-2 border-electric/40 overflow-hidden flex items-center justify-center shadow-soft">
            {/* Fingerprint Silhouette */}
            <Fingerprint className="w-24 h-24 text-electric/40" />

            {/* Laser scanning bar */}
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-electric to-transparent absolute top-0 animate-[float_3s_ease-in-out_infinite]" />

            {/* Minutiae points */}
            <div className="absolute top-10 left-12 w-2 h-2 rounded-full border border-coral bg-coral/40 animate-ping" />
            <div className="absolute top-16 right-14 w-2 h-2 rounded-full border border-emerald-400 bg-emerald-400/40" />
            <div className="absolute bottom-12 left-16 w-2 h-2 rounded-full border border-lavender bg-lavender/40" />

            {/* Corner brackets */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-electric" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-electric" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-electric" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-electric" />

            {/* Touchless HUD label */}
            <span className="absolute bottom-2 text-[9px] font-mono text-electric-light tracking-widest uppercase">
              Optical Frame: OK
            </span>
          </div>
        </div>

        {/* Technical score outputs */}
        <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
          <div className="p-2 bg-white rounded-lg border border-electric/20 flex items-center justify-between">
            <span className="text-[10px] text-ink-muted font-sans">Minutiae Score</span>
            <span className="text-electric font-bold">96.8%</span>
          </div>
          <div className="p-2 bg-white rounded-lg border border-electric/20 flex items-center justify-between">
            <span className="text-[10px] text-ink-muted font-sans">Latency</span>
            <span className="text-emerald-600 font-bold">142ms</span>
          </div>
        </div>
      </div>
    );
  }

  // ByteMeal
  return (
    <div className="w-full h-full min-h-[300px] bg-gradient-to-br from-coral/5 via-white to-soft-coral p-5 sm:p-6 rounded-2xl flex flex-col justify-between border border-coral/20 font-sans select-none">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-coral/15 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-coral flex items-center justify-center text-white shadow-sm">
            <Utensils className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-ink tracking-tight block">ByteMeal</span>
            <span className="text-[10px] text-ink-muted">AI Vegetarian Meal Planner</span>
          </div>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-300 font-semibold">
          Ideation Stage
        </span>
      </div>

      {/* Meal Plan & Macro Distribution */}
      <div className="my-3 space-y-2">
        <div className="bg-white p-3 rounded-xl border border-coral/20 shadow-soft">
          <div className="flex justify-between items-center text-xs font-semibold text-ink mb-1.5">
            <span>Today's Curated Menu</span>
            <span className="text-coral font-mono text-[10px]">2,150 kcal</span>
          </div>
          <div className="space-y-1.5 text-[11px]">
            <div className="flex justify-between items-center p-1.5 bg-coral/5 rounded border border-coral/10">
              <span className="font-medium text-ink">Breakfast: Spiced Paneer & Oats</span>
              <span className="text-[10px] font-mono text-ink-muted">28g Protein</span>
            </div>
            <div className="flex justify-between items-center p-1.5 bg-lavender/5 rounded border border-lavender/10">
              <span className="font-medium text-ink">Lunch: Lentil Quinoa Power Bowl</span>
              <span className="text-[10px] font-mono text-ink-muted">34g Protein</span>
            </div>
          </div>
        </div>

        {/* Automated Grocery checklist item */}
        <div className="bg-white p-2.5 rounded-xl border border-ink/10 flex items-center justify-between text-[11px]">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span className="text-ink font-medium">Auto-generated Pantry Cart</span>
          </div>
          <span className="text-[10px] font-mono text-coral font-semibold">Make.com Sync</span>
        </div>
      </div>

      {/* Conceptual notice footer */}
      <div className="p-2 bg-amber-50/80 rounded-lg border border-amber-200 text-[10px] text-amber-800 flex items-center gap-1.5">
        <Sparkles className="w-3.5 h-3.5 flex-shrink-0 text-amber-600" />
        <span>Concept workflow designed with Glide sheets & Make webhooks.</span>
      </div>
    </div>
  );
};
