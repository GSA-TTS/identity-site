const yesButton = document.querySelector('input[type=submit][value=yes]');
const noButton = document.querySelector('input[type=submit][value=no]');
const question = document.querySelectorAll('label')
const touchpointsRoot = document.getElementById('touchpoints_feedback');
if (touchpointsRoot) {
  yesButton.value = touchpointsRoot.dataset.yes;
  noButton.value = touchpointsRoot.dataset.no;
  question[1].outerText = touchpointsRoot.dataset.question;
}
