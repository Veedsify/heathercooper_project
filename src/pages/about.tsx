import AboutContent from "../components/main/about-content";
import AboutValues from "../components/main/about-values";
import NavWithContent from "../components/main/navwithcontent";
import AboutPortfolio from "../components/main/about-portfolio.tsx";
import AboutManagement from "../components/main/about-management.tsx";
import { Helmet } from "react-helmet";
import { managementTeam } from "../constants/management-team.tsx";
import { marketingTeam } from "../constants/marketing-team.tsx";

const About = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    About Us | Ice Investment Nig Ltd
                </title>
            </Helmet>
            <NavWithContent
                title="About Us"
                image="/images/backgrounds/buildings.jpg"
            />
            <section className="pt-10 lg:flex items-center justify-center">
                <AboutContent
                    title="Our Vission"
                    content="Our goal is to become one of the world's top distributors of supermarket goods."
                />
                <AboutContent
                    title="Our Mission"
                    content="Creating healthier communities through the provision of high-quality, reasonably priced goods and services."
                />


                <AboutValues
                    title="Core Values"
                    content={[
                        'Integrity',
                        'Respect',
                        'Quality',
                        'Team work',
                        'Innovation',
                        'Commitment'
                    ]}
                    />

            </section>
                <AboutPortfolio />
                <AboutManagement
                    title="Management Team"
                    teams={managementTeam}
                />
                <AboutManagement
                    title="Marketing Team"
                    teams={marketingTeam}
                />
        </>
    );
}
export default About;