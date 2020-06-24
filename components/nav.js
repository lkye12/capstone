console.log("this works");
export default (links) => `
<nav id="nav">
<div class="nav-menu flex-row">
    <div class="brand">
        <a href="#" class="text-gray">Lauren</a>
    </div>
      <ul class="nav-bar">
            ${links.reduce(
              (html, link) =>
                html +
                `<li><a href="/${
                  link.title !== "Home" ? link.title : ""
                }" title="${link.title}" data-navigo>${link.text}</a></li>`,
              ""
            )}
            </ul>
</div>
</nav>
`;
