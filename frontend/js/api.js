const API_BASE = 'http://localhost:5000/api';

const api = {
    getToken() {
        return localStorage.getItem('vs_token');
    },

    getUser() {
        const u = localStorage.getItem('vs_user');
        return u ? JSON.parse(u) : null;
    },

    setSession(token, user) {
        localStorage.setItem('vs_token', token);
        localStorage.setItem('vs_user', JSON.stringify(user));
    },

    logout() {
        localStorage.removeItem('vs_token');
        localStorage.removeItem('vs_user');
        window.location.href = 'index.html';
    },

    requireAuth() {
        if (!this.getToken()) {
            window.location.href = 'index.html';
        }
    },

    async request(endpoint, options = {}) {
        const token = this.getToken();
        const headers = {
            'Content-Type': 'application/json',
            ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
            ...options.headers
        };

        try {
            const response = await fetch(`${API_BASE}${endpoint}`, {
                ...options,
                headers
            });

            if (response.status === 401 && !endpoint.includes('/auth/login')) {
                this.logout();
                throw new Error('Session expired. Please log in again.');
            }

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || 'Request failed');
            }
            return data;
        } catch (err) {
            console.error('API Error:', err);
            throw err;
        }
    },

    get(endpoint) {
        return this.request(endpoint, { method: 'GET' });
    },
    post(endpoint, body) {
        return this.request(endpoint, { method: 'POST', body: JSON.stringify(body) });
    },
    put(endpoint, body) {
        return this.request(endpoint, { method: 'PUT', body: JSON.stringify(body) });
    },
    patch(endpoint, body = {}) {
        return this.request(endpoint, { method: 'PATCH', body: JSON.stringify(body) });
    },
    delete(endpoint) {
        return this.request(endpoint, { method: 'DELETE' });
    }
};