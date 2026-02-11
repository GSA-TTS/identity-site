import ProgramUpdatePreview from './program_update_preview.jsx';

const { CMS } = window;

if (CMS && typeof CMS.registerPreviewTemplate === 'function') {
	CMS.registerPreviewTemplate('program_updates', ProgramUpdatePreview);
} else {
	// Avoid runtime error if CMS is not yet available
	window.addEventListener('load', () => {
		if (window.CMS && typeof window.CMS.registerPreviewTemplate === 'function') {
			window.CMS.registerPreviewTemplate('program_updates', ProgramUpdatePreview);
		} else {
			// eslint-disable-next-line no-console
			console.error('CMS is not available to register preview templates');
		}
	});
}
