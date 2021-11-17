export const debounce = (callback, wait) => {
  let timeout = null;
  return (args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => callback(args), wait);
  }
};

export const imageLoader = ({ src, width, quality }) => {
  return `http://localhost:5000/${src}?w=${width}&q=${quality || 75}`
};