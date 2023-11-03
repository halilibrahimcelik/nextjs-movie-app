const API_URL = `https://api.themoviedb.org/3`;

export const searchMovie = async (query: string) => {
  const res = await fetch(
    `${API_URL}/search/movie?query=${query}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  if (res.status >= 400) throw new Error("Error fetching data");
  const { result } = await res.json();
  return result;
};
export const getUpcomingMovies = async () => {
  const res = await fetch(
    `${API_URL}/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const { results } = await res.json();
  return results;
};
export const getTVSeries = async () => {
  const res = await fetch(
    `${API_URL}/trending/tv/day?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  if (res.status >= 400) throw new Error("Error fetching data");
  const { results } = await res.json();
  return results;
};
export const getCategories = async () => {
  const res = await fetch(
    `${API_URL}/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=1`
  );
  if (res.status >= 400) throw new Error("Error fetching data");

  const { genres } = await res.json();
  return genres;
};

export const getSingleCategory = async (id: number | string) => {
  const res = await fetch(
    `${API_URL}/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=${id}`
  );
  if (res.status >= 400) throw new Error("Error fetching data");

  const { results } = await res.json();
  return results;
};
export const getPopularMovies = async () => {
  const res = await fetch(
    `${API_URL}/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
  );
  if (res.status >= 400) throw new Error("Error fetching data");

  const { results } = await res.json();
  return results;
};
export const getTopRatedMovies = async () => {
  const res = await fetch(
    `${API_URL}/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
  );
  if (res.status >= 400) throw new Error("Error fetching data");

  const { results } = await res.json();
  return results;
};
