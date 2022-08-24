import React, { useEffect, useState } from "react";
import { Button, Container, Spinner } from "reactstrap";
import { getLocation } from "../helpers/helpers";
import PropTypes from "prop-types";

const Welcome = ({ getWeatherLocation }) => {
  const [loading, setLoading] = useState(false);
  const [currentlyLocation, setCurrentlyLocation] = useState({
    lat: "",
    long: "",
  });
  const [errorCode, setErrorCode] = useState("");

  useEffect(() => {
    if (currentlyLocation.lat !== "" && currentlyLocation.long !== "") {
      getWeatherLocation(currentlyLocation.lat, currentlyLocation.long);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [currentlyLocation]);

  return (
    <Container>
      <h2>¡Bienvenido!</h2>
      <p className="mt-4">
        {errorCode !== 1 ? (
          "Puedes consultar el pronostico del clima de tu ubicación actual permitiendo el acceso o también puedes consultar entre 5 ciudades a través del selector."
        ) : (
          <>
            El acceso a tu ubicación actual se encuentra denegado, puedes elegir
            entre 5 ciudades para consultar el pronostico, si quieres conocer
            como habilitarlo nuevamente puedes seguir el siguiente
            <a
              target="blank"
              className="ms-2 h6 text-light"
              href="https://support.google.com/chrome/answer/142065?hl=es-419&co=GENIE.Platform%3DDesktop"
            >
              link
            </a>
          </>
        )}
      </p>
      {errorCode !== 1 && (
        <Button
          onClick={() => {
            getLocation(setCurrentlyLocation, setErrorCode);
            setLoading(true);
          }}
        >
          {!loading && "Permitir acceso"}
          {loading && (
            <>
              {" "}
              <Spinner color="light" size="sm"></Spinner>
              <span className="ms-2">Cargando</span>
            </>
          )}
        </Button>
      )}
    </Container>
  );
};

export default Welcome;

Welcome.prototype = {
  getWeatherLocation: PropTypes.func.isRequired,
};
