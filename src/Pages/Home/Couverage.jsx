import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
const Couverage = () => {
  const position = [23.685, 90.3563];
  const warehouses = useLoaderData();
  const mapref = useRef(null);
  console.log(warehouses);

  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    const district = warehouses.find((c) =>
      c.district.toLowerCase().includes(location.toLowerCase()),
    );
    console.log(district);
    if (district) {
      const cord = [district.latitude, district.longitude];
      mapref.current.flyTo(cord, 14);
    }
  };
  return (
    <div>
      <div className=" flex flex-col items-center mt-24 space-y-11 ">
        {/* <img src={testimonImg} alt="" className="w-[244px] h-auto" /> */}
        <div className="space-y-3">
          <h4 className="sec-title text-center">
            We are available in 64 Districts
          </h4>
          <p className="text-des max-w-2xl text-center">
            Enhance posture, mobility, and well-being effortlessly with Posture
            Pro. Achieve proper alignment, reduce pain, and strengthen your body
            with ease!
          </p>
        </div>
      </div>
      {/* search  */}
      <div className="flex justify-center py-9">
        <form onSubmit={handleSearch}>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              required
              placeholder="Search"
              name="location"
            />
          </label>
        </form>
      </div>
      {/* map */}
      <div className="w-full h-[800px]">
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="h-[800px] w-full "
          ref={mapref}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {warehouses.map((house) => {
            return (
              <Marker position={[house.latitude, house.longitude]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
      ,
    </div>
  );
};

export default Couverage;
