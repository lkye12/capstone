export default (links) => `
<nav id="nav">
  <i class="fas fa-bars"></i>
  <ul class="nav-bar">
  ${links.reduce(
    (html, link) =>
      html +
      `<li><a href="/${link.title !== "Home" ? link.title : ""}" title="${
        link.title
      }" data-navigo>${link.text}</a></li>`
  )}
  </ul>
</nav>
`;
