console.log("this works");
export default (st) => `
<section id="Gallery">
    <div class="container">
        <div class="gallery">
            <div class="pro">
                <div class="project">
                    <div class="pro img">
                        <a class="popup" href="https://raw.githubusercontent.com/lkye12/capstone/089089e570f802bd196bcffaf110db1f5f257192/img/portfolio/g1.svg?token=AB3F4AOK6O4QWBQHOTH7I7C65LDUS" data-lightbox="mygallery" data-title="space">
                            <img src="https://raw.githubusercontent.com/lkye12/capstone/089089e570f802bd196bcffaf110db1f5f257192/img/portfolio/g1.svg?token=AB3F4AOK6O4QWBQHOTH7I7C65LDUS" alt="portfolio-1" class="img-fluid">
                        </a>
                    </div>
                </div>
            </div>
            <div class="pro">
                <div class="project">
                    <div class="img">
                        <a class="popup" href="https://raw.githubusercontent.com/lkye12/capstone/089089e570f802bd196bcffaf110db1f5f257192/img/portfolio/g2.svg?token=AB3F4APX72TPQZM2NQGEOXS65LEP4" data-title="space">
                            <img src="https://raw.githubusercontent.com/lkye12/capstone/089089e570f802bd196bcffaf110db1f5f257192/img/portfolio/g2.svg?token=AB3F4APX72TPQZM2NQGEOXS65LEP4" alt="portfolio-2" class="img-fluid">
                        </a>
                    </div>
                </div>
            </div>
            <div class="pro">
                <div class="project">
                    <div class="img">
                        <a class="popup" href="https://raw.githubusercontent.com/lkye12/capstone/089089e570f802bd196bcffaf110db1f5f257192/img/portfolio/g3.svg?token=AB3F4APZWEETVQ3EVHCCSN265LE2I" data-lightbox="mygallery" data-title="space">
                            <img src="https://raw.githubusercontent.com/lkye12/capstone/089089e570f802bd196bcffaf110db1f5f257192/img/portfolio/g3.svg?token=AB3F4APZWEETVQ3EVHCCSN265LE2I" alt="portfolio-3" class="img-fluid">
                        </a>
                    </div>
                </div>
            </div>
            <div class="pro">
                <div class="project">
                    <div class="img">
                        <a class="popup" href="https://raw.githubusercontent.com/lkye12/capstone/089089e570f802bd196bcffaf110db1f5f257192/img/portfolio/g4.svg?token=AB3F4AMUZDGOUALOSUKISY265LEU6" data-lightbox="mygallery" data-title="space">
                            <img src="https://raw.githubusercontent.com/lkye12/capstone/089089e570f802bd196bcffaf110db1f5f257192/img/portfolio/g4.svg?token=AB3F4AMUZDGOUALOSUKISY265LEU6" alt="portfolio-4" class="img-fluid">
                        </a>
                    </div>
                </div>
            </div>
            <div class="pro">
                <div class="project">
                    <div class="img">
                        <a class="popup" href="https://raw.githubusercontent.com/lkye12/capstone/089089e570f802bd196bcffaf110db1f5f257192/img/portfolio/g5.svg?token=AB3F4ANEITMWX34IHBPE2J265LEVC" data-lightbox="mygallery" data-title="space">
                            <img src="https://raw.githubusercontent.com/lkye12/capstone/089089e570f802bd196bcffaf110db1f5f257192/img/portfolio/g5.svg?token=AB3F4ANEITMWX34IHBPE2J265LEVC" alt="portfolio-5" class="img-fluid">
                        </a>
                    </div>
                </div>
            </div>
            <div class="pro">
                <div class="project">
                    <div class="img">
                        <a class="popup" href="https://raw.githubusercontent.com/lkye12/capstone/089089e570f802bd196bcffaf110db1f5f257192/img/portfolio/g6.svg?token=AB3F4AMRSDDZCAAJSMK2WI265LFDM" data-lightbox="mygallery" data-title="space">
                            <img src="https://raw.githubusercontent.com/lkye12/capstone/089089e570f802bd196bcffaf110db1f5f257192/img/portfolio/g6.svg?token=AB3F4AMRSDDZCAAJSMK2WI265LFDM" alt="portfolio-6" class="img-fluid">
                        </a>
                    </div>
                </div>
            </div>
            <div class="pro">
                <div class="project">
                    <div class="img">
                        <a class="popup" href="https://raw.githubusercontent.com/lkye12/capstone/089089e570f802bd196bcffaf110db1f5f257192/img/portfolio/g7.svg?token=AB3F4AKV5UNWFZKYCF7DEKC65LEVK" data-lightbox="mygallery" data-title="space">
                            <img src="https://raw.githubusercontent.com/lkye12/capstone/089089e570f802bd196bcffaf110db1f5f257192/img/portfolio/g7.svg?token=AB3F4AKV5UNWFZKYCF7DEKC65LEVK" alt="portfolio-7" class="img-fluid">
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
`;
//export default st => `
{
  /* <section>
${st.pictures.reduce(
  (html, pic) => html + `<img src="${pic.url}" alt="${pic.title}">`,
  ``
)}
<div class="button-group">
            <button type="button" class="active" id="btn1" data-filter="*">All</button>
            <button type="button" data-filter=".popular">Popular</button>
            <button type="button" data-filter=".latest">Latest</button>
            <button type="button" data-filter=".following">Following</button>
            <button type="button" data-filter=".upcoming">Upload</button>
        </div>
</section>
`;// */
}
//
