import React from 'react';
import {Helmet} from "react-helmet";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import '../style.css';
import '../fontello.css';
import Button from 'react-bootstrap/Button';
import Sidebar from '../components/Sidebar/nfts';

const Home = () => {
  return (
    <div>
      <Helmet>
        <link rel="stylesheet" href="./fontello.css" />
        <link rel="stylesheet" href="./style.css" />
      </Helmet>
      <Container>
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-9">
                    <div className="sideSpacer"></div>
                    <div className="ce">
                      <h1><div className="titler"><span>CryptoBlast</span> NFTs Vending Machine</div></h1>
                    </div>
                    <div className="wallText">
                      <p>in development</p>
                      <p>estimated time of release is 4th of July</p>
                    </div>
                  </div>
                  <div className="col-md-3 maxedImg">
                    <div className="sideSpacer"></div>
                    <img src="./can-cbt.webp" className="maxedImg" alt="CBT cans" />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-6 ce">
                    <div className="sideSpacer"></div>
                    <span className="blueFont">All rights reserved.</span>
                  </div>
                  <div className="col-md-6 ce">
                    <div className="sideSpacer"></div>
                    <a href="mailto:cryptoblastenergydrink@usa.com" className="cbtMail">cryptoblastenergydrink@usa.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
