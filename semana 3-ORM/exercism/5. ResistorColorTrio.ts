const COLORS = [
  "black", "brown", "red", "orange", "yellow",
  "green", "blue", "violet", "grey", "white",
] as const;

type Color = typeof COLORS[number];

const prefixes = ["", "kilo", "mega", "giga"] as const;

export function decodedResistorValue([band1, band2, band3]: Color[]): string {
  const value = COLORS.indexOf(band1) * 10 + COLORS.indexOf(band2);
  const zeros = band3 ? prefixes.indexOf("kilo") : 0;
  return `${value * 10 ** zeros} ${prefixes[zeros]}ohms`;
}


decodedResistorValue(["black","red","grey"])