I have an existing React Native mobile app called AccessNorthGA. I need to add ad placements to the existing screens. Do not redesign any screens. Only add the ad units described below.
Ad SDK: react-native-google-mobile-ads using Google Ad Manager (GAM)
Ad placements to add:
News Feed & Sports Feed screens

Insert a native ad component styled as an article card after the 3rd article in the list
Must include a small grey "Sponsored" label in the top right corner
Match existing article card style exactly — same thumbnail size, same headline font, same byline row
Use NativeAd from react-native-google-mobile-ads

Article Detail screen (News + Sports)

Insert a BannerAd sized MEDIUM_RECTANGLE (300×250) inline in the ScrollView after the 2nd paragraph of body text, centered horizontally with 16px margin on each side
Insert an ANCHORED_ADAPTIVE_BANNER fixed to the bottom of the screen sitting directly above the bottom navigation bar

Obituaries List screen

Insert a BannerAd sized MEDIUM_RECTANGLE (300×250) after every 5th obituary card
Add a centered grey "Sponsored" label in 10px grey text above the ad unit
No ads on the Obituary Detail screen

Weather screen

Insert a BannerAd sized MEDIUM_RECTANGLE (300×250) below the forecast cards with 16px horizontal margin

Podcasts List screen

Insert a native ad component styled as an episode card after the 3rd episode
Match existing episode card style exactly
Include a small grey "Sponsored" label

Search Results screen

Insert a native ad as the 3rd result in the list
Style it identically to a search result row
Label it "Sponsored" in small grey text on the right side

Do NOT add ads to:

Obituary Detail screen
Radio Now Playing screen
Podcast Episode Player screen
Splash screen
Any screen header or bottom navigation bar

Ad component rules:

All ad components must handle load failure gracefully — if an ad fails to load, collapse the container to 0 height so there is no empty white space
All banner ads must use requestOptions={{ requestNonPersonalizedAdsOnly: false }}
Wrap every ad unit in a try/catch with a fallback of null
Ad unit IDs should be pulled from a central adConfig.js file with placeholder strings formatted as '/YOUR_NETWORK_ID/accessnorthga_[placement_name]'
