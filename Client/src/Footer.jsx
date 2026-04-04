function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <h3>FRE SULOVA Group</h3>
          <p>
            Premium facade insulation and exterior works for buildings across Albania.
            Quality you can see, efficiency you can feel.
          </p>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>📞 +355 69 81 15 075</p>
          <p>📧 contact@fresulovagroup.al</p>
          <p>📍 Institut, Albania</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} FRE Sulova Group. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
