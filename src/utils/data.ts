import type {ISetting} from "@/type";

export const defaultDataSetting: ISetting = {
    company: {
        name: '',
        email: '',
        logo: '',
        phone_number: '',
        address: '',
        social_network: {
            facebook: '',
            message: '',
            email: '',
        },
    },
    currency: {
        id: '',
        name: '',
        code: '',
        symbol: '',
    },
    lp_setting: {
        text_default: "#4B6166",
        error: "#B61212",
        success: "#00994D",
        warring: "#F38020",
        text_other: "#14272B"
    }
}
