import { ArrowRight, BadgeCheck, ClipboardList, Clock3, MapPin, ShieldCheck, Stethoscope, Syringe, TestTube2 } from 'lucide-react';

export function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-teal">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">{title}</h2>
      <p className="mt-4 text-base text-slate-600">{description}</p>
    </div>
  );
}

export function StatPill({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal/10 text-teal">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-2xl font-bold text-navy">{value}</div>
        <div className="text-sm text-slate-600">{label}</div>
      </div>
    </div>
  );
}

export const careHighlights = [
  { icon: ShieldCheck, label: 'Secure handling', value: 'Protected' },
  { icon: Clock3, label: 'Average TAT', value: '24 hrs' },
  { icon: ClipboardList, label: 'Test coverage', value: '120+' },
  { icon: MapPin, label: 'Service zones', value: 'Citywide' },
];

export const processSteps = [
  { icon: ClipboardList, title: 'Choose a test', description: 'Browse diagnostics or create a tailored health package.' },
  { icon: Syringe, title: 'Book collection', description: 'Schedule home pickup or visit us at your convenience.' },
  { icon: TestTube2, title: 'Sample analysis', description: 'Our lab performs precise testing with secure handling.' },
  { icon: Stethoscope, title: 'Get results', description: 'Receive digital reports and expert guidance when needed.' },
];

export const serviceFeatures = [
  { icon: BadgeCheck, title: 'Accurate reporting', detail: 'Carefully reviewed workflows and transparent sample handling.' },
  { icon: ShieldCheck, title: 'Privacy-first', detail: 'Protected report access with role-based controls for patients and staff.' },
  { icon: Clock3, title: 'Fast TAT', detail: 'Designed for quick turnaround without compromising quality standards.' },
  { icon: MapPin, title: 'Convenient pickup', detail: 'Home collection and select outreach locations for busy schedules.' },
];

export const homepageStats = [
  { label: 'Happy patients', value: '25k+' },
  { label: 'Diagnostics tests', value: '120+' },
  { label: 'Lab collection partners', value: '18' },
  { label: 'Avg. report time', value: '24h' },
];

export const breadcrumbItems = [
  { href: '/', label: 'Home' },
  { href: '#', label: 'Diagnostic Care' },
];
