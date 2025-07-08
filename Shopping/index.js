const button = document.querySelector("#btn");
button.addEventListener("click", calculateAmount);

function calculateAmount(e){
    e.preventDefault();
    const bill = document.querySelector("#bill").value;
    const people = document.querySelector("#people").value;

    if(bill === ""|| people === ""|| people <1){
     Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please enter your information!",
        });
        return;
    }

    let amountPerPerson = bill/people;

    amountPerPerson = amountPerPerson.toFixed(2);

    document.querySelector("#dividedBill").textContent = amountPerPerson;

}