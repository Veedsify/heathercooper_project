type CatalogsType = {
     categories: {
          id: string;
          name: string;
          show_on_product: boolean;
          image: string;
          coverImage: string;
          products?: {
               id: string;
               name?: string;
               price: number;
               description: string;
               image: string;
          }[]
          // subcategories: {
          //      id: string;
          //      name: string;
          //      countries?: {
          //           id: string;
          //           name: string;
          //           products: {
          //                id: string;
          //                name: string;
          //                price: number;
          //                description: string;
          //                image: string;
          //           }[]
          //      }[];
          //      products?: {
          //           id: string;
          //           name: string;
          //           price: number;
          //           description: string;
          //           image: string;
          //      }[]
          // }[]
     }[]
}


export const catalogs: CatalogsType = {
     "categories": [
          {
               "id": "beverages",
               "show_on_product": true,
               "name": "Beverages",
               "image": '/images/thumbs/beverages.png',
               "coverImage": '/images/product_categories/beverages.jpg',
               "products": [
                    {
                         id: "capri-sun",
                         name: "Capri Sun",
                         price: 10.99,
                         description: "",
                         image: "/images/products/caprisun.jpg"
                    },
                    {
                         id: "chi-exotic",
                         name: "Chivita Exotic",
                         price: 10.99,
                         description: "",
                         image: "/images/products/chiexotic.jpg"
                    },
                    {
                         id: "chi-vita",
                         name: "Chivita",
                         price: 10.99,
                         description: "",
                         image: "/images/products/chivita.jpg"
                    },
                    {
                         id: "hollandia",
                         name: "Hollandia",
                         price: 10.99,
                         description: "",
                         image: "/images/products/hollandia.jpg"
                    },
               ]

          },
          {
               "id": "food",
               "show_on_product": true,
               "name": "Food",
               "image": '/images/thumbs/food.jpg',
               "coverImage": '/images/product_categories/food_cover.jpg',
               "products": [
                    {
                         id: "stairs",
                         name: "Chianjays Cake",
                         price: 10.99,
                         description: "",
                         image: "/images/products/ChianjaysCake.jpeg"
                    },
                    {
                         id: "titus",
                         name: "Titus",
                         price: 10.99,
                         description: "",
                         image: "/images/products/Titus.jpg"
                    },
                    {
                         id: "penny",
                         name: "Golden Penny",
                         price: 10.99,
                         description: "",
                         image: "/images/products/GoldenPenny.jpg"
                    },
                    {
                         id: "oats",
                         name: "Quaker Oats",
                         price: 10.99,
                         description: "",
                         image: "/images/products/QuakerOats.jpg"
                    },

               ]
          }, {
               "id": "realestate",
               "show_on_product": true,
               "name": "Real Estate",
               "image": '/images/thumbs/house.png',
               "coverImage": '/images/real_estate/house.jpeg',
               "products": [
                    {
                         id: "house",
                         // name: "Capri Sun",
                         price: 10.99,
                         description: "",
                         image: "/images/real_estate/house.jpeg"
                    }, {
                         id: "house1",
                         // name: "Capri Sun",
                         price: 10.99,
                         description: "",
                         image: "/images/real_estate/house1.jpg"
                    }, {

                         id: "building",
                         // name: "Capri Sun",
                         price: 10.99,
                         description: "",
                         image: "/images/real_estate/building.jpeg"
                    },
                    {
                         id: "chandalier",
                         // name: "Capri Sun",
                         price: 10.99,
                         description: "",
                         image: "/images/real_estate/chandalier.jpeg"
                    },
                    {
                         id: "house2",
                         // name: "Capri Sun",
                         price: 10.99,
                         description: "",
                         image: "/images/real_estate/house2.jpg"
                    },
                    {
                         id: "house3",
                         // name: "Capri Sun",
                         price: 10.99,
                         description: "",
                         image: "/images/real_estate/house3.jpg"
                    },
                    {
                         id: "stairs",
                         // name: "Capri Sun",
                         price: 10.99,
                         description: "",
                         image: "/images/real_estate/stairs.jpeg"
                    },
                    {
                         id: "house5",
                         // name: "Capri Sun",
                         price: 10.99,
                         description: "",
                         image: "/images/real_estate/house5.jpeg"
                    }, {
                         id: "house6",
                         // name: "Capri Sun",
                         price: 10.99,
                         description: "",
                         image: "/images/real_estate/house6.jpeg"
                    }, {
                         id: "house7",
                         // name: "Capri Sun",
                         price: 10.99,
                         description: "",
                         image: "/images/real_estate/house7.jpeg"
                    }, {
                         id: "house8",
                         // name: "Capri Sun",
                         price: 10.99,
                         description: "",
                         image: "/images/real_estate/house8.jpeg"
                    }, {
                         id: "house9",
                         // name: "Capri Sun",
                         price: 10.99,
                         description: "",
                         image: "/images/real_estate/house9.jpeg"
                    }, {
                         id: "house10",
                         // name: "Capri Sun",
                         price: 10.99,
                         description: "",
                         image: "/images/real_estate/house10.jpeg"
                    }, {
                         id: "house11",
                         // name: "Capri Sun",
                         price: 10.99,
                         description: "",
                         image: "/images/real_estate/house11.jpeg"
                    }
               ]
          }, {
               "id": "wine",
               "show_on_product": true,
               "name": "Wine",
               "image": '/images/thumbs/wine.png',
               "coverImage": '/images/product_categories/wine.webp',
               "products": [

                    {
                         id: "wine1",
                         // name: "Capri Sun",
                         price: 10.99,
                         description: "",
                         image: "/images/products/wine1.jpg"
                    },
                    {
                         id: "wine2",
                         // name: "Capri Sun",
                         price: 10.99,
                         description: "",
                         image: "/images/products/wine2.jpg"
                    },
                    {
                         id: "wine3",
                         // name: "Capri Sun",
                         price: 10.99,
                         description: "",
                         image: "/images/products/wine3.jpg"
                    },
                    {
                         id: "wine4",
                         // name: "Capri Sun",
                         price: 10.99,
                         description: "",
                         image: "/images/products/wine4.jpg"
                    },

               ]
          },
          {
               "id": "sports",
               "show_on_product": false,
               "name": "Sports",
               "image": '/images/thumbs/sports.png',
               "coverImage": '/realestate-cover.jpg',
               "products": [

               ]
          }
     ]
}