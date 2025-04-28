export class LogoApiService {
    baseUrl = "https://logo.clearbit.com/"
    constructor() {}

    getUrlToLogo(domain) {
        return `${this.baseUrl}${domain}`
    }
}