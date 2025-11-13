import React, { useContext } from "react";
import { UserContext } from "../context/Context.jsx";
function Child() {
    const user = useContext(UserContext); // consume context
    return <h3>Welcome {user}!</h3>;
}
export default Child;