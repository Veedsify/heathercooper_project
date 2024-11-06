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
            <section className="pt-10">
                <AboutContent
                    title="Our Vission"
                    content="To become the largest producers and distributors of quality consumer products in the World."
                />
                <AboutContent
                    title="Our Mission"
                    content="Building healthier Communities by providing affordable and quality products and services"
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
                <AboutPortfolio />
                <AboutManagement 
                    title="Management Team"
                    teams={managementTeam}
                />
                <AboutManagement 
                    title="Marketing Team"
                    teams={marketingTeam}
                />
            </section>
        </>
    );
}
export default About;