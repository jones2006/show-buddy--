export const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.EXPO_PUBLIC_API_KEY,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`,
  },
};

export const fetchPopularmovies = async ({ query }: { query: string }) => {
  const endpoint = query
    ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

  const response = await fetch(endpoint, {
    method: "GET",
    headers: TMDB_CONFIG.headers,
  });

  if (!response.ok) {
    //@ts-ignore
    throw new Error("Error to fetch movie", response.statusText);
  }

  const data = await response.json();
  return data.results;
};

export const fetchGenres = async () => {
  const endpoint = `${TMDB_CONFIG.BASE_URL}/genre/movie/list`;
  const response = await fetch(endpoint, {
    method: "GET",
    headers: TMDB_CONFIG.headers,
  });

  if (!response.ok) throw new Error("Error fetching genres");

  const data = await response.json();
  return data.genres; 
};

// Fetch cast & crew for a movie
export const fetchMovieCredits = async (movie_id: string) => {
  const endpoint = `${TMDB_CONFIG.BASE_URL}/movie/${movie_id}/credits`;
  const response = await fetch(endpoint, {
    method: "GET",
    headers: TMDB_CONFIG.headers,
  });

  if (!response.ok) throw new Error("Error fetching movie credits");

  const data = await response.json();
  return data; 
};
