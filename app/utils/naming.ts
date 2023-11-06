import { Language, sk } from '../i18n/sk';

type _RecursiveKeyof<T> = T extends object
    ? T extends readonly any[]
        ? _RecursiveKeyof<T[number]>
        : keyof T | _RecursiveKeyof<T[keyof T]>
    : never;

type _Exclude = Exclude<_RecursiveKeyToSecondLevel<Language>, 'DetectionScreen'>;

type _RecursiveKeyToSecondLevel<TObj extends object> = {
    [TKey in keyof TObj & (string | number)]: TObj[TKey] extends any[]
        ? `${TKey}`
        : TObj[TKey] extends object
        ? `${TKey}` | `${TKey}.${keyof TObj[TKey] & (string | number)}`
        : `${TKey}`;
}[keyof TObj & (string | number)];

export type RecursiveKeyOfPathof<TObj extends object> = {
    [TKey in keyof TObj & (string | number)]: TObj[TKey] extends any[]
        ? `${TKey}`
        : TObj[TKey] extends object
        ? `${TKey}` | `${TKey}.${RecursiveKeyOfPathof<TObj[TKey]>}`
        : `${TKey}`;
}[keyof TObj & (string | number)];

function splitPath<T extends object>(
    path: RecursiveKeyOfPathof<T>,
): [keyof T, keyof T[keyof T], keyof T[keyof T][keyof T[keyof T]]] {
    const arrayOfKeys = path.split('.');
    const screen = arrayOfKeys[0];
    const component = arrayOfKeys[1];
    const option = arrayOfKeys[2];
    return [
        screen as keyof T,
        component as keyof T[keyof T],
        option as keyof T[keyof T][keyof T[keyof T]],
    ];
}

function objectPass<T extends object>(path: RecursiveKeyOfPathof<T>, obj: T) {
    const keys = splitPath<T>(path);
    return obj[keys[0]][keys[1]];
}

export function naming(path: RecursiveKeyOfPathof<Language>, lang: Language = sk) {
    return objectPass(path, lang);
}
