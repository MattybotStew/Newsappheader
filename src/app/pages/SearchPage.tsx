import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router';
import { Search, X, Filter, ChevronLeft } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { breakingNews, localNews, sportsArticles } from '../data/mockArticles';
import type { Article, SportsArticle } from '../data/mockArticles';

// Combine all articles for searching
const allArticles: (Article | SportsArticle)[] = [
  ...breakingNews,
  ...localNews,
  ...sportsArticles,
];

export function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [results, setResults] = useState<(Article | SportsArticle)[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const categories = ['All', 'News', 'Sports', 'Breaking', 'Local', 'Business', 'Education', 'Politics'];

  useEffect(() => {
    // Perform search when query changes
    if (searchQuery.trim() === '') {
      setResults([]);
      return;
    }

    setIsSearching(true);
    
    // Simulate a small delay for better UX
    const timer = setTimeout(() => {
      const query = searchQuery.toLowerCase();
      
      let filtered = allArticles.filter(article => {
        const matchesQuery = 
          article.title.toLowerCase().includes(query) ||
          article.excerpt.toLowerCase().includes(query) ||
          article.content.toLowerCase().includes(query) ||
          article.author.toLowerCase().includes(query) ||
          article.category.toLowerCase().includes(query);
        
        return matchesQuery;
      });

      // Filter by category if not "All"
      if (selectedCategory !== 'All') {
        filtered = filtered.filter(article => {
          if (selectedCategory === 'News') {
            return !article.isBreaking && article.category !== 'High School' && article.category !== 'College Signing';
          }
          if (selectedCategory === 'Sports') {
            return article.category === 'High School' || article.category === 'College Signing' || article.category === 'Basketball' || article.category === 'Youth Sports' || article.category === 'Friday Game Night';
          }
          if (selectedCategory === 'Breaking') {
            return article.isBreaking === true;
          }
          return article.category.toLowerCase() === selectedCategory.toLowerCase();
        });
      }

      setResults(filtered);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, selectedCategory]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ q: searchQuery });
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchParams({});
    setResults([]);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      {/* Search Bar */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="px-4 py-4">
          <div className="flex items-center gap-3 mb-4">
            <Link 
              to="/" 
              className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft className="size-6 text-[#333399]" />
            </Link>
            <form onSubmit={handleSearch} className="flex-1 relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search news, sports, and more..."
                  className="w-full pl-11 pr-10 py-3 text-[16px] border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#333399] focus:border-transparent"
                  autoFocus
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <X className="size-5 text-gray-500" />
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Category Filters */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-[14px] font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? 'bg-[#333399] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Search Results */}
      <div className="flex-1 px-4 py-6">
        {searchQuery.trim() === '' ? (
          <div className="text-center py-16">
            <Search className="size-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-[20px] font-bold text-gray-900 mb-2">Search AccessWDUN</h2>
            <p className="text-[16px] text-gray-500">
              Find local news, sports, obituaries, and more
            </p>
          </div>
        ) : isSearching ? (
          <div className="text-center py-16">
            <div className="inline-block size-8 border-4 border-[#333399] border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-[16px] text-gray-500">Searching...</p>
          </div>
        ) : results.length === 0 ? (
          <div className="text-center py-16">
            <div className="size-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="size-8 text-gray-400" />
            </div>
            <h2 className="text-[20px] font-bold text-gray-900 mb-2">No results found</h2>
            <p className="text-[16px] text-gray-500 mb-6">
              Try different keywords or check your spelling
            </p>
            <button
              onClick={clearSearch}
              className="px-6 py-2 bg-[#333399] text-white rounded-full hover:bg-[#2a2d7a] transition-colors"
            >
              Clear search
            </button>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <p className="text-[14px] text-gray-500">
                Found {results.length} {results.length === 1 ? 'result' : 'results'} for "{searchQuery}"
              </p>
            </div>

            <div className="space-y-4">
              {results.map((article) => (
                <Link
                  key={article.id}
                  to={article.category === 'High School' || article.category === 'College Signing' || article.category === 'Basketball' || article.category === 'Youth Sports' || article.category === 'Friday Game Night' 
                    ? `/sports/article/${article.id}` 
                    : `/article/${article.id}`}
                  className="block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="p-4">
                    <div className="flex gap-3">
                      {article.imageUrl && (
                        <div className="shrink-0 w-24 h-24 bg-gray-200 overflow-hidden">
                          <img
                            src={article.imageUrl}
                            alt={article.title}
                            className="size-full object-cover"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span
                            className={`inline-block px-2 py-1 rounded text-[11px] font-bold uppercase ${
                              article.isBreaking
                                ? 'bg-[#dc2626] text-white'
                                : article.category === 'High School' || article.category === 'College Signing' || article.category === 'Basketball' || article.category === 'Youth Sports' || article.category === 'Friday Game Night'
                                ? 'bg-[#22c55e] text-white'
                                : 'bg-[#333399] text-white'
                            }`}
                          >
                            {article.category}
                          </span>
                          <span className="text-[12px] text-gray-500">{article.timestamp}</span>
                        </div>
                        <h3 className="text-[16px] font-bold text-gray-900 mb-1 line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-[14px] text-gray-600 line-clamp-2">
                          {article.excerpt}
                        </p>
                        <p className="text-[12px] text-gray-500 mt-2">By {article.author}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}