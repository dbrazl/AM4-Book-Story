import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import bg from '../../assets/bg-main.png';

import api from '../../services/api';

import {
    Container,
    Title,
    List,
    Book,
    Poster,
    Info,
    Description,
    BookTitle,
    WrapPrice,
    Cipher,
    Price,
    Background,
} from './styles';

export default function Main() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function loadData() {
            const response = await api.get('highlights');

            setData(response.data);
        }

        loadData();
    }, []);

    function handlePriceFormat(value) {
        const valueToString = value.toString();
        // eslint-disable-next-line prefer-const
        let [integers, decimals] = valueToString.split('.');

        if (decimals.length === 1) decimals = `${decimals}0`;

        const response = `${integers},${decimals}`;

        return response;
    }

    return (
        <Container>
            <Background source={bg} />
            <Title>Destaque do dia</Title>
            <List
                data={data}
                keyExtractor={book => book.id}
                horizontal
                renderItem={({ item }) => (
                    <Book>
                        <Poster source={{ uri: item.poster }} />
                        <Info>
                            <BookTitle>{item.title}</BookTitle>
                            <Description>{item.description}</Description>
                            <WrapPrice>
                                <Cipher>R$</Cipher>
                                <Price>{handlePriceFormat(item.price)}</Price>
                            </WrapPrice>
                        </Info>
                    </Book>
                )}
            />
        </Container>
    );
}

Main.navigationOptions = {
    tabBarLabel: 'INÍCIO',
    tabBarIcon: ({ tintColor }) => (
        <Icon name="home-outline" size={20} color={tintColor} />
    ),
};
