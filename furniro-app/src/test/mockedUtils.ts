import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../utils/redux/cartSlice";
import { RootState } from "../utils/redux/store";
import { Product } from "../types/Product";

export const createMockStore = (state: RootState) => {
    return configureStore({
        reducer: {
            cart: cartReducer,
        },
        preloadedState: state,
    });
};

export const product: Product = {
    id: 1,
    sku: "531871",
    title: "3 Seater Double Sofa Bed Genoa Blue",
    category: "Couches",
    tags: ["Sofa bed", "Living room", "Bedroom"],
    normalPrice: 3199.99,
    salePrice: 1844.98,
    discountPercentage: 0.42,
    new: false,
    description: {
        short:
            "Do you have any doubts that a piece of furniture like the Genoa Sofa bed is capable of giving a new look to your space?",
        long: "Do you have any doubts that a piece of furniture like the Genoa Sofa bed is capable of giving a new look to your space? Whether in the Living room, in the office or in the Bedroom, it adapts very well to your needs and also adds a charming touch to the environment. The cozy structure combined with the stick feet is great for sitting, watching TV, reading a book or relaxing on a daily basis. But if you need to take a nap or have visitors at home, just open the zippers that hold the feet to transform it into a bed. Show, right? Oh, it even has this beautiful blue color to be the finishing touch to the decoration.",
    },
    colors: [
        {
            name: "Blue",
            hex: "#0000FF",
        },
    ],
    sizes: ["M", "L"],
    rating: 4.9,
    images: {
        mainImage:
            "https://static.mobly.com.br/p/Keva-SofC3A1-Cama-2-Lugares-Casal-GC3A9nova-Azul-3355-916355-1.jpg",
        gallery: [
            "https://static.mobly.com.br/p/Keva-SofC3A1-Cama-2-Lugares-Casal-GC3A9nova-Azul-3355-916355-2.jpg",
            "https://static.mobly.com.br/p/Keva-SofC3A1-Cama-2-Lugares-Casal-GC3A9nova-Azul-3355-916355-3.jpg",
            "https://static.mobly.com.br/p/Keva-SofC3A1-Cama-2-Lugares-Casal-GC3A9nova-Azul-3355-916355-4.jpg",
            "https://static.mobly.com.br/p/Keva-SofC3A1-Cama-2-Lugares-Casal-GC3A9nova-Azul-3355-916355-5.jpg",
        ],
    },
    cartQuantity: 2,
};

export const product2: Product = {
    id: 2,
    sku: "204089",
    title: "3 Seater Double Seats Premium Sofa Bed Suede Gray",
    category: "Couches",
    tags: ["Sofa bed", "Living room", "Bedroom"],
    normalPrice: 1705.99,
    salePrice: 1172.66,
    discountPercentage: 0.31,
    new: false,
    description: {
        short: "The Sofa bed Premium will renew your restful days",
        long: "With a look that promises to bring sophistication and warmth to your home, the Sofa bed Premium will renew your days of rest, as well as being a piece worthy of praise in any decor. Inside, it has reforestation wood in its composition, a great feature for daily use. On the outside, suede makes everyone want to stay in it without having to go out, as well as enhancing your leisure time in front of the television. Ah, to top it all off, it quickly transforms from a sofa to a bed to adapt to your routine and needs. Many benefits for a home that deserves to be equally incredible ;)",
    },
    colors: [
        {
            name: "Gray",
            hex: "#808080",
        },
    ],
    sizes: ["L"],
    rating: 3.2,
    images: {
        mainImage:
            "https://static.mobly.com.br/p/Mobly-SofC3A1-Cama-3-Lugares-Casal-Premium-Suede-Cinza-9969-770002-1.jpg",
        gallery: [
            "https://static.mobly.com.br/p/Mobly-SofC3A1-Cama-3-Lugares-Casal-Premium-Suede-Cinza-8175-770002-2.jpg",
            "https://static.mobly.com.br/p/Mobly-SofC3A1-Cama-3-Lugares-Casal-Premium-Suede-Cinza-8175-770002-3.jpg",
            "https://static.mobly.com.br/p/Mobly-SofC3A1-Cama-3-Lugares-Casal-Premium-Suede-Cinza-9969-770002-4.jpg",
            "https://static.mobly.com.br/p/Mobly-SofC3A1-Cama-3-Lugares-Casal-Premium-Suede-Cinza-9969-770002-5.jpg",
        ],
    },
    cartQuantity: 2,
};

export const product3: Product = {
    "id": 3,
    "sku": "531875",
    "title": "3 Seater Double Test Sofa Bed Dark Gray",
    "category": "Couches",
    "tags": [
        "Sofa bed",
        "Living room",
        "Bedroom"
    ],
    "normalPrice": 3119.99,
    "salePrice": 1619.98,
    "discountPercentage": 0.48,
    "new": false,
    "description": {
        "short": "A simple piece of furniture like the Corsica Sofa bed has the ability to revamp your space",
        "long": "A simple piece of furniture like the Corsica Sofa bed has the ability to revamp your space, regardless of where you choose to place it. Combining an elegant structure with stick legs, it is suitable for those leisure moments in front of the television or reading a book, as well as for accommodating your guests who will spend the night at your home. To do this, just open the zippers that hold the feet to transform it into a bed. Too much, right? Ah, the gray color and the covering details only add more charm to your home style."
    },
    "colors": [
        {
            "name": "Gray",
            "hex": "#808080"
        }
    ],
    "sizes": [
        "S",
        "M"
    ],
    "rating": 4.4,
    "images": {
        "mainImage": "https://static.mobly.com.br/p/Keva-SofC3A1-Cama-3-Lugares-Casal-CC3B3rsega-Cinza-Escuro-5151-326355-1.jpg",
        "gallery": [
            "https://static.mobly.com.br/p/Keva-SofC3A1-Cama-3-Lugares-Casal-CC3B3rsega-Cinza-Escuro-5151-326355-2.jpg",
            "https://static.mobly.com.br/p/Keva-SofC3A1-Cama-3-Lugares-Casal-CC3B3rsega-Cinza-Escuro-5151-326355-3.jpg",
            "https://static.mobly.com.br/p/Keva-SofC3A1-Cama-3-Lugares-Casal-CC3B3rsega-Cinza-Escuro-5151-326355-4.jpg",
            "https://static.mobly.com.br/p/Keva-SofC3A1-Cama-3-Lugares-Casal-CC3B3rsega-Cinza-Escuro-5151-326355-5.jpg"
        ]
    },
    cartQuantity: 1,
}