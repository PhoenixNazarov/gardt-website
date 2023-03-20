import {getCookie, setCookie} from "@/assets/js/cookie";
import {translates} from "@/assets/js/translates";

const COLLECT = true;

window.translateCollection = new Set();

let language = null;
const allowLanguage = Object.keys(Object.values(translates)[0])


export function translate(text) {

    if (COLLECT) {
        window.translateCollection.add(text);
    }

    let trans = translates[text];
    if (trans === undefined) {
        return text;
    }
    if (trans[getLanguage()] === null) {
        return trans;
    }

    return translates[text][getLanguage()];
}


export function setLanguage(name) {
    if (!allowLanguage.includes(name)) {
        name = 'ru';
    }
    setCookie('language', name);
    location.reload();
}


export function getLanguage() {
    if (language === null) {
        language = getCookie('language');
    }

    if (!allowLanguage.includes(language)) {
        language = 'ru';
        setLanguage('ru');
    }

    return language;
}
