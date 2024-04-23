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
			overlayProps={{
				backgroundOpacity: 0.55,
				blur: 3,
			}}
		>
			<>{modalContent}</>
		</Modal>
	)
}

export default AppModal
