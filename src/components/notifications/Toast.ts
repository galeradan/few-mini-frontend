import Swal from "sweetalert2";

export const notify = (message: string, type: string) => {
  Swal.fire({
    text: message,
    toast: true,
    position: "top-right",
    showConfirmButton: false,
    timer: 1500,
    customClass: {
      container: `${type}`,
    },
  });
};
