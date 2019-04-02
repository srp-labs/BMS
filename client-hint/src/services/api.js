import axios from 'axios';
import baseURL from './baseUrl';

const getCookie = (cookieName) => {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.substring(0, cookieName.length + 1) == (cookieName + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(cookieName.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

const instance = axios.create({
    baseURL: baseURL,
});

instance.interceptors.request.use((config) => {
    var csrfToken = getCookie('csrftoken');

    if (csrfToken) {
        switch (config.method.toUpperCase()) {
            case 'POST':
            case 'PUT':
            case 'DELETE':
                config.headers['X-CSRFToken'] = csrfToken;
                break;
        }
    }
    return config;
});

export default instance;
