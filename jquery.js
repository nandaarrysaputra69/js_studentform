var selectedRow = null;
var no = 1;

$(document).ready(function formSubmit(){
    var formData = readForm();
    if (selectedRow == null)
        insertData (formData);
    else
        updateData (formData);
    resetForm();
});

$(document).ready(function readForm(){
    var formData = {};
    formData["nim"] = $('#nim').value;
    formData["name"] = $('#name').value;
    return formData;
});

$(document).ready(function insertData(data){
   var table = $('#tabledata').$('tbody')[0];
   var newRow = $
});