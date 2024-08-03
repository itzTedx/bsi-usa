export default function getBaseURL() {
  if (typeof window !== 'undefined') return ''

  if (process.env.VERCEL_URL) return `https://${process.env.DOMAIN_URL}`
  if (process.env.NODE_ENV === 'development') return 'http://localhost:3000'
  return `https://${process.env.NEXT_PUBLIC_SITE_URL}`
}
