export default st => `<section id="gallery">
${st.picture.map(pic =>`<img src="${pic.url}" alt ="${pic.title}">`).join("")}

`;