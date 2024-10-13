const CsrComponent = () => {
     return (
          <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12 py-20">
               <CsrCard
                    image="/images/csr/kids-care.jpg"
                    title="Ice Investment Care"
                    content="Ice Investment Care acknowledges the increasing level of challenges in the nation and its annual initiative provides assistance that connects to the needs of the less privileged and vulnerable children."
               />
               <CsrCard
                    image="/images/csr/food.jpg"
                    title="Ice Food Court"
                    content="We work assiduously to end hunger by providing food donations to institutions, homes for vulnerable persons and the less fortunate. Some charities we support include: Hearts of Gold Children Hospice, Modupe Cole Memorial Child Care & Treatment Home School, SOS Children’s Villages Nigeria and SO-Said Charity Home for Vulnerable persons."
               />
               <CsrCard
                    image="/images/csr/community.jpg"
                    title="Strengthening Communities"
                    content="Our company actively assists victims of natural disasters. We contributed aid to casualties affected by the Ikeja bomb blast and flood victims in the past, and look to continue to strengthen the community by helping when such calamities occur."
               />
          </div>
     );
}

type CsrCardProps = {
     image: string;
     title: string;
     content: string;
}

function CsrCard({ image, title, content }: CsrCardProps) {
     return (
          <div className="p-2">
               <h3 className="md:text-2xl text-lg mb-3">
                    {title}
               </h3>
               <img src={image} alt="" className="mb-6 block object-cover aspect-video" />
               <p className="text-sm leading-loose block">
                    {content}
               </p>
          </div>
     );
}


export default CsrComponent;