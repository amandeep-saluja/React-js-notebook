import { useState } from 'react';
const useLocalStorage = (key, initialData) => {
    let data = localStorage.getItem(key);

    if (!data) {
        localStorage.setItem(key, initialData);
        data = localStorage.getItem(key);
    }
    console.log('local storage render');
    const [cart, setCart] = useState(data);

    return { cart, setCart };
};

export default useLocalStorage;
