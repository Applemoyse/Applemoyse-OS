function updateLocalTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');

  document.getElementById("status").innerHTML = `${year}-${month}-${day} <br> ${hours}:${minutes}`;
}
// Update the local time every second
setInterval(updateLocalTime, 1000);
// Initial update
updateLocalTime();

$(document).ready(function () {
  // Open the modal when clicking on the trigger button
  $('.modal-trigger').click(function () {
    var modalId = $(this).data('modal-id');
    $('.modal-container').not('#' + modalId).fadeOut(); // Close other open modals
    $('#' + modalId).fadeIn();
  });

  // Close the modal when clicking on the close button
  $('.modal-close').click(function () {
    $(this).closest('.modal-container').fadeOut();
  });

  // Close the modal when clicking outside the modal
  $(document).on('click', function (e) {
    if ($(e.target).hasClass('modal-container')) {
      $('.modal-container').fadeOut();
    }
  });

  // Close the modal when pressing the "esc" key
  $(document).on('keydown', function (e) {
    if (e.keyCode === 27) { // "esc" key
      $('.modal-container').fadeOut();
    }
  });

  // Close the modal when double-clicking on the trigger button
  $('.modal-trigger').dblclick(function () {
    var modalId = $(this).data('modal-id');
    $('#' + modalId).fadeOut();
  });
});

let answers = [
  "It is certain",
  "It is decidedly so",
  "Reply hazy try again",
  "Cannot predict now",
  "Do not count on it",
  "My sources say no",
  "Outlook not so good",
  "Signs point to yes",
]

function displayAnswer()
{
	let index = Math.floor(Math.random() * answers.length);
	let answer = answers[index];
	let element = document.getElementById( 'answer' );
	element.style.display = 'inline-block';
	element.innerHTML = answer;
}