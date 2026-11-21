import type { Metadata } from 'next';
import './globals.css';

const [repositoryOwner, repositoryName] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const githubPagesUrl = repositoryOwner && repositoryName
  ? repositoryName.endsWith('.github.io')
    ? `https://${repositoryOwner}.github.io`
    : `https://${repositoryOwner}.github.io/${repositoryName}`
  : null;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? githubPagesUrl
  ?? 'https://bio-labs-wellness.healththemeproject.chatgpt.site';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Bio Labs | Science for Better Living',
  description: 'Evidence-aware wellness guides, research summaries and practical non-medicinal biohacking ideas for better living.',
  openGraph: {
    title: 'Small shifts. Better living. | Bio Labs',
    description: 'Evidence-aware wellness guides from Bio Labs.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Small shifts. Better living. Evidence-aware wellness guides from Bio Labs.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Small shifts. Better living. | Bio Labs',
    description: 'Evidence-aware wellness guides from Bio Labs.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
