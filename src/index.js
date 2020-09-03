import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import {BrowserRouter as Router} from "react-router-dom"
import "antd/dist/antd.css"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App/>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)

serviceWorker.unregister()
