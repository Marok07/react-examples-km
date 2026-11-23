import { useState } from "react";

import "./App.css";

function App() {
    const [selected, setSelected] = useState();

    const costlyFunction = async (value) => {
        console.log("costlyFunction called");
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setSelected(value);
    };

    return (
        <>
            Hello {selected}
            <button onClick={() => costlyFunction(1)}>1</button>
            <button onClick={() => costlyFunction(2)}>2</button>
            <button onClick={() => costlyFunction(3)}>3</button>
        </>
    );
}

export default App;
