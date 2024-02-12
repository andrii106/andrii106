import { FC } from 'react';
import { Alert, AlertProps, Snackbar, SnackbarProps } from '@mui/material';

export type ToastProps = (Pick<AlertProps, 'severity' | 'variant'> &
	Pick<SnackbarProps, 'anchorOrigin' | 'autoHideDuration'>) & {
	handleToastAction?: () => void;
	toastButtonText?: string;
};

interface IToastProps extends ToastProps {
	alertMessage: string;
	isOpen: boolean;
	handleClose: () => void;
}

const Toast: FC<IToastProps> = ({
	alertMessage,
	isOpen,
	handleClose,
	anchorOrigin,
	severity,
	variant,
	autoHideDuration = 6000,
}) => {
	return (
		<Snackbar
			anchorOrigin={
				anchorOrigin ?? {
					vertical: 'bottom',
					horizontal: 'center',
				}
			}
			open={isOpen}
			autoHideDuration={autoHideDuration}
			onClose={handleClose}
		>
			<Alert
				variant={variant}
				severity={severity}
				onClose={handleClose}
				sx={{ backgroundColor: 'background.default', borderRadius: 2 }}
			>
				{alertMessage}
			</Alert>
		</Snackbar>
	);
};

export default Toast;
