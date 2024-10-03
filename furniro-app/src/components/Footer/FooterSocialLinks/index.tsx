export function FooterSocialLinks() {
  return (
    <ul className="flex gap-1">
      <a href="https://facebook.com" target="_blank">
        <li className="footer-social-link">
          <img src="../src/assets/icon/facebook.svg" alt="facebook-icon" />
        </li>
      </a>
      <a href="https://instagram.com" target="_blank">
        <li className="footer-social-link">
          <img src="../src/assets/icon/instagram.svg" alt="instagram-icon" />
        </li>
      </a>
      <a href="https://twitter.com" target="_blank">
        <li className="footer-social-link">
          <img src="../src/assets/icon/twitter.svg" alt="twitter-icon" />
        </li>
      </a>
      <a href="https://linkedin.com" target="_blank">
        <li className="footer-social-link">
          <img src="../src/assets/icon/linkedin.svg" alt="linkedin-icon" />
        </li>
      </a>
    </ul>
  );
}
