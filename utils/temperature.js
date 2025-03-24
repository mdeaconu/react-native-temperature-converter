const UNITS = {
  celcius: "℃",
  fahrenheit: "℉",
}

/**
 * @param {number} temperature 
 * @param {string} unitTo 
 * @returns {number} the computed temperature
 */
function convertTemperatureTo(temperature, unitTo) {
  if (unitTo === UNITS.celcius) {
    return (temperature - 32) / 1.8;
  } else if (unitTo === UNITS.fahrenheit) {
    return temperature * 1.8 + 32;
  } else {
    throw new Error("Invalid unit");
  }
}

/**
  * @param {UNITS} unit - the unit selected by the user
  * @returns {UNITS} the opposite unit
  */
function getOppositeUnit(unit) {
  return unit === UNITS.celcius ? UNITS.fahrenheit : UNITS.celcius;
}

/**
 * @param {number} temperature 
 * @param {UNITS} unit 
 * @returns `true` if the temperature is below certain value (0 for celcius and 32 for fahrenheit).
 */
function isIceTemperature(temperature, unit) {
  if (unit === UNITS.celcius) {
    return temperature <= 0;
  } else if (unit === UNITS.fahrenheit) {
    return temperature <= 32;
  } else {
    throw new Error("Invalid unit");
  }
}

export { UNITS, convertTemperatureTo, getOppositeUnit, isIceTemperature };
