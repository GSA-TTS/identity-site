const openAccordionCount = {
  general: 0,
  logistics: 0,
  development: 0,
};

function toggleExpandAllCollapseAllBtn(section) {
  const btns = document.getElementsByClassName(`collapse-expand-btn-${section}`);

  Array.from(btns).forEach((btn) => {
    btn.innerHTML = openAccordionCount[section] > 0 ? 'Collapse all' : 'Expand all';
  });
}

function closeAllAccordions(section) {
  const accordionButtons = document.getElementsByClassName(`login-accordion-btn-${section}`);

  Array.from(accordionButtons).forEach((el) => {
    el.setAttribute('aria-expanded', 'false');
  });

  const accordionContentPanels = document.getElementsByClassName(
    `login-accordion-content-${section}`,
  );

  Array.from(accordionContentPanels).forEach((el) => {
    el.hidden = true;
  });

  openAccordionCount[section] = 0;
}

function openAllAccordions(section) {
  const accordionButtons = document.getElementsByClassName(`login-accordion-btn-${section}`);
  openAccordionCount[section] = 0;

  Array.from(accordionButtons).forEach((el) => {
    el.setAttribute('aria-expanded', 'true');
    openAccordionCount[section]++;
  });

  const accordionContentPanels = document.getElementsByClassName(
    `login-accordion-content-${section}`,
  );

  Array.from(accordionContentPanels).forEach((el) => {
    el.hidden = false;
  });
}

window.updateSingleAccordion = function (el, section) {
  setTimeout(function () {
    if (el.getAttribute('aria-expanded') === 'true') {
      openAccordionCount[section]++;
    } else {
      openAccordionCount[section]--;
    }
    toggleExpandAllCollapseAllBtn(section); // needs help
  }, 10);
};

window.updateAllAccordions = function (section) {
  if (openAccordionCount[section] > 0) {
    closeAllAccordions(section);
  } else {
    openAllAccordions(section);
  }
  toggleExpandAllCollapseAllBtn(section);
};
