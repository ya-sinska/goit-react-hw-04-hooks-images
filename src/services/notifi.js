import { toast } from 'react-toastify';
export const notifi = (text) => toast.error(text, {
    autoClose: 3000,
});
