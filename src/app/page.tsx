import localFont from "next/font/local";
import SubmitButton from "../components/SubmitButton";

const playfair = localFont({
  src: "./fonts/Oswald,Playfair_Display/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf",
  weight: "100 900",
});

export default function Home() {
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="flex flex-col text-center">
        <h1 className={`text-8xl font-bold ${playfair.className}`}>FitLAZY</h1>
        <h2 className="text-2xl mb-10">
          Reach your health goals in the laziest way possible!
        </h2>

        <div className="flex flex-row justify-center gap-10">
          <SubmitButton text="Sign-up" link="auth/signup" />
          <SubmitButton text="Login" light={true} link="auth/login" />
        </div>
      </div>
    </div>
  );
}
