const BillAmount = document.querySelector("#bill-amount");
const CashGiven = document.querySelector("#cash-given");
const CheckButton = document.querySelector("#check-btn");
const message = document.querySelector(".error");
const noOfNotes = document.querySelectorAll(".note-count");
const Output = document.querySelector(".output")

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

CheckButton.addEventListener("click", function Validate(){
    hideMessage();
    if(Number(BillAmount.value) > 0){
        if(Number(CashGiven.value) >= Number(BillAmount.value)){
            const AmounttobeReturned = CashGiven.value - BillAmount.value;
            calculateChange(AmounttobeReturned);
            Output.style.display="block";
        }else{
            showMessage("Insufficient Cash");
        }
    }else{
        showMessage("Invalid Bill Amount");
    }
});
function showMessage(msg){
    message.style.display="block";
    message.innerText=msg;
}
function hideMessage(){;
    message.style.display="none";
    Output.style.display="none";
}
function calculateChange(AmounttobeReturned){
    for(let i=0;i<availableNotes.length;i++){
        const numberOfNotes = Math.trunc(AmounttobeReturned/availableNotes[i]);
        AmounttobeReturned = AmounttobeReturned%availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}