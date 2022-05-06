import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = (message) => {
  toast(message, {
    autoClose: 500
  });
};

export default notify;
