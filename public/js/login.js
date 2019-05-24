$(document).ready(function() {
  var loginForm = $("form.login");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

  loginForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  function loginUser(email, password) {
    $.post("/api/login/index", {
      email: email,
      password: password
    })
      .then(function(data) {
        window.location.replace(data);
      })
      .catch(function(err) {
        if (err) {
          var error = "email or password does not match";
          $(".msg").text(error);
          $("#alerts").fadeIn(500);
        }
      });
  }
});
