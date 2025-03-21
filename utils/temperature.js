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

export { UNITS, convertTemperatureTo, getOppositeUnit };
