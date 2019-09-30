import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, Message } from './styles';

export default function EmptyList({ listType }) {
    const message = `A lista de ${listType} está vazia!`;

    return (
        <Container>
            <Icon name="playlist-remove" size={80} color="#000" />
            <Message>{message}</Message>
        </Container>
    );
}

EmptyList.propTypes = {
    listType: PropTypes.string.isRequired,
};
