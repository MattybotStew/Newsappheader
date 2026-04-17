import { useNavigate, useParams } from 'react-router';
import { ChevronLeft, Facebook, Mail, Share2 } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { AnchoredBanner } from '../components/ads/AnchoredBanner';
import { adConfig } from '../config/adConfig';
import { useObituaryById, getFeaturedImage, stripHtml } from '../api/hooks';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric',
  });
}

export function ObituaryDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { data: post, isLoading, isError } = useObituaryById(id ? parseInt(id) : null);

  return (
    <div className="size-full flex flex-col bg-white">
      <Header />
      <main className="flex-1 overflow-y-auto bg-[#f8f9fa]">
        <div className="bg-white">
          {/* Back Button */}
          <div className="border-b border-[#c1c7ce]">
            <button
              onClick={() => navigate('/obituaries')}
              className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50 transition-colors w-full"
            >
              <ChevronLeft className="size-5 text-[#1a3178]" />
              <span className="font-['Source_Sans_3',sans-serif] font-semibold text-[14px] text-[#1a3178]">
                Back to Obituaries
              </span>
            </button>
          </div>

          {isLoading && (
            <div className="flex items-center justify-center py-24">
              <div className="w-8 h-8 border-4 border-[#1a3178] border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {isError && (
            <div className="px-4 py-12 text-center text-[#6b7280]">
              <p className="font-['Source_Sans_3',sans-serif] text-[16px]">Unable to load obituary. Please try again.</p>
            </div>
          )}

          {post && (
            <>
              {/* Memorial Photo */}
              <div className="w-full bg-gradient-to-b from-[#f5f5f5] to-white py-8">
                <div className="flex justify-center">
                  <div className="w-[200px] h-[200px] rounded-full overflow-hidden bg-gradient-to-br from-[#e8e8e8] to-[#d0d0d0] border-4 border-white shadow-lg">
                    <ImageWithFallback
                      src={getFeaturedImage(post)}
                      alt={stripHtml(post.title.rendered)}
                      className="w-full h-full object-cover"
                      fallbackSrc="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&q=80"
                    />
                  </div>
                </div>
              </div>

              {/* Name and Details */}
              <div className="px-4 pb-4">
                <h1 className="font-['Source_Sans_3',sans-serif] font-bold leading-[32px] text-[26px] text-[#1a3178] text-center mb-2">
                  {stripHtml(post.title.rendered)}
                </h1>

                <div className="text-center mb-4">
                  <p className="font-['Source_Sans_3',sans-serif] font-medium text-[14px] text-[#41484d]">
                    Published {formatDate(post.date)}
                  </p>
                </div>

                {/* Share Buttons */}
                <div className="flex items-center gap-2 pb-4 border-b border-[#c1c7ce]">
                  <span className="font-['Source_Sans_3',sans-serif] font-semibold text-[12px] text-[#41484d] mr-1">Share:</span>
                  <button className="flex items-center justify-center size-8 rounded-full hover:bg-gray-100 transition-colors">
                    <Facebook className="size-4 text-[#1877f2]" fill="#1877f2" />
                  </button>
                  <button className="flex items-center justify-center size-8 rounded-full hover:bg-gray-100 transition-colors">
                    <svg className="size-4" viewBox="0 0 24 24" fill="#1DA1F2">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
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
              <div className="px-4 py-6 pb-[200px]">
                <div
                  className="font-['Source_Sans_3',sans-serif] text-[15px] text-[#1a1c1e] leading-[24px] wp-content"
                  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
      <AnchoredBanner adUnit={adConfig.adUnits.anchoredBanner} />
    </div>
  );
}
