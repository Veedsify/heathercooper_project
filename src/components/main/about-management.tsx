import { ManagementTeamType } from "../../constants/management-team";
import { MarketingTeamType } from "../../constants/marketing-team";

type AboutManagementProps = {
     title: string;
     teams: (ManagementTeamType | MarketingTeamType)[];
};

const AboutManagement = ({ title, teams }: AboutManagementProps) => {
     const hasPhone = (team: ManagementTeamType | MarketingTeamType): team is MarketingTeamType => {
          return (team as MarketingTeamType).phone !== undefined;
     };

     return (
          <div className="py-20 p-2 relative">
               <img
                    src="/images/backgrounds/buildings.jpg"
                    className="absolute inset-0 object-cover w-full saturate-0 opacity-30 h-full"
                    alt="Background"
               />
               <div className="absolute inset-0 object-cover w-full saturate-0 h-full bg-gradient-to-b from-white to-transparent"></div>
               <div className="container mx-auto relative">
                    <h3 className="text-xl font-bold mb-4 uppercase">
                         {title}
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-20">
                         {teams.map((team, index) => (
                              <div key={index}>
                                   {/* <img
                                        src={team.image}
                                        alt={team.name}
                                        className="aspect-[3/4] w-full object-cover object-top block mb-3"
                                   /> */}
                                   <h3 className="text-center text-lg md:text-2xl mb-2">
                                        {team.name}
                                   </h3>
                                   <p className="text-center text-sm md:text-base mb-1">
                                        {team.position}
                                   </p>
                                   {hasPhone(team) && (
                                        <>
                                             <p className="text-center text-sm mb-1 hidden">
                                                  {team.phone}
                                             </p>
                                             <p className="text-center text-sm mb-1">
                                                  {team.address}
                                             </p>
                                        </>
                                   )}
                              </div>
                         ))}
                    </div>
               </div>
          </div>
     );
};

export default AboutManagement;
