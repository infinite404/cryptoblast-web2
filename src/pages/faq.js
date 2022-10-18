import React from 'react';
import {Helmet} from "react-helmet";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import '../style.css';
import '../fontello.css';
import Button from 'react-bootstrap/Button';
import Sidebar from '../components/Sidebar/faq';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

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
                      <h1><div className="titler"><span>CryptoBlast</span> FAQ</div></h1>
                    </div>
                    <Accordion>
                        <AccordionItem key="1">
                          <AccordionItemHeading>
                            <AccordionItemButton>
                              What is CryptoBlast token?
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            Discover our collections of NFTs in large marketplaces like Opensea , Rarible and others. Get NFTs and earn most of it by drinking more
                          </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem key="2">
                          <AccordionItemHeading>
                            <AccordionItemButton>
                              How to get rewards from CryptoBlast Drink?
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            Discover our collections of NFTs in large marketplaces like Opensea , Rarible and others. Get NFTs and earn most of it by drinking more
                          </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem key="3">
                          <AccordionItemHeading>
                            <AccordionItemButton>
                              Can I purchase from Amazon store?
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            Yes
                          </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
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
