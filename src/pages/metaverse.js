import React from 'react';
import {Helmet} from "react-helmet";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import '../style.css';
import '../fontello.css';
import Button from 'react-bootstrap/Button';
import Sidebar from '../components/Sidebar/metaverse';

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
                      <h1><div className="titler"><span>MetaVerse</span> and <span>CryptoBlast</span></div></h1>
                    </div>
                    <div className="wallText">
                      <p>CryptoBlast will soon be an active partner in several Metaverses.</p>
                      <p>More exciting details to be confirmed once we have the necessary permission to officially announce partnerships and affiliations.</p>
                      <p><span>#CryptoBlastt #MettaVending #MetaBlastt</span></p>
                    </div>
                  </div>
                  <div className="col-md-3 maxedImg">
                    <div className="sideSpacer"></div>
                    <img src="./can-cbt.webp" className="maxedImg" alt="CBT cans" />
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
