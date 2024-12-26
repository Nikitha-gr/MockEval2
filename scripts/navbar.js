
export const navbar = () => {
    let navCard = `<div id="navlinks">
        <a href="index.html">Home</a>
        <a href="quiz.html">Quiz</a>
        <a href="questions.html">Questions</a>
    </div>`

    document.getElementById("nav-bar").innerHTML = navCard;
}

navbar();