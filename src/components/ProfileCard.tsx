import Image from 'next/image';
import {
  MapPin,
  Building2,
  Users,
  BookMarked,
  ExternalLink,
  Star,
} from 'lucide-react';
import { formatCount } from '@/lib/utils';
import { CategoryBadge } from './CategoryBadge';
import { getCategoryById } from '@/data/categories';
import type { GitHubProfile } from '@/types';

interface ProfileCardProps {
  profile: GitHubProfile;
}

export function ProfileCard({ profile }: ProfileCardProps) {
  const primaryCategory = getCategoryById(profile.categories[0]);

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-[#111827] transition-all duration-300 hover:-translate-y-1 hover:border-white/18 hover:shadow-2xl hover:shadow-black/50 animate-fade-in">
      {/* Featured badge */}
      {profile.featured && (
        <div className="absolute right-3 top-3 z-10">
          <span className="inline-flex items-center gap-1 rounded-full border border-yellow-500/25 bg-yellow-500/12 px-2 py-0.5 text-[10px] font-semibold text-yellow-400">
            <Star size={9} aria-hidden="true" />
            Featured
          </span>
        </div>
      )}

      {/* Top gradient accent based on primary category */}
      <div
        className="h-[3px] w-full shrink-0"
        style={{
          background: primaryCategory
            ? `linear-gradient(90deg, ${primaryCategory.color}70, ${primaryCategory.color}10)`
            : 'linear-gradient(90deg, #6366f170, #6366f110)',
        }}
        aria-hidden="true"
      />

      <div className="flex flex-1 flex-col p-5">
        {/* Avatar + name row */}
        <div className="flex items-start gap-4">
          <div className="shrink-0">
            <Image
              src={`https://github.com/${profile.username}.png?size=96`}
              alt={`${profile.name}'s GitHub avatar`}
              width={52}
              height={52}
              className="rounded-full ring-2 ring-white/8 ring-offset-2 ring-offset-[#111827]"
              unoptimized
            />
          </div>
          <div className="min-w-0 flex-1 pt-0.5">
            <h3 className="truncate font-semibold text-white leading-tight">
              {profile.name}
            </h3>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-0.5 inline-block text-sm text-indigo-400 transition hover:text-indigo-300"
            >
              @{profile.username}
            </a>
          </div>
        </div>

        {/* Meta: company + location */}
        <div className="mt-3 space-y-1">
          {profile.company && (
            <div className="flex items-center gap-1.5 text-xs text-white/35">
              <Building2 size={11} aria-hidden="true" />
              <span className="truncate">{profile.company}</span>
            </div>
          )}
          {profile.location && (
            <div className="flex items-center gap-1.5 text-xs text-white/35">
              <MapPin size={11} aria-hidden="true" />
              <span className="truncate">{profile.location}</span>
            </div>
          )}
        </div>

        {/* Bio */}
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-white/55">
          {profile.bio}
        </p>

        {/* Category badges */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {profile.categories.map((catId) => {
            const cat = getCategoryById(catId);
            if (!cat) return null;
            return <CategoryBadge key={catId} category={cat} size="sm" />;
          })}
        </div>

        {/* Skill tags */}
        <div className="mt-2 flex flex-wrap gap-1">
          {profile.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-white/5 px-1.5 py-0.5 text-[11px] text-white/35"
            >
              #{tag}
            </span>
          ))}
          {profile.tags.length > 4 && (
            <span className="rounded-md bg-white/5 px-1.5 py-0.5 text-[11px] text-white/25">
              +{profile.tags.length - 4}
            </span>
          )}
        </div>

        {/* Divider */}
        <div className="mt-4 border-t border-white/5" />

        {/* Stats + CTA row */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-xs text-white/35">
              <Users size={12} aria-hidden="true" />
              <span>{formatCount(profile.followers)}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-white/35">
              <BookMarked size={12} aria-hidden="true" />
              <span>{formatCount(profile.repos)} repos</span>
            </div>
          </div>

          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-white/8 px-3 py-1.5 text-xs font-medium text-white/70 transition hover:bg-indigo-600 hover:text-white"
          >
            Follow
            <ExternalLink size={10} aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}
