import React from 'react';
import  ReactDOM from  'react-dom/client';
import "./style.css";
import Abc, {Contactus, Mypage} from './About';
import Mybootstrap from './Mybootstrap';
import  Myreactbootstrap from './Myreactbootstrap';
import MyMUIpage from './MyMUIpage';

const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(
   <React.StrictMode>
    <Abc></Abc>
    <Contactus></Contactus>
    <Mypage></Mypage>
    <Mybootstrap></Mybootstrap>
    <Myreactbootstrap></Myreactbootstrap>
    <MyMUIpage></MyMUIpage>
   </React.StrictMode>
 );





