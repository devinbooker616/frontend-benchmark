const likes = document.querySelector("#likes")
likes.addEventListener("click", () => {
    const url = `/entries/${id}/like`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            for (const nums of data.likes) {

            }
        })
})