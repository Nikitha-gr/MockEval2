import { baseUrl } from "baseurl.js";

let quizform = document.getElementById("quizForm");
quizform.addEventListener("submit", async function () {
    //event.preventDefault();
    let question = document.getElementById("quiz-question").value;
    let opt1 = document.getElementById("opt1").value;
    let opt2 = document.getElementById("opt2").value;
    let opt3 = document.getElementById("opt3").value;
    let opt4 = document.getElementById("opt4").value;
    let answer = document.getElementById("answer").value;

    let quizObj = { question, opt1, opt2, opt3, opt4, answer };
    console.log(quizObj);
    try {
        let res = fetch("baseUrl", {
            method: "POST",
            headers: {
                "content-type": "apllication/JSON"
            },
            body: JSON.stringify(quizObj)
        })
        alert("Question created");
    } catch(err) {
        alert("No questions Loaded")
    }

    async function getQuestions() {
        try {
            let res = await fetch("baseUrl");
            let data = await res.json();
            return data;
        }
        catch (err) {
            console.log(err);
            alert("Something went wrong")
        }
    }

    window.onload = async () => {
        let data = await getQuestions();
        displayQuestions(data);
    }

    function displayQuestions(data){
        let quizCont = document.getElementById("quizCont");
        quizCont.innerHTML = "";
        data.map((el,i)=>{
            let quizcard = document.createElement("div");
            quizcard.setAttribute("class",quizcard);

            let title = document.createElement("h3");
            title.textContent = data.question;

            let optionA = document.createElement("h4");
            optionA.textContent = data.opt1;

            let optionB = document.createElement("h4");
            optionB.textContent = data.opt2;

            let optionC = document.createElement("h4");
            optionC.textContent = data.opt3;

            let optionD = document.createElement("h4");
            optionD.textContent = data.opt4;

            let reviewBtn = document.createElement("button");

            quizcard.append(title,optionA,optionB,optionC,optionD);
            quizCont.append(quizcard);
        })
    }

})