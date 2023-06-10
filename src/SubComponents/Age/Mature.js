import React from "react";
import { useNavigate } from "react-router-dom";

const Mature =() => {
    let navigate= useNavigate()
    return(<div className="container">
    <div className="contents">
    <h1 className="tc">Mature</h1>
    <h3 className="tc navy f3">Temperament:</h3>
        <p>
           Suspendisse in est ante in nibh. A condimentum
          vitae sapien pellentesque habitant morbi tristique senectus. Cras
          pulvinar mattis nunc sed blandit. Augue eget arcu dictum varius.
          Faucibus scelerisque eleifend donec pretium vulputate sapien nec
          sagittis. Etiam erat velit scelerisque in dictum non consectetur.
          Morbi leo urna molestie at elementum. Blandit cursus risus at ultrices
          mi tempus imperdiet. Justo nec ultrices dui sapien. Tincidunt tortor
          aliquam nulla facilisi cras fermentum odio. At quis risus sed
          vulputate. Lobortis mattis aliquam faucibus purus in massa.
          Suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Ut
          sem viverra aliquet eget. Malesuada nunc vel risus commodo viverra
          maecenas. Ultricies leo integer malesuada nunc vel risus commodo
          viverra.
        </p>

        <h3 className="tc f3 navy">Special care:</h3>
        <p>
          Suspendisse in est ante in nibh. A condimentum vitae
          sapien pellentesque habitant morbi tristique senectus. Cras pulvinar
          mattis nunc sed blandit. Augue eget arcu dictum varius. Faucibus
          scelerisque eleifend donec pretium vulputate sapien nec sagittis.
          Etiam erat velit scelerisque in dictum non consectetur. Morbi leo urna
          molestie at elementum. Blandit cursus risus at ultrices mi tempus
          imperdiet. Justo nec ultrices dui sapien. Tincidunt tortor aliquam
          nulla facilisi cras fermentum odio. At quis risus sed vulputate.
          Lobortis mattis aliquam faucibus purus in massa. Suspendisse potenti
          nullam ac tortor vitae purus faucibus ornare. Ut sem viverra aliquet
          eget. Malesuada nunc vel risus commodo viverra maecenas. Ultricies leo
          integer malesuada nunc vel risus commodo viverra.
        </p>
       <h3 className="tc f3 navy">Diet:</h3>
        <p>
           Egestas integer eget aliquet nibh praesent tristique magna sit
          amet. Ullamcorper a lacus vestibulum sed arcu non odio euismod.
          Dignissim suspendisse in est ante in nibh mauris. Suspendisse sed nisi
          lacus sed viverra. Nulla facilisi etiam dignissim diam quis enim
          lobortis scelerisque fermentum. Sagittis purus sit amet volutpat
          consequat mauris nunc congue nisi. Morbi tristique senectus et netus
          et malesuada fames ac turpis. Est lorem ipsum dolor sit amet.
          Venenatis tellus in metus vulputate eu scelerisque felis. Massa
          tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin.
          Donec pretium vulputate sapien nec sagittis aliquam. Elementum tempus
          egestas sed sed. Sed adipiscing diam donec adipiscing tristique risus
          nec feugiat. A iaculis at erat pellentesque adipiscing. Sit amet dictum
          sit amet. Odio euismod lacinia at quis risus sed vulputate odio ut.
          Velit aliquet sagittis id consectetur purus ut faucibus pulvinar.
        </p>
      <h3 className="tc navy f3">Pros:</h3>
        <p>
          Egestas integer eget aliquet nibh praesent tristique magna sit
          amet. Ullamcorper a lacus vestibulum sed arcu non odio euismod.
          Dignissim suspendisse in est ante in nibh mauris. Suspendisse sed nisi
          lacus sed viverra. Nulla facilisi etiam dignissim diam quis enim
          lobortis scelerisque fermentum. Sagittis purus sit amet volutpat
          consequat mauris nunc congue nisi. Morbi tristique senectus et netus
          et malesuada fames ac turpis. Est lorem ipsum dolor sit amet.
          Venenatis tellus in metus vulputate eu scelerisque felis. Massa
          tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin.
          Donec pretium vulputate sapien nec sagittis aliquam. Elementum tempus
          egestas sed sed. Sed adipiscing diam donec adipiscing tristique risus
          nec feugiat. A iaculis at erat pellentesque adipiscing. Sit amet dictum
          sit amet. Odio euismod lacinia at quis risus sed vulputate odio ut.
          Velit aliquet sagittis id consectetur purus ut faucibus pulvinar.
        </p>
        <h3 className="tc f3 navy">cons:</h3>
        <p>
         Egestas integer eget aliquet nibh praesent tristique magna sit
          amet. Ullamcorper a lacus vestibulum sed arcu non odio euismod.
          Dignissim suspendisse in est ante in nibh mauris. Suspendisse sed nisi
          lacus sed viverra. Nulla facilisi etiam dignissim diam quis enim
          lobortis scelerisque fermentum. Sagittis purus sit amet volutpat
          consequat mauris nunc congue nisi. Morbi tristique senectus et netus
          et malesuada fames ac turpis. Est lorem ipsum dolor sit amet.
          Venenatis tellus in metus vulputate eu scelerisque felis. Massa
          tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin.
          Donec pretium vulputate sapien nec sagittis aliquam. Elementum tempus
          egestas sed sed. Sed adipiscing diam donec adipiscing tristique risus
          nec feugiat. A iaculis at erat pellentesque adipiscing. Sit amet dictum
          sit amet. Odio euismod lacinia at quis risus sed vulputate odio ut.
          Velit aliquet sagittis id consectetur purus ut faucibus pulvinar.
        </p>
<button onClick={()=>{navigate('/learncats')}}>All catergories</button>
<button  className="ml3" onClick={()=>{navigate('/prime')}}>back</button>
<button className="ml3" onClick={()=>{navigate('/senior')}}>Next</button>
</div>
</div>)}

export default Mature;