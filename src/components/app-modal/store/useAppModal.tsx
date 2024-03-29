import React from 'react'
import { create } from 'zustand'

interface IModalState {
	isOpen: boolean
	modalContent: React.ReactNode
	size: string | number

	setModalContent: (_modalContent: React.ReactNode) => void
	setModalSize: (size: string | number) => void
	open: () => void
	close: () => void
}

const useAppModal = create<IModalState>((set) => ({
	isOpen: false,
	modalContent: <>Modal Default Content</>,
	size: 'md',

	setModalContent: (_modalContent) => set((state) => ({ ...state, modalContent: _modalContent })),
	setModalSize: (_size) => set({ size: _size }),
	open: () => set({ isOpen: true }),
	close: () => set({ isOpen: false }),
}))

export { useAppModal }
