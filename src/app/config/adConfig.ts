// Ad Unit IDs for Google Ad Manager
// Replace YOUR_NETWORK_ID with your actual GAM network ID

export const adConfig = {
  networkId: 'YOUR_NETWORK_ID',
  adUnits: {
    // Top banner ad (below header)
    topBanner: '/YOUR_NETWORK_ID/accessnorthga_top_banner',
    
    // Native ads
    newsFeedNative: '/YOUR_NETWORK_ID/accessnorthga_news_feed_native',
    sportsFeedNative: '/YOUR_NETWORK_ID/accessnorthga_sports_feed_native',
    podcastsNative: '/YOUR_NETWORK_ID/accessnorthga_podcasts_native',
    articleNative: '/YOUR_NETWORK_ID/accessnorthga_article_native',
    
    // Banner ads - Medium Rectangle (300x250)
    articleInline: '/YOUR_NETWORK_ID/accessnorthga_article_inline',
    obituariesInline: '/YOUR_NETWORK_ID/accessnorthga_obituaries_inline',
    weatherInline: '/YOUR_NETWORK_ID/accessnorthga_weather_inline',
    radioInline: '/YOUR_NETWORK_ID/accessnorthga_radio_inline',
    radioStationInline: '/YOUR_NETWORK_ID/accessnorthga_radio_station_inline',
    
    // Anchored banner ads
    articleBottom: '/YOUR_NETWORK_ID/accessnorthga_article_bottom',
  }
};

export const adSizes = {
  mediumRectangle: { width: 300, height: 250 },
  anchoredBanner: { width: 320, height: 50 },
};