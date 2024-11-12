import React from 'react';
import '../products/style.css';
import Tanker from '../products/tanker/index.jsx';
import Transport from '../products/transport/index.jsx';
import Rescue from '../products/rescue/index.jsx';
import Garbage from '../products/garbage/index.jsx';
import Engineering from '../products/engineering/index.jsx';
import Ecological from '../products/ecological/index.jsx';
import { Link, Route, Routes } from 'react-router-dom';

const Products = () => {
  return (
    <>

    <Routes>
        <Route path='/tanker' element={<Tanker/>}/>
        <Route path='/transport' element={<Transport/>}/>
        <Route path='/rescue' element={<Rescue/>}/>
        <Route path='/garbage' element={<Garbage/>}/>
        <Route path='/engineering' element={<Engineering/>}/>
        <Route path='/ecological' element={<Ecological/>}/>
    </Routes>

    <div className='products_title'>
      <h1>Products</h1>
    </div>


    <div className='products_nav'>
      <ul>
        <li><Link to="/tanker">Tanker truck</Link></li>
        <li><Link to="/ecological">Ecological truck</Link></li>
        <li><Link to="/garbage">Garbage truck</Link></li>
        <li><Link to="/rescue">Rescue truck</Link></li>
        <li><Link to="/engineering">Engineering truck</Link></li>
        <li><Link to="/transport">Transport truck</Link></li>
      </ul>
    </div>

    <div className='products_tanker'>
    <aside className='trucks_shop'>
        <h1>Tanker truck</h1>
        <div className='trucks_container'>
            <div className='truck'>
                <div></div>
                <a href="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat vel deserunt</a>
                <p>$ 54,300.00</p>
            </div>
            <div className='truck'>
                <div></div>
                <a href="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat vel deserunt</a>
                <p>$ 54,300.00</p>
            </div>
            <div className='truck'>
                <div></div>
                <a href="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat vel deserunt</a>
                <p>$ 54,300.00</p>
            </div>
            <div className='truck'>
                <div></div>
                <a href="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat vel deserunt</a>
                <p>$ 54,300.00</p>
            </div>
        </div>
    </aside>
    </div>

    <div className='products_ecological'>
      <aside className='trucks_shop'>
        <h1>Ecological truck</h1>
        <div className='trucks_container'>
            <div className='truck'>
                <div></div>
                <a href="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat vel deserunt</a>
                <p>$ 54,300.00</p>
            </div>
            <div className='truck'>
                <div></div>
                <a href="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat vel deserunt</a>
                <p>$ 54,300.00</p>
            </div>
            <div className='truck'>
                <div></div>
                <a href="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat vel deserunt</a>
                <p>$ 54,300.00</p>
            </div>
            <div className='truck'>
                <div></div>
                <a href="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat vel deserunt</a>
                <p>$ 54,300.00</p>
            </div>
        </div>
    </aside>
    </div>

    <div className='products_garbage'>
      <aside className='trucks_shop'>
        <h1>Garbage truck</h1>
        <div className='trucks_container'>
            <div className='truck'>
                <div></div>
                <a href="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat vel deserunt</a>
                <p>$ 54,300.00</p>
            </div>
            <div className='truck'>
                <div></div>
                <a href="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat vel deserunt</a>
                <p>$ 54,300.00</p>
            </div>
            <div className='truck'>
                <div></div>
                <a href="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat vel deserunt</a>
                <p>$ 54,300.00</p>
            </div>
            <div className='truck'>
                <div></div>
                <a href="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat vel deserunt</a>
                <p>$ 54,300.00</p>
            </div>
        </div>
    </aside>
    </div>

    <div className='products_rescue'>
      <aside className='trucks_shop'>
        <h1>Rescue truck</h1>
        <div className='trucks_container'>
            <div className='truck'>
                <div></div>
                <a href="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat vel deserunt</a>
                <p>$ 54,300.00</p>
            </div>
            <div className='truck'>
                <div></div>
                <a href="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat vel deserunt</a>
                <p>$ 54,300.00</p>
            </div>
            <div className='truck'>
                <div></div>
                <a href="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat vel deserunt</a>
                <p>$ 54,300.00</p>
            </div>
            <div className='truck'>
                <div></div>
                <a href="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat vel deserunt</a>
                <p>$ 54,300.00</p>
            </div>
        </div>
    </aside>
    </div>

    <div className='products_engineering'>
      <aside className='trucks_shop'>
        <h1>Engineering truck</h1>
        <div className='trucks_container'>
            <div className='truck'>
                <div></div>
                <a href="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat vel deserunt</a>
                <p>$ 54,300.00</p>
            </div>
            <div className='truck'>
                <div></div>
                <a href="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat vel deserunt</a>
                <p>$ 54,300.00</p>
            </div>
            <div className='truck'>
                <div></div>
                <a href="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat vel deserunt</a>
                <p>$ 54,300.00</p>
            </div>
            <div className='truck'>
                <div></div>
                <a href="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat vel deserunt</a>
                <p>$ 54,300.00</p>
            </div>
        </div>
    </aside>
    </div>

    <div className='products_transport'>
      <aside className='trucks_shop'>
        <h1>Transport truck</h1>
        <div className='trucks_container'>
            <div className='truck'>
                <div></div>
                <a href="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat vel deserunt</a>
                <p>$ 54,300.00</p>
            </div>
            <div className='truck'>
                <div></div>
                <a href="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat vel deserunt</a>
                <p>$ 54,300.00</p>
            </div>
            <div className='truck'>
                <div></div>
                <a href="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat vel deserunt</a>
                <p>$ 54,300.00</p>
            </div>
            <div className='truck'>
                <div></div>
                <a href="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat vel deserunt</a>
                <p>$ 54,300.00</p>
            </div>
        </div>
    </aside>
    </div>

    </>
  )
}

export default Products