document
  .getElementById("fileInput")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const imgURL = e.target.result;
        localStorage.setItem("img", imgURL);
        const img = document.createElement("img");
        img.src = localStorage.getItem("img");
        const preview = document.getElementById("preview");
        preview.innerHTML = "";
        preview.appendChild(img);
      };
      reader.readAsDataURL(file);
    } else {
      document.getElementById("preview").innerHTML = "<i class='fa-solid fa-camera'></i>";
    }
  });
