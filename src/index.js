const sum = (...args) => {
  return args.reduce((res, item) => res + item);
};
const root = document.querySelector("#root");
root.textContent = sum(6, -1).toString();
