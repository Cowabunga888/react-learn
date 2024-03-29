import { Modal } from '@mantine/core'
import { useAppModal } from './store/useAppModal'

function AppModal() {
	const { isOpen, modalContent, close, size } = useAppModal((state) => ({
		isOpen: state.isOpen,
		modalContent: state.modalContent,
		close: state.close,
		size: state.size,
	}))

	return (
		<Modal
			classNames={{ body: '!p-0' }}
			opened={isOpen}
			onClose={close}
			withCloseButton={false}
			centered
			size={size}
		>
			<>{modalContent}</>
		</Modal>
	)
}

export default AppModal
