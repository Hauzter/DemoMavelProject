fetch("http://gateway.marvel.com/v1/public/characters?ts=1667722238&apikey=df17d2ee72f64e3bea59f98b87e57bb9&hash=18b5a5757dc9077ff8f8fbab26a6a4fb")
    .then(response => response.json())
    .then(data => {
        const characters = data.data.results;
        const tableBody = document.querySelector("#characters-table tbody");

        characters.forEach(character => {
            const row = tableBody.insertRow();
            row.insertCell().textContent = character.id;
            row.insertCell().textContent = character.name;
            row.insertCell().textContent = character.modified;
            const detailCell = row.insertCell();
                const detailButton = document.createElement("button");
                detailButton.textContent = "View Details";
                detailButton.addEventListener("click", () => {
                    window.location.href = `character.html?id=${character.id}`;
                });
                detailCell.appendChild(detailButton);
        });
    }
        //console.log(data.data)

    )
    .catch (error => console.error(error));