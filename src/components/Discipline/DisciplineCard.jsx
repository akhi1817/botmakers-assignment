const DisciplineCard = ({ image, title, large = false }) => {
  return (
    <div className={`group rounded-lg overflow-hidden border border-[#4A4A4A] bg-[#232323] transition-all duration-300 hover:border-red-500 hover:-translate-y-1 cursor-pointer ${large ? "col-span-2" : ""}`}>
     
        <div className="aspect-square rounded-lg overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"/>
        </div>

    
        <div className="bg-[#232323] min-h-16 flex items-center justify-center px-3">
          <h3 className="text-white text-lg text-center leading-5">{title}</h3>
        </div>
    </div>
  );
};

export default DisciplineCard;