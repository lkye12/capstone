export default (st) => `
<section id="Gallery">
    <div class="container">
        <div class="button-group">
            <button type="button" class="active" id="btn1" data-filter="*">All</button>
            <button type="button" data-filter=".popular">Popular</button>
            <button type="button" data-filter=".latest">Latest</button>
            <button type="button" data-filter=".following">Following</button>
            <button type="button" data-filter=".upcoming">Upload</button>
        </div>
        <div class="gallery">
            <div class="pro">
                <div class="project">
                    <div class="pro img">
                        <a class="popup" href="./img/portfolio/g1.svg" data-lightbox="mygallery" data-title="space">
                            <img src="./img/portfolio/g1.svg" alt="portfolio-1" class="img-fluid">
                        </a>
                    </div>
                </div>
            </div>
            <div class="pro">
                <div class="project">
                    <div class="img">
                        <a class="popup" href="./img/portfolio/g2.svg" data-lightbox="mygallery" data-title="space">
                            <img src="./img/portfolio/g2.svg" alt="portfolio-2" class="img-fluid">
                        </a>
                    </div>
                </div>
            </div>
            <div class="pro">
                <div class="project">
                    <div class="img">
                        <a class="popup" href="./img/portfolio/g3.svg" data-lightbox="mygallery" data-title="space">
                            <img src="./img/portfolio/g3.svg" alt="portfolio-3" class="img-fluid">
                        </a>
                    </div>
                </div>
            </div>
            <div class="pro">
                <div class="project">
                    <div class="img">
                        <a class="popup" href="./img/portfolio/g4.svg" data-lightbox="mygallery" data-title="space">
                            <img src="./img/portfolio/g4.svg" alt="portfolio-4" class="img-fluid">
                        </a>
                    </div>
                </div>
            </div>
            <div class="pro">
                <div class="project">
                    <div class="img">
                        <a class="popup" href="./img/portfolio/g5.svg" data-lightbox="mygallery" data-title="space">
                            <img src="./img/portfolio/g5.svg" alt="portfolio-5" class="img-fluid">
                        </a>
                    </div>
                </div>
            </div>
            <div class="pro">
                <div class="project">
                    <div class="img">
                        <a class="popup" href="./img/portfolio/g6.svg" data-lightbox="mygallery" data-title="space">
                            <img src="./img/portfolio/g6.svg" alt="portfolio-6" class="img-fluid">
                        </a>
                    </div>
                </div>
            </div>
            <div class="pro">
                <div class="project">
                    <div class="img">
                        <a class="popup" href="./img/portfolio/g7.svg" data-lightbox="mygallery" data-title="space">
                            <img src="./img/portfolio/g7.svg" alt="portfolio-7" class="img-fluid">
                        </a>
                    </div>
                </div>
            </div>
            <div class="pro">
                <div class="project">
                    <div class="img">
                        <a class="popup" href="./img/portfolio/g8.svg" data-lightbox="mygallery" data-title="space">
                            <img src="./img/portfolio/g8.svg" alt="portfolio-8" class="img-fluid">
                        </a>
                    </div>
                </div>
            </div>
    </div>
</section>

export default st => `
<section>
${st.pictures.reduce(
  (html, pic) => html + `<img src="${pic.url}" alt="${pic.title}">`,
  ``
)}
</section>
`;

`;
