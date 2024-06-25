import { accordion, banner, comboBox, datePicker, navigation } from '@18f/identity-design-system';
import { storeUrlQueryParams } from './query_params.js';

const components = [accordion, banner, comboBox, datePicker, navigation];
components.forEach((component) => component.on());

storeUrlQueryParams();
