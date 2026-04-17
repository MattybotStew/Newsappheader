import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import wordpressClient from './client';
import type { WPPost, WPObituary } from './types';

// ── News ──────────────────────────────────────────────────────────────────────

export const useNews = (categoryId: number = 0, perPage = 20) =>
  useQuery({
    queryKey: ['news', categoryId],
    queryFn: async () => {
      const params: Record<string, unknown> = { per_page: perPage, _embed: true };
      if (categoryId) params['news-category'] = categoryId;
      const res = await wordpressClient.get<WPPost[]>('/news', { params });
      return res.data;
    },
    staleTime: 5 * 60 * 1000,
  });

export const useNewsInfinite = (categoryId: number = 0) =>
  useInfiniteQuery({
    queryKey: ['news', 'infinite', categoryId],
    queryFn: async ({ pageParam = 1 }) => {
      const params: Record<string, unknown> = { per_page: 20, page: pageParam, _embed: true };
      if (categoryId) params['news-category'] = categoryId;
      const res = await wordpressClient.get<WPPost[]>('/news', { params });
      const totalPages = parseInt(res.headers['x-wp-totalpages'] || '1', 10);
      return { data: res.data, nextPage: pageParam < totalPages ? pageParam + 1 : undefined };
    },
    getNextPageParam: (last) => last.nextPage,
    initialPageParam: 1,
    staleTime: 5 * 60 * 1000,
  });

export const useNewsById = (id: number | null) =>
  useQuery({
    queryKey: ['news', 'id', id],
    queryFn: async () => {
      const res = await wordpressClient.get<WPPost>(`/news/${id}`, { params: { _embed: true } });
      return res.data;
    },
    enabled: !!id,
    staleTime: 10 * 60 * 1000,
  });

// ── Sports ────────────────────────────────────────────────────────────────────

export const useSports = (perPage = 20) =>
  useQuery({
    queryKey: ['sports'],
    queryFn: async () => {
      const res = await wordpressClient.get<WPPost[]>('/sports', {
        params: { per_page: perPage, _embed: true },
      });
      return res.data;
    },
    staleTime: 5 * 60 * 1000,
  });

export const useSportsInfinite = (categoryId: number = 0) =>
  useInfiniteQuery({
    queryKey: ['sports', 'infinite', categoryId],
    queryFn: async ({ pageParam = 1 }) => {
      const params: Record<string, unknown> = { per_page: 20, page: pageParam, _embed: true };
      if (categoryId) params['sports-category'] = categoryId;
      const res = await wordpressClient.get<WPPost[]>('/sports', { params });
      const totalPages = parseInt(res.headers['x-wp-totalpages'] || '1', 10);
      return { data: res.data, nextPage: pageParam < totalPages ? pageParam + 1 : undefined };
    },
    getNextPageParam: (last) => last.nextPage,
    initialPageParam: 1,
    staleTime: 5 * 60 * 1000,
  });

export const useSportsById = (id: number | null) =>
  useQuery({
    queryKey: ['sports', 'id', id],
    queryFn: async () => {
      const res = await wordpressClient.get<WPPost>(`/sports/${id}`, { params: { _embed: true } });
      return res.data;
    },
    enabled: !!id,
    staleTime: 10 * 60 * 1000,
  });

// ── Obituaries ────────────────────────────────────────────────────────────────

export const useObituaries = (perPage = 20) =>
  useQuery({
    queryKey: ['obituaries'],
    queryFn: async () => {
      const res = await wordpressClient.get<WPObituary[]>('/obituaries', {
        params: { per_page: perPage, _embed: true },
      });
      return res.data;
    },
    staleTime: 5 * 60 * 1000,
  });

