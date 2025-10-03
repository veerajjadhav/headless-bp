export async function getPosts() {
  const apiUrl = `${process.env.NEXT_PUBLIC_WP_API}/posts`;

  console.log("🔍 Fetching posts from:", apiUrl);

  try {
    const res = await fetch(apiUrl, {
      cache: 'no-store', // always fresh data
    });

    if (!res.ok) {
      console.error("❌ API response not OK:", res.status, res.statusText);
      throw new Error(`Failed to fetch posts: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    console.log("✅ Posts fetched:", data.length);
    return data;

  } catch (error) {
    console.error("🔥 Error in getPosts():", error.message);
    return []; // return empty array to avoid crash
  }
}
