import { useRouteError, useNavigate } from 'react-router';

export function ErrorBoundary() {
  const error = useRouteError() as Error;
  const navigate = useNavigate();

  return (
    <div className="size-full flex flex-col items-center justify-center bg-[#f8f9fa] p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 text-center">
        <h1 className="font-['Roboto:Bold',sans-serif] font-bold text-[24px] text-[#1a1c1e] mb-3" style={{ fontVariationSettings: "'wdth' 100" }}>
          Oops! Something went wrong
        </h1>
        <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#41484d] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
          {error?.message || 'An unexpected error occurred'}
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-[#1976d2] hover:bg-[#1565c0] text-white px-6 py-3 rounded-lg transition-colors"
        >
          <span className="font-['Roboto:SemiBold',sans-serif] font-semibold text-[15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Go to Home
          </span>
        </button>
      </div>
    </div>
  );
}
