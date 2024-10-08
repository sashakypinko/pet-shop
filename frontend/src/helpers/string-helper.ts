const shortenString = (str: string, maxLength: number): string => {
  if (str.length > maxLength) {
    return str.slice(0, maxLength - 3) + '...';
  }

  return str;
};

export { shortenString };
