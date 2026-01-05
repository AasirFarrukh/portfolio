/**
 * Certifications data
 * Each certification has name, issuer, date, and optional image/link
 */

import awsCert from '../Images/Certificates/AWS-Academy-Cloud-Foundations.png';
import wordpressCert from '../Images/Certificates/Build-a-Free-Website-with-WordPress.png';
import googleSheetsCert from '../Images/Certificates/Create-Charts-and-Dashboard-using-Google-Sheets.png';
import sustainabilityCert from '../Images/Certificates/Sustainability-E-Learning.png';

const certifications = [
  {
    name: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services",
    date: "May 2025",
    duration: "20 hours",
    image: "https://images.credly.com/images/73e4a58b-a8ef-41a3-a7db-9183dd269882/image.png",
    fallback: awsCert,
    link: "https://www.credly.com/go/aKWvh1V5",
    color: "from-orange-500 to-yellow-500"
  },
  {
    name: "Build a Free Website with WordPress",
    issuer: "Coursera Project Network",
    date: "October 2025",
    image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~9EIA518R93MV/CERTIFICATE_LANDING_PAGE~9EIA518R93MV.jpeg",
    fallback: wordpressCert,
    link: "https://coursera.org/verify/9EIA518R93MV",
    color: "from-blue-500 to-purple-500"
  },
  {
    name: "Create Charts and Dashboard using Google Sheets",
    issuer: "Coursera",
    date: "October 2021",
    image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~SWKJB4RRRCRE/CERTIFICATE_LANDING_PAGE~SWKJB4RRRCRE.jpeg",
    fallback: googleSheetsCert,
    link: "https://coursera.org/verify/SWKJB4RRRCRE",
    color: "from-green-500 to-teal-500"
  },
  {
    name: "Sustainability E-Learning",
    issuer: "Nestlé Connect",
    date: "2024",
    image: sustainabilityCert,
    fallback: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%2314b8a6' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='white' text-anchor='middle' dy='.3em' font-family='Arial'%3ENestlé Certificate%3C/text%3E%3C/svg%3E",
    color: "from-emerald-500 to-green-500"
  }
];

export default certifications;
