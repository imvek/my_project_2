import { useState } from "react";

export function AboutUs() {
    const [data] = useState([{title:"A",list:["1a","2a","3a","4a"]},{title:"B",list:["1b","2b","3b","4b"]},{title:"C",list:["1c","2c","3c","4c"]}]);
        

    return (
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-evenly"}}>
                {data.map(a=> (<ul><h3>{a.title}</h3> {a.list.map(b=> <li>{b}</li>)}</ul>))}
        </div>)}