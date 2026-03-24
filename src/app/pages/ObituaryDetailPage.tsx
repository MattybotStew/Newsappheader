import { useNavigate } from 'react-router';
import { ChevronLeft, MapPin, Calendar, Church, Facebook, Mail, Share2 } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { TopBannerAd } from '../components/ads/TopBannerAd';
import { AnchoredBanner } from '../components/ads/AnchoredBanner';
import { adConfig } from '../config/adConfig';
import placeholderImage from 'figma:asset/2b97325de4e56fe079f3ddbcfdc4d5b4aa816d2f.png';

export function ObituaryDetailPage() {
  const navigate = useNavigate();

  return (
    <div className="size-full flex flex-col bg-white">
      <Header />
      <TopBannerAd adUnit={adConfig.adUnits.topBanner} />
      <main className="flex-1 overflow-y-auto bg-[#f8f9fa]">
        <div className="bg-white">
          {/* Back Button */}
          <div className="border-b border-[#c1c7ce]">
            <button 
              onClick={() => navigate('/obituaries')}
              className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50 transition-colors w-full"
            >
              <ChevronLeft className="size-5 text-[#1976d2]" />
              <span className="font-['Roboto:SemiBold',sans-serif] font-semibold text-[14px] text-[#1976d2]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Back to Obituaries
              </span>
            </button>
          </div>

          {/* Memorial Photo */}
          <div className="w-full bg-gradient-to-b from-[#f5f5f5] to-white py-8">
            <div className="flex justify-center">
              <div className="w-[200px] h-[200px] rounded-full overflow-hidden bg-gradient-to-br from-[#e8e8e8] to-[#d0d0d0] border-4 border-white shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1750926013469-9d8f680d8aff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGVsZGVybHklMjB3b21hbnxlbnwxfHx8fDE3NzQzNzQ3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Margaret Louise Thompson"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Name and Details */}
          <div className="px-4 pb-4">
            <h1 className="font-['Roboto:Bold',sans-serif] font-bold leading-[32px] text-[26px] text-[#1a1c1e] text-center mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
              Margaret Louise Thompson
            </h1>
            
            <div className="text-center mb-4">
              <p className="font-['Roboto:Medium',sans-serif] font-medium text-[16px] text-[#41484d] mb-1" style={{ fontVariationSettings: "'wdth' 100" }}>
                January 15, 1942 - March 1, 2026
              </p>
              <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#6b7178]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Age 84, of Gainesville, Georgia
              </p>
            </div>

            {/* Quick Info */}
            <div className="flex flex-col gap-2 mb-4 pb-4 border-b border-[#c1c7ce]">
              <div className="flex items-center gap-2 text-[13px] text-[#41484d]">
                <MapPin className="size-4 text-[#1976d2]" />
                <span className="font-['Roboto:Regular',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Memorial Park Funeral Home, Gainesville
                </span>
              </div>
              <div className="flex items-center gap-2 text-[13px] text-[#41484d]">
                <Calendar className="size-4 text-[#1976d2]" />
                <span className="font-['Roboto:Regular',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Visitation: March 5, 2026, 2:00 PM - 4:00 PM
                </span>
              </div>
              <div className="flex items-center gap-2 text-[13px] text-[#41484d]">
                <Calendar className="size-4 text-[#1976d2]" />
                <span className="font-['Roboto:Regular',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Service: March 6, 2026, 11:00 AM
                </span>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-2 pb-4 border-b border-[#c1c7ce]">
              <span className="font-['Roboto:SemiBold',sans-serif] font-semibold text-[12px] text-[#41484d] mr-1" style={{ fontVariationSettings: "'wdth' 100" }}>
                Share:
              </span>
              <button className="flex items-center justify-center size-8 rounded-full hover:bg-gray-100 transition-colors">
                <Facebook className="size-4 text-[#1877f2]" fill="#1877f2" />
              </button>
              <button className="flex items-center justify-center size-8 rounded-full hover:bg-gray-100 transition-colors">
                <svg className="size-4" viewBox="0 0 24 24" fill="#1DA1F2">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </button>
              <button className="flex items-center justify-center size-8 rounded-full hover:bg-gray-100 transition-colors">
                <Mail className="size-4 text-[#41484d]" />
              </button>
              <button className="flex items-center justify-center size-8 rounded-full hover:bg-gray-100 transition-colors">
                <Share2 className="size-4 text-[#41484d]" />
              </button>
            </div>
          </div>

          {/* Obituary Content */}
          <div className="px-4 py-6 pb-24">
            <div className="font-['Roboto:Regular',sans-serif] text-[15px] text-[#1a1c1e] leading-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="mb-4">
                Margaret Louise Thompson, 84, of Gainesville, Georgia, passed away peacefully on March 1, 2026, surrounded by her loving family. She was born on January 15, 1942, in Hall County to the late John and Mary Henderson.
              </p>

              <p className="mb-4">
                Margaret was a devoted wife, mother, grandmother, and great-grandmother who cherished every moment spent with her family. She was a member of First Baptist Church of Gainesville for over 50 years, where she taught Sunday School and volunteered with the women's ministry.
              </p>

              <p className="mb-4">
                A retired elementary school teacher with Hall County Schools, Margaret dedicated 35 years to educating young minds and touching countless lives. Her former students often remarked on her kindness, patience, and genuine love for teaching.
              </p>

              <p className="mb-4">
                She enjoyed gardening, quilting, and cooking for her family. Her famous peach cobbler and Sunday dinners will be greatly missed. Margaret had a servant's heart and was always the first to help anyone in need.
              </p>

              <div className="my-6 p-4 bg-[#f0f4f8] rounded-lg border-l-4 border-[#1976d2]">
                <p className="font-['Roboto:SemiBold',sans-serif] font-semibold text-[14px] text-[#1a1c1e] mb-3" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Survivors
                </p>
                <div className="space-y-2 text-[14px]">
                  <p>Husband of 62 years: Robert Thompson of Gainesville</p>
                  <p>Children: Susan (David) Martin of Flowery Branch, Michael (Jennifer) Thompson of Oakwood, and Lisa (James) Wilson of Buford</p>
                  <p>Grandchildren: Emily, Sarah, Matthew, Daniel, Rachel, and Hannah</p>
                  <p>Great-grandchildren: Olivia, Noah, and Grace</p>
                  <p>Brother: John (Carol) Henderson Jr. of Dahlonega</p>
                </div>
              </div>

              <p className="mb-4">
                In addition to her parents, Margaret was preceded in death by her sister, Elizabeth Ann Henderson.
              </p>

              <div className="my-6 p-4 bg-[#fff8e1] rounded-lg border-l-4 border-[#ffa000]">
                <p className="font-['Roboto:SemiBold',sans-serif] font-semibold text-[14px] text-[#1a1c1e] mb-3" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Service Information
                </p>
                <div className="space-y-2 text-[14px]">
                  <p><strong>Visitation:</strong> Tuesday, March 5, 2026, from 2:00 PM to 4:00 PM at Memorial Park Funeral Home</p>
                  <p><strong>Funeral Service:</strong> Wednesday, March 6, 2026, at 11:00 AM at First Baptist Church of Gainesville</p>
                  <p><strong>Interment:</strong> Memorial Park Cemetery, Gainesville</p>
                  <p className="pt-2 border-t border-[#e0e0e0] mt-2">
                    The family will receive friends at the church following the service.
                  </p>
                </div>
              </div>

              <p className="mb-4">
                In lieu of flowers, the family requests that memorial donations be made to First Baptist Church of Gainesville Building Fund or the American Heart Association.
              </p>

              <p className="italic text-[#41484d]">
                "Her children arise and call her blessed; her husband also, and he praises her." - Proverbs 31:28
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <AnchoredBanner adUnit={adConfig.adUnits.anchoredBanner} />
    </div>
  );
}