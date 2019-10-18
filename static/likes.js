const main = document.querySelector("#main")
const sub = main.querySelectorAll("#sub")



for (const subs of sub) {
    const divs = subs.querySelector("#id")
    const like = subs.querySelector("#likes")
    const numOfLikes = like.querySelector("#numOfLikes")

    like.addEventListener("click", () => {
        const url = `/entries/${divs.textContent.trim()}/likes`;
        console.log("yay")
        fetch(url, { method: 'post' })
            .then(response => response.json())
            .then((data) => {
                numOfLikes.textContent = data.likes
            })
    })

}