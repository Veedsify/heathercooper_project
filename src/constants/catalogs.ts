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
               "image": '/images/thumbs/wine.png',
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
               "id": "cosmetics",
               "show_on_product": true,
               "name": "Cosmetics",
               "image": '/images/thumbs/cosmetics.png',
               "coverImage": '/images/product_categories/cosmetics.jpg',
               "products": [

               ]
          }, {
               "id": "pharmaceuticals",
               "show_on_product": true,
               "name": "Pharmaceuticals",
               "image": '/images/thumbs/pills.png',
               "coverImage": '/images/product_categories/pharma.jpg',
               "products": [

               ]
          }, {
               "id": "food",
               "show_on_product": true,
               "name": "Food",
               "image": '/images/thumbs/food.png',
               "coverImage": '/images/product_categories/food.jpg',
               "products": [
                    {
                         id: "stairs",
                         name: "Chianjays Cake",
                         price: 10.99,
                         description: "",
                         image: "/images/products/ChianjaysCake.jpeg"
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
                         id: "stairs",
                         // name: "Capri Sun",
                         price: 10.99,
                         description: "",
                         image: "/images/real_estate/stairs.jpeg"
                    },
               ]
          }, {
               "id": "wine",
               "show_on_product": true,
               "name": "Wine",
               "image": '/images/thumbs/wine.png',
               "coverImage": '/images/product_categories/wine.webp',
               "products": [

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