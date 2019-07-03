var buttons = document.querySelectorAll("button");

var btnCancel = buttons[0];
var btnConfirm = buttons[1];
var btnEdit = buttons[2];

var modal = document.querySelector(".modal");
var backdrop = document.querySelector(".backdrop");
var outputParagraph = document.querySelector("#quote");
var textEdit = document.querySelector(".modal textarea");

var quote = 'A Modal Component on a Webpage - How hard could it be';
var editedQuote = "";

function updateParagraph(){
    outputParagraph.textContent= quote;
}

function closeModal(){
    modal.style.display = "none";
    backdrop.style.display ="none";
}

updateParagraph();

btnEdit.addEventListener("click", function(){
    modal.style.display = "block";
    backdrop.style.display ="block";
    editedQuote = quote;
    textEdit.value = quote;
});

btnCancel.addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);

btnConfirm.addEventListener("click", function(){
    closeModal();

    if(editedQuote.trim().length > 0){
        quote = editedQuote;
        updateParagraph();
    }
});

textEdit.addEventListener("input", function(){
    editedQuote = textEdit.value;
});