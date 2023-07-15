export type ISetting = {
    company: ICompany,
    currency: ICurrency,
    social_network?: ISocialNetwork,
    lp_setting: ILandingPageSetting
}

export type ICompany = {
    name: string,
    email: string,
    logo: string,
    phone_number: string,
    address: string,
    social_network: ISocialNetwork,
}

export type ICurrency = {
    id?: number,
    code: string,
    name: string,
    symbol: string,
}

export type ILandingPageSetting = {
    text_default: string,
    error: string,
    success: string,
    warring: string
    text_other: string
}
export type ISocialNetwork = {
    facebook: string,
    message: string,
    email: string,
}
