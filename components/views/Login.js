export default (st) => `
<section id="Login">
<div class="container">
    <form action="" method="POST">
        <h3>Login</h3>
        <label for="email">Email: </label>
        <input type="email" name="email" id="email" placeholder="Email">

        <label for="password">Password: </label>
        <input type="password" name="password" id="password">

        <input type="submit" id="sign-in-button" value="Sign-in">
        </form>
</div>
</section>
`;
