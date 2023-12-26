// Variables for all input elements
const amount = document.getElementById("amount");
const desc = document.getElementById("desc");
const submit = document.getElementById("submit");
const list = document.getElementById("list");
const category = document.getElementById("category");

submit.addEventListener("click", afterClick);


function afterClick() {
    if (amount != '' && desc != "") {
        const item = document.createElement("li");
        item.innerHTML = `${amount.value}-${category.value}-${desc.value} `;
        const delExpenseButton = document.createElement("button");
        delExpenseButton.textContent = "Delete Expense";
        const editExpenseButton = document.createElement("button");
        editExpenseButton.textContent = "Edit Expense";
        const space = document.createElement("span");
        space.innerHTML = " ";
        item.append(delExpenseButton, space, editExpenseButton);
        list.appendChild(item);
        delExpenseButton.addEventListener("click", () => {
            item.remove();
        });
        editExpenseButton.addEventListener("click", () => {
            item.innerHTML = "";
            const amountAgain = document.createElement("input");
            amountAgain.setAttribute("placeholder", "Enter Amount: ");
            amountAgain.setAttribute("type", "number");
            amountAgain.setAttribute("id", "amountAgain");
            
            const descAgain = document.createElement("input");
            descAgain.setAttribute("placeholder", "Enter description:");
            descAgain.setAttribute("type", "text");
            descAgain.setAttribute("id", "descAgain");

            const catAgain = category;
            

            const saveChangesButton = document.createElement("button");
            saveChangesButton.innerHTML = "Save Changes";
            const cancelButton = document.createElement("button");
            cancelButton.innerHTML = "Cancel";

            item.append(amountAgain, descAgain, catAgain, saveChangesButton, cancelButton);

            cancelButton.addEventListener("click", () => {
                item.innerHTML = `${amount.value}-${category.value}-${desc.value} `;
                item.append(delExpenseButton, space, editExpenseButton);
                list.appendChild(item);
            });

            saveChangesButton.addEventListener("click", ()=>{
                item.innerHTML = "";
                item.innerHTML = `${amountAgain.value}-${catAgain.value}-${descAgain.value}`;
            });

        });
    }
}

