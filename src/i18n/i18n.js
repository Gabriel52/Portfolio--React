import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import { ENGLISH_LANGUAGE } from "../translation/en-us";
import { PORTUGUESE_LANGUAGE } from "../translation/pt-br";

i18next
.use(initReactI18next) 
.init({
    resources: {
        en:ENGLISH_LANGUAGE,
        ptBr:PORTUGUESE_LANGUAGE,
    },
    lng: "en", 
    fallbackLng: "en",
    returnObjects: true,
    
    interpolation: {
        escapeValue: false
    }
})

export default i18next;