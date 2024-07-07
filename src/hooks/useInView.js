// hooks/useInView.js
import { useState, useEffect } from 'react';

const useInView = (props) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    let { elementId, ...options } = props;

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setIsIntersecting(true);
                console.log("Inview");
                observer.unobserve(entry.target); // Stop observing once in view
            }
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(observerCallback, options);
        const element = document.getElementById(elementId);
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [options]);

    return isIntersecting;
};

export default useInView;