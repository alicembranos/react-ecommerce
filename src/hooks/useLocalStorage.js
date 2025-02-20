import { useState, useEffect } from "react";

function getStorageValue(key, defaultValue) {
  const storedData = localStorage.getItem(key);
  const initData = JSON.parse(storedData);
  return initData || defaultValue;
}

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return {value, setValue};
};

export default useLocalStorage;