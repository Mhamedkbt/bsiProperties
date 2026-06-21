export function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_APP_URL ?? 'https://bsiproperties.vercel.app/').replace(/\/$/, '')
}
