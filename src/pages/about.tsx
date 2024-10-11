import AboutContent from "../components/main/about-content";
import AboutValues from "../components/main/about-values";
import NavWithContent from "../components/main/navwithcontent";
import AboutPortfolio from "../components/main/about-portfolio.tsx";
import AboutManagement from "../components/main/about-management.tsx";

const About = () => {
    return (
        <>
            <NavWithContent
                title="About Us"
                image="/images/backgrounds/buildings.jpg"
            />
            <section className="pt-10">
                <AboutContent
                    title="Our Vission"
                    content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus velit, qui accusantium, nulla quisquam, distinctio nemo unde debitis quam nobis enim expedita facere voluptatum ad repellat. Unde, omnis molestiae. Repudiandae!"
                />
                <AboutContent
                    title="Our Mission"
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus velit, qui accusantium, nulla quisquam, distinctio nemo unde debitis quam nobis enim expedita facere voluptatum ad repellat. Unde, omnis molestiae. Repudiandae!"
                />
                <AboutValues
                    title="Our Values"
                    content={[
                        'Quality',
                        'Innovation',
                        'Integrity',
                        'Teamwork',
                    ]}
                />
                <AboutValues
                    title="Group Members"
                    content={[
                        'Quality',
                        'Innovation',
                        'Integrity',
                        'Teamwork',
                    ]}
                />
                <AboutPortfolio />
                <AboutManagement />
            </section>
        </>
    );
}
export default About;