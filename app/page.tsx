import { inter } from "./layout";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center text-8xl h-screen items-center">
      Mollie Woodworks
      <div className={`${inter.className} text-lg py-10`}>
        molliewoodworks@gmail.com
      </div>
    </div>
  );
}
