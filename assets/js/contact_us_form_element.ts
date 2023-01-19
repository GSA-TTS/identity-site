class ContactUsFormElement extends HTMLElement {
  connectedCallback() {
    if (this.isInMaintenanceWindow) {
      this.hide();
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

  hide() {
    this.maintenanceAlert?.removeAttribute('hidden');
    this.setAttribute('hidden', '');
  }
}

if (!customElements.get('contact-us-form')) {
  customElements.define('contact-us-form', ContactUsFormElement);
}

export default ContactUsFormElement;
