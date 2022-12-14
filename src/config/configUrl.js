export const getApiUrl = (lat, long) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&lang=es&appid=${apiKey}`;
};

export const weatherInfo = {
  lat: -31.4135,
  lon: -64.1811,
  timezone: "America/Argentina/Cordoba",
  timezone_offset: -10800,
  current: {
    dt: 1661304850,
    sunrise: 1661251432,
    sunset: 1661291716,
    temp: 287.56,
    feels_like: 286.44,
    pressure: 989,
    humidity: 53,
    dew_point: 278.11,
    uvi: 0,
    clouds: 0,
    visibility: 10000,
    wind_speed: 4.63,
    wind_deg: 360,
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "cielo claro",
        icon: "01n",
      },
    ],
  },
  hourly: [
    {
      dt: 1661302800,
      temp: 287.91,
      feels_like: 286.75,
      pressure: 994,
      humidity: 50,
      dew_point: 277.6,
      uvi: 0,
      clouds: 1,
      visibility: 10000,
      wind_speed: 2.38,
      wind_deg: 349,
      wind_gust: 4.2,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "cielo claro",
          icon: "01n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1661306400,
      temp: 287.56,
      feels_like: 286.44,
      pressure: 989,
      humidity: 53,
      dew_point: 278.11,
      uvi: 0,
      clouds: 0,
      visibility: 10000,
      wind_speed: 1.81,
      wind_deg: 337,
      wind_gust: 1.96,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "cielo claro",
          icon: "01n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1661310000,
      temp: 287.73,
      feels_like: 286.55,
      pressure: 994,
      humidity: 50,
      dew_point: 277.44,
      uvi: 0,
      clouds: 1,
      visibility: 10000,
      wind_speed: 1.46,
      wind_deg: 327,
      wind_gust: 1.65,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "cielo claro",
          icon: "01n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1661313600,
      temp: 287.73,
      feels_like: 286.5,
      pressure: 1000,
      humidity: 48,
      dew_point: 276.86,
      uvi: 0,
      clouds: 2,
      visibility: 10000,
      wind_speed: 1.69,
      wind_deg: 322,
      wind_gust: 1.95,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "cielo claro",
          icon: "01n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1661317200,
      temp: 287.52,
      feels_like: 286.19,
      pressure: 1005,
      humidity: 45,
      dew_point: 275.75,
      uvi: 0,
      clouds: 3,
      visibility: 10000,
      wind_speed: 1.53,
      wind_deg: 308,
      wind_gust: 1.8,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "cielo claro",
          icon: "01n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1661320800,
      temp: 287.16,
      feels_like: 285.71,
      pressure: 1011,
      humidity: 42,
      dew_point: 274.46,
      uvi: 0,
      clouds: 4,
      visibility: 10000,
      wind_speed: 1.34,
      wind_deg: 306,
      wind_gust: 1.55,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "cielo claro",
          icon: "01n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1661324400,
      temp: 286.78,
      feels_like: 285.27,
      pressure: 1015,
      humidity: 41,
      dew_point: 273.3,
      uvi: 0,
      clouds: 11,
      visibility: 10000,
      wind_speed: 1.14,
      wind_deg: 315,
      wind_gust: 1.18,
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "algo de nubes",
          icon: "02n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1661328000,
      temp: 286.54,
      feels_like: 285.03,
      pressure: 1015,
      humidity: 42,
      dew_point: 273.45,
      uvi: 0,
      clouds: 9,
      visibility: 10000,
      wind_speed: 1.48,
      wind_deg: 343,
      wind_gust: 1.57,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "cielo claro",
          icon: "01n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1661331600,
      temp: 286.32,
      feels_like: 284.84,
      pressure: 1016,
      humidity: 44,
      dew_point: 273.88,
      uvi: 0,
      clouds: 8,
      visibility: 10000,
      wind_speed: 1.3,
      wind_deg: 328,
      wind_gust: 1.33,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "cielo claro",
          icon: "01n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1661335200,
      temp: 286.12,
      feels_like: 284.67,
      pressure: 1016,
      humidity: 46,
      dew_point: 274.36,
      uvi: 0,
      clouds: 8,
      visibility: 10000,
      wind_speed: 1.15,
      wind_deg: 269,
      wind_gust: 1.27,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "cielo claro",
          icon: "01n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1661338800,
      temp: 286.2,
      feels_like: 284.79,
      pressure: 1017,
      humidity: 47,
      dew_point: 274.75,
      uvi: 0,
      clouds: 8,
      visibility: 10000,
      wind_speed: 0.96,
      wind_deg: 291,
      wind_gust: 1.05,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "cielo claro",
          icon: "01d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1661342400,
      temp: 288.91,
      feels_like: 287.64,
      pressure: 1017,
      humidity: 42,
      dew_point: 275.44,
      uvi: 0.62,
      clouds: 7,
      visibility: 10000,
      wind_speed: 0.6,
      wind_deg: 321,
      wind_gust: 0.92,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "cielo claro",
          icon: "01d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1661346000,
      temp: 291.74,
      feels_like: 290.67,
      pressure: 1018,
      humidity: 39,
      dew_point: 277.01,
      uvi: 1.89,
      clouds: 9,
      visibility: 10000,
      wind_speed: 1.67,
      wind_deg: 26,
      wind_gust: 2.75,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "cielo claro",
          icon: "01d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1661349600,
      temp: 293.89,
      feels_like: 293.01,
      pressure: 1017,
      humidity: 38,
      dew_point: 278.77,
      uvi: 3.69,
      clouds: 7,
      visibility: 10000,
      wind_speed: 2.71,
      wind_deg: 42,
      wind_gust: 4.26,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "cielo claro",
          icon: "01d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1661353200,
      temp: 295.69,
      feels_like: 294.99,
      pressure: 1017,
      humidity: 38,
      dew_point: 280.36,
      uvi: 5.39,
      clouds: 5,
      visibility: 10000,
      wind_speed: 3.68,
      wind_deg: 41,
      wind_gust: 5.38,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "cielo claro",
          icon: "01d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1661356800,
      temp: 297.35,
      feels_like: 296.84,
      pressure: 1015,
      humidity: 39,
      dew_point: 282.09,
      uvi: 6.39,
      clouds: 5,
      visibility: 10000,
      wind_speed: 3.8,
      wind_deg: 44,
      wind_gust: 5.28,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "cielo claro",
          icon: "01d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1661360400,
      temp: 298.73,
      feels_like: 298.34,
      pressure: 1014,
      humidity: 38,
      dew_point: 282.98,
      uvi: 6.14,
      clouds: 5,
      visibility: 10000,
      wind_speed: 4.26,
      wind_deg: 48,
      wind_gust: 5.65,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "cielo claro",
          icon: "01d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1661364000,
      temp: 299.61,
      feels_like: 299.61,
      pressure: 1012,
      humidity: 36,
      dew_point: 283.21,
      uvi: 4.82,
      clouds: 5,
      visibility: 10000,
      wind_speed: 4.79,
      wind_deg: 49,
      wind_gust: 6.07,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "cielo claro",
          icon: "01d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1661367600,
      temp: 300.1,
      feels_like: 299.79,
      pressure: 1011,
      humidity: 36,
      dew_point: 283.33,
      uvi: 2.94,
      clouds: 13,
      visibility: 10000,
      wind_speed: 5.22,
      wind_deg: 53,
      wind_gust: 6.05,
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "algo de nubes",
          icon: "02d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1661371200,
      temp: 299.72,
      feels_like: 299.72,
      pressure: 1011,
      humidity: 38,
      dew_point: 283.8,
      uvi: 1.3,
      clouds: 12,
      visibility: 10000,
      wind_speed: 5.5,
      wind_deg: 57,
      wind_gust: 5.75,
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "algo de nubes",
          icon: "02d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1661374800,
      temp: 298.68,
      feels_like: 298.36,
      pressure: 1011,
      humidity: 41,
      dew_point: 284.29,
      uvi: 0.33,
      clouds: 12,
      visibility: 10000,
      wind_speed: 4.89,
      wind_deg: 57,
      wind_gust: 5.85,
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "algo de nubes",
          icon: "02d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1661378400,
      temp: 295.81,
      feels_like: 295.44,
      pressure: 1012,
      humidity: 50,
      dew_point: 284.54,
      uvi: 0,
      clouds: 19,
      visibility: 10000,
      wind_speed: 3.6,
      wind_deg: 54,
      wind_gust: 6.92,
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "algo de nubes",
          icon: "02n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1661382000,
      temp: 294.53,
      feels_like: 294.16,
      pressure: 1013,
      humidity: 55,
      dew_point: 284.84,
      uvi: 0,
      clouds: 33,
      visibility: 10000,
      wind_speed: 2.65,
      wind_deg: 37,
      wind_gust: 5.06,
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "nubes dispersas",
          icon: "03n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1661385600,
      temp: 293.86,
      feels_like: 293.53,
      pressure: 1013,
      humidity: 59,
      dew_point: 285.18,
      uvi: 0,
      clouds: 44,
      visibility: 10000,
      wind_speed: 1.7,
      wind_deg: 16,
      wind_gust: 2.73,
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "nubes dispersas",
          icon: "03n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1661389200,
      temp: 293.23,
      feels_like: 292.91,
      pressure: 1014,
      humidity: 62,
      dew_point: 285.36,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 1.04,
      wind_deg: 335,
      wind_gust: 1.22,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "nubes",
          icon: "04n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1661392800,
      temp: 292.97,
      feels_like: 292.65,
      pressure: 1014,
      humidity: 63,
      dew_point: 285.38,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 1.3,
      wind_deg: 298,
      wind_gust: 1.35,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "nubes",
          icon: "04n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1661396400,
      temp: 292.66,
      feels_like: 292.34,
      pressure: 1014,
      humidity: 64,
      dew_point: 285.28,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 1.5,
      wind_deg: 290,
      wind_gust: 1.52,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "nubes",
          icon: "04n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1661400000,
      temp: 292.36,
      feels_like: 292.03,
      pressure: 1014,
      humidity: 65,
      dew_point: 285.22,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 1.38,
      wind_deg: 306,
      wind_gust: 1.44,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "nubes",
          icon: "04n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1661403600,
      temp: 292.07,
      feels_like: 291.77,
      pressure: 1013,
      humidity: 67,
      dew_point: 285.34,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 1.01,
      wind_deg: 333,
      wind_gust: 1.07,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "nubes",
          icon: "04n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1661407200,
      temp: 291.79,
      feels_like: 291.49,
      pressure: 1013,
      humidity: 68,
      dew_point: 285.4,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 1.1,
      wind_deg: 251,
      wind_gust: 1.13,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "nubes",
          icon: "04n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1661410800,
      temp: 291.51,
      feels_like: 291.23,
      pressure: 1012,
      humidity: 70,
      dew_point: 285.36,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 1.68,
      wind_deg: 233,
      wind_gust: 1.7,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "nubes",
          icon: "04n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1661414400,
      temp: 291.3,
      feels_like: 291,
      pressure: 1012,
      humidity: 70,
      dew_point: 285.29,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 2.11,
      wind_deg: 218,
      wind_gust: 2.25,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "nubes",
          icon: "04n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1661418000,
      temp: 290.98,
      feels_like: 290.67,
      pressure: 1012,
      humidity: 71,
      dew_point: 285.36,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 1.96,
      wind_deg: 219,
      wind_gust: 2.06,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "nubes",
          icon: "04n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1661421600,
      temp: 290.58,
      feels_like: 290.31,
      pressure: 1013,
      humidity: 74,
      dew_point: 285.45,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 1.71,
      wind_deg: 207,
      wind_gust: 1.85,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "nubes",
          icon: "04n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1661425200,
      temp: 290.31,
      feels_like: 290.07,
      pressure: 1013,
      humidity: 76,
      dew_point: 285.62,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 1.57,
      wind_deg: 210,
      wind_gust: 1.69,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "nubes",
          icon: "04d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1661428800,
      temp: 292.31,
      feels_like: 292.06,
      pressure: 1014,
      humidity: 68,
      dew_point: 285.84,
      uvi: 0.59,
      clouds: 99,
      visibility: 10000,
      wind_speed: 1.46,
      wind_deg: 208,
      wind_gust: 2.2,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "nubes",
          icon: "04d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1661432400,
      temp: 294.65,
      feels_like: 294.42,
      pressure: 1014,
      humidity: 60,
      dew_point: 286.2,
      uvi: 1.83,
      clouds: 77,
      visibility: 10000,
      wind_speed: 1.66,
      wind_deg: 177,
      wind_gust: 1.95,
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "muy nuboso",
          icon: "04d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1661436000,
      temp: 296.71,
      feels_like: 296.53,
      pressure: 1014,
      humidity: 54,
      dew_point: 286.58,
      uvi: 3.54,
      clouds: 53,
      visibility: 10000,
      wind_speed: 2.35,
      wind_deg: 172,
      wind_gust: 2.43,
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "muy nuboso",
          icon: "04d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1661439600,
      temp: 298.65,
      feels_like: 298.51,
      pressure: 1014,
      humidity: 48,
      dew_point: 286.62,
      uvi: 5.16,
      clouds: 36,
      visibility: 10000,
      wind_speed: 2.8,
      wind_deg: 157,
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "nubes dispersas",
          icon: "03d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1661443200,
      temp: 300.12,
      feels_like: 300.2,
      pressure: 1013,
      humidity: 44,
      dew_point: 286.33,
      uvi: 5.53,
      clouds: 27,
      visibility: 10000,
      wind_speed: 2.88,
      wind_deg: 132,
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "nubes dispersas",
          icon: "03d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1661446800,
      temp: 301.31,
      feels_like: 300.96,
      pressure: 1012,
      humidity: 40,
      dew_point: 285.97,
      uvi: 5.32,
      clouds: 23,
      visibility: 10000,
      wind_speed: 3.1,
      wind_deg: 122,
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "algo de nubes",
          icon: "02d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1661450400,
      temp: 302.03,
      feels_like: 301.39,
      pressure: 1012,
      humidity: 37,
      dew_point: 285.6,
      uvi: 4.18,
      clouds: 21,
      visibility: 10000,
      wind_speed: 3.02,
      wind_deg: 116,
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "algo de nubes",
          icon: "02d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1661454000,
      temp: 302.27,
      feels_like: 301.54,
      pressure: 1011,
      humidity: 36,
      dew_point: 285.34,
      uvi: 1.82,
      clouds: 79,
      visibility: 10000,
      wind_speed: 2.88,
      wind_deg: 119,
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "muy nuboso",
          icon: "04d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1661457600,
      temp: 302.1,
      feels_like: 301.38,
      pressure: 1011,
      humidity: 36,
      dew_point: 285.38,
      uvi: 0.82,
      clouds: 78,
      visibility: 10000,
      wind_speed: 3.3,
      wind_deg: 127,
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "muy nuboso",
          icon: "04d",
        },
      ],
      pop: 0.1,
    },
    {
      dt: 1661461200,
      temp: 301.16,
      feels_like: 300.76,
      pressure: 1012,
      humidity: 39,
      dew_point: 285.7,
      uvi: 0.21,
      clouds: 74,
      visibility: 10000,
      wind_speed: 3.59,
      wind_deg: 130,
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "muy nuboso",
          icon: "04d",
        },
      ],
      pop: 0.21,
    },
    {
      dt: 1661464800,
      temp: 297.9,
      feels_like: 297.79,
      pressure: 1013,
      humidity: 52,
      dew_point: 286.9,
      uvi: 0,
      clouds: 73,
      visibility: 10000,
      wind_speed: 4.08,
      wind_deg: 155,
      wind_gust: 7.6,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "lluvia ligera",
          icon: "10n",
        },
      ],
      pop: 0.44,
      rain: {
        "1h": 0.43,
      },
    },
    {
      dt: 1661468400,
      temp: 295.22,
      feels_like: 295.23,
      pressure: 1014,
      humidity: 67,
      dew_point: 288.4,
      uvi: 0,
      clouds: 75,
      visibility: 10000,
      wind_speed: 4.04,
      wind_deg: 177,
      wind_gust: 8.29,
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "lluvia moderada",
          icon: "10n",
        },
      ],
      pop: 0.52,
      rain: {
        "1h": 1.07,
      },
    },
    {
      dt: 1661472000,
      temp: 294.04,
      feels_like: 294.09,
      pressure: 1015,
      humidity: 73,
      dew_point: 288.65,
      uvi: 0,
      clouds: 69,
      visibility: 10000,
      wind_speed: 2.9,
      wind_deg: 186,
      wind_gust: 6.25,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "lluvia ligera",
          icon: "10n",
        },
      ],
      pop: 0.47,
      rain: {
        "1h": 0.2,
      },
    },
  ],
  daily: [
    {
      dt: 1661270400,
      sunrise: 1661251432,
      sunset: 1661291716,
      moonrise: 1661243640,
      moonset: 1661279400,
      moon_phase: 0.88,
      temp: {
        day: 296.08,
        min: 282.97,
        max: 298.36,
        night: 287.56,
        eve: 291.62,
        morn: 283,
      },
      feels_like: {
        day: 294.9,
        night: 286.44,
        eve: 290.49,
        morn: 282.06,
      },
      pressure: 1016,
      humidity: 18,
      dew_point: 270.29,
      wind_speed: 4.89,
      wind_deg: 64,
      wind_gust: 8.18,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "cielo claro",
          icon: "01d",
        },
      ],
      clouds: 0,
      pop: 0,
      uvi: 6.2,
    },
    {
      dt: 1661356800,
      sunrise: 1661337764,
      sunset: 1661378152,
      moonrise: 1661332680,
      moonset: 1661369160,
      moon_phase: 0.92,
      temp: {
        day: 297.35,
        min: 286.12,
        max: 300.1,
        night: 292.97,
        eve: 295.81,
        morn: 286.12,
      },
      feels_like: {
        day: 296.84,
        night: 292.65,
        eve: 295.44,
        morn: 284.67,
      },
      pressure: 1015,
      humidity: 39,
      dew_point: 282.09,
      wind_speed: 5.5,
      wind_deg: 57,
      wind_gust: 6.92,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "cielo claro",
          icon: "01d",
        },
      ],
      clouds: 5,
      pop: 0,
      uvi: 6.39,
    },
    {
      dt: 1661443200,
      sunrise: 1661424096,
      sunset: 1661464588,
      moonrise: 1661421540,
      moonset: 1661459100,
      moon_phase: 0.95,
      temp: {
        day: 300.12,
        min: 290.31,
        max: 302.27,
        night: 293.77,
        eve: 297.9,
        morn: 290.58,
      },
      feels_like: {
        day: 300.2,
        night: 293.85,
        eve: 297.79,
        morn: 290.31,
      },
      pressure: 1013,
      humidity: 44,
      dew_point: 286.33,
      wind_speed: 4.08,
      wind_deg: 155,
      wind_gust: 8.29,
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "lluvia moderada",
          icon: "10d",
        },
      ],
      clouds: 27,
      pop: 0.52,
      rain: 1.7,
      uvi: 5.53,
    },
    {
      dt: 1661529600,
      sunrise: 1661510427,
      sunset: 1661551024,
      moonrise: 1661510040,
      moonset: 1661548980,
      moon_phase: 0.98,
      temp: {
        day: 298.68,
        min: 291,
        max: 302.75,
        night: 296.6,
        eve: 302.75,
        morn: 291.05,
      },
      feels_like: {
        day: 298.62,
        night: 296.15,
        eve: 301.61,
        morn: 291.22,
      },
      pressure: 1009,
      humidity: 51,
      dew_point: 287.33,
      wind_speed: 3.92,
      wind_deg: 50,
      wind_gust: 6.97,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "lluvia ligera",
          icon: "10d",
        },
      ],
      clouds: 66,
      pop: 0.2,
      rain: 0.13,
      uvi: 6.22,
    },
    {
      dt: 1661616000,
      sunrise: 1661596757,
      sunset: 1661637460,
      moonrise: 1661598360,
      moonset: 1661638860,
      moon_phase: 0,
      temp: {
        day: 292.47,
        min: 287.28,
        max: 294.35,
        night: 287.28,
        eve: 291.82,
        morn: 291.06,
      },
      feels_like: {
        day: 291.06,
        night: 285.4,
        eve: 290.24,
        morn: 290.84,
      },
      pressure: 1020,
      humidity: 23,
      dew_point: 270.58,
      wind_speed: 8.45,
      wind_deg: 188,
      wind_gust: 14.36,
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "nubes dispersas",
          icon: "03d",
        },
      ],
      clouds: 32,
      pop: 0.05,
      uvi: 6.73,
    },
    {
      dt: 1661702400,
      sunrise: 1661683086,
      sunset: 1661723896,
      moonrise: 1661686500,
      moonset: 1661728740,
      moon_phase: 0.04,
      temp: {
        day: 284.69,
        min: 279.1,
        max: 288.42,
        night: 283.19,
        eve: 288.29,
        morn: 279.1,
      },
      feels_like: {
        day: 282.34,
        night: 280.77,
        eve: 286.23,
        morn: 276.69,
      },
      pressure: 1038,
      humidity: 17,
      dew_point: 260.23,
      wind_speed: 4.44,
      wind_deg: 165,
      wind_gust: 8.86,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "cielo claro",
          icon: "01d",
        },
      ],
      clouds: 0,
      pop: 0,
      uvi: 0.7,
    },
    {
      dt: 1661788800,
      sunrise: 1661769415,
      sunset: 1661810331,
      moonrise: 1661774640,
      moonset: 1661818680,
      moon_phase: 0.07,
      temp: {
        day: 287.89,
        min: 279.62,
        max: 291.69,
        night: 285.62,
        eve: 290.45,
        morn: 279.62,
      },
      feels_like: {
        day: 285.97,
        night: 283.58,
        eve: 288.73,
        morn: 276.39,
      },
      pressure: 1027,
      humidity: 21,
      dew_point: 265.13,
      wind_speed: 8.28,
      wind_deg: 33,
      wind_gust: 12.39,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "cielo claro",
          icon: "01d",
        },
      ],
      clouds: 0,
      pop: 0,
      uvi: 1,
    },
    {
      dt: 1661875200,
      sunrise: 1661855743,
      sunset: 1661896767,
      moonrise: 1661862720,
      moonset: 1661908620,
      moon_phase: 0.11,
      temp: {
        day: 292.21,
        min: 281.45,
        max: 295.89,
        night: 287.69,
        eve: 293.87,
        morn: 281.45,
      },
      feels_like: {
        day: 290.67,
        night: 285.88,
        eve: 292.44,
        morn: 279.1,
      },
      pressure: 1017,
      humidity: 19,
      dew_point: 267.5,
      wind_speed: 6.94,
      wind_deg: 46,
      wind_gust: 12.53,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "cielo claro",
          icon: "01d",
        },
      ],
      clouds: 2,
      pop: 0,
      uvi: 1,
    },
  ],
};
