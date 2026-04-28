import StarIcon from "@/app/assets/icons/star.svg";

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "Responsive",
  "User Friendly",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
  "Full-Stack",
  "Front-End",
  "Back-End",
];
export const TapeSection = () => {
  return (
  <div className="py-16 lg:py-24 overflow-x-clip">
    <div className="bg-gradient-to-r from-emerald-500 to-emerald-200 overflow-x-clip -rotate-3">
      <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex flex-none gap-4 py-3"
      style={{
        transform: 'translateX(-750px)',
      }}>
        {words.map((word) => (
          <div key={word} className="inline-flex gap-4 items-center">
            <span className="text-gray-900 uppercase font-extrabold text-sm">{word}</span>
            <StarIcon className="size-6 text-gray-900 -rotate-12"/>
          </div>
        ))}
        </div>
      </div>
    </div>
  </div>  
)};
