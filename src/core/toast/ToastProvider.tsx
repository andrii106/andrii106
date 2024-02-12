import { FC, PropsWithChildren, createContext, useState } from 'react';
import { AlertProps, SnackbarProps } from '@mui/material';
import { Toast } from 'shared/components/Toast';

export type ToastProps = (Pick<AlertProps, 'severity' | 'variant'> &
	Pick<SnackbarProps, 'anchorOrigin' | 'autoHideDuration'>) & {
	handleToastAction?: () => void;
	toastButtonText?: string;
};

interface IToastContextProps {
	open: (message: string, toastProps?: ToastProps) => void;
}

export const ToastContext = createContext<IToastContextProps>({
	open: () => {},
});

const ToastProvider: FC<PropsWithChildren> = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [message, setMessage] = useState<string>('');
	const [toastProps, setToastProps] = useState<ToastProps>();

	const open = (message: string, toastProps?: ToastProps) => {
		setMessage(message);
		setToastProps(toastProps);
		setIsOpen(true);
	};

	return (
		<ToastContext.Provider
			value={{
				open,
			}}
		>
			<Toast
				isOpen={isOpen}
				alertMessage={message}
				handleClose={() => setIsOpen(false)}
				variant="outlined"
				{...toastProps}
			/>
			{children}
		</ToastContext.Provider>
	);
};
export default ToastProvider;
