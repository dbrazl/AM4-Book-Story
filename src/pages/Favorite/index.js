import React from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';

import { useDispatch, useSelector } from 'react-redux';
import bg from '../../assets/bg-main.png';

import { deleteItemInFavorite } from '../../store/modules/favorite/action';

import EmptyList from '../../components/EmptyList';
import {
    Container,
    Title,
    BookTitle,
    List,
    Book,
    Info,
    Poster,
    Description,
    TrashButton,
    WrapInfo,
    Background,
} from './styles';

export default function Favorite() {
    const data = useSelector(state => state.favorite.items);
    const dispatch = useDispatch();

    function handleDeleteOnFavorites(item) {
        dispatch(deleteItemInFavorite(item));
    }

    return (
        <Container>
            <Background source={bg} />
            <Title>Favoritos</Title>
            {data.length !== 0 ? (
                <List
                    data={data}
                    keyExtractor={book => book.id}
                    renderItem={({ item }) => (
                        <Book>
                            <Poster source={{ uri: item.poster }} />
                            <WrapInfo>
                                <Info>
                                    <BookTitle>{item.title}</BookTitle>
                                    <Description>
                                        {item.description}
                                    </Description>
                                </Info>
                                <TrashButton
                                    onPress={() =>
                                        handleDeleteOnFavorites(item)
                                    }
                                >
                                    <Icon name="trash" size={30} color="#000" />
                                </TrashButton>
                            </WrapInfo>
                        </Book>
                    )}
                />
            ) : (
                <EmptyList listType="favoritos" />
            )}
        </Container>
    );
}

Favorite.navigationOptions = {
    tabBarLabel: 'FAVORITO',
    tabBarIcon: ({ tintColor }) => (
        <Icon name="like" size={20} color={tintColor} />
    ),
};
