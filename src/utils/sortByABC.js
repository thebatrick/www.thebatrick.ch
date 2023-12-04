export const sortByABC = (a, b) => {
    const titleA = a.data.title.toUpperCase();
    const titleB = b.data.title.toUpperCase();
  
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  };