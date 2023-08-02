// Set the JWT in the local storage
export const setJwt = (token) => {
    localStorage.setItem('jwt', token);
  };
  
  // Get the JWT from local storage
  export const getJwt = () => {
    return localStorage.getItem('jwt');
  };
  
  // Remove the JWT from local storage
  export const removeJwt = () => {
    localStorage.removeItem('jwt');
  };