import { useContext } from 'react';
import { TranslationContext } from './TranslationContext';

const useTranslationContext = () => {
    const context = useContext(TranslationContext);
    if (!context) {
        throw new Error('useTranslationContext must be used within a TranslationProvider');
    }
    return context;
};

export default useTranslationContext;