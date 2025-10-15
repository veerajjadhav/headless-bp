// Fetch Menu by Location
export async function getMenuByLocation(location) {
  const apiUrl = `${process.env.NEXT_PUBLIC_WP_API}/headless/v1/menu/${location}`;

  try {
    const res = await fetch(apiUrl, {
      cache: 'no-store', // Avoid caching
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch menu: ${res.status}`);
    }

    const data = await res.json();
    return data.items || [];
  } catch (error) {
    console.error(error.message);
    return [];
  }
}

// Example for fetching ACF data (general function)
export async function getACFData(endpoint) {
  const apiUrl = `${process.env.NEXT_PUBLIC_WP_API}/wp/v2/${endpoint}?acf_format=standard`;

  try {
    const res = await fetch(apiUrl, {
      cache: 'no-store', // Avoid caching
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch ACF data for ${endpoint}: ${res.status}`);
    }

    const data = await res.json();

    if (!data.acf) {
      throw new Error('No ACF data found in response.');
    }

    return data;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

// Fetch Banner CTA Data (Fetch specific BannerCTA layout from page's flexible content)
export async function getBannerCTAData(pageId) {
  const apiUrl = `${process.env.NEXT_PUBLIC_WP_API}/pages/${pageId}?acf_format=standard`;

  try {
    const res = await fetch(apiUrl, {
      cache: 'no-store', // Avoid caching
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch BannerCTA data: ${res.status}`);
    }

    const data = await res.json();

    // Ensure the `acf` and `page_builder` fields are present, and find Banner CTA layout
    return data.acf?.page_builder?.find(block => block.acf_fc_layout === 'layout_banner_cta') || null;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

// Fetch Grid Layout Data (Fetch specific grid items for grid layout)
export async function getGridLayoutData(pageId) {
  const apiUrl = `${process.env.NEXT_PUBLIC_WP_API}/pages/${pageId}?acf_format=standard`;

  try {
    const res = await fetch(apiUrl, {
      cache: 'no-store', // Avoid caching
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch page data: ${res.status}`);
    }

    const data = await res.json();

    // Ensure `page_builder` and `grid_layout` are available, and return grid items
    return data.acf?.page_builder?.find(block => block.acf_fc_layout === 'grid_layout')?.grid_items || [];
  } catch (error) {
    console.error(error.message);
    return []; // Return an empty array in case of failure
  }
}
