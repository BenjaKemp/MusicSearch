// Get visible expenses

export default (searches) => {
  console.log('searches', searches)
  return searches.searchResult.results.sort((a, b) => {
    if (searches.filters.sortBy === "length") {
      return a.trackTimeMillis < b.trackTimeMillis ? 1 : -1;
    }
    if (searches.filters.sortBy === "genre") {
      return a.primaryGenreName < b.primaryGenreName ? 1 : -1;
    } else if (searches.filters.sortBy === "price") {
      return a.trackPrice < b.trackPrice ? 1 : -1;
    }
  });
};
