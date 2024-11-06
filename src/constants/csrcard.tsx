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
          content: "We work assiduously to end hunger by providing food donations to institutions, homes for vulnerable persons and the less fortunate. Some charities we support include: Hearts of Gold Children Hospice, Modupe Cole Memorial Child Care & Treatment Home School, SOS Children's Villages Nigeria and SO-Said Charity Home for Vulnerable persons."
     },
     {
          id: 3,
          csr_id: "community",
          image: "/images/csr/community.jpg",
          title: "Strengthening Communities",
          link: "/csr/community",
          content: "Our company actively assists victims of natural disasters. We contributed aid to casualties affected by the Ikeja bomb blast and flood victims in the past, and look to continue to strengthen the community by helping when such calamities occur.",
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