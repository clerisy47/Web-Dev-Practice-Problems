const BASE_URL =
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

async function convertCurrency() {
    let amount = document.querySelector("form input").value;
    if (amount === "" || amount === "0") {
        msg.innerHTML = "Please enter a valid amount";
        return;
    }
    let URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let result = (data[toCurr.value.toLowerCase()] * amount).toFixed(3);
    msg.innerHTML = `${amount} ${fromCurr.value} = ${result} ${toCurr.value}`;

}

function updateFlag(element){
    let countryCode = countryCodes[element.value];
    new_url = `https://flagsapi.com/${countryCode}/flat/64.png`
    element.parentElement.querySelector("img").src = new_url;
}

for (let dropdown of dropdowns) {
    for (let countryCode in countryCodes) {
        const option = document.createElement("option");
        option.value = countryCode;
        option.innerText = countryCode;
        if (countryCode === "USD" && dropdown.name === "from") {
            option.selected = true;
        }
        else if (countryCode === "NPR" && dropdown.name === "to") {
            option.selected = true;
        }
        dropdown.append(option);
    }
    dropdown.addEventListener("change", e => {
        updateFlag(e.target);
    })
}

window.addEventListener("load", ()=>{
    convertCurrency();
})
btn.addEventListener("click",async e => {
    e.preventDefault();
    convertCurrency();
}
)

document.querySelector('i').addEventListener('click', function() {
    let temp = fromCurr.value;
    fromCurr.value = toCurr.value;
    toCurr.value = temp;
    updateFlag(fromCurr);
    updateFlag(toCurr);
    convertCurrency();
});


