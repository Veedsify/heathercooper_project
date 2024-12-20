type CSRCard = {
     id: number;
     csr_id?: string; // Optional since not all cards have it
     image: string;
     title: string;
     content: string;
     link?: string; // Optional since not all cards have it
     content_images?: string[]; // Optional since not all cards have it
}

export const csrCards: CSRCard[] = [
     {
          id: 1,
          image: "/images/csr/kids-care.jpg",
          title: "Ice Investment Care",
          content: "Ice Investment Care acknowledges the increasing level of challenges in the nation and its annual initiative provides assistance that connects to the needs of the less privileged and vulnerable children."
     },
     {
          id: 2,
          image: "/images/csr/food.jpg",
          title: "Ice Food Court",
          content: "By donating food to organisations and houses for the less fortunate and those in need, we diligently strive to eradicate hunger. SOS Children's Villages Nigeria, SO-Said Charity Home for Vulnerable Persons, and 6th Avenue Young Boys Football Academy are a few of the charities we support."
     },
     {
          id: 3,
          csr_id: "community",
          image: "/images/csr/community.jpg",
          title: "Strengthening Communities",
          link: "/csr/community",
          content: "Ice Investment is thriving in the sports industry and has sent a number of well-known young people to compete in different club leagues throughout the continent.",
          content_images: [
               "/images/csr/community.jpg",
               "/images/backgrounds/hero3.jpg",
               "/images/backgrounds/hero1.jpg",
               "/images/csr_details/csr1.jpg",
               "/images/csr_details/csr2.jpg",
               "/images/csr_details/csr3.jpg"
          ]
     }
]