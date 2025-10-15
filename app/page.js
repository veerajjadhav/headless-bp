// page.js
import GridLayout from '../components/GridLayout'; // Import GridLayout
import BannerCTA from '../components/BannerCTA'; // Import BannerCTA
import FullWidthBannerCTA from '../components/FullWidthBannerCTA'; // Import FullWidthBannerCTA
import CenteredCTABox from '../components/CenteredCTABox'; // Import CenteredCTABox
import GradientCTA from '../components/GradientCTA'; // Import GradientCTA

import { getGridLayoutData, getBannerCTAData } from '../lib/wp'; // Import functions from wp.js

export default async function Home() {
  const pageId = 20; // Replace with your page ID
  
  // Fetch Grid Layout Data
  const gridData = await getGridLayoutData(pageId);
  
  // Fetch Banner CTA Data
  const bannerData = await getBannerCTAData(pageId);

  // Example Data for CTA Components
  const centeredCTAData = {
    title: 'Get Started Now',
    description: 'Sign up to get access to exclusive features.',
    ctaText: 'Sign Up',
    ctaUrl: '/signup',
  };

  const gradientCTAData = {
    title: 'Join Our Community',
    description: 'Become a member and get instant access to all our resources.',
    ctaText: 'Join Now',
    ctaUrl: '/join',
  };

  return (
    <main className="w-full">
      {/* Render Full-Width Banner CTA if data exists */}
      {bannerData && <FullWidthBannerCTA data={bannerData} isFullWidth={true} />}
      
      {/* Render Centered CTA Box */}
      <CenteredCTABox {...centeredCTAData} />
      
      {/* Render Gradient CTA */}
      <GradientCTA {...gradientCTAData} />

      {/* Render Grid Layout if data exists */}
      {gridData && <GridLayout data={gridData} isFullWidth={false} />}
    </main>
  );
}
