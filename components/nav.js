// if (link.title !== "Home") {
//   return link.title
// } else {
//   return ""
// }

export default (links) => `
<nav>
  <div class="masthead active-element">
    <h1><a href="#0">Lauren</a></h1>
                </div>
                <div class="main-nav-list active-element">
  <ul>
  ${links.reduce(
    (html, link) =>
      html +
      `<li><a href="/${link.title !== "Game" ? link.title : ""}" title="${
        link.title
      }" data-navigo>${link.text}</a></li>`,
    ``
  )}
  </ul>
</nav>
`;
