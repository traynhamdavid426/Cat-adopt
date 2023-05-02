import React from "react";
import {  NavLink as Link, BrowserRouter, Routes,Route} from "react-router-dom";
import Home from './Home'
import Maps from "./Maps";
import Learncats from "./Learncats";
import Catfacts from "./Catfacts";
import Catsagedisplay from "./Catagesdisplay";
import Catgenders from './Catgenders';
import Geriatric from '../SubComponents/Age/Geriatric'
import Senior from '../SubComponents/Age/Senior'
import Mature from '../SubComponents/Age/Mature'
import Prime from '../SubComponents/Age/Prime'
import Junior from '../SubComponents/Age/Junior'
import Kitten from '../SubComponents/Age/Kitten'
import Female from '../SubComponents/Gender/Female'
import Male from '../SubComponents/Gender/Male'



const Navbar =() => {return(<div>
<BrowserRouter>
<header>
    <nav>
<h2>Pages</h2>
<Link to='/'>Home</Link>
<Link to='learncats'>Ideal cat</Link>
<Link to='maps'>Find cats</Link>
    </nav>
    <div>
    <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='learncats' element ={<Learncats/>}/>
        <Route path='catfacts' element ={<Catfacts/>}/>
        <Route path='catagedisplay' element ={<Catsagedisplay/>}/>
        <Route path='catgenders' element ={<Catgenders/>}/>
        <Route path='male' element ={<Male/>}/>
        <Route path='female' element ={<Female/>}/>
        <Route path='kitten' element ={<Kitten/>}/>
        <Route path='junior' element ={<Junior/>}/>
        <Route path='prime' element ={<Prime/>}/>
        <Route path='mature' element ={<Mature/>}/>
        <Route path='senior' element ={<Senior/>}/>
        <Route path='geriatric' element ={<Geriatric/>}/>
        <Route path='maps' element ={<Maps/>}/>
        

        </Routes>
    </div>
</header>
</BrowserRouter>
</div>)}

export default Navbar;

