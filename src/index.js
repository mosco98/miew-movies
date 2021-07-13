import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import "./assets/styles/global.css"
import App from "./App"
import { Provider } from "react-redux"
import { BrowserRouter, Switch } from "react-router-dom"
import store from "./utils/redux/store"

import * as serviceWorker from "./service-worker"

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Provider store={store}>
        <App />
      </Provider>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
)

serviceWorker.register()
