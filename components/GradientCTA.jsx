// components/GradientCTA.jsx
export default function GradientCTA({ title, description, ctaText, ctaUrl }) {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-green-500 py-16 text-center text-white">
      <div className="max-w-3xl mx-auto p-6">
        <h2 className="text-4xl font-semibold mb-4">{title}</h2>
        <p className="text-lg mb-6">{description}</p>
        {ctaText && (
          <a
            href={ctaUrl}
            className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-300 transition"
          >
            {ctaText}
          </a>
        )}
      </div>
    </section>
  );
}
