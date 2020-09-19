import { merge } from "webpack-merge";

import common from "./webpack.main.common";

export default () =>
  merge(common(), {
    mode: "production",
    target: "electron-main",
  });
