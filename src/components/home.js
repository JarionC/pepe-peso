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
    return (
        <div className="wrapper">
            <div className="container">
                <div className="intro">
                <div className="media-container">
                    <div className="main-title"><span className="title-the">The</span>Pepe Peso</div>
                    <div className="main-img">
                    <Visualizer classNames={['audio-img one', 'audio-img two', 'audio-img three', 'audio-img four', 'audio-img five']} className="visualizer-container" />

                   
                    </div>
                    <div className="main-btn">
                        <div className="pancake-img"></div>
                       <div className="btn-text">Buy on PancakeSwap Soon</div> 
                        </div>
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
                Ready for a sneak peek at what's coming up? Our roadmap is all about making waves and crossing borders, with the fun of a mariachi band and the thrill of a nighttime border dash. We've got plans to grow our community, broaden our horizons, and partner with some cultural hotspots. So, buckle up for a wild ride with Pepe Pesos, where we turn a lazy beach day into a wallet-fattening fiesta!
                </div>
                <div className="inner-two">
                    <div className="roadmap-section one">
                        <div className="roadmap-title">Phase 1</div>
                        <ul className="roadmap-list">
                            <li className="roadmap-list-item">Launch</li>
                            <li className="roadmap-list-item">2500+ Holders</li>
                            <li className="roadmap-list-item">Get $PPP Trending on social media</li>
                            <li className="roadmap-list-item">CoinGeck/CoinMarketCap Listings</li>
                        </ul>
                        <div className="taco-one-img"></div>
                    </div>
                    <div className="roadmap-section two">
                    <div className="roadmap-title">Phase 2</div>
                        <ul className="roadmap-list">
                            <li className="roadmap-list-item">Start The $PPP Newsletter</li>
                            <li className="roadmap-list-item">First CEX Listings</li>
                            <li className="roadmap-list-item">Start Cultural Appreciation and Donation Program</li>
                        </ul>
                        <div className="taco-two-img"></div>
                    </div>
                    <div className="roadmap-section three">
                    <div className="roadmap-title">Phase 3</div>
                        <ul className="roadmap-list">
                            <li className="roadmap-list-item">Physical Merchandise</li>              
                            <li className="roadmap-list-item">Launch Pepe Peso Cultural Social Hub</li>
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
                Ready to dive into the Pepe Peso pool? Buying Pepe Pesos is as easy as ordering a taco at a beachside shack! We'll guide you through the process, from setting up your wallet to swapping BNB for Pepe Pesos on PancakeSwap. Whether you're a seasoned crypto guru or a newbie just crossing the border into the crypto world, we've got you covered. Let's make this fiesta bigger, louder, and richer!
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
                        To score some $PPP, you'll need BNB in your wallet. You can score some BNB straight in MetaMask, move it from another wallet, or buy it on an exchange and slide it into your wallet. And don't forget, man, you gotta be riding the Binance Smart Chain network.
                    </div>
                </div>
                <div className="buy-step three">
                    <div className="step-img"></div>
                    <div className="step-title">
                        3. Hook Up with PancakeSwap
                    </div>
                    <div className="step-body">
                        You can connect directly to PancakeSwap. If you're using a different browser, just make sure you're on the official PancakeSwap site, pick the token, and paste in the official $PPP token address: ___. Keep it safe, keep it legit.
                    </div>
                </div>
                <div className="buy-step four">
                    <div className="step-img"></div>
                    <div className="step-title">
                        4. Trade BNB for $PPP
                    </div>
                    <div className="step-body">
                        Once you're loaded with BNB, you can swap it for $PPP. Just remember to keep enough BNB for those gas fees, man. Check the transaction details, and when you're all set, hit confirm. And boom, you're in the $PPP club! Welcome to the fiesta of financial freedom, amigo.
                    </div>
                </div>
            </div>
        </div>


       
        <div className="container-three">
                <div className="title-three">
                Breaking Walls: The Pepe Peso Tokenomics
                </div>
                <div className="subtitle">
                Pepe Peso isn’t just about kicking back with a taco in hand, it's about putting in the work and watching your wealth grow. Our tokenomics are as satisfying as a well-earned quesadilla after a day of hard labor. We’re talking fair distribution, automatic liquidity generation, and a rewarding system that treats everyone like a Mariachi star. At Pepe Peso, we know the value of hard work - and the joy of lazing around counting your earnings!
                </div>
                <div className="inner-three">
                    <div className="token-ppp-two"></div>
                    <div className="roadmap-section token">
                        <ul className="roadmap-list tokenomics">
                            <li className="roadmap-list-item">NO TAXES - In honor of the great Mexican Dream.</li>
                            <li className="roadmap-list-item">92% of tokens sent to liquidity.</li>
                            <li className="roadmap-list-item">8% of tokens reserved for CEX exchange listings, bridges.</li>
                            <li className="roadmap-list-item">LP tokens will be burned, like the heat of a habanero.</li>
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
