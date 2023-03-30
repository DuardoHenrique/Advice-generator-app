const btn = document.querySelector(".btn");
const adviceNumber = document.getElementsByTagName('p')
const adviceDescription = document.querySelector(".conselhos");

async function getAdvice() {
    const resposta = await fetch("https://api.adviceslip.com/advice");
    const adviceContent = await resposta.json();
    const adviceId = `Advice #${adviceContent.slip.id}`;
    const adviceText = `"${adviceContent.slip.advice}"`;

    adviceNumber.innerHTML = adviceId;
    adviceDescription.innerHTML = adviceText;
}


btn.onclick = getAdvice;