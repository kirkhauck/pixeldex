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

export const formatDexNum = (num) => {
  const strNum = num.toString();

  if (strNum.length === 1) {
    return `#000${strNum}`
  } else if (strNum.length === 2) {
    return `#00${strNum}`
  } else if (strNum.length === 3) {
    return `#0${strNum}`
  } else {
    return `#{strNum}`
  }
}