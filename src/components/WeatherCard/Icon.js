import React from "react";
import styled from "@emotion/styled";

const Icon = (props) => {
  const Icon = styled.img`
    width: 40%;
  `;
  var icon = "";
  switch (props.condition) {
    case "Clear":
      icon = `./img/Mostly Sunny-2x.png`;
      break;
    case "Clouds":
      icon = `./img/Mostly Cloudy-2X.png`;
      break;
    case "Haze":
      icon = `./img/Haze-2x.png`;
      break;
    case "Hail":
      icon = `./img/Hail-2X.png`;
      break;
    case "Fog":
      icon = `./img/Fog-2X.png`;
      break;
    case "Tornado":
      icon = `./img/Tornado-2X.png`;
      break;
    case "Dust":
      icon = `./img/Dust-2X.png`;
      break;
    case "Mist":
      icon = `./img/Mist-2X.png`;
      break;
    case "Snow":
      icon = `./img/Snow-2X.png`;
      break;
    case "Rain":
      icon = `./img/Rain-2X.png`;
      break;
    case "Drizzle":
      icon = `./img/Drizzle-2X.png`;
      break;
    case "Thunderstorm":
      icon = `./img/Severe Thunderstorm-2X.png`;
      break;
    default:
      icon = `./img/Fog-2X.png`;
      break;
  }

  return <Icon src={icon} alt="Weather Icon" />;
};

export default Icon;
