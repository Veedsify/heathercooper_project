import { managementTeam } from "../../constants/management-team";

const AboutManagement = () => {
     return (
          <div className="py-20 p-2 relative">
               <img src="/images/backgrounds/buildings.jpg" className="absolute inset-0 object-cover w-full saturate-0 opacity-30 h-full" alt="" />
               <div className="absolute inset-0 object-cover w-full saturate-0 h-full bg-gradient-to-b from-white to-transparent"></div>
               <div className="container mx-auto relative">
                    <h3 className="text-xl font-bold mb-4 uppercase">
                         Management Team
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                         {managementTeam.map((team) => (
                              <div>
                                   <img src={team.image}
                                        alt="Management Team"
                                        className="aspect-[3.7/4] w-full object-cover object-top block mb-3" />
                                   <h3
                                        className="text-center text-lg md:text-2xl mb-2"
                                   >{team.name}</h3>
                                   <p
                                        className="text-center text-sm md:text-base font-meduim"
                                   >
                                        {team.position}
                                   </p>
                              </div>
                         ))}
                    </div>
               </div>
          </div>
     );
}

export default AboutManagement;