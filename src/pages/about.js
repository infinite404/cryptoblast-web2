import React from 'react';
import {Helmet} from "react-helmet";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import '../style.css';
import '../fontello.css';
import Button from 'react-bootstrap/Button';
import Sidebar from '../components/Sidebar/about';

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
                      <h1><div className="titler">About <span>CryptoBlast</span></div></h1>
                    </div>
                    <div className="wallText">
                      <p>We are a crypto fuelled legally registered (LLC) energy drink company. Unlike 90% of cryptocurrencies out there, we are recession proof and bear market proof. Everyone knows an energy drink guzzling family member, friend or colleague right?</p>
                      <p>CryptoBlast is not reliant on a chart that can easily be manipulated leading investors to lose their hard earned money. We believe that future success in the crypto sphere will largely be determined by their real world utility. Guess what? We already have that!! A real TANGIBLE product you can HOLD and TASTE right now!!! Where else in crypto - or the real world for that matter - can you find what you are about to ready next…?</p>
                      <p>A MASSIVE 30% of our net profits from our energy drinks and merchandise store will be returned back to the $CBT token. You will also earn passive income via $ADA (Cardano) rewards just by holding our token.</p>
                      <p>We are continuously looking at creating multiple revenue and income streams for our holders including – but in no way restricted to - NFTs with UTILITY, Metaverse participation, Staking $CBT as well as allowing ANY other crypto token or company in the world to advertise with us.</p>
                      <p>CryptoBlast is a truly unique project aimed at giving back to our followers. This is YOUR chance to invest in a project that WILL DISRUPT the worldwide energy drink industry!</p>
                      <p>We currently have one product available to purchase directly from Amazon.com. However, the short term plan is to create a healthier, sugar free version loaded with all the natural goodness we have come to expect in this ever increasing health conscious world we live in today. More flavors will be available in due course. Rest assured – your favourite flavor will be coming soon.</p>
                      <p>Longer term, Cryptoblast is far from content on confining itself to being a crypto energy drink company. We are committed to bring your favourite products to the market all under the CryptoBlast range. These will include energy shots, energy powder mixes, gummies and even chewing gum – all loaded with enough fuel to power your day!</p>
                      <p>We have also partnered with a North American beverage distributor which will shortly allow you purchase CryptoBlast Energy drink in the retail outlets that you all know and love. This really is just the beginning.</p>
                      <p>Finally – and by no means least – it would be an almighty travesty not to thank our loyal holders who have stuck with us through the highs and lows of our journey so far. The term “diamond hands” is really overused in the cryptoverse. They have understood what we are trying to achieve here and that success does not come overnight or even overmonths.</p>
                      <p>CryptoBlast is a business with real world utility whilst also implementing the (current) best of DEFI. We know we have the very best of that diamond cut and would absolutely love each and every one of you potential investors contemplating an investment to join us and experience first hand what our holders have experienced and are about to experience. The foundation has been built from the bottom up providing us with a solid base to set out what we want to achieve.</p>
                      <p>That being said, this is not financial advice and we implore you to DYOR (Do Your Own Research).</p>
                    </div>
                    <button className="btn btn-join-telegram text-white text-uppercase remove-borders remove-border-radius mt-5" type="button">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" className="bi bi-send-fill mr-2" viewBox="0 0 16 16">
                        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"></path>
                      </svg>
                      <a href="https://t.me/CRYPTO_BLAST_TOKEN">Join Telegram</a>
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
