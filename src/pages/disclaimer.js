import React from 'react';
import {Helmet} from "react-helmet";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import '../style.css';
import '../fontello.css';
import Button from 'react-bootstrap/Button';
import Sidebar from '../components/Sidebar/disclaimer';

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
                      <h1><div className="titler"><span>CryptoBlast</span> Disclaimer</div></h1>
                    </div>
                    <div className="wallText">
                      <p>The information on this website is provided in good faith.</p>
                      <p>The CryptoBlast LLC team expressly disclaims any and all responsibility, and readers, investors, expressly waive all claim for any direct or indirect loss or damages of any kind (whether foreseeable or not) arising directly or indirectly from:</p>
                      <p>reliance on any information contained in this document or any information made available in connection with any further inquiries, <br />any error, or inaccuracy in this document, <br />any action resulting therefrom or <br />usage or acquisition of products.</p>
                      <p>The CryptoBlast LLC project purpose is only to enable $CBT holders to undertake actions within the CryptoBlast LLC platform. The CryptoBlast LLC project is not to be used by any individual resident and/or citizen of a country in which holding such Coins is illegal and/or in countries that consider coins and/or Coins as securities. It is the readers responsibility to know the laws relevant to their legal jurisdiction and ensure they are compliant at all times.</p>
                      <p>There are no guarantees that the CryptoBlast LLC project and/or platform will succeed financially. There is no inherent monetary value associated with the CryptoBlast LLC project.</p>
                      <p>The CryptoBlast LLC project reserves the right to require all platform participants submit verifiable identity and residence documentation at any time in order for the CryptoBlast LLC project to comply with Know Your Customer and Anti Money laundering responsibilities. This includes validation of identity & residence documentation with an authorized third-party supplier, as well as ongoing monitoring.</p>                      <p></p>
                      <p>This document is produced for educational and informational purposes only and is not intended to be used as a financial promotion. No information, data, or analysis presented are intended to form the basis of any investment decision.</p>
                      <p>This document is not investment advice, solicitation of any kind nor an endorsement. Nothing on this website should be construed as an offer or inducement to engage in any form of investing activity. This website is not a prospectus, invitation, inducement, or proposal for investment, nor is it meant to be a sale or issuance of securities, interests, or assets.</p>
                      <p>This material does not constitute any representation as to the suitability or appropriateness of any utility asset, financial product, or instrument. There is no guarantee that investment in the CryptoBlast LLC will be profitable or will not incur loss. This information does not have regard to the specific investment objectives, financial situation, and the needs of any specific person who may view its investor materials.</p>
                      <p>Investors should seek financial advice regarding the appropriateness of investing in any security or investment strategy discussed on this website and should understand that statements regarding prospects may not be realized. Investors should note that security values may fluctuate and that the $CBT price or value may rise or fall. Accordingly, investors may receive back less than originally invested.</p>
                      <p>Past performance is not a guide to future performance. Investing in any cryptocurrency involves certain risks called non diversifiable risk. These risks include market risk, interest-rate risk, inflation risk, and event risk. These risks are in addition to any specific, or diversifiable, risks associated with particular investment styles or strategies.</p>
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
