import { createContext } from "react";

const Context = createContext({
    loggedInUser: "Default User",
});
export default Context;