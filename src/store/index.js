import { createStore } from "vuex";

const store = createStore({
    state: {
        products: [
            {
                id: 1,
                name: "iPhone 13 Pro Max",
                category: "Phone",
                rating: 4.5,
                price: 72098,
                image: "https://cdn.pixabay.com/photo/2022/09/25/22/25/iphones-7479304_1280.jpg",
                description:
                    "The iPhone 13 Pro Max features a stunning display, powerful A15 Bionic chip, advanced camera system, and all-day battery life. Experience the pinnacle of Apple technology.",
            },
            {
                id: 2,
                name: "Samsung Galaxy S22 Ultra",
                category: "Phone",
                rating: 4.4,
                price: 62999,
                image: "https://images.samsung.com/is/image/samsung/p6pim/in/sm-s901elvdinu/gallery/in-galaxy-s22-s901-412948-412948-sm-s901elvdinu-533594723?$730_584_PNG$",
                description:
                    "The Samsung Galaxy S22 Ultra is a flagship phone with a stunning design, powerful performance, exceptional cameras, and a vibrant display. Elevate your smartphone experience.",
            },
            {
                id: 3,
                name: "iPad Pro 12.9",
                category: "Tablet",
                rating: 4.8,
                price: 106190,
                image: "https://img4.gadgetsnow.com/gd/images/products/additional/large/G236012_View_1/mobiles/tablets/apple-ipad-pro-12-9-2020-wifi-space-grey-1tb-6gb-ram-.jpg",
                description:
                    "The iPad Pro 12.9 is a powerful tablet that combines versatility and performance. With its stunning Retina display, M1 chip, and Apple Pencil support, it's perfect for productivity and creativity.",
            },
            {
                id: 4,
                name: "Microsoft Surface Pro 8",
                category: "Tablet",
                rating: 4.7,
                price: 83990,
                image: "https://m.media-amazon.com/images/I/41ilrzy-kVL._SX300_SY300_QL70_FMwebp_.jpg",
                description:
                    "The Microsoft Surface Pro 8 is a versatile 2-in-1 device that offers the power of a laptop and the flexibility of a tablet. Experience the ultimate productivity on the go.",
            },
            {
                id: 5,
                name: "Dell XPS 13",
                category: "Laptop",
                rating: 4.6,
                price: 112990,
                image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9315/media-gallery/notebook-xps-9315-nt-blue-gallery-3.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=575&qlt=100,1&resMode=sharp2&size=575,402&chrss=full",
                description:
                    "The Dell XPS 13 is a premium ultrabook that delivers exceptional performance, stunning visuals, and an immersive display. Get ready to elevate your productivity and entertainment.",
            },
            {
                id: 6,
                name: "Apple MacBook Pro",
                category: "Laptop",
                rating: 4.5,
                price: 129900,
                image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202206?wid=640&hei=595&fmt=jpeg&qlt=95&.v=1664497359481",
                description:
                    "The Apple MacBook Pro is a powerful laptop that offers unparalleled performance, stunning Retina display, and advanced features. Experience the next level of creativity and productivity.",
            },
            {
                id: 7,
                name: "Sony WH-1000XM4",
                category: "Headphones",
                rating: 4.9,
                price: 29990,
                image: "https://m.media-amazon.com/images/I/21pGfX7r8oL._SY300_SX300_QL70_FMwebp_.jpg",
                description:
                    "The Sony WH-1000XM4 is a premium wireless headphone that delivers exceptional sound quality, advanced noise cancellation, and long-lasting battery life. Immerse yourself in music like never before.",
            },
            {
                id: 8,
                name: "Bose QuietComfort 35 II",
                category: "Headphones",
                rating: 4.8,
                price: 29363,
                image: "https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc35_ii/product_silo_images/qc35_ii_black_EC_hero.png/jcr:content/renditions/cq5dam.web.1280.1280.png",
                description:
                    "The Bose QuietComfort 35 II is a premium noise-canceling headphone that offers exceptional audio performance, comfort, and long-lasting battery life. Enjoy your music with immersive sound.",
            },
        ],
        cartItems: [],
    },

    mutations: {
        addToCart(state, product) {
            state.cartItems.push(product);
        },

        addProductQuantity(state, index) {
            state.cartItems[index].quantity++;
        },

        removeFromCart(state, product) {
            const index = state.cartItems.findIndex((item) => item.id === product.id);

            if (index !== -1) {
                state.cartItems.splice(index, 1);
            }
        },
    },

    actions: {
        addToCart({ state, commit }, product) {
            const index = state.cartItems.findIndex((item) => item.id === product.id);

            if (index !== -1) {
                commit("addProductQuantity", index);
            } else {
                const cartProduct = {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: 1,
                };

                commit("addToCart", cartProduct);
            }
        },

        removeFromCart({ commit }, product) {
            commit("removeFromCart", product);
        },
    },

    getters: {

    },
});

export default store;
