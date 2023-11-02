/*function loadBalls(){
	var individualOver = document.createElement("div")
	var overShow = document.createElement('')
	var ballsInOver = 6;
	for (var i=0; i<ballsInOver; i++){
		var individualBall = document.createElement("input")
		individualBall.setAttribute("type","text")
		individualBall.setAttribute("style", "width:50px; margin-right: 5px; margin-left:5px")
		individualBall.setAttribute('class','ballBox');
		individualOver.appendChild(individualBall)
	}
	document.getElementById('displayTable').append(individualOver)

}*/

function tableDisplay(){
  var parent = document.getElementById("displayTable");
  
  var table = document.createElement('table'), tr, td, row, cell,head,createOverCell, overTotal;
  var thr = document.createElement('tr');
  var totalOvers = document.getElementById('totalOvers').value;
  var hello = ["Overs",1,2,3,4,5,6];
  for (row = 0; row < hello.length; row++) {
      th = document.createElement('th');
      thr.appendChild(th);
      th.innerHTML = hello[row];
    }
    table.appendChild(thr);

  for (row = 0; row < totalOvers; row++) {
      tr = document.createElement('tr');
      createOverCell = document.createElement('td');
      overTotal = document.createElement('input');
      overTotal.setAttribute("type","text")
      overTotal.value = 0
      
      createOverCell.appendChild(overTotal)

      tr.appendChild(createOverCell);
      createOverCell.innerHTML = "Over "+ (row+1) + `<span><input type="text" disabled class="classIndividualOver" value=0 id="over${row+1}"></span>`

      for (cell = 0; cell < 6; cell++) {
      	td = document.createElement('td');
      	  var createTextBox = document.createElement('input');
    	  createTextBox.type = 'text';
    	  createTextBox.className = "myInput"
     	  //createTextBox.setAttribute('onchange','changeColor1(this.parentNode)')
     	  createTextBox.value = 0;
         
          td.appendChild(createTextBox)
          tr.appendChild(td);
    }
    
    table.appendChild(tr);
    table.setAttribute("id","itemCheckList")
}
	document.getElementById('displayTable').append(table);

	onloadReady()
}	




function onloadReady(){
	var setFirstValue = document.querySelector(".myInput")
	setFirstValue.value = parseInt(0)
	var inputs = Array.from(document.getElementsByClassName("myInput"));
	var buttons = Array.from(document.getElementsByClassName("myButton"));
	var focusedInput = null;

	inputs.forEach(function(input) {
	  input.addEventListener("focus", function() {
	  	this.setAttribute('readonly', 'readonly')
	    focusedInput = this;
	    
	  });
	});

	buttons.forEach(function(button) {
	  button.addEventListener("click", function() {
	    if (focusedInput) {
	      focusedInput.value = this.value;
	      var index = inputs.indexOf(focusedInput);
	      if (index < inputs.length) {
	      	inputs[index].focus();
	        inputs[index + 1].focus();
		      }
		    }
		  });
		});

	sumIndividualOver()
	TotalSumScore()
	}
function sumIndividualOver(){
	var inputs = Array.from(document.getElementsByClassName("myInput"));
	var buttons = Array.from(document.getElementsByClassName("myButton"));
	var focusedInput = 1;

	inputs.forEach(function(input) {
	  input.addEventListener("focus", function() {
	    focusedInput = this;	    
	    var index = inputs.indexOf(focusedInput);
	    var parentNode = inputs[index].parentNode.parentNode.querySelector("td:first-child input")
	    var getOverValues = inputs[index].parentNode.parentNode.querySelectorAll("td > .myInput");
	    //console.log(getOverValues[2].value)

	    var individualTotal = sumOvers(getOverValues)
	    var parentNode = inputs[index].parentNode.parentNode.querySelector("td:first-child input");
	parentNode.value = individualTotal;

	    
	    
	  });
	});

	
	}

function sumOvers(sums){
	
	
	var total = 0;
	for(var i=0; i<sums.length;i++){
		if (sums[i] == "Wd" || sums[i]=="NB" || sums[i]=="Out") {
			continue;
		}
		else{
			var sum1 = parseInt(sums[i].value);
			if (sum1=="Nan"){
			sum1 = 0;
		}
		total = total + sum1
		}
		
	}
	return total;
	
}

function TotalSumScore(){
	var inputs = Array.from(document.getElementsByClassName("myInput"));
	//var buttons = Array.from(document.getElementsByClassName("myButton"));
	var focusedInput = 1;

	inputs.forEach(function(input) {
	  input.addEventListener("focus", function() {
	    focusedInput = this;	    
	    var index = inputs.indexOf(focusedInput);
	    var parentNode = document.getElementById("totalSum")
	    var getOverValues = document.getElementById("itemCheckList").querySelectorAll("tr td .myInput");
	    //console.log(getOverValues[2].value)

	    var individualTotal = sumOvers(getOverValues);
	    parentNode.value = individualTotal;

	    
	    
	  });
	});


	
	}






