import React from 'react';

function AboutUs() {
  return (
    <div className="about-us-container" style={{ textAlign: 'center', margin: '20px 0' }}>
      <p className="landing-description" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'rgba(255, 255, 255, 0.85)', marginBottom: '1.5rem' }}>
        Welcome to Paradise Nursery, where we curate the finest selection of premium houseplants to transform your living spaces. Our mission is to bring the calming, air-purifying, and aesthetic power of nature directly to your doorstep. Whether you are an experienced plant parent seeking rare, dramatic foliage, or a beginner looking for resilient, low-maintenance greens, we have the perfect botanical companion for you. Explore our collection today and plant the seeds for a healthier, happier home.
      </p>
      <div className="about-us-extra" style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', marginTop: '1.5rem' }}>
        <h4 style={{ color: 'var(--accent-gold)', marginBottom: '0.75rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '1rem' }}>
          Our Green Commitment
        </h4>
        <p style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: '1.6' }}>
          At Paradise Nursery, we believe that plants make people happier. Every green companion is hand-selected and carefully nurtured by our team of horticultural experts before being packed with love and delivered to your doorstep. Join us in making the world a greener, fresher place—one leaf at a time.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
