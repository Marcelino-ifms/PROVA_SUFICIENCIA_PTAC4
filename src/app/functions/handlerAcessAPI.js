'use server'
const urlApi = 'https://teste-ptas3.vercel.app';

const getUserAuthenticated = async (user) => {
    const response = await fetch(urlApi + '/user/authenticated', {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: (JSON.stringify(user))
    });
    const data = await response?.json();
    return data;
}

const getUser = async () => {
    const response = await fetch(urlApi + '/user', {
        cache: "no-cache"
    });
    const data = await response?.json();
    return data;
}

export { getUserAuthenticated, getUser};


