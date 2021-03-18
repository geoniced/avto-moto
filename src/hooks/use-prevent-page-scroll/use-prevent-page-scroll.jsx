import {useEffect} from "react";

const PREVENT_SCROLL_CLASS = `prevent-scroll`;

export const usePreventPageScroll = () => {
  useEffect(() => {
    document.body.classList.add(PREVENT_SCROLL_CLASS);

    return () => {
      document.body.classList.remove(PREVENT_SCROLL_CLASS);
    };
  }, []);
};
