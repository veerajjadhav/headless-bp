// components/BannerCTA.jsx
export default function BannerCTA({ data, isFullWidth = false }) {
  if (!data) return null; // Return null if no data

  const {
    banner_bg_image,
    banner_title,
    banner_description,
    banner_cta_text,
    banner_cta_url,
    banner_cta_icon,
    section_id
  } = data;

  return (
    <section
      id={section_id || "banner-cta"}
      className={`relative flex flex-col items-center justify-center text-center text-white py-24 px-4 bg-cover bg-center ${!isFullWidth ? 'container' : ''}`}
      style={{ backgroundImage: `url(${banner_bg_image || 'default-image-url.jpg'})` }}
    >
      <div className="max-w-3xl mx-auto bg-black/40 p-6 rounded-xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{banner_title}</h1>
        <p className="text-lg md:text-xl mb-6">{banner_description}</p>
        {banner_cta_text && (
          <a
            href={banner_cta_url}
            className="inline-flex items-center gap-2 bg-[#F7A200] text-black px-6 py-3 rounded-md font-semibold hover:bg-[#e09100] transition"
          >
            {banner_cta_text}
            {banner_cta_icon && (
              <img
                src={banner_cta_icon}
                alt="cta icon"
                className="w-5 h-5 inline-block"
              />
            )}
          </a>
        )}
      </div>
    </section>
  );
}
