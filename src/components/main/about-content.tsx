type AboutContentProps = {
  title: string;
  content: string;
};
const AboutContent = ({ title, content }: AboutContentProps) => {
  return (
    <div className="pt-20 p-2">
      <div className="container mx-auto">
        <h3 className="text-xl font-bold mb-3 uppercase">{title}</h3>
        <p className="leading-loose text-sm mb-4">{content}</p>
        <span className="h-[1px] w-1/3 bg-[#ea6768] inline-block"></span>
      </div>
    </div>
  );
};

export default AboutContent;
