const capitalizeText = (text: string) => {
  return text.replace(/\b\w/g, (c) => c.toUpperCase());
};

export { capitalizeText };
