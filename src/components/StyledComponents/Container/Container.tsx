import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ContainerProps, StyledContainerProps } from './interfaces';

const StyledContainer = styled.div<StyledContainerProps>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    padding: ${({ theme }) => theme.spacing.medium};
    margin: ${({ theme }) => theme.spacing.medium};
    background-color: ${({ theme, backgroundColor }) => backgroundColor ? backgroundColor : theme.colors.background};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    box-shadow: ${({ theme }) => theme.shadows.small};
`;

const Container: React.FC<ContainerProps> = ({
    children,
    width = '100%',
    height = '100%',
    backgroundColor = 'background'
}) => {
    return (
        <StyledContainer
            width={width}
            height={height}
            backgroundColor={backgroundColor}
        >
            {children}
        </StyledContainer>
    );
};

Container.propTypes = {
    children: PropTypes.node.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    padding: PropTypes.string,
    margin: PropTypes.string,
    backgroundColor: PropTypes.string,
    borderRadius: PropTypes.string,
    boxShadow: PropTypes.string
};

export default Container;
