import CareerJobs from "../components/main/career-jobs"
import CareerPerks from "../components/main/career-perks"
import CareerQoute from "../components/main/career-qoute"
import NavWithContent from "../components/main/navwithcontent"

const Careers = () => {
     return (
          <>
               <NavWithContent
                    title="Careers"
                    image="/images/backgrounds/buildings.jpg"
               />
               <section className="pt-10">
                    <CareerQoute />
                    <CareerPerks />
                    <CareerJobs />
               </section>
          </>
     )
}

export default Careers