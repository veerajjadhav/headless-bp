export async function getPosts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WP_API}/posts`, {
    cache: 'no-store' // always fetch fresh data in dev
  });

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  return res.json();
}
