import React from 'react';
import { Helmet } from 'react-helmet';

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
      <title>CONTACT</title>
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
                  Catch Your Dreams <br /> Why Choose Green Garnet for Your CAD Services?:{' '}
                  <a > Fast, Quick and Reliable Services </a>
                </h5>
                <p>
                  Jewelry is gorgeous ! Unfortunately, it can be difficult to take what your imagination creates and turn it into an actual product and price too high to do marketing. That is why you should consider Green Garnet’s professional CAD / mass order services .

المجوهرات رائعة! لسوء الحظ ، قد يكون من الصعب أن تأخذ ما يبتكره خيالك وتحويله إلى منتج فعلي وسعر مرتفع جدًا للقيام بالتسويق ، ولهذا السبب يجب عليك التفكير في خدمات CAD / الطلبات الجماعية الاحترافية من Green Garnet 

                  I gioielli sono stupendi! Sfortunatamente, può essere difficile prendere ciò che la tua immaginazione crea e trasformarlo in un prodotto reale e un prezzo troppo alto per fare marketing. Ecco perché dovresti prendere in considerazione i servizi CAD / ordini di massa professionali di Green Garnet.

                </p>
                <p>
                 Our CAD services allow jewelry online/offline stores and jewelry designers to think outside the box when it comes to creating custom jewelry series. No longer are they bound by what they can physically create by hand. Instead, a computer software program can help turn a creative and innovative design concept into reality.
                  Fast, Quick and Reliable Services from Green Garnet
                  To get started, contact your job coordinator today.
الخاصة بنا لمتاجر المجوهرات عبر الإنترنت / غير المتصلة بالإنترنت ومصممي المجوهرات بالتفكير خارج الصندوق عندما يتعلق الأمر بإنشاء سلسلة مجوهرات مخصصة. لم يعدوا ملزمين بما يمكنهم صنعه يدويًا. بدلاً من ذلك ، يمكن أن يساعد برنامج الكمبيوتر في تحويل مفهوم التصميم الإبداعي والمبتكر إلى واقع ملموس.
خدمات سريعة وسريعة وموثوقة من مجوهرات Green Garnet
للبدء ، اتصل بمنسق عملك اليوم.
                I nostri servizi CAD consentono ai negozi di gioielli online/offline e ai designer di gioielli di pensare fuori dagli schemi quando si tratta di creare serie di gioielli personalizzati. Non sono più vincolati da ciò che possono creare fisicamente a mano. Invece, un programma software per computer può aiutare a trasformare in realtà un concetto di design creativo e innovativo.
                Servizi veloci, rapidi e affidabili da Green Garnet
                Per iniziare, contatta oggi stesso il tuo coordinatore del lavoro.

                </p>
                    <StaticImage src="../content/img/garnet_coin1.jpg" alt="A dinosaur" />
                <p>
                  Designing jewelry from home can be fun and rewarding. Through Jewelry Designs’ virtual jewelry service, you will have direct access to a designer and a personal shopper.

                 1. Chat With A Representative:
                     One of our designers will be with you shortly.From there, we will schedule a call or arrange a meeting to get started.

                  2. Actualize Your Concept:
                     Your jewelry designer will begin by establishing your needs and gathering relevant materials related to your project. From there, they will develop your idea and communicate with you using photos, computer generated renderings, and various design tools available to help you visualize your masterpiece.

                  3. Create Your Jewelry:
                    Once we have earned your complete confidence, we will customize a piece of fine jewelry to your specifications.

                  Whatsapp: +989901377600
                </p>
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
