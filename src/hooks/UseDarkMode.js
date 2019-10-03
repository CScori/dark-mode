import { useLocalStorage } from './useLocalStorage';
import React, { useEffect } from 'react'

export const useDarkMode = () => {
    const [value, setValue] = useLocalStorage("darkMode");

    useEffect(() => {
        const body = window.document.body;
        if (value) {
            body.classList.add("dark-mode");
        } else {
            body.classList.remove("dark-mode");
        }
    }, [value])




    return [value]
};