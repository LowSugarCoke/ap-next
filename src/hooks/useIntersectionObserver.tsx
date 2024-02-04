import { RefObject, useEffect, useState } from "react";

interface UseIntersectionObserverProps {
  elementRef: RefObject<Element>;
  options?: IntersectionObserverInit;
}

function useIntersectionObserver({
  elementRef,
  options,
}: UseIntersectionObserverProps): boolean {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const currentElement = elementRef.current;
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    }, options);

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [elementRef, options]);

  return isVisible;
}

export default useIntersectionObserver;
