export default defineAppConfig({
  ui: {
    primary: 'blue',
    gray: 'cool',
    notifications: {
      // Show toasts at the top right of the screen
      position: 'top-0 bottom-auto',
    },
    divider: {
      border: {
        base: 'border-gray-300',
      },
    },
    pagination: {
      default: {
        activeButton: {
          class: 'bg-downriver-950',
        }
      }
    },
    button: {
      default: {
        size: 'lg'
      }
    },
  }
})
