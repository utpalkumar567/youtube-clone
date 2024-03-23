export const GOOGLE_API_KEY = "AIzaSyDnAzckCSNSwygqOzXHYPEdXTdDbH4rF-Y";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=IN&key=" +
  GOOGLE_API_KEY;
export const YOUTUBE_RECCOMENDED_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=8&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_MUSIC_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=28&regionCode=IN&videoCategoryId=10&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SPORT_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=28&regionCode=IN&videoCategoryId=17&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_GAMING_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=28&regionCode=IN&videoCategoryId=20&key=" +
  GOOGLE_API_KEY;
