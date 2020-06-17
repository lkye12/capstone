export default (st) => `
<section id="Upload">
    <div class="upload">
        <form id="register" method="POST" action="">
            <h2> Upload a pic to the gallery</h2>
            <div>
              <label for="url">Pic URL:</label>
              <input type="text" name="url" id="url" placeholder="Enter URL" required>
            </div>
            <div>
              <label for="title">Name the pic:</label>
              <input type="text" name="title" id="title" placeholder="Enter name of pic" required>
            </div>
            <input type="submit" name="submit" value="Submit Photo">
          </form>
    </div>
</section>
`;
