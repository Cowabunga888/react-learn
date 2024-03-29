import { Button } from '@mantine/core'
import React from 'react'
import { useAppModal } from '../../app-modal/store/useAppModal'
import AuthModalContent from '../auth-modal-content'

function AuthNavbarButtons() {
	const { open, setModalContent, setModalSize } = useAppModal((state) => ({
		open: state.open,
		setModalContent: state.setModalContent,
		close: state.close,
		setModalSize: state.setModalSize,
	}))

	const handleLoginClick = () => {
		setModalSize('sm')
		setModalContent(<AuthModalContent type="LOGIN" />)
		open()
	}
	const handleSignupClick = () => {
		setModalSize('sm')
		setModalContent(<AuthModalContent type="SIGNUP" />)
		open()
	}

	return (
		<>
			<Button variant="filled" size="xs" onClick={handleLoginClick}>
				Login
			</Button>
			<Button variant="outline" size="xs" onClick={handleSignupClick}>
				Signup
			</Button>
		</>
	)
}

export default AuthNavbarButtons
