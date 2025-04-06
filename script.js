const form = document.getElementById("record-form");
const nameinput = document.getElementById("name");
const genderinput = document.getElementsByName("gender");
const ageinput = document.getElementById("age");
const cityinput = document.querySelector(".city-list");
const resetbtn = document.getElementById("reset-btn");
const addbtn = document.getElementById("add-btn");
const updatebtn = document.getElementById("update-btn");
const tableBody = document.querySelector("tbody");
let selectedrow = null;

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = nameinput.value.trim();
    let gender = "";
    for (let g of genderinput) {
        if (g.checked) {
            gender = g.value;
            break;
        }
    }
    const age = ageinput.value.trim();
    const city = cityinput.value.trim();

    if (selectedrow == null) {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${name}</td>
            <td>${gender}</td>
            <td>${age}</td>
            <td>${city}</td>
            <td>
                <a href="#" class="edit">Update</a>
                <a href="#" class="remove">Remove</a>
            </td>
        `;
    }

    form.reset();
});


tableBody.addEventListener("click", function(e){
    if(e.target.classList.contains("remove")){
        if(confirm("Are you sure you want to delete this record?")){
            const row = e.target.closest("tr");
            row.remove();
        }
    }
});

tableBody.addEventListener("click", function(e){
    if(e.target.classList.contains("edit")){
        selectedrow = e.target.closest("tr");
        nameinput.value = selectedrow.cells[0].innerText;
        const selectedgender = selectedrow.cells[1].innerText;
        for(let g of genderinput){
            g.checked = g.value === selectedgender;
        }
        ageinput.value = selectedrow.cells[2].innerText;
        cityinput.value = selectedrow.cells[3].innerText;   
    }
});

form.addEventListener("click", function(){
    const name = nameinput.value.trim();
    let gender = "";
    for(let g of genderinput){
        if(g.checked){
            gender = g.value;
            break;
        }
    }
    const age = ageinput.value.trim();
    const city = cityinput.value.trim();
    if(selectedrow){
        selectedrow.cells[0].innerText = name;
        selectedrow.cells[1].innerText = gender;
        selectedrow.cells[2].innerText = age;
        selectedrow.cells[3].innerText = city;
    }
    form.reset();


})


