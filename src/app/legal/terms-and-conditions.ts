// Used for syntax highlighting
const html = String.raw;

const termsAndConditions = html`
<span><em>Last updated: 22 September 2025</em></span>
<p>Welcome to <strong>TV Show Tracker</strong> (“the Service”). By accessing or using the Service, you agree to these Terms and Conditions. If you do not agree, please do not use the Service.</p>
<h2 id="1-use-of-the-service">1. Use of the Service</h2>
<ul>
<li>You must be at least 16 years old to use the Service.</li>
<li>You are responsible for maintaining the confidentiality of your login credentials.</li>
<li>You agree not to misuse the Service (e.g., attempt to hack, scrape, or disrupt operations).</li>
</ul>
<h2 id="2-accounts">2. Accounts</h2>
<ul>
<li>To use certain features, you must create an account with a valid email and password.</li>
<li>You are responsible for all activity under your account.</li>
<li>We may suspend or terminate accounts that violate these Terms.</li>
</ul>
<h2 id="3-intellectual-property">3. Intellectual Property</h2>
<ul>
<li>All content available through the Service (excluding third-party data such as TMDB TV show information) is the property of <strong>TV Show Tracker</strong>.</li>
<li>You may not copy, distribute, or resell the Service without permission.</li>
</ul>
<h2 id="4-privacy-data-protection-gdpr-compliance-">4. Privacy &amp; Data Protection (GDPR Compliance)</h2>
<p>We respect your privacy and process personal data in compliance with the <strong>General Data Protection Regulation (GDPR)</strong>.</p>
<p><strong>What data we collect:</strong></p>
<ul>
<li>Account information: username, email, password (encrypted).</li>
<li>User activity: favorite TV shows, interactions.</li>
<li>Technical data: cookies, JWT tokens for authentication.</li>
<li>Communication data: emails for account confirmation and recommendations.</li>
</ul>
<p><strong>How we use your data:</strong></p>
<ul>
<li>To provide and improve the Service.</li>
<li>To authenticate users securely.</li>
<li>To send you notifications and recommendations (you can opt out).</li>
<li>To comply with legal obligations.</li>
</ul>
<p><strong>Third parties:</strong></p>
<ul>
<li>We fetch TV show information from <strong>TMDB (The Movie Database)</strong> but do not share your personal data with them.</li>
<li>Email services are provided via <strong>SMTP (configured by us)</strong>.</li>
</ul>
<p><strong>Your rights (under GDPR):</strong></p>
<ul>
<li>Access your data.</li>
<li>Rectify or delete your data.</li>
<li>Restrict or object to processing.</li>
<li>Data portability.</li>
<li>Withdraw consent at any time.
To exercise your rights, contact us at <strong>eduardo11224b@gmail.com</strong>.</li>
</ul>
<p><strong>Data storage:</strong></p>
<ul>
<li>Your data is stored securely in our PostgreSQL database.</li>
<li>We keep personal data only as long as necessary for the Service or legal obligations.</li>
</ul>
<h2 id="5-limitation-of-liability">5. Limitation of Liability</h2>
<ul>
<li>The Service is provided “as is” without warranties.</li>
<li>We are not liable for damages caused by third-party services (e.g., TMDB availability).</li>
</ul>
<h2 id="6-termination">6. Termination</h2>
<ul>
<li>We may suspend or terminate access if you violate these Terms.</li>
</ul>
<h2 id="7-changes">7. Changes</h2>
<p>We may update these Terms from time to time. If we make material changes, we will notify you.</p>
<h2 id="8-contact">8. Contact</h2>
<p>If you have any questions about these Terms or your data rights, contact us at:
<strong>eduardo11224b@gmail.com</strong></p>
`;

export default termsAndConditions;
