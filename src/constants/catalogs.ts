type CatalogsType = {
     categories: {
          id: string;
          name: string;
          image: string;
          coverImage: string;
          subcategories: {
               id: string;
               name: string;
               countries: {
                    id: string;
                    name: string;
                    products: {
                         id: string;
                         name: string;
                         price: number;
                         description: string;
                         image: string;
                    }[]
               }[]
          }[]
     }[]
}


export const catalogs : CatalogsType = {
     "categories": [
          {
               "id": "beverages",
               "name": "Beverages",
               "image": '/images/thumbs/wine.png',
               "coverImage" : '/product_categories/beverages.jpg',
               "subcategories": [
                    {
                         "id": "bev-red-wine",
                         "name": "Red Wine",
                         "countries": [
                              {
                                   "id": "country-fra",
                                   "name": "France",
                                   "products": [
                                        {
                                             "id": "wine-123",
                                             "name": "Château Margaux 2015",
                                             "price": 999.99,
                                             "description": "A premium Bordeaux with rich flavors of dark fruits and elegant tannins",
                                             "image": "/images/chateau-margaux-2015.jpg"
                                        }
                                   ]
                              },
                              {
                                   "id": "country-ita",
                                   "name": "Italy",
                                   "products": [
                                        {
                                             "id": "wine-456",
                                             "name": "Barolo Riserva 2018",
                                             "price": 199.99,
                                             "description": "A full-bodied Nebbiolo with notes of tar and roses",
                                             "image": "/images/barolo-riserva-2018.jpg"
                                        }
                                   ]
                              }
                         ]
                    },
                    {
                         "id": "bev-tea",
                         "name": "Tea",
                         "countries": []
                    }
               ]
          },
          {
               "id": "cosmetics",
               "name": "Cosmetics",
               "image": '/images/thumbs/cosmetics.png',
               "coverImage" : '/product_categories/cosmetics.jpg',
               "subcategories": []
          },{
               "id": "food",
               "name": "Food",
               "image": '/images/thumbs/food.png',
               "coverImage" : '/food-cover.jpg',
               "subcategories": []
          },{
               "id": "pharmaceuticals",
               "name": "Pharmaceuticals",
               "image": '/images/thumbs/pills.png',
               "coverImage" : '/product_categories/pharma.jpg',
               "subcategories": []
          },{
               "id": "realestate",
               "name": "Real Estate",
               "image": '/images/thumbs/house.png',
               "coverImage" : '/realestate-cover.jpg',
               "subcategories": []
          }
     ]
}