import { useNavigate, useParams } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ChevronLeft, Share2, Facebook, Mail } from 'lucide-react';
import { BannerAd } from '../components/ads/BannerAd';
import { AnchoredBanner } from '../components/ads/AnchoredBanner';
import { adConfig, adSizes } from '../config/adConfig';
import { useNewsById, getFeaturedImage, getAuthor, stripHtml } from '../api/hooks';

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric',
    hour: 'numeric', minute: '2-digit',
  });
}

export function ArticlePage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { data: post, isLoading, isError } = useNewsById(id ? parseInt(id) : null);

  return (
    <div className="size-full flex flex-col bg-white">
      <Header />
      <main className="flex-1 overflow-y-auto bg-[#f8f9fa]">
        <div className="bg-white">
          {/* Back Button */}
          <div className="border-b border-[#c1c7ce]">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50 transition-colors w-full"
            >
              <ChevronLeft className="size-5 text-[#1a56a4]" />
              <span className="font-['Source_Sans_3',sans-serif] font-semibold text-[14px] text-[#1a56a4]">
                Back to News
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
              <p className="font-['Source_Sans_3',sans-serif] text-[16px]">Unable to load article. Please try again.</p>
            </div>
          )}

          {post && (
            <>
              {/* Article Header */}
              <div className="px-4 pt-4 pb-3">
                <div className="bg-[#1a3178] px-3 py-[3px] rounded-full inline-block mb-3">
                  <span className="font-['Source_Sans_3',sans-serif] font-bold text-[10px] text-white tracking-[0.6px] uppercase">
                    News
                  </span>
                </div>

                <h1 className="font-['Source_Sans_3',sans-serif] font-bold leading-[28px] text-[22px] text-[#1a3178] mb-3">
                  {stripHtml(post.title.rendered)}
                </h1>

                <div className="flex items-center gap-2 text-[12px] text-[#41484d] mb-4">
                  <span className="font-['Source_Sans_3',sans-serif] font-semibold">{getAuthor(post)}</span>
                  <span className="opacity-50">·</span>
                  <span className="font-['Source_Sans_3',sans-serif]">{formatDate(post.date)}</span>
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

              {/* Featured Image */}
              {getFeaturedImage(post) && (
                <div className="w-full">
                  <img
                    src={getFeaturedImage(post)}
                    alt={stripHtml(post.title.rendered)}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}

              {/* Article Content */}
              <div className="px-4 py-6">
                {/* Inline Ad */}
                <div className="my-6 flex justify-center">
                  <BannerAd
                    adUnit={adConfig.adUnits.articleInline}
                    size={adSizes.mediumRectangle}
                    className="mx-4"
                  />
                </div>

                <div
                  className="font-['Source_Sans_3',sans-serif] text-[16px] text-[#1a1c1e] leading-[26px] wp-content"
                  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />
              </div>

              <div className="pb-[200px]" />
            </>
          )}
        </div>
      </main>

      <AnchoredBanner adUnit={adConfig.adUnits.articleBottom} />
      <Footer />
    </div>
  );
}
