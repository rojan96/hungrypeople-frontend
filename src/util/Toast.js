import { toast } from "react-toastify";
toast.configure();
export const notify = (text, result) => {
    result
        ? toast.dark(text, {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 2000,
          })
        : toast.error(text, {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 2000,
          });
};
