import Image from 'next/image';
import {
  MapPin,
  Building2,
  ExternalLink,
  Star,
  Globe,
  Wrench,
} from 'lucide-react';
import { CategoryBadge } from './CategoryBadge';
import { getCategoryById } from '@/data/categories';
import type { GitHubProfile } from '@/types';

interface ProfileCardProps {
  profile: GitHubProfile;
}

export function ProfileCard({ profile }: ProfileCardProps) {
  const primaryCategory = getCategoryById(profile.categories[0]);

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-teal-900/40 bg-[#0c1a18] transition-all duration-300 hover:-translate-y-1 hover:border-teal-700/40 hover:shadow-2xl hover:shadow-teal-950/60 animate-fade-in">
      {/* Maintainer badge */}
      {profile.maintainer && (
        <div className="absolute right-3 top-3 z-10">
          <span className="inline-flex items-center gap-1 rounded-full border border-teal-400/35 bg-teal-500/15 px-2 py-0.5 text-[10px] font-semibold text-teal-300">
            <Wrench size={9} aria-hidden="true" />
            Maintainer
          </span>
        </div>
      )}

      {/* Top gradient accent based on primary category */}
      <div
        className="h-[3px] w-full shrink-0"
        style={{
          background: primaryCategory
            ? `linear-gradient(90deg, ${primaryCategory.color}70, ${primaryCategory.color}10)`
            : 'linear-gradient(90deg, #2dd4bf70, #2dd4bf10)',
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
              className="rounded-full ring-2 ring-teal-700/25 ring-offset-2 ring-offset-[#0c1a18]"
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
              className="mt-0.5 inline-block text-sm text-teal-400 transition hover:text-teal-300"
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

        {/* CTA row */}
        <div className="mt-4 flex items-center justify-end">
          <div className="flex items-center gap-2">
            {profile.websiteUrl && (
              <a
                href={profile.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Personal website"
                className="inline-flex items-center justify-center rounded-lg bg-white/5 p-1.5 text-white/40 transition hover:bg-white/10 hover:text-white/70"
              >
                <Globe size={13} aria-hidden="true" />
              </a>
            )}
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-white/8 px-3 py-1.5 text-xs font-medium text-white/70 transition hover:bg-teal-600 hover:text-white"
            >
              Follow
              <ExternalLink size={10} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
