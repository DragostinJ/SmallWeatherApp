import React from "react";
import './SeasonDisplay.css'

const summerConfig = {
    summer: {
        text: "Its hot out",
        iconName: "sun"
    },
    winter: {
        text: "Its cold out there",
        iconName: "snowflake"
    }
}
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};
const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
//   const text = season === "winter" ? "Its chilly" : "Its hot";
//   const icon = season === "winter" ? "snowflake" : "sun";
const {text, iconName} = summerConfig[season]
  return (
    <div className={`season-display ${season}`}>
      <i className={`${iconName} icon-left massive icon`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon-right massive icon`} />
    </div>
  );
};
export default SeasonDisplay;
