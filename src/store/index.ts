import type {ISetting, ISettingStore} from "@/type";
import {defineStore} from "pinia";

export const useSettingStore = defineStore('SettingStore', {
    state: (): ISettingStore  => ({
        setting: {
            company_name: '',
            email: '',
            logo: '',
            social_network: {
                facebook: '',
                message: '',
                email: '',
            },
            company_address: '',
            company_phone: '',
            currency: {
                id: '',
                name: '',
                code: '',
                symbol: '',
            },

        }
    }),

    getters: {
        getSettingStore: (state: ISettingStore) => state.setting,
    },

    actions: {
        setSettingStore(setting: ISetting) {
            this.setting = setting;
        },
    },
});
