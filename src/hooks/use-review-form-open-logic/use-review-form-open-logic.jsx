import {useEffect} from "react";

export const useReviewFormOpenLogic = (nameInputRef, FieldMap) => {
  useEffect(() => {
    nameInputRef.current.focus();

    const storage = window.localStorage;
    Object.entries(storage).forEach(([storeName, storeValue], i) => {
      if (FieldMap[storeName]) {
        if (FieldMap[storeName].isNumeric) {
          FieldMap[storeName].setter(Number(storeValue));
        } else {
          FieldMap[storeName].setter(storeValue);
        }
      }
    });
  }, []);
};