export const useObituariesInfinite = () =>
  useInfiniteQuery({
    queryKey: ['obituaries', 'infinite'],
    queryFn: async ({ pageParam = 1 }) => {
      const res = await wordpressClient.get<WPObituary[]>('/obituaries', {
        params: { per_page: 20, page: pageParam, _embed: true },
      });
      const totalPages = parseInt(res.headers['x-wp-totalpages'] || '1', 10);
      return { data: res.data, nextPage: pageParam < totalPages ? pageParam + 1 : undefined };
    },
    getNextPageParam: (last) => last.nextPage,
    initialPageParam: 1,
    staleTime: 5 * 60 * 1000,
  });

export const useObituaryById = (id: number | null) =>
  useQuery({
    queryKey: ['obituaries', 'id', id],
    queryFn: async () => {
      const res = await wordpressClient.get<WPObituary>(`/obituaries/${id}`, {
        params: { _embed: true },
      });
      return res.data;
    },
    enabled: !!id,
    staleTime: 10 * 60 * 1000,
  });

// ── Podcasts (SoundCloud RSS) ─────────────────────────────────────────────────

export interface PodcastEpisode {
  id: string;
  title: string;
  description: string;
  pubDate: string;
  duration: string;
  audioUrl: string;
  imageUrl: string;
  link: string;
}

function parseSoundCloudRSS(xml: string): PodcastEpisode[] {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, 'application/xml');
  const items = Array.from(doc.querySelectorAll('item'));
  const channelImage = doc.querySelector('channel > image > url')?.textContent
    || doc.querySelector('channel itunes\\:image')?.getAttribute('href')
    || '';

  return items.map((item) => {
    const guid = item.querySelector('guid')?.textContent ?? '';
    const trackId = guid.split(':').pop()?.split('/').pop() ?? guid;
    const enclosure = item.querySelector('enclosure');
    const duration = item.querySelector('duration')?.textContent ?? '';
    const image = item.querySelector('itunes\\:image')?.getAttribute('href') || channelImage;

    return {
      id: trackId,
      title: item.querySelector('title')?.textContent ?? 'Untitled',
      description: (item.querySelector('itunes\\:subtitle')?.textContent
        || item.querySelector('description')?.textContent) ?? '',
      pubDate: item.querySelector('pubDate')?.textContent ?? '',
      duration: duration,
      audioUrl: enclosure?.getAttribute('url') ?? '',
      imageUrl: image,
      link: item.querySelector('link')?.textContent ?? '',
    };
  });
}

const SC_FEED = '/soundcloud-feed/users/soundcloud:users:144814923/sounds.rss';

export const usePodcastEpisodes = () =>
  useQuery({
    queryKey: ['podcasts', 'episodes'],
    queryFn: async () => {
      const res = await fetch(SC_FEED);
      if (!res.ok) throw new Error('Failed to fetch podcast feed');
      const xml = await res.text();
      return parseSoundCloudRSS(xml);
    },
    staleTime: 5 * 60 * 1000,
  });

export const usePodcastEpisodeById = (id: string | null) =>
  useQuery({
    queryKey: ['podcasts', 'episode', id],
    queryFn: async () => {
      const res = await fetch(SC_FEED);
      if (!res.ok) throw new Error('Failed to fetch podcast feed');
      const xml = await res.text();
      const episodes = parseSoundCloudRSS(xml);
      return episodes.find(ep => ep.id === id) ?? null;
    },
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });

// ── Helpers ───────────────────────────────────────────────────────────────────

export function getFeaturedImage(post: WPPost | WPObituary): string | undefined {
  return post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
}

export function getAuthor(post: WPPost): string {
  return post._embedded?.author?.[0]?.name ?? 'Staff';
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, '').replace(/&[a-z]+;/gi, (e) => {
    const map: Record<string, string> = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'" };
    return map[e] ?? e;
  }).trim();
}

export function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins} minute${mins !== 1 ? 's' : ''} ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs} hour${hrs !== 1 ? 's' : ''} ago`;
  const days = Math.floor(hrs / 24);
  return `${days} day${days !== 1 ? 's' : ''} ago`;
}
