import axios from "axios";
// Correct the relative path here
import { environment } from '../../environments/environment.development.js';

const newsApiBaseUrl = environment.VITE_NEWS_API_URL;

const http = axios.create({
    baseURL: newsApiBaseUrl, 
    headers:{
        'content-type': 'application/json',
    }
});

export class NewsApiService {
    constructor() {
        this.http = http;
    }

    async getUniversities() {
        // Make sure the endpoint path is correct relative to the baseURL
        // If VITE_NEWS_API_URL already includes '/search?name=ciencias',
        // then the baseURL in axios.create should be just 'http://universities.hipolabs.com'
        // and this line should be: return await this.http.get('/search?name=ciencias');
        // Or, if baseURL is 'http://universities.hipolabs.com', use:
        return await this.http.get('/search?name=ciencias');
    }
}

export default NewsApiService;