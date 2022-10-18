import React from 'react';
import {Helmet} from "react-helmet";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import '../style.css';
import '../fontello.css';
import Button from 'react-bootstrap/Button';
import Sidebar from '../components/Sidebar/cryptocurrency';

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
                      <h1><div className="titler"><span>CryptoBlast</span> <sup>TM</sup> <span>Token</span></div></h1>
                    </div>
                    <div className="wallText">
                      <p>Our $CBT token is available to buy on Binance Smart Chain (BSC) #CryptoBlastt</p>
                      <p><span>$CBT Contract Address</span> <br />0x0853eABE53157D911E0137a9ef987874289ae9d0</p>
                      <p>Buy using the PancakeSwap button or Send BSC from your DEFI wallet to our swapper address for $CBT tokens direct to your wallet</p>
                      <p><span>Swapper Address:</span> <br />0xcE01037886595e03FBf54762fE7288b09C521B9A</p>
                      <p><span>Reasons to buy the CryptoBlast™ Token:</span> <br />Crypto fuelled energy drink available to buy on Amazon.com <br />Partnership with a large North American distributor <br />30% net profit returned to $CBT holders <br />Passive income via ADA (Cardano) rewards <br />THE energy drink of the Metaverse <br />Free $CBT Mythic NFT to holders</p>
                      <p className="purple-color cbt-xxl-text cbt-purple-highlighter">TASTE.HOLD.EARN</p>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <button type="button" className="btn btn-poocoin remove-border-radius text-white smallFont font-large text-uppercase mt-3 paddingLeft20px"><a href="https://poocoin.app/tokens/0x0853eabe53157d911e0137a9ef987874289ae9d0" className="text-white poocoin-link"> Buy On Poocoin</a></button>
                      </div>
                      <div className="col-md-3">
                        <button type="button" className="btn btn-view-chart noBorder ml-3 mt-3 text-uppercase">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-graph-up-arrow mr-2" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"></path>
                          </svg>
                          <a href="https://charts.bogged.finance/?c=bsc&amp;t=0x0853eABE53157D911E0137a9ef987874289ae9d0" className="view-chart-link">  View Chart</a>
                        </button>
                      </div>
                      <div className="col-md-6"></div>
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
