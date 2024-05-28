import { useEffect } from "react";

const scrollToTop = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.scrollTo(0, 0);
          }, 200);

          return () => clearTimeout(timer);
    }, []);
}

export default scrollToTop;