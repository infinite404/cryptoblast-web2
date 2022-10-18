import React from 'react';
import {Helmet} from "react-helmet";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import '../style.css';
import '../fontello.css';
import Button from 'react-bootstrap/Button';
import Sidebar from '../components/Sidebar/shop';

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
                      <h1><div className="titler"><span>CryptoBlast</span> Shop</div></h1>
                    </div>
                    <div className="wallText">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in neque malesuada, finibus magna id, interdum dui. Donec iaculis velit eu tellus pretium, id volutpat erat molestie. Vivamus placerat fringilla eros, quis semper lacus lacinia vitae. Vivamus convallis eu nunc in congue. Pellentesque magna ipsum, interdum in congue in, vehicula ut nisl. Nulla dictum egestas neque, vel suscipit neque faucibus dapibus. Donec ac interdum magna, a iaculis turpis. Nullam pretium lacus ex, quis dictum dui bibendum ut. Nullam pellentesque, nibh sit amet euismod congue, lacus mauris rhoncus sapien, hendrerit tristique nibh dui in mi. Vestibulum vitae vehicula velit. Suspendisse vitae elit tellus. Cras vestibulum hendrerit nunc. Morbi lacus velit, congue eu facilisis eget, fringilla id risus.</p>
                      <p>Aenean ut tortor pulvinar, elementum odio quis, efficitur mauris. Vestibulum placerat magna et orci viverra, in suscipit turpis lacinia. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent commodo orci a velit facilisis semper. Donec tempus commodo felis ac efficitur. Donec vestibulum pellentesque aliquet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent quis vehicula diam. Cras neque sem, tincidunt sed bibendum at, mattis vel est. Integer congue enim justo, at rutrum nulla imperdiet lobortis. Duis elementum quam sed varius tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                      <p>Vestibulum luctus felis eget magna suscipit, eu tincidunt sapien aliquet. Phasellus aliquam eu erat a vehicula. Cras sed tempor erat. Sed laoreet mi felis, porttitor ultricies libero blandit sit amet. Cras eu sem vel quam tristique interdum. Suspendisse egestas consectetur dui, non aliquam orci pulvinar sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce porta libero at nisi blandit molestie eget a ipsum. Etiam luctus magna vitae diam pretium, et dictum lacus iaculis. Nullam vitae ligula eget neque consectetur cursus.</p>
                    </div>
                    <button className="btn btn-visit-shop text-white text-uppercase noBorder" type="button">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-shop-window mr-2 pb-1" viewBox="0 0 16 16">
                        <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z"></path>
                      </svg>
                      <a href="https://cryptoblastshop.com/">Visit Shop</a>
                    </button>
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
