// TODO: Replace these placeholder images with actual images in Assets/services/ folder
const placeholderImages = {
  webDesign: "https://via.placeholder.com/800x600/2d2d2d/ffffff?text=Web+Design",
  appDev: "https://via.placeholder.com/800x600/2d2d2d/ffffff?text=App+Development",
  seo: "https://via.placeholder.com/800x600/2d2d2d/ffffff?text=SEO+Services",
  graphics: "https://via.placeholder.com/800x600/2d2d2d/ffffff?text=Graphics+Design",
  video: "https://via.placeholder.com/800x600/2d2d2d/ffffff?text=Video+Editing"
};

export const servicesData = [
  {
    id: "web-design",
    title: "Web Design & Development",
    description: "Custom-built, responsive websites tailored for your business needs",
    image: placeholderImages.webDesign,
    metaDescription: "Professional web design and development services in Cameroon. Get custom-built, responsive websites starting from 400,000 FCFA.",
    tiers: {
      black: {
        name: "Black Tier",
        price: "200,000 FCFA",
        features: [
          "Basic responsive website",
          "Up to 12 pages",
          "Basic SEO setup",
          " Regular delivery",
          "1 month support",
          "2 revisions"
        ]
      },
      gold: {
        name: "Gold Tier",
        price: "600,000 FCFA",
        features: [
          "Advanced responsive website",
          "Up to 40 pages",
          "Advanced SEO optimization",
          "Fast delivery",
          "9 months support",
          "Unlimited revisions",
          "Priority support"
        ]
      }
    }
  },
  {
    id: "app-development",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android",
    image: placeholderImages.appDev,
    metaDescription: "Native and cross-platform mobile applications development services in Cameroon. Get custom-built mobile applications starting from 500,000 FCFA.",
    tiers: {
      black: {
        name: "Black Tier",
        price: "500,000 FCFA",
        features: [
          "Basic mobile app",
          "Single platform (Android or iOS)",
          "Basic features",
          "Regular delivery Speed",
          "1 month support",
          "2 revisions"
        ]
      },
      gold: {
        name: "Gold Tier",
        price: "900,000 FCFA",
        features: [
          "Advanced mobile app",
          "Both Android and iOS",
          "Advanced features",
          "Premium delivery Speed",
          "9 months support",
          "Unlimited revisions",
          "Priority support"
        ]
      }
    }
  },
  {
    id: "seo",
    title: "SEO Services",
    description: "Boost your website's visibility and ranking on search engines",
    image: placeholderImages.seo,
    metaDescription: "SEO services in Cameroon to boost your website's visibility and ranking on search engines. Get professional SEO services starting from 150,000 FCFA.",
    tiers: {
      black: {
        name: "Black Tier",
        price: "150,000 FCFA",
        features: [
          "Basic keyword research",
          "On-page SEO",
          "Monthly report",
          "1 month support",
          "Basic optimization"
        ]
      },
      gold: {
        name: "Gold Tier",
        price: "300,000 FCFA",
        features: [
          "Advanced keyword research",
          "On-page & Off-page SEO",
          "Weekly reports",
          "3 months support",
          "Advanced optimization",
          "Priority support"
        ]
      }
    }
  },
  {
    id: "graphics",
    title: "Graphics Design",
    description: "Professional graphic design services for your brand",
    image: placeholderImages.graphics,
    metaDescription: "Professional graphic design services in Cameroon for your brand. Get custom-built graphic design services starting from 50,000 FCFA.",
    tiers: {
      black: {
        name: "Black Tier",
        price: "10,000 FCFA",
        features: [
          "2 design concepts",
          "Basic file formats",
          "3 days delivery",
          "2 revisions",
          "Basic support"
        ]
      },
      gold: {
        name: "Gold Tier",
        price: "40,000 FCFA",
        features: [
          "5 design concepts",
          "All file formats",
          "24h delivery",
          "Unlimited revisions",
          "Priority support"
        ]
      }
    }
  },
  {
    id: "video",
    title: "Video Editing",
    description: "Professional video editing and post-production services",
    image: placeholderImages.video,
    metaDescription: "Professional video editing and post-production services in Cameroon. Get custom-built video editing and post-production services starting from 75,000 FCFA.",
    tiers: {
      black: {
        name: "Black Tier",
        price: "25,000 FCFA",
        features: [
          "Basic editing",
          "Up to 30 minutes",
          "5 days delivery",
          "2 revisions",
          "Basic effects"
        ]
      },
      gold: {
        name: "Gold Tier",
        price: "90,000 FCFA",
        features: [
          "Advanced editing",
          "Up to 180 minutes",
          "3 days delivery",
          "Unlimited revisions",
          "Advanced effects",
          "Priority support"
        ]
      }
    }
  }
]; 