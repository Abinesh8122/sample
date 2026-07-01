function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <p className="section-label">Contact</p>
        <h2>Let's build something together.</h2>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <div className="contact-card">
            <div className="contact-icon">@</div>
            <div>
              <h4>Email</h4>
              <p>abinesh99658@gmail.com</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">📞</div>
            <div>
              <h4>Phone</h4>
              <p>+91 8122973726</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">💼</div>
            <div>
              <h4>GitHub</h4>
              <a href="https://github.com/Abinesh8122" target="_blank" rel="noreferrer">
                github.com/Abinesh8122
              </a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">📍</div>
            <div>
              <h4>Location</h4>
              <p>Karungal, Tamil Nadu, India</p>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          <form>
            <label>
              Name
              <input type="text" placeholder="Enter your name" />
            </label>
            <label>
              Email
              <input type="email" placeholder="Enter your email" />
            </label>
            <label>
              Message
              <textarea placeholder="Enter your message" />
            </label>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact