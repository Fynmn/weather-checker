import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Router from "next/router";

// export async function getStaticProps(city_name) {
//   const res = await fetch(
//     `http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&limit=${limit}&appid=202a8ab609a6cfae451e407f5b7dcf6b`
//   );
//   const data = await res.json();

//   return {
//     props: {
//       data: data,
//     },
//     revalidate: 1,
//   }
// }

export default function Home({ data }) {

  const handleClick = (e) => {
    e.preventDefault();
    
    const city_name = document.getElementById("city_name").value;
    console.log("button clicked");
    console.log(city_name);

    Router.push({pathname:"/weather", query: {city_name: city_name}});
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col justify-center items-center">
        <div className="text-center text-4xl p-10 ">
          <h1 className="font-bold">Weather App</h1>
        </div>

        <div className="flex flex-col justify-center items-center space-y-4">
          <input
            id="city_name"
            type="text"
            placeholder="Type your city here"
            class="input input-bordered input-primary w-full max-w-xs"
          />

          <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" onClick={handleClick}>
            Check
          </button>

        </div>
      </div>
    </div>
  );
}
