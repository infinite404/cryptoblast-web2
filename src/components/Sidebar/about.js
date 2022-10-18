import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './style.css';
import '../../fontello.css';
import Button from 'react-bootstrap/Button';
import Sidebar from '../../components/Sidebar';


const Side = () => {
return (
  <div className="sideBar">
  <div className="row">
    <div className="col-md-12">
      <div className="sideSpacer"></div>
    </div>
  </div>
    <div className="row">
      <div className="col-md-12 paddingLeftTop30px">
        <a href="/">
          <div className="ew"><span>Home</span></div>
        </a>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 paddingLeftTop30px">
        <a href="/cryptocurrency">
          <div className="ew"><span>CryptoBlast Token</span></div>
        </a>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 paddingLeftTop30px">
        <a href="/nfts">
          <div className="ew"><span>NFTS</span></div>
        </a>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 paddingLeftTop30px">
        <a href="/metaverse">
          <div className="ew"><span>Metaverse</span></div>
        </a>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 paddingLeftTop30px">
        <a href="/merchandise">
          <div className="ew"><span>Shop</span></div>
        </a>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 paddingLeftTop30px">
        <a href="/faq">
          <div className="ew"><span>FAQ</span></div>
        </a>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 paddingLeftTop30px">
        <a href="/about">
          <div className="ew activeEw"><span>About CBT</span></div>
        </a>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 paddingLeftTop30px">
        <a href="/disclaimer">
          <div className="ew"><span>Disclaimer</span></div>
        </a>
      </div>
    </div>
  </div>
);
};

export default Side;
