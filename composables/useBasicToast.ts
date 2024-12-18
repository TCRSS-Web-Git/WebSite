export default function useBasicToast() {
  const toast = useToast()
  const { t } = useI18n()

  function errorToast(title: string, description: string = t('common.error.please_try_again')) {
    toast.add({
      id: 'error_notification',
      title,
      description,
      icon: 'i-heroicons-x-circle-solid',
      timeout: 5000,
      color: 'red',
    })
  }

  function successToast(title: string, description?: string) {
    toast.add({
      id: 'success_notification',
      title,
      description,
      icon: 'i-heroicons-check-badge',
      timeout: 5000,
      color: 'green',
    })
  }

  return {
    errorToast,
    successToast,
  }
}
