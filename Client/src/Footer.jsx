function Footer (){
    return(
        <footer style={{ marginTop: "50px" }}>
            <section>
                <h2>Contact Us</h2>

                <p>📞 +355 69 81 15 075</p>
                <p>📧 contact@fresulovagroup.al</p>
                <p>📍 Institut, Albania</p>
            </section>

            <p style={{ marginTop: "20px", opacity: "0.8", fontSize: "14px" }}>
                © {new Date().getFullYear()} FRE Sulova Group. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;