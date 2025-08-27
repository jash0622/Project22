import React, { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import './App.css';

function App() {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const blockAwards = document.getElementById("awards");
    const blockPortfolio = document.getElementById("portfolio");
    const slide = document.getElementById('portfolio-anim');
    
    if (!blockAwards || !blockPortfolio || !slide) return;

    const handleScroll = () => {
      const portfolioRect = blockPortfolio.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Animation triggers earlier when portfolio section is about to come into view
      if (portfolioRect.top <= windowHeight * 1.2 && portfolioRect.bottom >= 0) {
        // Calculate scroll progress with faster completion
        const scrollProgress = Math.max(0, Math.min(1, (windowHeight * 1.2 - portfolioRect.top) / (windowHeight * 0.8)));
        document.body.style.setProperty("--scroll", scrollProgress);
      } else {
        document.body.style.setProperty("--scroll", 0);
      }
    };

    lenis.on('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => prev === 3 ? 1 : prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleIndicatorClick = (slideNumber) => {
    setCurrentSlide(slideNumber);
  };

  return (
    <div className="app">
      {/* Disclaimer Bar */}
      <div className="disclaimer">
        eToro is a multi-asset investment platform. Crypto investments are risky and highly volatile. Tax may apply. Understand the risks <a href="#">here</a>.
      </div>

      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <img src="/image.png" alt="eToro" />
          </div>
          <nav className="nav">
            <div className="nav-item">
              <a href="#">Trading</a>
              <div className="dropdown">
                <a href="#">Trade Markets on eToro</a>
                <a href="#">Trading Platform</a>
                <a href="#">Crypto on eToro</a>
                <a href="#">CFD Trading</a>
                <a href="#">Local Trading</a>
                <a href="#">Demo Account</a>
                <a href="#">Fees</a>
                <a href="#">Market Hours and Events</a>
                <a href="#">Professional Account</a>
              </div>
            </div>
            <div className="nav-item">
              <a href="#">Investing</a>
              <div className="dropdown">
                <a href="#">Stocks</a>
                <a href="#">Copy Top Investors</a>
                <a href="#">Investment Portfolios</a>
                <a href="#">Popular Investor Program</a>
                <a href="#">Staking Crypto</a>
                <a href="#">eToro Earnings Reports Calendar</a>
                <a href="#">Delta</a>
                <a href="#">ESG</a>
              </div>
            </div>
            <div className="nav-item">
              <a href="#">Top Markets</a>
              <div className="dropdown">
                <a href="#">Cryptocurrencies</a>
                <a href="#">Stocks</a>
                <a href="#">Commodities</a>
                <a href="#">Currencies</a>
                <a href="#">All Markets</a>
              </div>
            </div>
            <div className="nav-item">
              <a href="#">Education</a>
              <div className="dropdown">
                <a href="#">eToro Academy</a>
                <a href="#">News and Analysis</a>
                <a href="#">In Depth Analysis</a>
                <a href="#">Digest & Invest</a>
                <a href="#">Loud Investing</a>
                <a href="#">Retail Investor Beat</a>
                <a href="#">Account Security</a>
              </div>
            </div>
            <div className="nav-item">
              <a href="#">Company</a>
              <div className="dropdown">
                <a href="#">eToro Unlocked</a>
                <a href="#">About</a>
                <a href="#">Help Center</a>
                <a href="#">Investor Relations</a>
                <a href="#">Media Center</a>
                <a href="#">Careers</a>
                <a href="#">eToro Club</a>
                <a href="#">eToro Money</a>
                <a href="#">Socially Responsible</a>
              </div>
            </div>
          </nav>
          <div className="header-right">
            <button className="search-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>
            <div className="flag">
              <img src="https://flagcdn.com/w20/us.png" alt="US" width="20" height="15" />
            </div>
            <button className="login-btn">Login</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="text-section">
              <h1 className="hero-title">
                YEP, IT'S<br/>
                <span className="all-in-one">ALL IN ONE APP</span>
              </h1>
              <p className="hero-subtitle">Invest in thousands of stocks, crypto, ETFs... all in one easy-to-use app</p>
              <button className="join-btn">Join eToro</button>
            </div>
            
            <div className="image-section">
              <div className="hero-image">
                <img src="/mobile.webp" alt="eToro Mobile App" />
              </div>
              
              <div className="terms">
                **<a href="#">Terms and Conditions</a> apply.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section className="ai-section">
        <div className="ai-container">
          <div className="ai-content">
            <div className="ai-text">
              <p className="ai-subtitle">eToro Unlocked</p>
              <h2 className="ai-title">
                Redefining Investing <span className="green-text">With the<br/>Power of AI</span>
              </h2>
              <button className="reveal-btn">See the reveal</button>
            </div>
            <div className="ai-image">
              <img src="/unlocked-desktop.webp" alt="eToro AI" />
            </div>
          </div>
        </div>
      </section>

      {/* Interest Section */}
      <section className="interest-section">
        <div className="interest-container">
          <div className="interest-content">
            <div className="interest-text">
              <h2 className="interest-title">
                Earn up to <span className="green-rate">4.3%*</span> annual interest
              </h2>
              <p className="interest-subtitle">
                Start receiving monthly interest payments straight to your cash balance, with no commitment.
              </p>
              <div className="interest-buttons">
                <button className="join-etoro-btn">Join eToro</button>
                <button className="learn-more-btn">Learn More</button>
              </div>
              <p className="interest-disclaimer">
                *Credit and other risks apply, please read the <a href="#">Terms and Conditions</a>
              </p>
            </div>
            <div className="interest-image">
              <img src="/earn-interest.png" alt="4.3% Interest" />
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="awards-section" id="awards">
        <div className="awards-carousel">
          <div className="awards-list">
            <div className="awards-item">
              <span className="awards-item__title">Best Trading Platform</span>
              <span className="awards-item__description">Forbes Advisor's 2024</span>
            </div>
            <div className="awards-item">
              <span className="awards-item__title">Best UK Online Broker</span>
              <span className="awards-item__description">Forbes Advisor's 2024</span>
            </div>
            <div className="awards-item">
              <span className="awards-item__title">Best for Cryptocurrency Trading</span>
              <span className="awards-item__description">Investopedia 2024</span>
            </div>
            <div className="awards-item">
              <span className="awards-item__title">Best Social Trading Platform</span>
              <span className="awards-item__description">Forbes Advisor's 2024</span>
            </div>
            <div className="awards-item">
              <span className="awards-item__title">Best Crypto Trading Platform — Beginners</span>
              <span className="awards-item__description">Finder 2023</span>
            </div>
            <div className="awards-item">
              <span className="awards-item__title">Winner - Share Dealing innovation</span>
              <span className="awards-item__description">Finder 2023</span>
            </div>
            <div className="awards-item">
              <span className="awards-item__title">#1 Ease of Use</span>
              <span className="awards-item__description">ForexBrokers 2024</span>
            </div>
            <div className="awards-item">
              <span className="awards-item__title">Best Stock Trading App</span>
              <span className="awards-item__description">BrokerChooser Awards 2024</span>
            </div>
          </div>
          <div className="awards-list">
            <div className="awards-item">
              <span className="awards-item__title">Best Trading Platform</span>
              <span className="awards-item__description">Forbes Advisor's 2024</span>
            </div>
            <div className="awards-item">
              <span className="awards-item__title">Best UK Online Broker</span>
              <span className="awards-item__description">Forbes Advisor's 2024</span>
            </div>
            <div className="awards-item">
              <span className="awards-item__title">Best for Cryptocurrency Trading</span>
              <span className="awards-item__description">Investopedia 2024</span>
            </div>
            <div className="awards-item">
              <span className="awards-item__title">Best Social Trading Platform</span>
              <span className="awards-item__description">Forbes Advisor's 2024</span>
            </div>
            <div className="awards-item">
              <span className="awards-item__title">Best Crypto Trading Platform — Beginners</span>
              <span className="awards-item__description">Finder 2023</span>
            </div>
            <div className="awards-item">
              <span className="awards-item__title">Winner - Share Dealing innovation</span>
              <span className="awards-item__description">Finder 2023</span>
            </div>
            <div className="awards-item">
              <span className="awards-item__title">#1 Ease of Use</span>
              <span className="awards-item__description">ForexBrokers 2024</span>
            </div>
            <div className="awards-item">
              <span className="awards-item__title">Best Stock Trading App</span>
              <span className="awards-item__description">BrokerChooser Awards 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-section" id="portfolio">
        <div className="portfolio-container">
          <div className="portfolio-content">
            <div className="portfolio-text">
              <h2 className="portfolio-title">Diversify your portfolio</h2>
              <p className="portfolio-subtitle">
                Invest in a variety of asset classes — including 20 global stock exchanges and 100 cryptocurrencies — while managing all of your holdings in one place
              </p>
              <button className="explore-btn">Explore Top Markets</button>
            </div>
            <div className="anim-wrapper">
              <div id="portfolio-anim" className="anim-slide animated">
                <img className="icon sl-1 portfolio-crypto" loading="lazy" width="146" height="146" src="/apple-colored.svg" alt="Apple" />
                <img className="icon sl-2 portfolio-crypto" loading="lazy" width="206" height="74" src="/bitcoin.svg" alt="Bitcoin" />
                <img className="icon sl-3 portfolio-crypto" loading="lazy" width="104" height="69" src="/ethereum.svg" alt="Ethereum" />
                <img className="icon sl-4 portfolio-crypto" loading="lazy" width="146" height="146" src="/ishares-colored.svg" alt="iShares" />
                <img className="icon sl-5 portfolio-crypto" loading="lazy" width="113" height="147" src="/netflix.svg" alt="Netflix" />
                <img className="icon sl-6 portfolio-crypto" loading="lazy" width="145" height="138" src="/airbnb.svg" alt="Airbnb" />
                <img className="icon sl-7 portfolio-crypto" loading="lazy" width="146" height="146" src="/spdr-colored.svg" alt="SPDR" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crypto Section */}
      <section className="crypto-section">
        <div className="crypto-container">
          <div className="crypto-content">
            <div className="crypto-image">
              <img src="/crypto2x.jpg" alt="Crypto Icons" />
            </div>
            <div className="crypto-text">
              <h2 className="crypto-title">Crypto trading at its best</h2>
              <p className="crypto-subtitle">
                Trade and manage 70+ cryptoassets on a trusted global platform that offers top-tier security, powerful tools, user-friendly features, and fixed transparent fees. Eligible eToro Club members can also <a href="#">sell their crypto for GBP or EUR</a>, unlocking even more flexibility to trade, invest, or explore new opportunities.
              </p>
              <p className="crypto-fees">*Other fees apply</p>
              <button className="invest-crypto-btn">Invest in Crypto</button>
              <p className="crypto-disclaimer">
                Cryptoasset investing is highly volatile and unregulated in some EU countries. No consumer protection. Tax on profits may apply.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Copy Trading Section */}
      <section className="copy-trading-section">
        <div className="copy-trading-container">
          <div className="copy-trading-content">
            <div className="copy-trading-text">
              <h2 className="copy-trading-title">Copy top investors</h2>
              <p className="copy-trading-subtitle">
                With eToro's innovative <strong>CopyTrader™</strong>, you can automatically copy the moves of other investors.
              </p>
              <p className="copy-trading-description">
                Find investors you believe in and <strong>replicate their actions</strong> in real time.
              </p>
              <button className="start-copying-btn">Start Copying</button>
              <p className="copy-trading-disclaimer">
                Copy Trading does not amount to investment advice. The value of your investments may go up or down. Your capital is at risk. Past performance is not an indication of future results.
              </p>
            </div>
            <div className="copy-trading-video">
              <video autoPlay muted playsInline>
                <source src="/copytrader-desk.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Academy Section */}
      <section className="academy-section">
        <div className="academy-container">
          <div className="academy-description">
            <h2>Investing courses, podcasts, and webinars</h2>
            <p>The eToro Academy provides free professional financial education for all levels</p>
          </div>
          
          <div className="academy-carousel">
            <div className="academy-list">
              <div className="academy-item">
                <video className="academy-video" autoPlay muted loop playsInline>
                  <source src="/video1.mp4" type="video/mp4" />
                </video>
                <div className="academy-preview">
                  <p>Investing 101</p>
                </div>
              </div>
              
              <div className="academy-item">
                <img className="academy-logo" src="/img_4.jpg" alt="Conversations with leaders" />
                <div className="academy-preview">
                  <p>Conversations with leaders</p>
                </div>
              </div>
              
              <div className="academy-item">
                <img className="academy-logo" src="/img_5.jpg" alt="Crypto for beginners" />
                <div className="academy-preview">
                  <p>Crypto for beginners</p>
                </div>
              </div>
              
              <div className="academy-item">
                <video className="academy-video" autoPlay muted loop playsInline>
                  <source src="/video_3.mp4" type="video/mp4" />
                </video>
                <div className="academy-preview">
                  <p>Building your portfolio</p>
                </div>
              </div>
              
              <div className="academy-item">
                <img className="academy-logo" src="/img8.jpg" alt="Stock break" />
                <div className="academy-preview">
                  <p>Stock break</p>
                </div>
              </div>
              
              <div className="academy-item">
                <img className="academy-logo" src="/img_9.jpg" alt="Stock investing strategies" />
                <div className="academy-preview">
                  <p>Stock investing strategies</p>
                </div>
              </div>
              
              <div className="academy-item">
                <video className="academy-video" autoPlay muted loop playsInline>
                  <source src="/video_2.mp4" type="video/mp4" />
                </video>
                <div className="academy-preview">
                  <p>Technical analysis</p>
                </div>
              </div>
              
              <div className="academy-item">
                <img className="academy-logo" src="/img_2.jpg" alt="eToro's How-Tos" />
                <div className="academy-preview">
                  <p>eToro's How-Tos</p>
                </div>
              </div>
            </div>
            
            <div className="academy-list">
              <div className="academy-item">
                <video className="academy-video" autoPlay muted loop playsInline>
                  <source src="/video1.mp4" type="video/mp4" />
                </video>
                <div className="academy-preview">
                  <p>Investing 101</p>
                </div>
              </div>
              
              <div className="academy-item">
                <img className="academy-logo" src="/img_4.jpg" alt="Conversations with leaders" />
                <div className="academy-preview">
                  <p>Conversations with leaders</p>
                </div>
              </div>
              
              <div className="academy-item">
                <img className="academy-logo" src="/img_5.jpg" alt="Crypto for beginners" />
                <div className="academy-preview">
                  <p>Crypto for beginners</p>
                </div>
              </div>
              
              <div className="academy-item">
                <video className="academy-video" autoPlay muted loop playsInline>
                  <source src="/video_3.mp4" type="video/mp4" />
                </video>
                <div className="academy-preview">
                  <p>Building your portfolio</p>
                </div>
              </div>
              
              <div className="academy-item">
                <img className="academy-logo" src="/img8.jpg" alt="Stock break" />
                <div className="academy-preview">
                  <p>Stock break</p>
                </div>
              </div>
              
              <div className="academy-item">
                <img className="academy-logo" src="/img_9.jpg" alt="Stock investing strategies" />
                <div className="academy-preview">
                  <p>Stock investing strategies</p>
                </div>
              </div>
              
              <div className="academy-item">
                <video className="academy-video" autoPlay muted loop playsInline>
                  <source src="/video_2.mp4" type="video/mp4" />
                </video>
                <div className="academy-preview">
                  <p>Technical analysis</p>
                </div>
              </div>
              
              <div className="academy-item">
                <img className="academy-logo" src="/img_2.jpg" alt="eToro's How-Tos" />
                <div className="academy-preview">
                  <p>eToro's How-Tos</p>
                </div>
              </div>
            </div>
            
            <div className="academy-list">
              <div className="academy-item">
                <video className="academy-video" autoPlay muted loop playsInline>
                  <source src="/video1.mp4" type="video/mp4" />
                </video>
                <div className="academy-preview">
                  <p>Investing 101</p>
                </div>
              </div>
              
              <div className="academy-item">
                <img className="academy-logo" src="/img_4.jpg" alt="Conversations with leaders" />
                <div className="academy-preview">
                  <p>Conversations with leaders</p>
                </div>
              </div>
              
              <div className="academy-item">
                <img className="academy-logo" src="/img_5.jpg" alt="Crypto for beginners" />
                <div className="academy-preview">
                  <p>Crypto for beginners</p>
                </div>
              </div>
              
              <div className="academy-item">
                <video className="academy-video" autoPlay muted loop playsInline>
                  <source src="/video_3.mp4" type="video/mp4" />
                </video>
                <div className="academy-preview">
                  <p>Building your portfolio</p>
                </div>
              </div>
              
              <div className="academy-item">
                <img className="academy-logo" src="/img8.jpg" alt="Stock break" />
                <div className="academy-preview">
                  <p>Stock break</p>
                </div>
              </div>
              
              <div className="academy-item">
                <img className="academy-logo" src="/img_9.jpg" alt="Stock investing strategies" />
                <div className="academy-preview">
                  <p>Stock investing strategies</p>
                </div>
              </div>
              
              <div className="academy-item">
                <video className="academy-video" autoPlay muted loop playsInline>
                  <source src="/video_2.mp4" type="video/mp4" />
                </video>
                <div className="academy-preview">
                  <p>Technical analysis</p>
                </div>
              </div>
              
              <div className="academy-item">
                <img className="academy-logo" src="/img_2.jpg" alt="eToro's How-Tos" />
                <div className="academy-preview">
                  <p>eToro's How-Tos</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="academy-cta">
            <button className="start-learning-btn">Start Learning Now</button>
          </div>
          
          <div className="academy-disclaimer">
            This information is not and should not be construed to be investment advice/recommendation.
          </div>
        </div>
      </section>

      {/* Slideshow Section */}
      <section className="slideshow-section">
        <div className="slideshow-container">
          <div className={`slide ${currentSlide === 1 ? 'active' : ''}`} id="slide1">
            <div className="slide-content">
              <div className="slide-image">
                <img src="/global_Desktop.svg" alt="Global Desktop" />
              </div>
              <div className="slide-text">
                <h2 className="slide-title">
                  Get more from your money with eToro's interest on balance! Start receiving interest payments — <span className="highlight">up to 4.3% annually</span> — straight to your account, with no commitment.
                </h2>
                <div className="slide-buttons">
                  <button className="join-etoro-btn">Join eToro</button>
                  <button className="learn-more-btn">Learn More</button>
                </div>
                <p className="slide-disclaimer">
                  Credit and other risks apply, please read the Terms and Conditions.
                </p>
              </div>
            </div>
          </div>
          
          <div className={`slide ${currentSlide === 2 ? 'active' : ''}`} id="slide2">
            <div className="slide-content">
              <div className="slide-image">
                <img src="/local-trade-en.png" alt="Local Trade" />
              </div>
              <div className="slide-text">
                <h2 className="slide-title">Trade Local, Trade Global</h2>
                <p className="slide-description">
                  Diversify cost-effectively across hundreds of local assets, and thousands more global assets, using eToro's GBP and USD accounts.
                </p>
                <div className="slide-buttons">
                  <button className="join-etoro-btn">Join eToro</button>
                  <button className="learn-more-btn">Learn more</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`slide ${currentSlide === 3 ? 'active' : ''}`} id="slide3">
            <div className="slide-content">
              <div className="slide-image">
                <img src="/loud-investing.svg" alt="Loud Investing" />
              </div>
              <div className="slide-text">
                <h2 className="slide-title">It's time for loud investing</h2>
                <p className="slide-description">
                  When we talk about investing, we break down barriers and get inspired to take control of our financial future.
                </p>
                <div className="slide-buttons">
                  <button className="learn-more-btn">Learn More</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="slide-indicators">
            <span className={`indicator ${currentSlide === 1 ? 'active' : ''}`} onClick={() => handleIndicatorClick(1)}></span>
            <span className={`indicator ${currentSlide === 2 ? 'active' : ''}`} onClick={() => handleIndicatorClick(2)}></span>
            <span className={`indicator ${currentSlide === 3 ? 'active' : ''}`} onClick={() => handleIndicatorClick(3)}></span>
          </div>
        </div>
      </section>

      {/* Banking Partners Section */}
      <section className="banking-section">
        <div className="banking-container">
          <div className="banking-content">
            <h2 className="banking-title">Your funds are held in top-tier institutions</h2>
            <p className="banking-subtitle">
              The eToro Group works with globally renowned banking partners including:
            </p>
            
            <div className="banks-grid">
              <div className="bank-row">
                <img src="/J_P_Morgan.svg" alt="J.P.Morgan" className="bank-logo" />
                <img src="/deutsche_bank.svg" alt="Deutsche Bank" className="bank-logo" />
                <img src="/coutts.svg" alt="Coutts" className="bank-logo" />
                <img src="/JSS.svg" alt="J. Safra Sarasin" className="bank-logo" />
              </div>
              <div className="bank-row">
                <img src="/pictet.svg" alt="Pictet" className="bank-logo" />
                <img src="/ubp.svg" alt="UBP" className="bank-logo" />
              </div>
            </div>
            
            <p className="banking-disclaimer">
              * These banks are partnered with the eToro group and do not serve all entities within the group
            </p>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="trust-section">
        <div className="trust-container">
          <div className="trust-header">
            <h2 className="trust-title">Trusted worldwide</h2>
            <p className="trust-subtitle">
              Discover why millions of investors from over 100 countries joined eToro
            </p>
          </div>
          
          <div className="trust-cards">
            <div className="trust-card">
              <div className="trust-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#00D95F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" stroke="#00D95F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="m22 21-3-3m0 0a5.5 5.5 0 1 0-7.78-7.78 5.5 5.5 0 0 0 7.78 7.78Z" stroke="#00D95F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="trust-card-title">Social</h3>
              <p className="trust-card-description">
                More than 35 million users globally
              </p>
            </div>
            
            <div className="trust-card">
              <div className="trust-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#00D95F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="14,2 14,8 20,8" stroke="#00D95F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="16" y1="13" x2="8" y2="13" stroke="#00D95F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="16" y1="17" x2="8" y2="17" stroke="#00D95F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="10,9 9,9 8,9" stroke="#00D95F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="trust-card-title">Reliable</h3>
              <p className="trust-card-description">
                A leader in the fintech space since 2007
              </p>
            </div>
            
            <div className="trust-card">
              <div className="trust-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#00D95F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="m9 12 2 2 4-4" stroke="#00D95F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="trust-card-title">Secured</h3>
              <p className="trust-card-description">
                Utilising best security practices for client money and assets safety
              </p>
            </div>
            
            <div className="trust-card">
              <div className="trust-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#00D95F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="2" y1="12" x2="22" y2="12" stroke="#00D95F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="#00D95F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="trust-card-title">Global</h3>
              <p className="trust-card-description">
                Providing services around the world
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Section */}
      <section className="sponsorship-section">
        <div className="sponsorship-container">
          <h2 className="sponsorship-title">Sponsor of your favourite teams</h2>
          <div className="sponsorship-carousel">
            <div className="sponsorship-list">
              <div className="sponsorship-team">
                <img src="/mainz.svg" alt="Mainz" className="sponsorship-logo" />
              </div>
              <div className="sponsorship-team">
                <img src="/az.svg" alt="AZ Alkmaar" className="sponsorship-logo" />
              </div>
              <div className="sponsorship-team">
                <img src="/crystalpalace.svg" alt="Crystal Palace" className="sponsorship-logo" />
              </div>
              <div className="sponsorship-team">
                <img src="/everton.svg" alt="Everton" className="sponsorship-logo" />
              </div>
              <div className="sponsorship-team">
                <img src="/slavia.svg" alt="Slavia" className="sponsorship-logo" />
              </div>
              <div className="sponsorship-team">
                <img src="/west-ham.svg" alt="West Ham" className="sponsorship-logo" />
              </div>
              <div className="sponsorship-team">
                <img src="/union-berlin.svg" alt="Union Berlin" className="sponsorship-logo" />
              </div>
              <div className="sponsorship-team">
                <img src="/bayer.svg" alt="Bayer" className="sponsorship-logo" />
              </div>
              <div className="sponsorship-team">
                <img src="/pwr.svg" alt="Premiership Women's Rugby" className="sponsorship-logo" />
              </div>
              <div className="sponsorship-team">
                <img src="/prem.svg" alt="Premiership Rugby" className="sponsorship-logo" />
              </div>
              <div className="sponsorship-team">
                <img src="/koln.svg" alt="FC Koln" className="sponsorship-logo" />
              </div>
              <div className="sponsorship-team">
                <img src="/forestcrest.svg" alt="Nottingham Forest" className="sponsorship-logo" />
              </div>
            </div>
            <div className="sponsorship-list">
              <div className="sponsorship-team">
                <img src="/mainz.svg" alt="Mainz" className="sponsorship-logo" />
              </div>
              <div className="sponsorship-team">
                <img src="/az.svg" alt="AZ Alkmaar" className="sponsorship-logo" />
              </div>
              <div className="sponsorship-team">
                <img src="/crystalpalace.svg" alt="Crystal Palace" className="sponsorship-logo" />
              </div>
              <div className="sponsorship-team">
                <img src="/everton.svg" alt="Everton" className="sponsorship-logo" />
              </div>
              <div className="sponsorship-team">
                <img src="/slavia.svg" alt="Slavia" className="sponsorship-logo" />
              </div>
              <div className="sponsorship-team">
                <img src="/west-ham.svg" alt="West Ham" className="sponsorship-logo" />
              </div>
              <div className="sponsorship-team">
                <img src="/union-berlin.svg" alt="Union Berlin" className="sponsorship-logo" />
              </div>
              <div className="sponsorship-team">
                <img src="/bayer.svg" alt="Bayer" className="sponsorship-logo" />
              </div>
              <div className="sponsorship-team">
                <img src="/pwr.svg" alt="Premiership Women's Rugby" className="sponsorship-logo" />
              </div>
              <div className="sponsorship-team">
                <img src="/prem.svg" alt="Premiership Rugby" className="sponsorship-logo" />
              </div>
              <div className="sponsorship-team">
                <img src="/koln.svg" alt="FC Koln" className="sponsorship-logo" />
              </div>
              <div className="sponsorship-team">
                <img src="/forestcrest.svg" alt="Nottingham Forest" className="sponsorship-logo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-columns">
            <div className="footer-column">
              <h3 className="footer-title">Find Us On</h3>
              <div className="social-icons">
                <a href="#" className="social-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" className="social-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="social-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="social-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="social-icon youtube">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="footer-column">
              <h3 className="footer-title">Top instruments</h3>
              <ul className="footer-links">
                <li><a href="#">Bitcoin (BTC)</a></li>
                <li><a href="#">Ethereum (ETH)</a></li>
                <li><a href="#">Shiba (in Millions)</a></li>
                <li><a href="#">Tesla</a></li>
                <li><a href="#">Apple</a></li>
                <li><a href="#">Nio</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3 className="footer-title">Support</h3>
              <ul className="footer-links">
                <li><a href="#">Help Center</a></li>
                <li><a href="#">How to deposit</a></li>
                <li><a href="#">How to withdraw</a></li>
                <li><a href="#">How to Open an Account</a></li>
                <li><a href="#">How to verify your account</a></li>
                <li><a href="#">Customer Service</a></li>
                <li><a href="#">Client Vulnerability</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3 className="footer-title">Learn more</h3>
              <ul className="footer-links">
                <li><a href="#">How CopyTrading Works</a></li>
                <li><a href="#">Responsible Trading</a></li>
                <li><a href="#">Interest on Balance</a></li>
                <li><a href="#">What is Leverage & Margin</a></li>
                <li><a href="#">Buy and Sell Explained</a></li>
                <li><a href="#">Market research</a></li>
                <li><a href="#">Tax Report</a></li>
                <li><a href="#">eToro Academy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* App Download Section */}
      <section className="app-download-section">
        <div className="app-download-container">
          <div className="app-download-columns">
            <div className="app-download-column">
              <h3 className="app-download-title">Download our app from the stores</h3>
              <div className="app-store-buttons">
                <a href="#" className="app-store-btn">
                  <div className="app-store-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                  </div>
                  <div className="app-store-text">
                    <span className="app-store-name">App Store</span>
                  </div>
                </a>
                <a href="#" className="app-store-btn">
                  <div className="app-store-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                  </div>
                  <div className="app-store-text">
                    <span className="app-store-name">Google Play</span>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="app-download-column">
              <h3 className="app-download-title">About Us</h3>
              <ul className="app-download-links">
                <li><a href="#">About eToro</a></li>
                <li><a href="#">eToro Reviews</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Our offices</a></li>
                <li><a href="#">Accessibility</a></li>
                <li><a href="#">Imprint</a></li>
              </ul>
            </div>
            
            <div className="app-download-column">
              <h3 className="app-download-title">Privacy and Regulation</h3>
              <ul className="app-download-links">
                <li><a href="#">eToro Cookie Policy</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Regulation & License</a></li>
                <li><a href="#">General Risk Disclosure</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Key Information Documents</a></li>
              </ul>
            </div>
            
            <div className="app-download-column">
              <h3 className="app-download-title">Partners and Promotions</h3>
              <ul className="app-download-links">
                <li><a href="#">Invite a friend</a></li>
                <li><a href="#">Affiliate Program</a></li>
                <li><a href="#">eToro Club</a></li>
                <li><a href="#">Investment Insurance</a></li>
                <li><a href="#">Partner Smart Portfolios</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer Section */}
      <section className="legal-section">
        <div className="legal-container">
          <div className="legal-content">
            <p>eToro (Europe) Ltd., a Financial Services Company authorised and regulated by the Cyprus Securities Exchange Commission (CySEC) under the license # 109/10.</p>
            <p>Registered in Cyprus under Company No. HE 200585. Registered Office: 4 Profiti Ilia Str., Kanika Business Centre, 7th floor, Germasogeia, 4046, Limassol, Cyprus.</p>
            <p>eToro (UK) Ltd, a Financial Services Company authorised and regulated by the Financial Conduct Authority (FCA) under the license FRN 583263.</p>
            <p>Registered Office: 24th floor, One Canada Square, Canary Wharf, London E14 5AB.</p>
            <p>eToro AUS Capital Limited is authorised by the Australian Securities and Investments Commission (ASIC) to provide financial services under Australian Financial Services License 491139.</p>
            <p>Registered Office: Level 3, 60 Castlereagh Street, Sydney NSW 2000, Australia.</p>
            <p>eToro (Seychelles) Ltd. is licenced by the Financial Services Authority Seychelles ("FSAS") to provide broker-dealer services under the Securities Act 2007 License #SD076</p>
            <p>Registered Office: Suite 18, 3rd Floor, Vairam Building, Providence, Mahe, Seychelles.</p>
            <p>eToro (ME) Limited, is licensed and regulated by the Abu Dhabi Global Market ("ADGM")'s Financial Services Regulatory Authority ("FSRA") as an Authorised Person to conduct the Regulated Activities of (a) Dealing in Investments as Principal (Matched), (b) Arranging Deals in Investments, (c) Providing Custody, (d) Arranging Custody and (e) Managing Assets (under Financial Services Permission Number 220073) under the Financial Services and Market Regulations 2015 ("FSMR"). Its registered office and its principal place of business is at Office 207 and 208, 15th Floor Floor, Al Sarab Tower, ADGM Square, Al Maryah Island, Abu Dhabi, United Arab Emirates ("UAE").</p>
            <p>Clients who are tax residents of Finland may be subject to Finnish income taxes on income (profits) on CFDs and crypto-assets in accordance with applicable Finnish tax laws. For more information, please refer to our <a href="#">Finnish tax laws page</a>.</p>
            
            <div className="legal-divider"></div>
            
            <p><strong>Past performance is not an indication of future results</strong></p>
            <p><a href="#">General Risk Disclosure</a> | <a href="#">Terms & Conditions</a></p>
            
            <p>You should seek advice from an independent and suitably licensed financial advisor and ensure that you have the risk appetite, relevant experience and knowledge before you decide to trade. Under no circumstances shall eToro have any liability to any person or entity for any direct, indirect, special, consequential or incidental damages whatsoever.</p>
            <p>Crypto investments are risky and do not benefit from the protections available to clients receiving MiFID regulated investment services, such as access to the Cyprus Investor Compensation Fund (ICF)/the Financial Services Compensation Scheme (FSCS) and the Financial Ombudsman Service for dispute resolution.</p>
            <p>Trading with eToro by following and/or copying or replicating the trades of other traders involves a high level of risks, even when following and/or copying or replicating the top-performing traders. Such risks includes the risk that you may be following/copying the trading decisions of possibly inexperienced/unprofessional traders, or traders whose ultimate purpose or intention, or financial status may differ from yours. Past performance of an eToro Community Member is not a reliable indicator of his future performance. Content on eToro's social trading platform is generated by members of its community and does not contain advice or recommendations by or on behalf of eToro - Your Social Investment Network.</p>
            <p>Copyright © 2006-2025 eToro - Your Social Investment Network, All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;