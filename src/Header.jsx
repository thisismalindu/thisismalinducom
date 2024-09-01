import Button from "./Button";
import hero from "./assets/hero.jpg";
import { TypeAnimation } from "react-type-animation";

export default function Header() {
  return (
    <header className="bg-white px-4 flex flex-col-reverse gap-8 pt-36 pb-20 xl:grid xl:grid-cols-2 xl:items-center justify-center xl:px-32 ">
      <div className="flex flex-col gap-8">
        <h1 className="text-6xl font-bold tracking-tighter">
          <TypeAnimation
            sequence={[
              500,
              '',
              1000,
              "Hi, I am Malindu.",
              1000, 
            ]}
            speed={50}
          />
        </h1>
        <p className="mono tracking-tight max-w-2xl">
          An Engineering Student, Graphic Designer, Content Creator,
          and Photography Hobbyist from Sri Lanka.
        </p>
        <div className="flex gap-4">
          <Button primary={true} href="/courses">
            Courses
          </Button>
          <Button href="/contact">Contact</Button>
        </div>
      </div>
      <img src={hero} alt="malindu bandara" />
    </header>
  );
}
