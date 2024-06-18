const initializeTouchpointsTranslations = () => {
  const touchpointsRoot = document.getElementById('touchpoints_feedback');

  if (touchpointsRoot) {
    const { yes: yesValue, no: noValue, question } = touchpointsRoot.dataset;

    const yesButton = document.querySelector('input[type=submit][value=yes]');
    const noButton = document.querySelector('input[type=submit][value=no]');
    const label = touchpointsRoot.querySelector('label');

    yesButton?.setAttribute('value', yesValue);
    noButton?.setAttribute('value', noValue);

    if (label) {
      label.innerText = question;
    }
  }
};

document.addEventListener('onTouchpointsFormLoaded', initializeTouchpointsTranslations);
