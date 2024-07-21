export const API_KEY = 'AIzaSyCn76zXUdXLcqy4Ik1QwISRFLK307QsbRI';

export const ytAPI =
  'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=' +
  API_KEY;

// bypassing the cors with the help of corsproxy.io
const corsUrl = 'https://thingproxy.freeboard.io/fetch/';
export const ytSearchAPI =
  corsUrl +
  'http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=';

export const ytQuerySearchAPI =
  'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=';

export const comments_API =
  'https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=Zb1zVeXLUf8&key=' +
  API_KEY;

// 'https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';
