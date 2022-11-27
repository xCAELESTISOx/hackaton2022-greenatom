import { useEffect, RefObject } from "react";

type AnyEvent = MouseEvent | TouchEvent;

export const useClickOutside = <T extends HTMLElement = HTMLElement>(
   ref: RefObject<T>,
   callback: (event: AnyEvent) => void
): void => {
   useEffect(() => {
      function handleClickOutside(event: AnyEvent) {
         if (ref.current && !ref.current.contains(event.target as Node)) {
            setTimeout(() => callback(event), 10);
         }
      }

      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchend", handleClickOutside);
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
         document.removeEventListener("touchend", handleClickOutside);
      };
   }, [ref, callback]);
};
