var selectedRow = null;
var no = 1;

function formSubmit() {
    var formData = readForm();
    if (selectedRow == null)
        insertData (formData);
    else
        updateData (formData);
    resetForm();
}

function readForm() {
    var formData = {};
    formData["nim"] = document.getElementById("nim").value;
    formData["name"] = document.getElementById("name").value;
    return formData;
}

function resetForm() {
    document.getElementById("nim").value = "";
    document.getElementById("name").value = "";
    selectedRow = null;
}

function insertData(data) {
    var table = document.getElementById("tabledata").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell0 = newRow.insertCell(0);
    cell0.innerHTML = no++;
    cell1 = newRow.insertCell(1);
    cell1.innerHTML = data.nim;
    cell2 = newRow.insertCell(2);
    cell2.innerHTML = data.name;
    cell3 = newRow.insertCell(3);
    cell3.innerHTML = `<a onClick="onEdit(this)">Edit</a> | <a onClick="onDelete(this)">Delete</a>`;
}

function updateData(formData) {
    selectedRow.cells[1].innerHTML = formData.nim;
    selectedRow.cells[2].innerHTML = formData.name;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nim").value = selectedRow.cells[1].innerHTML;
    document.getElementById("name").value = selectedRow.cells[2].innerHTML;;
}

function onDelete(td) {
    row = td.parentElement.parentElement;
    document.getElementById("tabledata").deleteRow(row.rowIndex);
    resetForm();
}