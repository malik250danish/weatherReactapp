import React, { useEffect } from "react";
import { useState } from "react";

const Weatherapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState(null);
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=dd03856a94a88e42171539e1bb4a502f`;
      const response = await fetch(url);
      // console.log(response);
      const resjson = await response.json();
      console.log(resjson);
      setCity(resjson.main);
    };

    fetchApi();
  }, [search]);
  return (
    <>
      <div className="box flex flex-col justify-center bg-white rounded-md items-center shadow-2xl space-x-2.5 w-fit p-10">
        <div className="inputData">
          <input
            className="Sinput border rounded-2xl px-3 border-zinc-900 "
            type="search"
            onChange={(event) => {
              //   setCity = event.value;

              setSearch(event.target.value);
            }}
          />
        </div>
        {!city ? (
          <p className="text-red-900 text-xl">no data found</p>
        ) : (
          <div>
            <div className="info">
              <div className="city text-xl text-center text-blue-900">
                {search}
              </div>
              <div className="temp text-2xl my-3 text-center text-green-900">
                {city.temp} °C
              </div>
              <div className="flex space-x-4 mt-5">
                <div className="min text-yellow-900">
                  min:{city.temp_min} °C
                </div>
                <div className="max">max:{city.temp_max} °C</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Weatherapp;
