
function Signup() {

    return ( 
    <body style={{marginTop: "15%", alignItems: "center"}}>
    <div class="signup-container">
        <div class="signup-header">
            <h1>Sign Up</h1>
            <p>Create your account to get started</p>
        </div>

        <form id="signupForm">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" required></input>
            </div>

            <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" required></input>
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required></input>
            </div>

            <button type="submit" class="signup-btn">Sign Up</button>
        </form>

        <div class="login-link">
            <p>Already have an account? <a href="#">Login here</a></p>
        </div>
    </div>
</body>
     );
}

export default Signup;