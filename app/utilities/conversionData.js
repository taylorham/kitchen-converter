const round2 = (num) => +(Math.round(num + "e+2") + "e-2")

export const ml2oz = (num) => round2(num / 30)

export const oz2ml = (num) => round2(num * 30)

export const g2oz = (num) => round2(num / 28)

export const oz2g = (num) => round2(num * 28)

export const imperialUnits = (oz) => {
  let unit, value

  if (oz < .5) {
    unit = 'teaspoon', value = round2(oz * 6)
  } else if (oz >= .5 && oz < 2) {
    unit = 'tablespoon', value = round2(oz * 2)
  } else if (oz >= 2 && oz < 32) {
    unit = 'cup', value = round2(oz / 8)
  } else if (oz >= 32 && oz < 128) {
    unit = 'quart', value = round2(oz / 32)
  } else if (oz >= 128) {
    unit = 'gallon', value = round2(oz / 128)
  } else {
    unit = 'ounce', value = oz
  }

  return {unit: unit, value: value}
}
