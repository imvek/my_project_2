import { useState } from 'react'
import { AboutUs } from './about us'
import './home.css'
export function Home(){
    const[topic,setTopic] = useState("");
    function showBox(e){
        setTopic(e.target.id);

    }
    return(
        <div>
    <header>
        <ul type="none" id="nav_1">
            <li>Navigation</li>
            <li>Content</li>
            <li>Theme</li>
            <li>English/Hindi</li>
        </ul>
        <div id="img"><img src="mpe.png" height="90px" /></div>
        <ul type="none" id="nav_2">
            <li><span class="bi bi-house-fill"></span></li>
            <li onMouseOver={showBox} id='AboutUs'>About US</li>
            <li onMouseOver={showBox} id='QuickService'>Quick Services</li>
            <li>For Media</li>
            <li>e-Services</li>
            <li>For Business</li>
            <li>For Partners</li>
            <li>EODB</li>
            <li>Employees Corner</li>
        </ul>
    </header>
    <div id="subTopic">
        < AboutUs />
    </div>
</div>
    )
}