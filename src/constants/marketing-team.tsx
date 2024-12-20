
export type MarketingTeamType = {
     id: string;
     name: string;
     position: string;
     imageHidden: boolean;
     image: string;
     phone: string;
     address: string;
}

export const marketingTeam: MarketingTeamType[] = [
     {
          "id": "marketing-1",
          "name": "Mr Sunday E. Nwenearizi",
          "position": "Head Marketer Nationwide ",
          "imageHidden": true,
          "image": "/images/marketing/placeholder.jpg",
          "phone": "08099788203, 08058701038",
          "address": "Okearin Lagos Island"
     },
     {
          "id": "marketing-2",
          "name": "Mrs Egwuonwu Peace Erochukwu",
          "position": "Marketer, Ajah Lagos branch",
          "imageHidden": true,
          "image": "/images/marketing/placeholder.jpg",
          "phone": "08033220623, 08081636970",
          "address": " Ajah Lekki Epe expressway market"
     },{
          "id": "marketing-3",
          "name": "Mr Ochi Charles Onah",
          "position": "Online Marketer",
          "imageHidden": true,
          "image": "/images/marketing/placeholder.jpg",
          "phone": "09038309381, 08036042771",
          "address": "Ice Investment, Lagos"
     },
     {
          "id": "marketing-3",
          "name": "Egwuonwu Ijeoma Juliet",
          "position": "Marketer Abuja branch",
          "imageHidden": true,
          "image": "/images/marketing/placeholder.jpg",
          "phone": "07062440070",
          "address": "Shop 24, Block B16, Usman Halilu Street, Garki Model market Abuja"
     }
]
