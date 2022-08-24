import React from "react";
import { Input } from "reactstrap";
import { citiesList } from "../citiesList/citiesList";

const CitySelector = ({ getWeatherLocation }) => {
  const handleCity = (e) => {
    const citySelected = citiesList.find(
      (city) => city.name === e.target.value
    );
    getWeatherLocation(citySelected.lat, citySelected.long);
  };
  return (
    <div className="d-flex justify-content-sm-center justify-content-lg-end mt-2 mb-4">
      <Input
        onChange={(e) => handleCity(e)}
        id="exampleSelect"
        name="select"
        type="select"
        className="size-select"
        defaultValue={"default"}
      >
        <option value="default" disabled>
          Seleccionar...
        </option>
        {citiesList.map((city) => (
          <option key={city.id}>{city.name} </option>
        ))}
      </Input>
    </div>
  );
};

export default CitySelector;
