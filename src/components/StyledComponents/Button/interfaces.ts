export interface ButtonProps {
	onClick: () => void;
	text?: string;
	width?: string;
	disabled?: boolean | undefined;
}

export interface StyledButtonProps {
	width?: string;
	disabled?: boolean | undefined;
}
