import React from 'react';
import { Helmet } from 'react-helmet';

import { StaticImage } from "gatsby-plugin-image"

import { css } from '@emotion/react';

import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';
import { colors } from '../styles/colors';

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
        <div css={[outer, SiteNavMain]}>
          <div css={inner}>
            <SiteNav isHome={false} />
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <div css={inner}>
          <article className="post page" css={[PostFull, NoImage]}>
            <PostFullHeader className="post-full-header">
              <PostFullTitle className="post-full-title">About</PostFullTitle>
            </PostFullHeader>

            <PostFullContent className="post-full-content">
              <div className="post-content">
                <h5>
                  Green Garnet <br /> Inspired by:{' '}
                  <a > Meanings, Properties and Powers</a>
                </h5>
                 <StaticImage src="../content/img/greengarnetlogos2.jpg" alt="A dinosaur" />
                <p>
                In 1967, British gem prospector and geologist Campbell R. Bridges discovered a deposit of green grossular in the mountains of north-east Tanzania in a place called Lemshuko, 15 km (9.3 mi) away from Komolo, the first village. 
                  </p>
                  <StaticImage src="../content/img/tsavorite_fig2.jpg" alt="A dinosaur" />
                <p>
                  The specimens he found were of very intense color and of high transparency. The find interested the gem trade, and attempts were made to export the stones, but the Tanzanian government did not provide permits.
                 </p>
              
                <StaticImage src="../content/img/tsavorite_fig4.jpg" alt="A dinosaur" />
                  <p>
                Believing that the deposit was a part of a larger geological structure extending possibly into Kenya, Bridges began prospecting in that nation. He was successful a second time in 1971, when he found the mineral variety there, and was granted a permit to mine the deposit. 
                    </p>
                <StaticImage src="../content/img/tsavorite_fig6.jpg" alt="A dinosaur" />
                <p>
                    The gemstone was known only to mineral specialists until 1974, when Tiffany and Co launched a marketing campaign which brought broader recognition of the stone.
                </p>
                
                <StaticImage src="../content/img/tsavorite_fig8.jpg" alt="A dinosaur" />
                    <p>
                  Green-Garnet is restorative and liberating. It’s a growth stone that is also a powerful conduit of birth, creation, development, and renewal.
                  It’s a powerful aid in nurturing a fledgling relationship or a new business endeavor. It will also promote a strengthened commitment to your 
                  higher purpose and spiritual growth.
                  It will bring new strength when you are experiencing a difficult time or a challenging period in your life.
                  It’s a stone that will cleanse the heart chakra, which will increase your physical vitality and zest for life. It will also induce feelings 
                  of kindness, compassion, and charity.
                  </p>
                <StaticImage src="../content/img/green-garnet_Header-Banner.jpg" alt="A dinosaur" />
                  <p>
                  Beautiful Green Garnet beads
                  Green-Garnet is a known gemstone that has the power of regeneration and growth.
                  Its beautiful green color is a symbol of Mother Earth.
                  It’s believed that Green-Garnet has the power to accept, care for, and nurture everything!
                  It’s a stone that’s brimming with hope, and its powerful energies will definitely brighten your future!
                  Green-Garnet symbolizes growth and renewal in the different aspects of your life.
                </p>
                <StaticImage src="../content/img/tsavorite-aaa.jpg" alt="A dinosaur" />
                <p>
                  Green-Garnet also has physical healing properties that can benefit the body in more ways than one.
                  This gemstone is known to be very effective in speeding up the recovery period after an illness or physical trauma.
                  It can stimulate blood flow and help in new cell growth, especially when you pair it with the April Birthstone.
                  It can also boost the respiratory and the immune systems and protect you against highly infectious diseases.
                  The healing energies of Green-Garnet can detoxify the body and reduce inflammations
                </p>
                
                 <p>
                  Green-Garnet is the gemstone that will confirm the happiness that you have in your love life.
                  It will show you how you can appreciate the people you love and the people who love you back.
                  It also has the ability to strengthen not only the heart but the soul as well. It will help you take in new energies and become whole again 
                  or a new and better version of yourself.
                  </p>
                  <p>
                  If you want to make a new beginning, Green-Garnet is the perfect gemstone for you!
                  Green-Garnet also symbolizes hope. It will give you clarity and help you see things or people in a different light.
                  It will solidify new relationships and add new meaning to your life and your relationship.
                  When you work with the energies of this stone, you will feel courageous and confident to make big changes and major decisions.
                  It’s a gemstone that will encourage gratitude. It will make you appreciate all the good things that you have going for you.
                  It will even make you thankful for the bad, because without them, you will never realize just how blessed you are!
                  Green-Garnet will inspire you to be of service to the people you love. You will do things for them without expecting anything in return.
                  You will do it simply because you love them and you just want to see them happy and okay.
                  This gemstone will promote a relaxed and laidback attitude in your relationship. It will encourage you to go with the flow and not to be too rigid 
                  in your ways.
                  </p>
                <StaticImage src="../content/img/garnet_coin1.jpg" alt="A dinosaur" />
                  <p>
                  Green-Garnet will inspire you to inject good old-fashioned romance and silly fun into a serious relationship.
                  It will remind you to never lose passion or energy for one another, especially during times when you’re filled with stress, fear, or worry.
                </p>
                <StaticImage src="../content/img/igicertificate.jpg" alt="A dinosaur" />
                <p>
                   Designing jewelry from home can be fun and rewarding. Through Jewelry Designs’ virtual jewelry service, you will have direct access to a designer and a personal shopper.
                </p>
               <StaticImage src="../content/img/aitta.jpg" alt="A dinosaur" />
                <p>  
 1. Chat With A Representative:
One of our designers will be with you shortly.From there, we will schedule a call or arrange a meeting to get started.
                </p>
                <p> 
 2. Actualize Your Concept:
Your jewelry designer will begin by establishing your needs and gathering relevant materials related to your project. From there, they will develop your idea and communicate with you using photos, computer generated renderings, and various design tools available to help you visualize your masterpiece.
               </p>
                <p> 
 3. Create Your Jewelry:
Once we have earned your complete confidence, we will customize a piece of fine jewelry to your specifications.
                </p>
                <p> 
                whatsapp: +989901377600
                </p>
                 <p> 
                  8th floor, Shiraz University Management building, Jomhori blv, Shiraz, Fars Province, Iran
                </p>
                 <StaticImage src="../content/img/adress.JPG" alt="A dinosaur" />
              </div>
            </PostFullContent>
          </article>
        </div>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
