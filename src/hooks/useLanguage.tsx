export const useLanguage = () => {
	const language = localStorage.getItem('language') || 'es';
	const setLanguage = (language: string) => {
		localStorage.setItem('language', language);
	};

	return { language, setLanguage };
};
