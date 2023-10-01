const foxImageElement = document.getElementById("foxImage");
        const newFoxButton = document.getElementById("newFoxButton");

        function fetchRandomFoxImage() {
            fetch("https://randomfox.ca/floof/")
                .then(response => response.json())
                .then(data => {
                    const imageUrl = data.image;
                    foxImageElement.src = imageUrl;
                })
                .catch(error => {
                    console.error("Error al obtener la imagen del zorro:", error);
                });
        }

        fetchRandomFoxImage();
        newFoxButton.addEventListener("click", fetchRandomFoxImage);