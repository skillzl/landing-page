/** @format */
export const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <footer id="footer" className="footer">
      <div className="content has-text-centered">
        <p>Copyright © {year} landing.skillzl.me. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
