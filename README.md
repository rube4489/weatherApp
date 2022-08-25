# Weather App

Aplicación web para consulta de clima.

## Acerca del proyecto

- Aplicación realizada en react js y Reactstrap para los estilos.
- Diseño responsive.
- Se utilizó openweathermap como API de consulta.
- Posee selector de 5 ciudades ya establecidas.
- Utiliza geolocalización para mostrar el pronóstico de dicha ubicación.
- Muestra tiempo actual, por hora y de los próximos 5 días.

### Desktop

![](https://firebasestorage.googleapis.com/v0/b/document-app-5378b.appspot.com/o/weather1.png?alt=media&token=e84e87f7-3a91-401e-b2cb-7f2eb1b0ef97)

![](https://firebasestorage.googleapis.com/v0/b/document-app-5378b.appspot.com/o/weather2.png?alt=media&token=707bd5fb-dc84-470f-98c9-c9afc1204b77)

### Mobile

![](https://firebasestorage.googleapis.com/v0/b/document-app-5378b.appspot.com/o/phone.png?alt=media&token=d684fb7b-c33f-4465-9c23-446899fb2dbc)

## Demo

En el siguiente link podrá visualizar la demo [weather app](https://weather-query-app.netlify.app/ "weather app")

## Instalación en ambiente local

Descargar el repositorio

$ git clone https://github.com/rube4489/weatherApp.git

## Instalar las dependencias

En el directorio del proyecto, ejecutar:

#### NPM

$ npm install

#### YARN

$ yarn install

## Configuración

Copiar el archivo .env-example y renombrarlo por .env

Ingresar variable de entorno

REACT_APP_API_KEY=AQUI_TU_KEY_DE_OPENWEATHERMAP

### Nota.- En caso de no contar con una apikey, podrá generarla de manera gratuita en https://openweathermap.org/

#### NPM

$ npm run start

#### YARN

$ yarn start
