import { useEffect, useState } from "react";

// GET METHOD
const useLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    const user = localStorage.getItem("token");
    if (user) {
      setIsLoggedIn(true);
    }

    return () => {};
  }, [isLoggedIn]);

  console.log(isLoggedIn);
  
  return [isLoggedIn, setIsLoggedIn];
}

export default useLoggedIn;