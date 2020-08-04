import flatpickr from "flatpickr";
import { Russian } from "flatpickr/dist/l10n/ru.js";
import rangePlugin from "flatpickr/dist/plugins/rangePlugin";

rangePlugin();

let right = "&#8594";
let left = "&#8592";

flatpickr(".flatpickr .js-flatpickr-dateTime", {
  dateFormat: "d.m.y",
  locale: Russian,
  prevArrow: left,
  nextArrow: right,
  plugins: [new rangePlugin({ input: "#secondRangeInput" })],
  disableMobile: "true",
  wrap: false,
});
