import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/AntDesign';

import { useDispatch, useSelector } from 'react-redux';
import { storageStoreList } from '../../store/modules/storeList/action';
import { savePreview } from '../../store/modules/download/action';

import bg from '../../assets/bg-main.png';

import api from '../../services/api';

import {
    Container,
    PageTitle,
    Book,
    Poster,
    Title,
    Genre,
    Button,
    Info,
    WrapStar,
    Age,
    WrapButton,
    ButtonText,
    List,
    Background,
} from './styles';

export default function Store(props) {
    const data = useSelector(state => state.storeList.list);

    const dispatch = useDispatch();

    useEffect(() => {
        async function findBooks() {
            const response = await api.get('books');

            dispatch(storageStoreList(response.data));
        }

        findBooks();
    }, []);

    function handleSelectedBook(item) {
        const { navigation } = props;

        navigation.navigate('Product', { item });
    }

    function handleBookPreview(item) {
        if (item.downloaded === false || item.downloaded === undefined) {
            dispatch(savePreview(item));
        }
    }

    return (
        <>
            <Background source={bg} />
            <Container>
                <PageTitle>Popular</PageTitle>

                <List
                    data={data}
                    keyExtractor={book => book.id}
                    renderItem={({ item }) => (
                        <Book onPress={() => handleSelectedBook(item)}>
                            <Poster source={{ uri: item.poster }} />
                            <Info>
                                <Title>{item.title}</Title>
                                <Genre>{item.genre}</Genre>
                                <Age>{item.age}</Age>
                                <WrapStar>
                                    <StarRating
                                        disabled
                                        maxStars={5}
                                        rating={item.stars}
                                        emptyStarColor="#ffad00"
                                        halfStarColor="#ffad00"
                                        fullStarColor="#ffad00"
                                        starSize={15}
                                    />
                                </WrapStar>
                                <Button onPress={() => handleBookPreview(item)}>
                                    <WrapButton>
                                        {item.downloaded ? (
                                            <>
                                                <Icon
                                                    name="book"
                                                    size={20}
                                                    color="#ffad00"
                                                />
                                                <ButtonText>
                                                    VER PRÉVIA
                                                </ButtonText>
                                            </>
                                        ) : (
                                            <>
                                                <Icon
                                                    name="download"
                                                    size={15}
                                                    color="#ffad00"
                                                />
                                                <ButtonText>
                                                    DOWNLOAD PRÉVIA
                                                </ButtonText>
                                            </>
                                        )}
                                    </WrapButton>
                                </Button>
                            </Info>
                        </Book>
                    )}
                />
            </Container>
        </>
    );
}

Store.navigationOptions = {
    title: 'Loja',
};

Store.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};
