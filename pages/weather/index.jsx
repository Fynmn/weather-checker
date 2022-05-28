import React from "react";

export async function getServerSideProps({ query }) {
  try {
    const city_name = query.city_name;
    const limit = 1;
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&limit=1&appid=202a8ab609a6cfae451e407f5b7dcf6b`
    );
    const data = await response.json();

    return {
        props: {
            data: data,
        }
    }
  } catch (error) {
    return {
      props: {
        error: error,
      },
    };
  }
}

function weather({ data }) {
  return (
    <>
    <div>
        City Name: {data[0].name}
    </div>
      <div>
          Longitude: {data[0].lon}
      </div>
      <div>
          Latitude: {data[0].lat}
      </div>
    </>
  );
}

export default weather;
