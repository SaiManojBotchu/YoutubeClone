// API Key
const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

// Ensure environment variables are defined
if (!API_KEY) {
  throw new Error('Missing YOUTUBE_API_KEY environment variable');
}

// Base URL
const YT_BASE_URL = 'https://youtube.googleapis.com/youtube/v3';
// Cors URL - for bypassing the cors error
// export const CORS_PROXY_URL = 'https://thingproxy.freeboard.io/fetch/';
export const CORS_PROXY_URL = process.env.REACT_APP_CORS_PROXY_URL;

// YouTube API Endpoints
export const YT_API = `${YT_BASE_URL}/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`;
export const YT_SEARCH_API =
  'https://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=';
export const YT_QUERY_SEARCH_API = `${YT_BASE_URL}/search?part=snippet&maxResults=25&q=`;
export const YT_COMMENTS_API = `${YT_BASE_URL}/commentThreads?part=snippet,replies&videoId=Zb1zVeXLUf8&key=${API_KEY}`;
