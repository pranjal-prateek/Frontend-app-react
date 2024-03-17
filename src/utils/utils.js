
export const getToken = (itemKey) => {
    return localStorage.getItem(itemKey);
  };
  

  export const setToken = (itemKey,itemValue) => {
    localStorage.setItem(itemKey, itemValue);
  };
  

  export const removeToken = (itemKey) => {
    localStorage.removeItem(itemKey);
  };

  export const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
