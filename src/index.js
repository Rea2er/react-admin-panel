import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import MemoryUtils from "./utils/MemoryUtils";
import StorageUtils from "./utils/StorageUtils";

//read the data from localstorage
const user = StorageUtils.getUser();
//save to memory
MemoryUtils.user = user;

ReactDOM.render(<App />, document.getElementById("root"));
