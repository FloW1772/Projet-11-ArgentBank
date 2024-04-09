import React from 'react';
import './home.scss'
import Feature from '../../components/feature/Feature';
import featureImage from '../../assets/img/icon-chat.png'
import featureMoney from '../../assets/img/icon-money.png'
import featureSecurity from '../../assets/img/icon-security.png'

export function Home() {
  return (

    <main>
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <Feature featureImg={featureImage} featureTitle='You are our #1 priority' featureText='Need to talk to a representative? You can get in touch through our
                24/7 chat or through a phone call in less than 5 minutes.' />

        <div className="feature-item">
          <Feature featureImg={featureMoney} featureTitle='More savings means higher rates' featureText='The more you save with us, the higher your interest rate will be!' />
        </div>

        <div className="feature-item">

          <Feature featureImg={featureSecurity} featureTitle='Security you can trust' featureText='We use top of the line encryption to make sure your data and money
                is always safe.' />
        </div>
      </section>
    </main>
  );

}
