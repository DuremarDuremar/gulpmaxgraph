import flatpickr from "flatpickr";
import { Russian } from "flatpickr/dist/l10n/ru.js";
import "flatpickr/dist/plugins/rangePlugin";
import rangePlugin from "flatpickr/dist/plugins/rangePlugin";

rangePlugin();

flatpickr(".flatpickr.js-flatpickr-dateTime", {
  dateFormat: "d.m.y",
  locale: Russian,
  prevArrow: "&#8592",
  nextArrow: "&#8594",
  plugins: [new rangePlugin({ input: "#secondRangeInput" })],
});
