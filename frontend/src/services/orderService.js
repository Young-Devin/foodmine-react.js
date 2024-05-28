import axios from 'axios';

export const createOrder = async order => {
    try {
        const { data } = await axios.post('/api/orders/create', order);
        return data;
    } catch (error) {}
};