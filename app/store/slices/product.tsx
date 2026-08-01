import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
// import { products } from "../../lib/constant";
// import axios from 'axios';
import image1 from '../../assets/1.png'
import replacingimage1 from '../../assets/Image1.png'
import replacingimage2 from '../../assets/Image2.png'
import replacingimage3 from '../../assets/Image3.png'
import replacingimage4 from '../../assets/Image4.png'
import replacingimage5 from '../../assets/Image5.png'
import replacingimage6 from '../../assets/Image6.png'
import replacingimage7 from '../../assets/Image7.png'
import replacingimage8 from '../../assets/Image8.png'
import replacingimage9 from '../../assets/Image9.png'
import replacingimage10 from '../../assets/Image10.png'
import replacingimage11 from '../../assets/Image11.png'
import image2 from '../../assets/2.png'
import image3 from '../../assets/3.png'
import image4 from '../../assets/4.png'
import image5 from '../../assets/5.png'
import image6 from '../../assets/6.png'
import image7 from '../../assets/7.png'
import image8 from '../../assets/8.png'
import image9 from '../../assets/9.png'
import image10 from '../../assets/10.png'
import image11 from '../../assets/11.png'
// const BASE_URL = import.meta.env.VITE_BASE_URL;


// export const fetchProducts = createAsyncThunk(
//     "products/fetchProducts",
//     async () => {
//         try {
            
//             const response = await axios.get(`${BASE_URL}/products/`);
            
//             return response.data;

//         } catch (error) {
//             console.error('Error fetching products:', error);

//             return error.data.message;
//         }
//     }
// );
// export const updateProduct = createAsyncThunk(
//     "products/updateProduct",
//     async (updatedProduct) => {
//         try {
//             console.log('Updating product:', updatedProduct._id);

