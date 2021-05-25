const yesButton = document.querySelector('input[type=submit][value=yes]');
const noButton = document.querySelector('input[type=submit][value=no]');
const touchpointsRoot = document.getElementById('touchpoints_feedback');
if (touchpointsRoot) {
  yesButton.value = touchpointsRoot.dataset.yes;
  noButton.value = touchpointsRoot.dataset.no;
}
