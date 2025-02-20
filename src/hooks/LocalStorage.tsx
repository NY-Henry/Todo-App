// import { getItem, setItem } from "@/utils/localStorage";
// import { useEffect, useState } from "react";

// export function useLocalStorage<T>(key: string, initialValue: T) {
//   const [value, setValue] = useState(() => {
//     const item = getItem(key);

//     return (item as T) || initialValue;
//   });

//   useEffect(() => {
//     setItem(key, value);
//   }, [value]);

//   return [value, setValue] as const;
// }
