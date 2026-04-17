// Google Ad Manager — AccessWDUN (Network ID: 4118169)

// Set to true when ready to enable live ads
export const ADS_ENABLED = false;

export const adConfig = {
  networkId: '4118169',
  adUnits: {
    // Top global banner (below header) — leaderboard / mobile banner
    topBanner: '/4118169/awdun_header_lazy',

    // In-feed native / medium rectangle
    newsFeedNative:    '/4118169/awdun_infeed_lazy',
    sportsFeedNative:  '/4118169/awdun_infeed_lazy',
    podcastsNative:    '/4118169/awdun_infeed_lazy',

    // Inline banner inside articles / obituaries
    articleInline:      '/4118169/awdun_sidebar_lazy',
    obituariesInline:   '/4118169/awdun_sidebar_lazy',
    weatherInline:      '/4118169/awdun_sidebar_lazy',
    radioInline:        '/4118169/awdun_radio_tab',
    radioStationInline: '/4118169/awdun_radio_tab',

    // Anchored bottom banner
    articleBottom: '/4118169/awdun_bottom_lazy',
    anchoredBanner: '/4118169/awdun_bottom_lazy',
  },
};

export const adSizes = {
  // Responsive: 300x250 on mobile, 728x90 on desktop
  leaderboard:      [[728, 90], [320, 50]] as [number, number][],
  mediumRectangle:  [[300, 250], [320, 50]] as [number, number][],
  anchoredBanner:   [[728, 90], [320, 50]] as [number, number][],
  infeed:           [[300, 250], [320, 50]] as [number, number][],
};
