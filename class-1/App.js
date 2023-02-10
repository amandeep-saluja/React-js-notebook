const heading1 = React.createElement(
  "h1",
  {
    className: "title",
    key: "h1",
  },
  "Hello world"
);

const heading2 = React.createElement(
  "h2",
  {
    className: "title",
    key: "h2",
  },
  "Namaste React JS!"
);

const container = React.createElement(
  "div",
  {
    id: "container",
    namaste: "reactjs",
  },
  [heading1, heading2]
);

// passing
const root = ReactDOM.createRoot(document.getElementById("app"));

//async differ
root.render(container);
