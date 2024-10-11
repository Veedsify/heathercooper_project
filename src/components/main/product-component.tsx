import { Link } from "react-router-dom";
import { catalogs } from "../../constants/catalogs";

const ProductComponents = () => {
    return (
        <section className="pt-20 p-2 pb-10">
            <div className="max-w-screen-lg lg:max-w-screen-xl mx-auto">
                <div className="pb-6">
                    <form action="">
                        <input type="search"
                            className="p-3 placeholder:text-gray-400 text-sm leading-relaxed border-gray-700 focus-visible:outline-amber-500 focus-visible:border-amber-500 border block w-full"
                            placeholder="Search For A Product" />
                    </form>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {catalogs.categories.map((category, index) => {
                        if (category.subcategories.length > 0) {
                            return (
                                <>
                                    <div className={`grid gap-4 ${index === 1 ? "col-span-2" : index === 2 ? "col-span-1" : "col-span-full"}`}>
                                        <div className="group relative">
                                            <img className="h-auto w-full rounded-lg" src="/images/product_categories/beverages.jpg"
                                                alt="" />
                                            <Link to={`/product/${category.id}`}
                                                className={"absolute inset-0 top-0 bottom-0 w-full duration-300 h-full bg-black bg-opacity-30 flex items-center justify-center opacity-100 group-hover:opacity-0 md:backdrop-blur-sm"}>
                                                <span
                                                    className="font-bont text-white text-2xl md:text-4xl uppercase tracking-wider hover:text-amber-500 "
                                                >
                                                    {category.name}
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    })}
                </div>
            </div>
        </section>
    );
}

export default ProductComponents;