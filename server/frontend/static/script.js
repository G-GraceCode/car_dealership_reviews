
    const logout = async (e) => {
      //Include the code for logout here.
      // e.preventdefault()

      let logout_url = window.location.origin+"/djangoapp/logout"
      const res = await fetch(logout_url, {
        method: "GET",
      })

      const json = await res.json();
      
      if(json){
        let username = sessionStorage.getItem('username')
        sessionStorage.removeItem('username');
        window.location.href=window.location.origin
        window.location.reload();
        alert("Logging out "+ username + " ...")

      } else{
        alert("The user could not be logged out.")
      }

    };

    let checkSession = () => {
      let curr_user = sessionStorage.getItem("username");

      if (curr_user && curr_user !== "") {
        document.getElementById("loginlogout").innerHTML =
          '<span class="homepage_links">' + curr_user + '</span>' +
          '<button type="submit" class="homepage_links cursor-pointer btn btn-white" onclick="logout()">Logout</button>'
      } else {
        document.getElementById("loginlogout").innerHTML =
          '<a class="homepage_links p-2 mr-4" href="/login">Login</a>' +
          '<a class="homepage_links p-2" href="/register">Register</a>'
      }
    }