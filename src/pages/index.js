import React from 'react';
import {Helmet} from "react-helmet";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import '../style.css';
import '../fontello.css';
import Button from 'react-bootstrap/Button';
import Sidebar from '../components/Sidebar';
import ReactPlayer from 'react-player'

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
                  <div className="col-md-10">
                    <div className="sideSpacer"></div>
                    <div className="ce">
                      <h1><div className="maskBlast"><span>CryptoBlast</span> <sup>TM</sup> <span>Energy Drink</span></div></h1>
                    </div>
                    <div className="row">
                      <div className="col-md-2"></div>
                      <div className="col-md-8">
                        <p className="ju">Be a part of the world’s first crypto backed energy drink available to purchase on Amazon.com. Fuel your rocket by drinking the tastiest and most refreshing beverage out there today!</p>
                      </div>
                      <div className="col-md-2"></div>
                    </div>
                    <div className="row">
                      <div className="col-md-1"></div>
                      <div className="col-md-9">
                        <div className="homePackageDesktopFix">
                          <div className="homePackage maxedImg"><img src="./homecrypto-image.webp" alt="CryptoBlast home package" /></div>
                        </div>
                      </div>
                      <div className="col-md-2"></div>
                    </div>
                    <div className="row">
                      <div className="col-md-2"></div>
                      <div className="col-md-8">
                        <h4 className="pureEnergy">Pure Energy</h4>
                      </div>
                      <div className="col-md-2"></div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <div class="cbt-tooltip tooltip-one aligner mb-1 pt-3 pb-0 pr-5 pl-5">
                          <h6 class="text-white">Vitamin B12</h6>
                          <p class="text-white">
                            Needed&nbsp;to form red blood cells and DNA. It is also a
                            key player in the function and development of brain
                            and nerve cells. Vitamin B12 binds to the protein in
                            the foods we eat.
                          </p>
                        </div>
                        <div class="cbt-tooltip tooltip-two aligner mb-1 pt-3 pb-0 pr-5 pl-5">
                          <h6 class="text-white">Vitamin B6</h6>
                          <p class="text-white">
                            Important for normal brain development and for
                            keeping the nervous system and immune system
                            healthy.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="maxedImg can-cbt-wrapper img-hover-zoom--point-zoom onlyDesktop"><img src="./can-cbt.webp" className="can-cbt" alt="CBT cans" /></div>
                        <div className="onlyMobile">
                          <div className="row">
                            <div className="col">
                              <div className="maxedImg can-cbt-wrapper">
                                <img src="./can-cbt.webp"  alt="CBT cans" />
                              </div>
                            </div>
                            <div className="col">
                              <div className="maxedImg can-cbt-wrapper">
                                <img src="./berry2.webp" width="50px" alt="berry cryptoblast can" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div class="cbt-tooltip tooltip-three aligner mb-1 pt-3 pb-0 pr-5 pl-5">
                          <h6 class="text-white">Caffeine</h6>
                          <p class="text-white">
                            Natural stimulant to the central nervous system that
                            quickly boosts our alertness and energy levels.
                          </p>
                        </div>
                        <div class="cbt-tooltip tooltip-four aligner mb-1 pt-3 pb-0 pr-5 pl-5">
                          <h6 class="text-white">Taurine</h6>
                          <p class="text-white">
                            Necessary for your organs and systems to function
                            well, including your nervous and immune systems.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mainVideoWrapper">
                          <ReactPlayer
                            width="100%"
                            height="100%"
                            playing
                            loop
                            muted
                            url={[
                              {src: './homepage-cbt.mp4', type: 'video/mp4'}
                            ]}
                          />
                        </div>
                      </div>
                    </div>
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
                  <div className="col-md-2 maxedImg">
                    <div className="sideSpacer"></div>
                    <img src="./berry2.webp" className="berry2can onlyDesktop" alt="berry cryptoblast can" />
                    <div className="circle"><div className="wave"></div></div>
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
