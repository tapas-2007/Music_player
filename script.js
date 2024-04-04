var x = document.getElementById("login");
      var y = document.getElementById("register");
      var z = document.getElementById("btn");
      function login() {
        x.style.left = "27px";
        y.style.right = "-350px";
        z.style.left = "0px";
      }
      function register() {
        x.style.left = "-350px";
        y.style.right = "25px";
        z.style.left = "150px";
      }
      function myLogPassword() {
        var a = document.getElementById("logPassword");
        var b = document.getElementById("eye");
        var c = document.getElementById("eye-slash");
        if (a.type === "password") {
          a.type = "text";
          b.style.opacity = "0";
          c.style.opacity = "1";
        } else {
          a.type = "password";
          b.style.opacity = "1";
          c.style.opacity = "0";
        }
      }
      function myRegPassword() {
        var d = document.getElementById("regPassword");
        var b = document.getElementById("eye-2");
        var c = document.getElementById("eye-slash-2");
        if (d.type === "password") {
          d.type = "text";
          b.style.opacity = "0";
          c.style.opacity = "1";
        } else {
          d.type = "password";
          b.style.opacity = "1";
          c.style.opacity = "0";
        }
      }
      function validateLogin() {
        // For simplicity, let's assume the correct username and password are "user" and "password"
        var username = document.getElementById('logEmail').value;
        var password = document.getElementById('logPassword').value;
      
        if (username === 'tapusoni27@gmail.com' && password === 'Tp#1569') {
          // Redirect to the dashboard page on successful login
          window.location.href = 'main.html';
        } else {
          alert('Invalid username or password. Please try again.');
        }
      }