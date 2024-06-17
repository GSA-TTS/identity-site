const initializeTouchpoints = () => {
  const touchpointsRoot = document.getElementById('touchpoints_feedback');
  if (!touchpointsRoot) return;

  const yesButton = document.querySelector('input[type=submit][value=yes]');
  const noButton = document.querySelector('input[type=submit][value=no]');
  const label = touchpointsRoot.querySelector('label');

  yesButton.value = touchpointsRoot.dataset.yes;
  noButton.value = touchpointsRoot.dataset.no;

  if (label) {
    label.innerText = touchpointsRoot.dataset.question;
  }
};

document.addEventListener('onTouchpointsFormLoaded', initializeTouchpoints);
