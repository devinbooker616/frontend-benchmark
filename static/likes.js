const main = document.querySelector("#main")
const sub = main.querySelectorAll("#Sub")


for (const subs of sub) {
    console.log("yay")
    const divs = subs.querySelector("#id")
    const like = subs.querySelector("#likes")
    const numOfLikes = like.querySelector("#numOfLikes")

    like.addEventListener("click", () => {
        const url = `/entries/${divs.textContent.trim()}/like`;
        fetch(url, { method: 'post' })
            .then(response => response.json())
            .then((data) => {
                numOfLikes.textContent = data.likes
            })
    })

}