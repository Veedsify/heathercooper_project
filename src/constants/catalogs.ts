type CatalogsType = {
     categories: {
          id: string;
          name: string;
          image: string;
          coverImage: string;
          products?: {
               id: string;
               name: string;
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
               "name": "Cosmetics",
               "image": '/images/thumbs/cosmetics.png',
               "coverImage": '/images/product_categories/cosmetics.jpg',
               "products": [
                    {
                         id: "hawaii-1",
                         name: "HAWAIIAN TROPIC",
                         price: 10.99,
                         description: "A tropical sunscreen with SPF 30",
                         image: "/images/products/hawaiian-tropic.jpg"
                    }
               ]
          }, {
               "id": "pharmaceuticals",
               "name": "Pharmaceuticals",
               "image": '/images/thumbs/pills.png',
               "coverImage": '/images/product_categories/pharma.jpg',
               "products": [
                    {
                         id: "hawaii-1",
                         name: "HAWAIIAN TROPIC",
                         price: 10.99,
                         description: "A tropical sunscreen with SPF 30",
                         image: "/images/products/hawaiian-tropic.jpg"
                    }
               ]
          }, {
               "id": "food",
               "name": "Food",
               "image": '/images/thumbs/food.png',
               "coverImage": '/images/product_categories/food.jpg',
               "products": [
                    {
                         id: "hawaii-1",
                         name: "HAWAIIAN TROPIC",
                         price: 10.99,
                         description: "A tropical sunscreen with SPF 30",
                         image: "/images/products/hawaiian-tropic.jpg"
                    }
               ]
          }, {
               "id": "realestate",
               "name": "Real Estate",
               "image": '/images/thumbs/house.png',
               "coverImage": '/realestate-cover.jpg',
               "products": [
                    {
                         id: "hawaii-1",
                         name: "HAWAIIAN TROPIC",
                         price: 10.99,
                         description: "A tropical sunscreen with SPF 30",
                         image: "/images/products/hawaiian-tropic.jpg"
                    }
               ]
          }, {
               "id": "wine",
               "name": "Wine",
               "image": '/images/thumbs/wine.png',
               "coverImage": '/realestate-cover.jpg',
               "products": [
                    {
                         id: "hawaii-1",
                         name: "HAWAIIAN TROPIC",
                         price: 10.99,
                         description: "A tropical sunscreen with SPF 30",
                         image: "/images/products/hawaiian-tropic.jpg"
                    }
               ]
          },
          {
               "id": "sports",
               "name": "Sports",
               "image": '/images/thumbs/sports.png',
               "coverImage": '/realestate-cover.jpg',
               "products": [
                    {
                         id: "hawaii-1",
                         name: "HAWAIIAN TROPIC",
                         price: 10.99,
                         description: "A tropical sunscreen with SPF 30",
                         image: "/images/products/hawaiian-tropic.jpg"
                    }
               ]
          }
     ]
}