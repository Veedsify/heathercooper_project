import { Helmet } from "react-helmet";
import NavWithContent from "../components/main/navwithcontent";

const Contact = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Us | Ice Investment Nig Ltd</title>
      </Helmet>
      <NavWithContent
        title="Contact Us"
        image="/images/backgrounds/buildings.jpg"
      />
      <section className="pt-10">
        <div className="container mx-auto p-2">
          <div className="md:flex gap-8">
            <div className="flex-1 bg-gray-100">
              <div className="mb-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7425357336856!2d3.4235361231203947!3d6.427114807644059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf5301583a83b%3A0xf3a83dc61b4dbf31!2s1401B%20Tiamiyu%20Savage%20St%2C%20Victoria%20Island%2C%20Lagos%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1731591799076!5m2!1sen!2sng"
                  style={{
                    height: "100%",
                    width: "100%",
                    aspectRatio: "4/3",
                    border: "0",
                  }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="p-1 md:p-8">
                <h2 className="font-semibold text-2xl mb-8 p-2">
                  Please send us a message
                </h2>
                <form className="p-2">
                  <div className="flex gap-5 mb-5">
                    <div className="flex-1">
                      <label className="block text-sm font-bold mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded"
                      />
                    </div>
                  </div>
                  <div className="flex gap-4 mb-5">
                    <div className="flex-1">
                      <label className="block text-sm font-bold mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full p-3 border border-gray-300 rounded"
                      />
                    </div>
                  </div>
                  <div className="mb-5">
                    <label className="block text-sm font-bold mb-2">
                      Message
                    </label>
                    <textarea
                      className="w-full p-2 border border-gray-300 rounded"
                      rows={5}
                    ></textarea>
                  </div>
                  <div>
                    <button className="bg-[#ea6768] text-sm font-medium text-white px-8 py-4">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex-1 py-10 md:py-2">
              <h2 className="font-bold text-2xl mb-8 p-2">OUR OFFICE</h2>
              <div className="p-2">
                <div className="flex gap-10 mb-10">
                  <div>
                    <h3 className="font-bold capitalize mb-2">Head Office</h3>
                    <p className="text-sm mb-5">
                    No 136 Happy Home Avenue Industrial
                    Layout,
                      <br />
                      Kirikiri Town, Apapa Lagos

                    </p>
                    <p className="text-sm mb-2">
                                                       <span className="font-bold">Phone:</span> 09059009948, +2349030001535
                                                  </p>
                    {/* <p className="text-sm">
                      <span className="font-bold">Email: </span>
                      <a href="mailto:example@mail.com">
                        iceinvestment2015@gmail.com
                      </a>
                    </p> */}
                  </div>
                  <div>
                    <h3 className="font-bold capitalize mb-2">Branch Office</h3>
                    <p className="text-sm mb-5">
                    No 8 Broad Street WesternHouse Fourth Floor,<br />
                    Lagos Island
                    </p>
                    <p className="text-sm">
                                                       <span className="font-bold">Email: </span>
                                                       <a href="mailto:example@mail.com">
                                                       iceinvestment2015@gmail.com 
                                                       </a>
                                                  </p>
                    {/* <p className="text-sm">
                                                       <span className="font-bold">Email: </span>
                                                       <a href="mailto:example@mail.com">
                                                            iceinvestment2015@gmail.com
                                                       </a>
                                                  </p> */}
                  </div>
                </div>
                <hr className="border-gray-800" />
              </div>
              <div className="p-2">
                <div className="flex gap-10 mb-10">
                  <div>
                    <h3 className="font-bold capitalize mb-2">Branch Office</h3>
                    <p className="text-sm mb-5">
                    Block 21&22 Niger 2, Trade fair complex,
                      <br />
                      Badagry Road, Lagos Nigeria.
                    </p>
                    <p className="text-sm mb-2"><span className="font-bold">Phone:</span> 09059009948, +2349030001535	</p>
                    {/* <p className="text-sm">
                      <span className="font-bold">Email: </span>
                      <a href="mailto:example@mail.com">
                        iceinvestment2015@gmail.com
                      </a>
                    </p> */}
                  </div>
                  <div>
                    <h3 className="font-bold capitalize mb-2">Branch Office</h3>
                    <p className="text-sm mb-5">
                    Shop 24, Block B16, Usman Halilu Street
                      <br />
                      Garki  Model market, Abuja

                    </p>
                    {/* <p className="text-sm mb-2">
                                                       <span className="font-bold">Phone:</span> +234 1 271 7150
                                                  </p> */}
                    <p className="text-sm">
                                                       <span className="font-bold">Email: </span>
                                                       <a href="mailto:example@mail.com">
                                                       iceinvestment2015@gmail.com 
                                                       </a>
                                                  </p>
                  </div>
                </div>
                <hr className="border-gray-800" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
