import { Link } from "react-router-dom";
import { catalogs } from "../../constants/catalogs";

const ProductComponents = () => {
  return (
    <section className="pt-20 p-2 pb-10">
      <div className="max-w-screen-lg lg:max-w-screen-xl mx-auto">
        <div className="pb-6">
          <form action="">
            <input
              type="search"
              className="p-3 placeholder:text-gray-400 text-sm leading-relaxed border-gray-700 focus-visible:outline-amber-500 focus-visible:border-[#ea6768] border block w-full"
              placeholder="Search For A Product"
            />
          </form>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {catalogs.categories.map((category, index) => {
            if (category.show_on_product === false) return null;
            return (
              <>
                <div
                  className={`grid gap-4 ${
                    index === 1
                      ? "md:col-span-2"
                      : index === 2
                      ? "md:col-span-1"
                      : "md:col-span-full"
                  }`}
                >
                  <div className="group relative">
                    <img
                      className="h-auto w-full rounded-lg max-h-[400px] object-cover object-top"
                      src={category.coverImage}
                      alt=""
                    />
                    <Link
                      to={`/product/${category.id}`}
                      className={
                        "absolute inset-0 top-0 bottom-0 w-full duration-200 ease-in-out h-full bg-black bg-opacity-40 flex items-center justify-center opacity-100 group-hover:opacity-0 md:backdrop-blur-[2px]"
                      }
                    >
                      <span className="font-medium text-white text-2xl md:text-4xl uppercase tracking-wider hover:text-[#ea6768] ">
                        {category.name}
                      </span>
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductComponents;
