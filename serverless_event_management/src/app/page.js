import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-200 h-screen">
        <div className=" flex">
          <div className=" my-55 mx-45 flex-col">
              <p className=" text-2xl">Stay connected to your Loved ones.!!!!</p>
              <Link href="/events"> 
                <button className="border mx-40 my-3 p-3 rounded-2xl hover:bg-gray-300" > RSVP</button>
              </Link>
          </div>
          <div className="my-55">
              <Image
              width={400}
              height={400}
              src={'/next.svg'}
              alt="picture">
              </Image>
          </div>
        </div>
    </div>
  );
}
