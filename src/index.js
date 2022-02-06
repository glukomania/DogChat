import Transparency from "transparency";

// const testtext = document.querySelector("#root");
// testtext.textContent = "trololo";

var hello = {
  hello: "Hello",
  goodbye: "<i>Goodbye!</i>",
  greeting: "Howdy!",
  "hi-label": "Terve!",
};

const insertTemp = Transparency.render(document.getElementById("container"), hello);

console.log("insertTemp", insertTemp);
