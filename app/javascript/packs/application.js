import React from "react";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";
import * as Routes from "../packs/routes";
window.$routes = Routes;
createInertiaApp({
  resolve: (name) => require(`../pages/${name}`),
  setup({ el, App, props }) {
    render(<App {...props} />, el);
  },
});

import "stylesheets/application";
