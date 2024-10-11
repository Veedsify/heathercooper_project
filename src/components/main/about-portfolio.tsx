import { Link } from "react-router-dom";
import { catalogs } from "../../constants/catalogs";

const AboutPortfolio = () => {

    return (
        <>
            <div className="pt-20 p-2 pb-10">
                <div className="container mx-auto">
                    <h3 className="text-xl font-bold mb-4 uppercase">
                        Our Portfolio
                    </h3>
                    <div className="flex items-center justify-evenly md:justify-between flex-wrap gap-4">
                        {catalogs.categories.map((category, index) => (
                            <div className="flex flex-col gap-2 items-center" key={index}>
                                <Link to={`/product/${category.id}`} className="block text-center">
                                    <img src={category.image} alt={"Portfolio"} className="w-20 h-20 mx-auto aspect-square object-cover block mb-2" />
                                    <h3 className="font-semibold text-center">
                                        {category.name}
                                    </h3>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )

}
export default AboutPortfolio;