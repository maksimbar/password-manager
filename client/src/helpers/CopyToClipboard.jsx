import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = () => {
  toast("Password copied", {
    autoClose: 500,
  });
};

const copyToClipboard = (content) => {
  navigator.clipboard.writeText(content);
  notify();
};

export default copyToClipboard;
