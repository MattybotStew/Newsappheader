import { useState } from 'react';
import { useNavigate } from 'react-router';
import { breakingNews } from '../data/mockArticles';
import ngrBanner from '../../assets/bannernew.png';

const SESSION_KEY = 'breaking_news_dismissed';

export function BreakingNewsPopup() {
  const [visible, setVisible] = useState(() => !sessionStorage.getItem(SESSION_KEY));
  const navigate = useNavigate();

  if (!visible) return null;

  const dismiss = () => {
    sessionStorage.setItem(SESSION_KEY, '1');
    setVisible(false);
  };

  const handleArticleClick = (id: string) => {
    dismiss();
    navigate(`/article/${id}`);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60" onClick={dismiss} />

      {/* Modal */}
      <div className="relative w-full max-w-sm rounded-[10px] overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
        {/* Red header — sticky */}
        <div className="bg-[#c62828] flex items-center justify-between px-4 py-3 shrink-0">
          <span className="font-['Source_Sans_3',sans-serif] font-extrabold text-[15px] tracking-[1.2px] uppercase text-white">
            Breaking News
          </span>
          <button
            onClick={dismiss}
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Close"
          >
            <svg viewBox="0 0 24 24" fill="none" className="size-5">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto">
          {/* Article list */}
          <div className="bg-white divide-y divide-[#e8eaed]">
            {breakingNews.map((article) => (
              <button
                key={article.id}
                onClick={() => handleArticleClick(article.id)}
                className="w-full flex gap-3 px-4 py-3 hover:bg-[#f8f9fa] transition-colors text-left"
              >
                <div className="size-[64px] shrink-0 rounded-[4px] overflow-hidden bg-[#e8eaed]">
                  {article.imageUrl && (
                    <img src={article.imageUrl} alt={article.title} className="size-full object-cover" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-['Source_Sans_3',sans-serif] font-bold text-[10px] tracking-[0.8px] uppercase text-[#c62828] mb-0.5">
                    Breaking
                  </p>
                  <p className="font-['Source_Sans_3',sans-serif] font-bold text-[14px] text-[#1a1c1e] leading-snug line-clamp-2">
                    {article.title}
                  </p>
                  <p className="font-['Source_Sans_3',sans-serif] text-[12px] text-[#6b7178] mt-0.5">
                    {article.author} · {article.timestamp}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* 300×300 Ad */}
          <div className="bg-[#011843] flex flex-col items-center justify-center p-3">
            <p className="font-['Source_Sans_3',sans-serif] text-[9px] font-bold tracking-[0.8px] uppercase text-white/30 mb-2">
              Advertisement
            </p>
            <a href="#" className="block w-[300px] h-[300px] overflow-hidden rounded-[4px] hover:opacity-90 transition-opacity">
              <img
                src={ngrBanner}
                alt="Advertisement"
                className="w-full h-full object-cover object-center"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
