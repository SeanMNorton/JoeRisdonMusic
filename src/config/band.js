// ============================================================
// Band Configuration
// Update these values for your band before deploying.
// ============================================================

export default {
  // Hygraph (GraphCMS) API endpoint — found in Hygraph > Project Settings > API Access
  hygraphUrl: 'REPLACE_WITH_HYGRAPH_URL',

  // Hygraph document ID for the press kit download
  // Find it in Hygraph > Downloads > open the press kit entry and copy the ID from the URL
  pressKitId: 'REPLACE_WITH_PRESS_KIT_ID',
  pressKit: '/press-kit.html',

  // Band name displayed in the footer and browser tab
  bandName: 'Joe Risdon',

  // Booking contact email shown in the footer
  bookingEmail: 'booking@joerisdon.com',

  // External store / merch URL — set to null to hide the Merch link entirely
  storeUrl: null,

  // SongKick artist ID — found in your SongKick artist page URL:
  // e.g. https://www.songkick.com/artists/1234567 → '1234567'
  // Set to null to hide the SongKick widget
  songkickArtistId: '9094184',

  // Google Analytics measurement ID (UA-XXXXXXXX-X or G-XXXXXXXXXX)
  // Set to null to disable analytics
  googleAnalyticsId: null,

  // band urls (brandLinks)
  brandLinks: [
    {siteName: 'bandcamp', url: 'https://joerisdon.bandcamp.com/', linkText: 'bandcamp'},
    {siteName: 'itunes', url: 'https://music.apple.com/us/artist/joe-risdon/1172456873', linkText: 'apple'},
    {siteName: 'spotify', url: 'https://open.spotify.com/artist/2YL6zJ2n9NXB6q4ddR0lEo', linkText: 'spotify'},
    {siteName: 'instagram', url: 'https://instagram.com/joerisdonmusic', linkText: 'instagram'},
    {siteName: 'facebook', url: 'https://facebook.com/joerisdonmusic', linkText: 'facebook'},
    {siteName: 'youtube', url: 'https://youtube.com/@joerisdonmusic', linkText: 'youtube'},
  ]
};
