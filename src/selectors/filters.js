// Get visible expenses

export default (searches, { text, sortBy, startDate, endDate }) => {
  return searches.sort((a, b) => {
    if (sortBy === "length") {
      return a.createdAt < b.createdAt ? 1 : -1;
    }
    if (sortBy === "genre") {
      return a.primaryGenreName < b.primaryGenreName ? 1 : -1;
    } else if (sortBy === "price") {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};
