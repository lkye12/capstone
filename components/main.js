import * as views from "./views"

export default st => `
<main>
${views [st.page]()}
</main>
`;