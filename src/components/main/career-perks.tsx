const CareerPerks = () => {
  return (
    <div className="p-2 bg-gray-100">
      <div className="p-6 md:p-12 container mx-auto">
        <h2 className="text-xl font-light mb-4">
          Ice Investment is an equal opportunity employer.
        </h2>
        <p className="flex items-center text-sm mb-3">
          <span className="mr-3 text-[#ea6768]">
            <img
              src="/icon/chevron.svg"
              alt=""
              className="w-6 inline-block mr-2"
            />
          </span>
          <span>
            We do not discriminate on the basis of place of origin, sex,
            religion, status or ethnic group.
          </span>
        </p>
        <p className="flex items-center text-sm">
          <span className="mr-3 text-[#ea6768]">
            <img
              src="/icon/chevron.svg"
              alt=""
              className="w-6 inline-block mr-2"
            />
          </span>
          <span>
            We respect and seek to empower each individual’s perspective, skills
            and experiences within our workforce.
          </span>
        </p>
      </div>
    </div>
  );
};

export default CareerPerks;
