module.exports = {
  downloadLink: function (text, url) {
    const html = `
    <a href="${url}">
    ${text}
    <span class="download-icon">
      <svg viewbox="0 0 24 24" width="1em" height="1em">
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M3 19h18v2H3v-2zm10-5.828L19.071 7.1l1.414 1.414L12 17 3.515 8.515 4.929 7.1 11 13.17V2h2v11.172z" />
      </svg>
    </span></a>
    `;

    return html;
  },
  protectedEmail: function (text, downloadLink = false) {
    const downloadText = 'Download public key (ProtonMail/GPG)';
    const link = `
    <a id="email" class="objuscated" href="mailto:hey (at) imhoff (dot) name">${text}</a>`;
    const download = `
    <span id="lock-box" class="about-lock-box hidden">
      <a
        title="${downloadText}"
        aria-label="${downloadText}"
        href="/downloads/publickey.hey@imhoff.name-9cb867d4ccd2c1d7d9fde82f4b649797f3e007a9.asc"
      >
      <svg class="about-lock-icon" viewbox="0 0 24 24" width="1em" height="1em" aria-hidden="true">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M19 10h1a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V11a1 1 0 011-1h1V9a7 7 0 1114 0v1zM5 12v8h14v-8H5zm6 2h2v4h-2v-4zm6-4V9A5 5 0 007 9v1h10z" />
        </svg>
      </a>
    </span>
    `;

    return `${link} ${downloadLink ? download : ''}`;
  },
};