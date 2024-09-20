// shoppingitems.js


import { writable } from "svelte/store";
export const totalPrice = writable(0);
export const totalAmount = writable(0);


const INITIAL_ITEMS = [
    {
        name: "Apple",
        dexNumber: 1,
        price: 0.5,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg"
    },
    {
        name: "Banana",
        dexNumber: 2,
        price: 0.3,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg"
    },
    {
        name: "Orange",
        dexNumber: 3,
        price: 0.6,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/65/Orange-Icon.png"
    },
    {
        name: "Strawberry",
        dexNumber: 4,
        price: 1.2,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/44/Strawberry.jpg"
    },
    {
        name: "Grape",
        dexNumber: 5,
        price: 2.0,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/95/Grapes.jpg"
    },
    {
        name: "Watermelon",
        dexNumber: 6,
        price: 3.5,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/39/Watermelon.jpg"
    },
    {
        name: "Peach",
        dexNumber: 7,
        price: 1.5,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/21/Peach.jpg"
    },
    {
        name: "Pineapple",
        dexNumber: 8,
        price: 2.5,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/16/Pineapple.jpg"
    },
    {
        name: "Mango",
        dexNumber: 9,
        price: 1.8,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Mango.jpg"
    },
    {
        name: "Kiwi",
        dexNumber: 10,
        price: 0.9,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/20/Kiwifruit.jpg"
    }
];


export const itemStore = writable(INITIAL_ITEMS);


// export default INITIAL_ITEMS;
