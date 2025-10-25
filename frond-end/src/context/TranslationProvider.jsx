import { useTranslation } from 'react-i18next';
import { TranslationContext } from './TranslationContext';

const TranslationProvider = ({ children }) => {
    const { t, i18n } = useTranslation();

    return (
        <TranslationContext.Provider value={{ t, i18n }}>
            {children}
        </TranslationContext.Provider>
    );
};

export default TranslationProvider;