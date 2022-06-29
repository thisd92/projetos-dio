import React, { useState } from "react";
import FormName from "./components/FormName"
import FormSorvete from "./components/FormSorvete"
import FormFile from "./components/FormFile"

const App = () =>{
    const [topic, setTopic] = useState(1);

    return(
        <div>
            <div>
                <button onClick={() => setTopic(1)}>Name</button>
                <button onClick={() => setTopic(2)}>Sorvete</button>
                <button onClick={() => setTopic(3)}>File</button>
            </div>
            <div>
                {topic === 1 && <FormName />}
                {topic === 2 && <FormSorvete />}
                {topic === 3 && <FormFile />}
            </div>     
        </div>
    )
}

export default App;