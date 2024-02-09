/**
 * Formats the given date instance with a standard date format.
 *
 * @param date Date to format.
 *
 * @return Formatted string.
 */
function formatDate(date: Date): string {
  return new Intl.DateTimeFormat(document.documentElement.lang || 'en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short',
  }).format(date);
}

/**
 * Replaces a text string anywhere it occurs within an element's children, without resorting to
 * dangerous innerHTML.
 *
 * @param element Element to search.
 * @param needle Search term.
 * @param replacement Replacement text.
 */
function deepReplace(element: Element, needle: string, replacement: string) {
  for (const childNode of element.childNodes) {
    if (childNode.nodeType === Node.TEXT_NODE && childNode.nodeValue) {
      childNode.nodeValue = childNode.nodeValue.replace(needle, replacement);
    } else if (childNode.nodeType === Node.ELEMENT_NODE) {
      deepReplace(childNode as Element, needle, replacement);
    }
  }
}

class ContactUsFormElement extends HTMLElement {
  connectedCallback() {
    if (this.isInMaintenanceWindow) {
      this.showAlert();
      this.hide();
    } else {
      this.removeAlert();
    }
  }

  get maintenanceAlert(): HTMLElement | null {
    return document.getElementById(this.getAttribute('maintenance-alert-id')!);
  }

  get now(): Date {
    return new Date();
  }

  get maintenanceStartTime(): Date | null {
    return this.getAttribute('maintenance-start-time')
      ? new Date(this.getAttribute('maintenance-start-time')!)
      : null;
  }

  get maintenanceEndTime(): Date | null {
    return this.getAttribute('maintenance-end-time')
      ? new Date(this.getAttribute('maintenance-end-time')!)
      : null;
  }

  get isInMaintenanceWindow(): boolean {
    return !!(
      this.maintenanceStartTime &&
      this.maintenanceEndTime &&
      this.now > this.maintenanceStartTime &&
      this.now < this.maintenanceEndTime
    );
  }

  showAlert() {
    if (!this.maintenanceAlert) {
      return;
    }

    deepReplace(this.maintenanceAlert, '%{start_time}', formatDate(this.maintenanceStartTime!));
    deepReplace(this.maintenanceAlert, '%{end_time}', formatDate(this.maintenanceEndTime!));
    this.maintenanceAlert.removeAttribute('hidden');
  }

  removeAlert() {
    this.maintenanceAlert?.remove();
  }

  hide() {
    this.setAttribute('hidden', '');
  }
}

if (!customElements.get('contact-us-form')) {
  customElements.define('contact-us-form', ContactUsFormElement);
}

export default ContactUsFormElement;
