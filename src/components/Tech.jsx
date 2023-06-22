import { BallImage } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-3">
      {technologies.map((technology) => (
        <div className="w-20 h-20 p-2" key={technology.name}>
          <BallImage icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
