import React, { useState } from 'react';
import './footer.css'; 

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Logic to handle newsletter subscription
    console.log('Subscribed with email:', email);
    setSubscribed(true);
    setEmail('');
    
    // Reset the confirmation message after 5 seconds
    setTimeout(() => {
      setSubscribed(false);
    }, 5000);
  };

  const handleFeedback = (e) => {
    e.preventDefault();
    // Logic to handle feedback submission
    console.log('Feedback submitted:', message);
    setFeedbackSubmitted(true);
    setMessage('');
    
    // Reset the confirmation message after 5 seconds
    setTimeout(() => {
      setFeedbackSubmitted(false);
    }, 5000);
  };

  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Information */}
          <div className="footer-column">
            <h3 className="footer-heading">Team Track</h3>
            <p className="footer-text">
              Simplifying team management and empowering organizations to track, grow, and succeed together.
            </p>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <span className="sr-only">Facebook</span>
                <svg className="icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="social-icon">
                <span className="sr-only">Twitter</span>
                <svg className="icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="social-icon">
                <span className="sr-only">LinkedIn</span>
                <svg className="icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="footer-column">
            <h3 className="footer-heading">Stay Updated</h3>
            <p className="footer-text">
              Subscribe to Team Track updates for the latest features, tips, and management best practices.
            </p>
            <form onSubmit={handleSubscribe} className="subscribe-form">
              <div className="form-group">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" className="email-input" required/>
                <button type="submit" className="subscribe-button">Subscribe</button>
              </div>
              {subscribed && (
                <p className="success-message">
                  Thank you for subscribing!
                </p>
              )}
            </form>
          </div>

          {/* Feedback Form */}
          <div className="footer-column">
            <h3 className="footer-heading">Send Feedback</h3>
            <form onSubmit={handleFeedback} className="feedback-form">
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Share your thoughts or suggestions..." className="feedback-textarea" rows="3" required></textarea>
              <button type="submit" className="feedback-button">Submit Feedback</button>
              {feedbackSubmitted && (
                <p className="success-message">
                  Thank you for your feedback!
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Quick Links */}
        <div className="quick-links-container">
          <div className="quick-links">
            <a href="#" className="quick-link">Home</a>
            <a href="#" className="quick-link">About</a>
            <a href="#" className="quick-link">Features</a>
            <a href="#" className="quick-link">Pricing</a>
            <a href="#" className="quick-link">Support</a>
            <a href="#" className="quick-link">Privacy Policy</a>
            <a href="#" className="quick-link">Terms of Service</a>
          </div>
        </div>

        {/* /* Copyright */}
        <div className="copyright">
          <p>© {new Date().getFullYear()} Team Track. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer