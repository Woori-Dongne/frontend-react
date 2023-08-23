const getItem = (key: string): string | null => {
  const value = window.localStorage.getItem(key);
  if (!value) return null;

  return String(value);
};

const setItem = (key: string, value: string | number) => {
  window.localStorage.setItem(key, String(value));
};

export { getItem, setItem };
