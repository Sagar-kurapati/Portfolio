import React from 'react';
import "./Skiils.css";
import image from '../../../assets/Home/sample.jpg';
import pic from'../../../assets/Home/python.jfif';
import pic1 from'../../../assets/Home/c.png';
import pic2 from'../../../assets/Home/c++.png';
import pic3  from'../../../assets/Home/c#.png';
import pic4  from'../../../assets/Home/html.png';
import pic5  from'../../../assets/Home/mysql.png';
import pic6  from'../../../assets/Home/php.png';
import pic7 from'../../../assets/Home/css.png';
import pic8 from'../../../assets/Home/reactjs.png';

export default function Skills() {
  return (
  <div className="skills">
    <h1>Programming skills</h1>
    <div className="blank">
    <table>
        <tr>

        </tr>
        <tr>
            <td><h3><b></b></h3></td>
        </tr>
        <tr>
        <td><h3><b>*Python</b></h3></td>
        <td><img src={pic} alt='123' style={{height:"80px",width:"100px" }}/></td>
            <td><h3><b>* C language</b></h3></td>
            <td><img src={pic1} alt='123' style={{height:"80px",width:"100px" }}/></td>
        </tr>
        <tr>
        <td><h3><b>* C++</b></h3></td>
        <td><img src={pic2} alt='123' style={{height:"80px",width:"100px" }}/></td>
        <td><h3><b>*C#</b></h3></td>
        <td><img src={pic3} alt='123' style={{height:"80px",width:"100px" }}/></td>
        </tr>
        <tr>
        <td><h3><b>* Html</b></h3></td>
        <td><img src={pic4} alt='123' style={{height:"80px",width:"100px" }}/></td>
        <td><h3><b>*CSS</b></h3></td>
        <td><img src={pic7} alt='123' style={{height:"80px",width:"100px" }}/></td>
        </tr>
        <tr>
        <td><h3><b>* MySQL</b></h3></td>
        <td><img src={pic5} alt='123' style={{height:"80px",width:"100px" }}/></td>
        <td><h3><b>*PHP</b></h3></td>
        <td><img src={pic6} alt='123' style={{height:"80px",width:"100px" }}/></td>
        </tr>
        <tr>
        <td><h3><b>* React Js</b></h3></td>
        <td><img src={pic8} alt='123' style={{height:"80px",width:"100px" }}/></td>
        <td><h3><b></b></h3></td>
        </tr>
    </table>
    </div>
     
  </div>
  );
}
