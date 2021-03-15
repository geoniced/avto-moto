import {useEffect} from "react";

export const useReviewFormOpenLogic = (nameInputRef, FieldMap) => {
  useEffect(() => {
    nameInputRef.current.focus();

    const storage = window.localStorage;
    Object.entries(storage).forEach(([storeName, storeValue]) => {
      let assignedValue = storeValue;

      if (FieldMap[storeName]) {
        if (FieldMap[storeName].isNumeric) {
          assignedValue = Number(storeValue);
        }

        FieldMap[storeName].setter(assignedValue);
      }
    });
  }, []);
};
