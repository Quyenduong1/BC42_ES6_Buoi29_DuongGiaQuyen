function creatPerson() {
    const person ={
        code: getElement("#code").value,
        name: getElement("#name").value,
        email: getElement("#email").value,
        address: getElement("#address").value,
    };
}

function getElement(selector) {
    return document.querySelector(selector);
}