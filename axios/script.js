function fetchUserAxios() {
  document.getElementById("axios-result").innerText = "Loading...";
  axios
    .get("https://randomuser.me/api/")
    .then(function (response) {
      const user = response.data.results[0];
      const html = `<strong>Name:</strong> ${user.name.first} ${user.name.last}<br>
                          <strong>Email:</strong> ${user.email}<br>
                          <img src="${user.picture.medium}" alt="User Picture">`;
      document.getElementById("axios-result").innerHTML = html;
    })
    .catch(function (error) {
      document.getElementById("axios-result").innerText = "Error: " + error;
    });
}

function fetchCatImage() {
  axios
    .get("https://cataas.com/cat?json=true")
    .then((response) => {
      const data = response.data;
      let imageUrl;

      if (data && (data._id || data.url)) {
        if (data.url && data.url.startsWith("http")) {
          imageUrl = data.url;
        } else if (data.url) {
          imageUrl = "https://cataas.com" + data.url;
        } else {
          imageUrl = "https://cataas.com/cat/" + data._id;
        }

        const html = `<img src="${imageUrl}" alt="A random cat" style="max-width: 50%; height: auto;">`;
        document.getElementById("result").innerHTML = html;
      } else {
        document.getElementById("result").innerHTML =
          "Could not fetch a cat image.";
      }
    })
    .catch((error) => {
      console.error("Error fetching cat image:", error);
      document.getElementById("result").innerHTML = "Error fetching cat image.";
    });
}
