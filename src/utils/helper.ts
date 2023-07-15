import { useI18n } from "vue-i18n";

export const formatCurrency = (number: number, locale = "vi-VN", options?: object) => {
    return number ? number.toLocaleString(locale, options) : "0";
};

export const cloneDeep = (obj: any): any => {
    if (Array.isArray(obj)) {
        return obj.map(cloneDeep);
    } else if (obj && typeof obj === "object") {
        const cloned: any = {};
        const keys = Object.keys(obj);
        for (let i = 0, l = keys.length; i < l; i++) {
            const key = keys[i];
            cloned[key] = cloneDeep(obj[key]);
        }
        return cloned;
    } else {
        return obj;
    }
};

// Validation rules
export const requiredRule = (
    fieldName: string = "",
    trigger: string | string[] = "blur",
    type: string = "string",
    whitespace: boolean = true,
    required: boolean = true
) => {
    const { t: $t } = useI18n()

    return {
        required,
        message: $t('validate.require', { fieldName }),
        trigger,
        whitespace,
        type,
    };
};

export const maxLengthRule = (fieldName: string = "", maxNumber: number = 256, trigger: string = "blur") => {
    const { t: $t } = useI18n()
    return {
        max: maxNumber,
        message: $t('validate.phone_number.max_length_rule', { fieldName, maxNumber }),
        trigger,
    };
};

export const minLengthRule = (fieldName: string = "", minNumber: number = 1, trigger: string = "blur") => {
    const { t: $t } = useI18n()
    return {
        min: minNumber,
        message: $t('validate.phone_number.min_length_rule', { fieldName, minNumber }),
        trigger,
    };
};

export const whiteSpaceRule = (fieldName: string, trigger: string = "blur") => {
    const { t: $t } = useI18n()

    const validator = (rule: any, value: any) => {
        const trimValue = value?.trim();
        if (trimValue && /\s+/.test(trimValue)) {
            return Promise.reject($t('validate.white_pace', { fieldName }));
        }

        return Promise.resolve();
    };

    return { validator, trigger };
};

export const patternRegexRule = (message: string = "", pattern: RegExp, trigger: string = "blur") => {
    return {
        pattern,
        message,
        trigger,
    };
};

export const phoneNumberRules = (trigger: string = "blur") => {
    const { t: $t } = useI18n()
    const name = $t('customer.phone_number');
    const message = $t('validate.phone_number.format_rule');

    return [
        requiredRule(name, trigger),
        maxLengthRule(name, 15, trigger),
        minLengthRule(name, 8, trigger),
        whiteSpaceRule(name, trigger),
        patternRegexRule(message, new RegExp("^\\+?[0-9\\s]+$"), trigger),
    ];
};

export const debounce = (fn: any, delay = 0, immediate = false) => {
    let timeout: null = null;
    return (...args: any) => {
        if (immediate && !timeout) {
            fn(...args);
        }

        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            fn(...args);
        }, delay);
    };
};

export const delay = (ms: number): Promise<void> => new Promise((resolve: () => void) => setTimeout(resolve, ms));
// export const _priceProduct = (product: IProduct, currency?: ICurrency): string => {
//   return formatPrice(product?.price || 0) + (currency?.symbol || 'đ') + '/' + (product?.unit?.ShortName || 'hộp');
// }
