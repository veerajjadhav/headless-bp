// components/CenteredCTABox.jsx
export default function CenteredCTABox({ title, description, ctaText, ctaUrl }) {
  return (
    <section className="flex items-center justify-center py-16 bg-gray-100">
      <div className="text-center bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-semibold mb-4">{title}</h2>
        <p className="text-lg text-gray-600 mb-6">{description}</p>
        {ctaText && (
          <a
            href={ctaUrl}
            className="bg-[#F7A200] text-black px-6 py-3 rounded-md font-semibold hover:bg-[#e09100] transition"
          >
            {ctaText}
          </a>
        )}
      </div>
    </section>
  );
}
