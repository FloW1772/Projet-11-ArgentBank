import React from 'react'
import './feature.scss'

export default function Feature({ featureImg, featureTitle, featureText }) {
    return (
        <div className="feature-item">
            <img src={featureImg} alt="Icon" className="feature-icon" />
            <h3 className="feature-item-title">{featureTitle}</h3>
            <p>
                {featureText}
            </p>
        </div>
    )
}
