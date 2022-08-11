window.clearCaptchaError = () => {
  const error = document.getElementById('captcha-error-message');
  if (error.textContent) {
    error.textContent = '';
    error.classList.add('display-none');
  }
};

function fetchTextInput(id) {
  return document.querySelector(`#contact-us-form #${id}`).value;
}

function fetchSelectInput(name) {
  return document.querySelector(`#contact-us-form select[name="${name}"]`).value;
}

async function submitPartnerContact(event) {
  event.preventDefault();

  const debug = Array.prototype.slice.apply(document.getElementsByName('debug'))[0];
  const form = document.getElementById('contact-us-form');
  const formError = document.getElementById('form-error-message');
  const formSuccess = document.getElementById('form-success-message');
  const captchaError = document.getElementById('captcha-error-message');
  const captcha = document.getElementById('g-recaptcha-response');

  // skip captcha check when debug flag is turned on
  if (!debug || (debug && !+debug.value)) {
    // check for captcha response
    if (!captcha || !captcha.value) {
      captchaError.textContent = captchaError.dataset.error;
      captchaError.classList.remove('display-none');
      return false;
    }
  }

  const honeypot = fetchTextInput('information');
  if (honeypot) {
    return false;
  }

  const firstName = fetchTextInput('first_name');
  const lastName = fetchTextInput('last_name');
  const jobTitle = fetchTextInput('job_title');
  const email = fetchTextInput('email').toLowerCase();
  const agency = fetchSelectInput('agency');
  const program = fetchTextInput('program');
  const stateLocalAttestation = fetchSelectInput('state_local_attestation');
  let launchDate = fetchTextInput('launch_date');

  if (launchDate) {
    launchDate = new Date(launchDate).toISOString().slice(0, 10);
  }

  const estimatedUsers = fetchTextInput('estimated_users');
  const estimatedAuths = fetchTextInput('estimated_auths');
  const proofing = fetchSelectInput('proofing');
  const estimatedIdvUsers = fetchTextInput('estimated_idv_users');
  const submittedDescription = fetchTextInput('description');
  let description;

  if (submittedDescription) {
    description = submittedDescription;
  } else {
    description = 'I would like to learn more about Login.gov.';
  }

  const requestBody = {
    request: {
      requester: {
        name: `${firstName} ${lastName}`,
        email,
      },
      subject: `Login.gov inquiry for ${program}`,
      comment: { body: description },
      ticket_form_id: 5599398793108,
      custom_fields: [
        { id: 5549275172884, value: firstName },
        { id: 5549276309140, value: lastName },
        { id: 5549566619668, value: jobTitle },
        { id: 4418412738836, value: agency },
        { id: 5549623980820, value: program },
        { id: 8946560540564, value: stateLocalAttestation },
        { id: 4417512374548, value: launchDate },
        { id: 4417514509076, value: estimatedUsers },
        { id: 4417513940756, value: estimatedAuths },
        { id: 5549997170452, value: proofing },
        { id: 5550320439188, value: estimatedIdvUsers },
      ],
    },
  };

  const response = await fetch('https://logingov.zendesk.com/api/v2/requests.json', {
    method: 'POST',
    body: JSON.stringify(requestBody),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.status === 201) {
    form.classList.add('display-none');
    form.reset();
    formSuccess.classList.remove('display-none');
  } else {
    formError.classList.remove('display-none');
  }

  return false;
}

const contactForm = document.getElementById('contact-us-form');
contactForm.addEventListener('submit', submitPartnerContact);

function changeAgency(_event) {
  const agencySelect = document.querySelector('#contact-us-form select[name="agency"]');
  const stateLocalRegex = /(^(state|territory)_of|^other_local_or_tribal_government)/;
  const attestationGroup = document.getElementById('state_local_attestation-group');
  const stateLocalAttestation = document.getElementById('state_local_attestation');

  if (agencySelect.value.match(stateLocalRegex)) {
    attestationGroup.classList.remove('display-none');
    stateLocalAttestation.required = true;
  } else {
    attestationGroup.classList.add('display-none');
    stateLocalAttestation.required = false;
  }
}

const agencySelect = document.getElementById('agency');
agencySelect.addEventListener('change', changeAgency);
