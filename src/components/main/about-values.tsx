
type AboutValuesProp = {
     title: string;
     content:  string[]
}

const AboutValues = ({
     title,
     content
}: AboutValuesProp
) => {
     return (
          <div className="pt-20 p-2">
               <div className="container mx-auto">
                    <h3 className="text-xl font-bold mb-3 uppercase">
                         {title}
                    </h3>
                    <ul className="leading-loose text-sm mb-4 flex list-disc gap-x-16 gap-y-6 flex-wrap px-6">
                         {content.map((item, index) => (
                              <li key={index}>{item}</li>
                         ))}
                    </ul>
                    <span className="h-[1px] w-1/3 bg-amber-500 inline-block"></span>
               </div>
          </div>
     );
}

export default AboutValues;