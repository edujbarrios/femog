import { PROFILES } from '@/data/profiles';
import { CATEGORIES } from '@/data/categories';
import { Users, Tag, Star } from 'lucide-react';

export function StatsBar() {
  const openSourceCount = PROFILES.filter((p) => p.categories.includes('open-source')).length;

  const stats = [
    {
      icon: Users,
      label: 'Curated profiles',
      value: PROFILES.length,
      color: 'text-teal-400',
    },
    {
      icon: Tag,
      label: 'Engineering roles',
      value: CATEGORIES.length,
      color: 'text-emerald-400',
    },
    {
      icon: Star,
      label: 'Open-source profiles',
      value: openSourceCount,
      color: 'text-yellow-400',
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-3 sm:gap-4">
      {stats.map(({ icon: Icon, label, value, color }) => (
        <div
          key={label}
          className="flex flex-col items-center justify-center rounded-xl border border-white/8 bg-white/4 p-4 text-center"
        >
          <Icon size={18} className={`mb-2 ${color}`} aria-hidden="true" />
          <div className="text-2xl font-bold text-white">{value}</div>
          <div className="mt-0.5 text-xs text-white/35">{label}</div>
        </div>
      ))}
    </div>
  );
}
