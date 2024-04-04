import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'urara-demo.netlify.app',
  title: 'Poly',
  subtitle: 'Cybersec blog',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    avatar: '/assets/avatar.png',
    name: 'https',
    status: '🤫🧏‍♂️',
    bio: 'Posting findings and research'
  },
  themeColor: '#3D4451'
}
