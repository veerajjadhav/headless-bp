import { getPosts } from '../lib/api';

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">WordPress Posts</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="p-4 border rounded shadow">
            <h2 className="text-xl font-semibold">{post.title.rendered}</h2>
            <div
              className="text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
