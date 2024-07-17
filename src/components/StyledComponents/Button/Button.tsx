import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ButtonProps, StyledButtonProps } from './interfaces';

const StyledButton = styled.button<StyledButtonProps>`
	background-color: ${({ theme, disabled }) =>
		disabled ? theme.colors.disabled : theme.colors.primary};
	color: ${({ theme }) => theme.colors.textPrimary};
	padding: ${({ theme }) => theme.spacing.medium};
	font-size: ${({ theme }) => theme.typography.fontSizeMedium};
	border-radius: ${({ theme }) => theme.borderRadius.medium};
	box-shadow: ${({ theme }) => theme.shadows.small};
	border: none;
	cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
	width: ${({ width }) => width || 'auto'};
	opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

	&:hover {
		background-color: ${({ theme, disabled }) =>
			disabled ? theme.colors.disabled : theme.colors.secondary};
	}
`;

const Button: React.FC<ButtonProps> = ({
	onClick,
	text = 'clickMe',
	width,
	disabled = false
}) => {
	const handleClick = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		disabled ? event.preventDefault() : onClick();
	};

	return (
		<StyledButton disabled={disabled} width={width} onClick={handleClick}>
			{text}
		</StyledButton>
	);
};

Button.propTypes = {
	onClick: PropTypes.func.isRequired,
	text: PropTypes.string,
	width: PropTypes.string,
	disabled: PropTypes.bool
};

export default Button;
