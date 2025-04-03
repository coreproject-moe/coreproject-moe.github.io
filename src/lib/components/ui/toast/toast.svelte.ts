// types
interface Toast {
  id: string;
  message: string;
  icon?: string;
  timer: NodeJS.Timeout;
}

// constants
const DEFAULT_DURATION = 3000;

function create_toasts_store() {
  let toasts = $state<Toast[]>([]);

  function send(message: string, icon?: string) {
    const new_toast: Toast = {
      id: generate_id(),
      message,
      icon,
      timer: setTimeout(() => {
        dismiss(new_toast.id);
      }, DEFAULT_DURATION)
    };

    toasts.push(new_toast);
    return new_toast.id;
  }

  function dismiss(id: string) {
    const toast = toasts.find((t) => t.id === id);
    if (toast === undefined) return;

    clearTimeout(toast.timer);
    toasts = toasts.filter((t) => t.id !== id);
  }

  return {
    get value() {
      return toasts;
    },
    send,
    dismiss
  };
}

// initialize store
export const toasts_store = create_toasts_store();

// helper functions
function generate_id(segments = 3, length = 4) {
  return Array.from({ length: segments }, () => Math.random().toString(16).slice(-length)).join('');
}
