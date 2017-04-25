import ReactDOM from "react-dom";
import React from "react";
import { FilterableProductTable } from "./components/FilterableProductTable";
import { products } from "./data";

ReactDOM.render(
  <FilterableProductTable products={products} />,
  document.getElementById("container")
);

// Nice to refer https://webpack.js.org/guides/development/
// https://www.theodo.fr/blog/2016/07/a-comprehensive-introduction-to-webpack-the-module-bundler/