var updateRowCount = 0;
var rowCount = 1;
// Get the modal
var modal = document.getElementById('myModal');
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// When the user clicks the button, open the modal 
//btn.onclick = function() {
   // modal.style.display = "block";
    //document.getElementById("tableList").style.display = "none";
//}

//document.addEventListener('DOMContentLoaded', onInit);
function onInit(){
var rows = document.getElementById('tasksTable').getElementsByTagName("thead")[0].getElementsByTagName("tr").length;
if(rows>1){
	document.getElementById("tableList").style.display = "block";
}else{
    document.getElementById("tableList").style.display = "none";
}
}

function addTasks() {
    var table = document.getElementById("tasksTable");
    var row = table.insertRow(rowCount);
    row.id = 'tableRow_' + rowCount;
    var cell1 = row.insertCell(0);
    cell1.style.textAlign = "center";
    //cell1.style.color="white";
    cell1.id = 'name_' + rowCount;
    var cell2 = row.insertCell(1);
    cell2.style.textAlign = "center";
    //cell2.style.color="white";
    cell2.id = 'desc_' + rowCount;
    var cell3 = row.insertCell(2);
    cell3.style.textAlign = "center";
    //cell3.style.color="white";
    cell1.innerHTML = document.getElementById("countryName").value;
    cell2.innerHTML = document.getElementById("countryDescription").value;
    cell3.innerHTML = '<td><a class=edit id="edit_' + rowCount + '" onclick="editRow(' + rowCount + ')"><i class="fas fa-edit"></i></a></td>&nbsp;&nbsp;<td ><a id=delete_' + rowCount + ' class="delete" onclick="delete_row(' + rowCount + ')"><i class="fas fa-times"></i></a></td>';
    rowCount++;
    document.getElementById("countryName").value = "";
    document.getElementById("countryDescription").value = "";
    document.getElementById("tableList").style.display = "block";
    //modal.style.display = "none";
}

function updateTasks() {
    document.getElementById("name_" + updateRowCount).innerHTML = document.getElementById("countryName").value;
    document.getElementById("desc_" + updateRowCount).innerHTML = document.getElementById("countryDescription").value;
    updateRowCount = 0;
    document.getElementById("tableList").style.display = "block";
   // modal.style.display = "none";
    document.getElementById("saveButton").style.display = "block";
    document.getElementById("updateButton").style.display = "none";
    document.getElementById("countryName").value = "";
    document.getElementById("countryDescription").value = "";
}

function delete_row(_rowCount) 
{
    document.getElementById('tableRow_' + _rowCount).outerHTML = "";
    rowCount--;
	//document.getElementById("tableList").style.display = "none";
	var rows = document.getElementById('tasksTable').getElementsByTagName("thead")[0].getElementsByTagName("tr").length;
	if(rows>1)
	{
		//	document.getElementById("tableList").style.display = "block";
	}else
	{
		document.getElementById("tableList").style.display = "none";
	}
}

function editRow(_rowCount) {
    document.getElementById("countryName").value = document.getElementById("name_" + _rowCount).innerText;
    document.getElementById("countryDescription").value = document.getElementById("desc_" + _rowCount).innerText;
    updateRowCount = _rowCount;
    document.getElementById("tableList").style.display = "block";
    document.getElementById("saveButton").style.display = "none";
    document.getElementById("updateButton").style.display = "block";
   // modal.style.display = "block";
}
function countryName()
{
	var name=document.getElementById("countryName").value;
	var description=document.getElementById("countryDescription").value;
	if(name==="" || description==="")
	{
		document.getElementById("names").innerHTML="Please Enter The Country Name And Description";
		document.getElementById("names").style.color="Red";
	}
	else
	{
		document.getElementById("names").innerHTML="";
		addTasks();
	}
}