//             const response = await axios.put(`${BASE_URL}/products/update/${updatedProduct._id}`, updatedProduct, {
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             });
//             console.log('Product updated successfully:', response.data);
//             return response.data;
//         } catch (error) {
//             console.error('Error updating product:', error);
//             return error.data.message;
//         }
//     });
// export const deleteProduct = createAsyncThunk(
//     "products/deleteProduct",
//     async (productId) => {
//         try {
//             console.log('Deleting product with ID:', productId);
//             const response = await axios.delete(`${BASE_URL}/products/delete/${productId}`);
//             console.log('Response from API for deleteProduct:', response);
//             return productId;
//         } catch (error) {
//             console.error('Error deleting product:', error);
//             return error.data.message;
//         }
//     });
// export const createProduct = createAsyncThunk(
//     "products/createProduct",
//     async (newProduct) => {
//         try {
//             console.log('Creating product:', newProduct);
//             const response = await axios.post(`${BASE_URL}/products/create`, newProduct, {
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             });
//             products.push(newProduct);
//             console.log('Product created successfully:', response.data);
//             return response.data;
//         } catch (error) {
//             console.error('Error creating product:', error);
//             return error.data.message;
//         }
//     }
// );
export const ProductSlice = createSlice({
    name: "products",
    initialState: {
        Products:  [
        {
            id: 1,
            name: 'Obsession for Men Calvin Klein',
            description: 'Obsession for Men by Calvin Klein is a Oriental Woody fragrance for men. Obsession for Men was launched in 1986. The nose behind this fragrance is Robert Slattery. Top notes are Cinnamon, Lavender, Coriander, Mandarin Orange, Lime, Bergamot and Grapefruit; middle notes are Myrhh, Nutmeg, Carnation, Brazilian Rosewood, Pine Tree, Sage, Jasmine and Red Berries; base notes are Amber, Vanilla, Sandalwood, Musk, Patchouli and Vetiver.',
            image: image1,
            replacingimage: replacingimage1,
            price: 5920,
            Rating: 4,
            Category: 'gift-box',
        },
        {
            id: 2,
            name: 'Kayali Yum Pistachio Gelato',
            description: 'Yum Pistachio Gelato | 33 Eau de Parfum is a delicious explosion of irresistible and edible notes including pistachio, voluptuous whipped cream, roasted hazelnut, sweet rum, fluffy marshmallow, and fizzy cotton candy. A truly yummy fragrance that charms with an unforgettably intense, gourmand scent trail that will have you smelling good enough to eat.',
            image: image2,
            price: 8397,
            Rating: 3,
            replacingimage: replacingimage2,
           Category: 'gift-box',
        },
        {
            id: 3,
            name: 'Cherry Delight Flavia',
            description: 'Cherry Delight by Flavia is a fragrance for women and men. Cherry Delight was launched in 2024. Top notes are Cherry and Bitter Almond; middle notes are Sour Cherry, Plum, Rose and Jasmine; base notes are Vanilla, Sandal, Tonka, Cedar and Patchouli.',
            image: image3,
            price: 11197,
            Rating: 5,
            replacingimage: replacingimage3,
             Category: 'best-sellings'
        },
        {
            id: 4,
            name: 'Orientica Azure Fantasy',
            description: 'Como gotas de lluvia que atraviesan la niebla que envuelve la tierra, salpicando con alegría, Exclusive Azure Fantasy se apresura a envolverte con la fragancia que da vida a tus sueños turquesas. Refrescantes ráfagas de jengibre, menta, bergamota y nuez moscada te sumergen lentamente en la alegría mientras el geranio y el jazmín elevan aún más tu espíritu hacia el crescendo creado por el ámbar gris, el almizcle y la madera de gaiac. Una experiencia nunca antes vista te espera en el momento en que tengas en tus manos esta obra maestra. Elimina tu tristeza con Exclusive Azure Fantasy.',
            image: image4,
            price: 1399,
            replacingimage: replacingimage4,
            Rating: 4,
             Category: 'best-sellings'
        },
        {
            id: 5,
            name: 'Aventus Creed',
            description: 'Aventus by Creed is a fragrance for men and women. This is a new fragrance. Aventus was launched in 2025. The nose behind this fragrance is Olivier Creed. Top notes are Bergamot, Black Currant, Apple and Pineapple; middle notes are Birch, Patchouli, Rose and Jasmine; base notes are Musk, Oakmoss, Ambergris and Vanilla.',
            image: image5,
            price: 7970,
            Rating: 5,
            replacingimage: replacingimage5,
             Category: 'best-sellings'
        },
        {
            id: 6,
            name: 'Dior Sauvage Parfum',
            description: 'Dior Sauvage Parfum 100ml is one of the most iconic Amber Fougère fragrances for men, known for its bold, wild character and exceptional longevity. Its a signature scent choice for those who want a powerful, confident presence. This is the description for Product 6.',
            image: image6,
            price: 1597,
            Rating: 4,
            replacingimage: replacingimage6,
            Category: 'tester-pack'
        },
        {
            id: 7,
            name: 'Molten Caramel by Paris Corner',
            description: 'Molten Caramel by Paris Corner– an olfactory indulgence that melts away inhibitions and drapes the skin in a veil of decadent sweetness. This is the ultimate dessert of perfumery – luxurious, opulent, irresistible – and most importantly, calorie-free. It doesn’t add inches, it adds allure.',
            image: image7,
            price: 3976,
            Rating: 4,
            replacingimage: replacingimage7,
             Category: 'tester-pack'
        },
        {
            id: 8,
            name: 'Matcha Cloud Perfume by Aroma Essence',
            description: 'A perfume by Mochiglow for women, released in 2023. The scent is gourmand-sweet. It is still in production. The perfume is vegan according to the manufacturer.',
            image: image8,
            price: 25120,
            Rating: 5,
            replacingimage: replacingimage8,
              Category: 'tester-pack'
        },
        {
            id: 9,
            name: 'Eternal Vanille Lattafa Perfumes',
            description: 'Eternal Vanille by Lattafa Perfumes is a fragrance for women and men. This is a new fragrance. Eternal Vanille was launched in 2025. The nose behind this fragrance is Jordi Fernández. Top note is Blackberry; middle notes are Cocoapulse™, Vanilla Caviar and Cacao; base notes are Akigalawood, Tonka Bean, Ambrofix™, Benzoin, Cedarwood and Musk.',
            image: image9,
            price: 2720,
            Rating: 3,
            replacingimage: replacingimage9,
            Category: 'attar'
        },
        {
            id: 10,
            name: 'Milky Way MAISON ASRAR',
            description: 'Milky Way by MAISON ASRAR is a Oriental Vanilla fragrance for women and men. This is a new fragrance. Milky Way was launched in 2025. Top notes are Milk, Plum and Caramel; middle notes are Cashmere Wood, Orris, Jasmine and Ylang Ylang; base notes are Sandalwood, Vanilla and Tonka.',
            image: image10,
            price: 30797,
            Rating: 4,
            replacingimage: replacingimage10,
            Category: 'attar'
        },
        {
            id: 11,
            name: 'Light Blue By Dolce & Gabbana',
            description: 'Light Blue by Dolce & Gabbana, Light Blue is a manly scent for enterprising and sophisticated males looking to round out their style and presence with urbane charm. Musk wood, incense, and oak moss provide the base for this aroma. Strength and suave are carried through to the middle tones of Szechuan pepper, rosemary, and rosewood. These tantalizing hints of masculinity all act to support the front notes of unique citrus, bergamot, and juniper. Woodsy yet clean, this aroma gives those experiencing it a primal sense of confidence.',
            image: image11,
            price: 33597,
            Rating: 5,
            replacingimage: replacingimage11,
            Category: 'best-sellings'
        },
    ],
        Filters: [],
        status: "idle",
        error: null,
    },
    reducers: {
        // fetchProductsLocally: (state) => {
        //     state.status = "loading";
        //     const localProducts = localStorage.getItem('products');
            
        //     if (localProducts) {
        //         state.Products = JSON.parse(localProducts);               
        //     }
        //     state.status = "succeeded";
        // },
        // setFilters: (state, action) => {
        //     if (action.payload.type === 'Condition') {

        //         const existingConditionFilterIndex = state.Filters.findIndex(filter => filter.type === 'Condition');

        //         if (existingConditionFilterIndex !== -1) {
        //             if (action.payload.value === 'Any') {
        //                 state.Filters.splice(existingConditionFilterIndex);
        //             }
        //             else {
        //                 state.Filters[existingConditionFilterIndex].value = action.payload.value;
        //             }
        //         }
        //         else {
        //             state.Filters.push({ type: action.payload.type, value: action.payload.value });
        //         }
        //     }
        //     if (action.payload.type === 'Brands') {
        //         console.log('Brand filter payload:', action.payload);
        //         const existingBrandFilterIndex = state.Filters.findIndex(filter => filter.type === 'Brands');
        //         if (existingBrandFilterIndex !== -1) {
        //             if (action.payload.checked === false) {
        //                 state.Filters[existingBrandFilterIndex].value =
        //                     state.Filters[existingBrandFilterIndex].value.filter(brand => brand !== action.payload.value);
        //                 if (state.Filters[existingBrandFilterIndex].value.length === 0) {
        //                     state.Filters.splice(existingBrandFilterIndex, 1);
        //                 }
        //             }
        //             else {
        //                 state.Filters[existingBrandFilterIndex].value = [...state.Filters[existingBrandFilterIndex].value, action.payload.value];
        //             }
        //         }
        //         else {
        //             state.Filters.push({ type: action.payload.type, value: [action.payload.value] });
        //         }
        //     }
        //     if (action.payload.type === 'Features') {
        //         const existingFeatureFilterIndex = state.Filters.findIndex(filter => filter.type === 'Features');
        //         if (existingFeatureFilterIndex !== -1) {
        //             if (action.payload.checked === false) {
        //                 state.Filters[existingFeatureFilterIndex].value =
        //                     state.Filters[existingFeatureFilterIndex].value.filter(feature => feature !== action.payload.value);
        //                 if (state.Filters[existingFeatureFilterIndex].value.length === 0) {
        //                     state.Filters.splice(existingFeatureFilterIndex, 1);
        //                 }
        //             }
        //             else {
        //                 state.Filters[existingFeatureFilterIndex].value = [...state.Filters[existingFeatureFilterIndex].value, action.payload.value];
        //             }
        //         }
        //         else {
        //             state.Filters.push({ type: action.payload.type, value: [action.payload.value] });
        //         }
        //     }
        //     if (action.payload.type === 'Rating') {
        //         console.log('Rating filter payload:', action.payload);
        //         const existingBrandFilterIndex = state.Filters.findIndex(filter => filter.type === 'Rating');
        //         if (existingBrandFilterIndex !== -1) {
        //             if (action.payload.checked === false) {
        //                 state.Filters[existingBrandFilterIndex].value =
        //                     state.Filters[existingBrandFilterIndex].value.filter(brand => brand !== action.payload.value);
        //                 if (state.Filters[existingBrandFilterIndex].value.length === 0) {
        //                     state.Filters.splice(existingBrandFilterIndex, 1);
        //                 }
        //             }
        //             else {
        //                 state.Filters[existingBrandFilterIndex].value = [...state.Filters[existingBrandFilterIndex].value, action.payload.value];
        //             }
        //         }
        //         else {
        //             state.Filters.push({ type: action.payload.type, value: [action.payload.value] });
        //         }
        //     }

        // },
        // clearFilters: (state) => {
        //     state.Filters = [];
        // },
        // addSelectedProduct: (state, action) => {
        //     const selectedProduct = action.payload;
        //     const res = state.Products.find(product => product.uid === selectedProduct.uid);
        //     state.SelectedProduct = res;
        // }
    },
    extraReducers: (builder) => {
        // builder.addCase(fetchProducts.pending, (state) => {
        //     state.status = "loading";
        // });
        // builder.addCase(fetchProducts.fulfilled, (state, action) => {
        //     state.status = "succeeded";
        //     localStorage.setItem('products', JSON.stringify(action.payload));
        //     state.Products = action.payload;
           
        // });
        // builder.addCase(fetchProducts.rejected, (state, action) => {
        //     state.status = "failed";
        //     state.error = action.error.message;
        // });
        
        // builder.addCase(createProduct.fulfilled, (state, action) => {
        //     localStorage.setItem('products', JSON.stringify([action.payload, ...state.Products]));
        //     state.Products.unshift(action.payload);
        // });
        // builder.addCase(deleteProduct.fulfilled, (state, action) => {
        //     console.log('Product deleted with ID:', action.payload);
        //     state.Products = state.Products.filter(product => product._id !== action.payload);

        // });
        // builder.addCase(deleteProduct.rejected, (state, action) => {
        //     console.error('Error deleting product:', action.error.message);
        //     state.error = action.error.message;
        // });

    }
});

export const {
    //  setFilters, 
    //  clearFilters, 
    //  addSelectedProduct, 
    //  fetchProductsLocally 
    } = ProductSlice.actions;