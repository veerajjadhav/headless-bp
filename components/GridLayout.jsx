// components/GridLayout.jsx
export default function GridLayout({ data, isFullWidth = false }) {
  if (!data || data.length === 0) return <p>No grid data available.</p>; // Show a message if no data is available

  return (
    <section
      className={`py-12 px-4 ${!isFullWidth ? 'container' : ''} grid grid-cols-1 md:grid-cols-3 gap-6`}
    >
      {data.map((item, index) => (
        <div key={index} className="card bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={item.grid_image || 'default-image-url.jpg'} alt={item.title} className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
