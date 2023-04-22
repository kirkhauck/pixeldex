export const extractUrls = (obj) => {
  let urls = [];

  for (const key in obj) {
    if (key !== 'other' && typeof obj[key] === 'string') {
      urls.push(obj[key]);
    }
    
    if (key !== 'other' && typeof obj[key] === 'object') {
      urls = [...urls, ...extractUrls(obj[key])];
    }
  }

  return urls;
}