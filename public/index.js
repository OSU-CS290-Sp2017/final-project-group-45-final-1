var addEvent = document.getElementById('add-event-button');

addEvent.addEventListener('click', function(){
	var displayForm = document.getElementsByClassName('hidden');
	for( var i = 0; i< displayForm.length; i++){
		displayForm[i].style.display= 'block';
	}
});
var closeButton = document.getElementsByClassName('modal-close-button')[0];

closeButton.addEventListener('click', function(){
	var hideForm = document.getElementsByClassName('hidden');
	for(var i = 0; i<hideForm.length; i++){
		hideForm[i].style.display = 'none';
	}
	var date = document.getElementById('event-input-date');
	date.value = "";
	var event = document.getElementById('event-input-event');
	event.value = "";
});

var acceptButton = document.getElementsByClassName('modal-accept-button')[0];

acceptButton.addEventListener('click', function(){
	var p1 = document.createElement('p');
	p1.classList.add('event-date');
	var text = document.getElementById('event-input-date').value;
	var p1Text = document.createTextNode(text);
	p1.appendChild(p1Text);
	var p2 = document.createElement('p');
	p2.classList.add('event-text');
	text = document.getElementById('event-input-event').value;
	var p2Text = document.createTextNode(text);
	p2.appendChild(p2Text);
	var div = document.createElement('div');
	div.classList.add('event-content');
	div.appendChild(p1);
	div.appendChild(p2);
	var art = document.createElement('article');
	art.classList.add('event');
	art.appendChild(div);
	var event = document.getElementsByClassName('event-container')[0];
	event.appendChild(art);
	var hideForm = document.getElementsByClassName('hidden');
	for(var i = 0; i<hideForm.length; i++){
		hideForm[i].style.display = 'none';
	}
	var date = document.getElementById('event-input-date');
	date.value = "";
	var event = document.getElementById('event-input-event');
	event.value = "";
});
var searchButton = document.getElementById('navbar-search-button');

searchButton.addEventListener('click', function(){
	console.log("==Search button pressed");
	search();
});
function search(){
	console.log("==In search function");
	var input = document.getElementById('navbar-search-input').value;
	var event = document.getElementsByClassName('event');
	for(var i = 0; i<event.length; i++){
		event[i].classList.remove('hide');
		var eventText = event[i].getElementsByClassName('event-text')[0].textContent;
		var eventDate = event[i].getElementsByClassName('event-date')[0].textContent;
		var x = eventText.indexOf(input);
		var y = eventDate.indexOf(input);
		if(x === -1 && y === -1){
			event[i].classList.add('hide');
		}
	}
}

//Open the drop down
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

