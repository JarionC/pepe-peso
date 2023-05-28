import React, { Component } from 'react';
import '../styles/home.css';
import AudioContext from '../AudioContext';
import Visualizer from './visualizer';

class HomePage extends Component {
    static contextType = AudioContext;
  

    constructor() {
        super();
        this.state = {
          showText: false,
        };
      }
    
      toggleText = () => {
        this.setState({ showText: !this.state.showText });
      };

  render() {
    const { isMuted, toggleAudio } = this.context;
    
    const contractAddress = "TBA"
    const ownerAddress = "TBA";
    const liquidityAirdropWallet = "0xC543B571FfA82C22F657C35424a208ceAdE43D84";
    const communityAirdropWallet = "0xcaf2608C3100E234059D0330b73133F86468248E";
    const exchangeWallet = "0x5815Dce1d0fdc4b9989c48DC69b1d0107cBFFDEf";
    return (
        <div className="wrapper">
            <div className="container">
                <div className="intro">
                <div className="media-container">
                    <div className="main-title"><span className="title-the">The</span>Pepe Peso</div>
                    <div className="main-img">
                    <Visualizer classNames={['audio-img one', 'audio-img two', 'audio-img three', 'audio-img four', 'audio-img five']} className="visualizer-container" />

                   
                    </div>
                    <a  style={{ pointerEvents: 'none'}} class="swap-link" target="_blank" href="https://pancakeswap.finance/swap?outputCurrency=0x73b745daAe667dFF081C3FE746C52142d338d467&inputCurrency=BNB">
                    <div className="main-btn">
                        <div className="pancake-img"></div>
                       <div className="btn-text">Launch Incoming!</div>
                        </div>
                        </a> 
                </div>
                <div className="text-container">
                    <div className="title"> The Pepe Peso: Crossing borders, breaking down walls, and turning lazy afternoons into a goldmine!</div>
                    <div className="body">
                    Welcome, amigo, to the vibrant world of Pepe Pesos! Ever dreamt of crossing the border of mediocrity, smashing through the walls of the mundane, and chilling on a beach with a burrito, all while your Pepe Pesos pile up? You're at the right place! We're taking the fun of Mexican culture and blending it with the exciting universe of crypto. So, get ready to work hard, relax harder, and let's make some Pesos together!
                    <br></br><br></br>

                    </div>

                        
                    
                    <div className="social-container">
                        <a className="twitter-link" href="https://twitter.com/Pepe_Peso" target="_blank">
                            <div className="twitter-container">

                            </div>
                        </a>
                        <a className ="telegram-link" href="https://t.me/pepepeso" target="_blank">
                            <div className="telegram-container">

                            </div>
                        </a>
                        <a className ="bscscan-link" href="https://bscscan.com/" target="_blank">
                            <div className="bscscan-container">

                            </div>
                        </a>
                        <a className ="dextools-link" href="https://www.dextools.io/" target="_blank">
                            <div className="dextools-container">

                            </div>
                        </a>
                    </div>
                </div>
                </div>
                
            </div>

            <div className="container-two">
                <div className="title-two">
                Crossing Borders: The Pepe Peso Roadmap
                </div>
                <div className="crossing-img"></div>
                <div className="subtitle">
                Ready for a sneak peek at what's coming up? You can see our Roadmap below, but remember, the path and eventual ecosystem of The Pepe Peso will be determined by the community. If you want to support and help us plan the rest of our journey, please join us in Telegram!
                </div>
                <div className="inner-two">
                    <div className="roadmap-section one">
                        <div className="roadmap-title">Phase 1</div>
                        <ul className="roadmap-list">
                            <li className="roadmap-list-item">Launch</li>
                            <li className="roadmap-list-item">2500+ Holders</li>
                            <li className="roadmap-list-item">Get $PESO Trending on social media</li>
                            <li className="roadmap-list-item">CoinGecko/CoinMarketCap Listings</li>
                        </ul>
                        <div className="taco-one-img"></div>
                    </div>
                    <div className="roadmap-section two">
                    <div className="roadmap-title">Phase 2</div>
                        <ul className="roadmap-list">
                            <li className="roadmap-list-item">First CEX Listings</li>
                            <li className="roadmap-list-item">Start Cultural Appreciation Program</li>
                            <li className="roadmap-list-item">Begin development of an ecosystem fueled by $PESO </li>
                        </ul>
                        <div className="taco-two-img"></div>
                    </div>
                    <div className="roadmap-section three">
                    <div className="roadmap-title">Phase 3</div>
                        <ul className="roadmap-list">        
                            <li className="roadmap-list-item">Launch our $PESO fueled ecosystem</li>
                            <li className="roadmap-list-item">100,000+ Holders</li>
                            <li className="roadmap-list-item">T1 Exchange Listing</li>
                        </ul>
                        <div className="taco-three-img"></div>
                    </div>
            </div>
        </div>

        <div className="container-four">
            <div className="title-four">
            Diving In: How to Buy Your Pepe Pesos
            </div>
            <div className="diving-img"></div>
                <div className="subtitle">
                Ready to dive into the Pepe Peso pool? Buying Pepe Pesos is as easy as ordering a taco at a beachside shack!
                </div>
                <div className="buy-steps-container">
                <div className="buy-step one">
                    <div className="step-img"></div>
                    <div className="step-title">
                        1. Prep Your Wallet, Amigo
                    </div>
                    <div className="step-body">
                        First things first, man. You gotta set up a crypto wallet. MetaMask or Trust Wallet, they're both solid choices and they get along real well with Binance Smart Chain. You can snag them from the App Store or Google Play. If you're rocking a desktop, the MetaMask Chrome extension from MetaMask.io is your ticket.
                    </div>
                </div>
                <div className="buy-step two">
                    <div className="step-img"></div>
                    <div className="step-title">
                        2. Load Up on BNB
                    </div>
                    <div className="step-body">
                        To score some $PESO, you'll need BNB in your wallet. You can score some BNB straight in MetaMask, move it from another wallet, or buy it on an exchange and slide it into your wallet. And don't forget, man, you gotta be riding the Binance Smart Chain network.
                    </div>
                </div>
                <div className="buy-step three">
                    <div className="step-img"></div>
                    <div className="step-title">
                        3. Hook Up with PancakeSwap or Coinbrain
                    </div>
                    <div className="step-body">
                        You can connect directly to PancakeSwap or Coinbrain. If you're using a different browser, just make sure you're on the official Coinbrain or PancakeSwap site, pick the token, and paste in the official $PESO token address: ___. Keep it safe, keep it legit.
                    </div>
                </div>
                <div className="buy-step four">
                    <div className="step-img"></div>
                    <div className="step-title">
                        4. Trade BNB for $PESO
                    </div>
                    <div className="step-body">
                        Once you're loaded with BNB, you can swap it for $PESO. Just remember to keep enough BNB for those gas fees, man. Check the transaction details, and when you're all set, hit confirm. And boom, you're in the $PESO club! Welcome to the fiesta of financial freedom, amigo.
                    </div>
                </div>
            </div>
        </div>
        <div className="frame-container">
            <div className="frame-holder">
            <iframe width="100%" height="640" frameborder="0" scrolling="no" src="https://coinbrain.com/embed/trade?theme=custom&amp;accent=79b053&amp;background=ffffff&amp;padding=16&amp;chainId=56&amp;inputAddress=0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c&amp;outputAddress=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"></iframe>
            </div>
        </div>

       
        <div className="container-three">
                <div className="title-three">
                Breaking Walls: The Pepe Peso Tokenomics
                </div>
                <div className="subtitle">
                Pepe Peso isn’t just about kicking back with a taco in hand, it's about putting in the work and watching your wealth grow. Our tokenomics are as satisfying as a well-earned quesadilla after a day of hard labor. We’re talking fair distribution, no taxes, and a rewarding system that treats everyone like a Mariachi star. At Pepe Peso, we know the value of hard work - and the joy of lazing around counting your earnings!
                </div>
                <div className="inner-three">
                    <div className="token-ppp-two">
                        <div className="roadmap-section toke">
                                <div className="roadmap-list-item">
                                    {"Contract Addr : " + contractAddress}
                                </div>
                        </div>
                        <div className="roadmap-section toke">
                                <div className="roadmap-list-item">
                                    {"Owner Addr : " + ownerAddress}
                                </div>
                        </div>
                        
                    </div>
                    <div className="roadmap-section token">
                        <ul className="roadmap-list tokenomics">
                        <li className="roadmap-list-item">Total Supply : 430000000000000</li>
                            <li className="roadmap-list-item">NO TAXES - In honor of the great Mexican Dream.</li>
                            <li className="roadmap-list-item">100% of $PESO goes to the pool!</li>
                           </ul>
                        
                    </div>
                    
                    <div className="roadmap-section token">
                    <ul className="roadmap-list tokenomics"> 
                            <li className="roadmap-list-item">The $PESO will be fuel our eventual ecosystem</li>
                            <li className="roadmap-list-item">Initial LP tokens will be locked! (Exact Lock Period is TBA but we're in it for the long haul!)</li>
                        </ul>
                        </div>
                </div>
        </div>
        <div className="container-disclaimer">
        <div className="roadmap-section disclaimer" >
        Pepe Peso, while embodying the vibrant spirit of Mexican culture, does not claim any formal affiliation with any specific entity, organization, or individual that might be associated with the Pepe meme or Mexican cultural elements. Our token is a salute to these cultural motifs that harmonize with our zeal for financial growth and community engagement.
        <br></br><br></br>
        Pepe Peso is a meme token designed to encapsulate the fun and celebration associated with the cultural elements it represents. It does not inherently hold any value or guarantee financial returns. While we do have an enthusiastic team and a roadmap, the token is fundamentally a symbol of community spirit and amusement in the crypto landscape. Remember, amigos: Enjoy the fiesta with Pepe Peso, but always dance responsibly!

        </div>
        </div>

        <div className="beach-img"></div>
      </div>
    );
  }
}

export default HomePage;
