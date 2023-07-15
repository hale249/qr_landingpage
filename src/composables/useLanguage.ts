import { computed, reactive } from "vue";

const defaultState = {
  locale: "vi",
};

const state = reactive({ ...defaultState });

export default function useLanguage() {
  const setLocale = (locale: string) => {
    state.locale = locale;
  };

  return {
    setLocale,

    locale: computed(() => state.locale),
  };
}
