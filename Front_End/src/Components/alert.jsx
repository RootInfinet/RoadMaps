import Swal from 'sweetalert2';

export const showSweetAlert = ({ title, message, type = 'success' }) => {
  let iconSymbol = '✅';
  if (type === 'error') iconSymbol = '❌';
  if (type === 'warning') iconSymbol = '⚠️';
  if (type === 'info') iconSymbol = '🔔';

  Swal.fire({
    title: `<span style="font-size: 16px; color: #ffffff; font-weight: 600;">${title}</span>`,
    html: `
      <div style="display: flex; align-items: center; gap: 12px; text-align: left; padding: 4px;">
        <span style="font-size: 24px;">${iconSymbol}</span>
        <div>
          <p style="margin: 0; font-size: 13px; color: #94a3b8;">${message}</p>
        </div>
      </div>
    `,
    position: 'top-end', 
    toast: true,         
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    background: '#000000', 
    color: '#ffffff',
    customClass: {
      popup: 'custom-swal-toast'
    },
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
};