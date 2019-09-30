import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/AntDesign';

import { useDispatch, useSelector } from 'react-redux';

import { savePreview } from '../../store/modules/download/action';
import { saveItemInFavorite } from '../../store/modules/favorite/action';

import {
    Container,
    Title,
    Book,
    Info,
    Poster,
    Label,
    OriginalTitle,
    Genre,
    Author,
    Origin,
    WrapStars,
    Description,
    Preview,
    Scroll,
    Button,
    WrapButton,
    ButtonText,
    PriceBox,
    WrapPrice,
    Cipher,
    Price,
    Debt,
    BuyButton,
    BuyText,
    FavoriteButton,
} from './styles';

export default function Product({ navigation }) {
    const item = navigation.getParam('item');
    const favorite = useSelector(state => state.favorite.items);
    const download = useSelector(state => state.download.previews);

    const [added, setAdded] = useState(false);
    const [downloaded, setDownloaded] = useState(false);

    useEffect(() => {
        favorite.forEach(book => {
            if (book.id === item.id) {
                if (book.added) {
                    setAdded(true);
                }
            }
        });

        download.forEach(book => {
            if (book.id === item.id) {
                if (book.downloaded) {
                    setDownloaded(true);
                }
            }
        });
    }, []);

    useEffect(() => {
        if (favorite.length !== 0) {
            favorite.forEach(book => {
                if (book.id === item.id) {
                    if (book.added) {
                        setAdded(true);
                    }
                }
            });
        } else {
            setAdded(false);
        }
    }, [favorite]);

    useEffect(() => {
        if (download.length !== 0) {
            download.forEach(book => {
                if (book.id === item.id) {
                    if (book.downloaded) {
                        setDownloaded(true);
                    }
                }
            });
        } else {
            setDownloaded(false);
        }
    }, [download]);

    const dispatch = useDispatch();

    function handlePriceFormat(value) {
        const valueToString = value.toString();
        // eslint-disable-next-line prefer-const
        let [integers, decimals] = valueToString.split('.');

        if (decimals.length === 1) decimals = `${decimals}0`;

        const response = `${integers},${decimals}`;

        return response;
    }

    function handleAddToFavoriteList() {
        if (item.added === true) {
            item.added = false;
        }
        dispatch(saveItemInFavorite(item));
    }

    function handleDownloadPreview() {
        if (item.downloaded === true) {
            item.downloaded = false;
        }
        dispatch(savePreview(item));
    }

    return (
        <Container>
            <Scroll>
                <Title>{item.title}</Title>
                <Book>
                    <Poster source={{ uri: item.poster }} />

                    <Info>
                        <Label>Título Original</Label>
                        <OriginalTitle>{item.originalTitle}</OriginalTitle>

                        <Label>Gênero</Label>
                        <Genre>{item.genre}</Genre>

                        <Label>Autor</Label>
                        <Author>{item.author}</Author>

                        <Label>Origem</Label>
                        <Origin>{item.origin}</Origin>

                        <WrapStars>
                            <StarRating
                                disabled
                                maxStars={5}
                                rating={item.stars}
                                emptyStarColor="#ffad00"
                                halfStarColor="#ffad00"
                                fullStarColor="#ffad00"
                                starSize={15}
                            />
                        </WrapStars>
                    </Info>
                </Book>

                <Label>Descrição</Label>
                <Description>{item.description}</Description>

                <Label>Prévia</Label>
                <Preview>
                    Tenha acesso ao primeiro capítulo do livro por tempo
                    determinado e aproveite a sua experiência.
                </Preview>

                <Button onPress={handleDownloadPreview}>
                    <WrapButton>
                        {downloaded ? (
                            <>
                                <Icon name="book" size={20} color="#ffad00" />
                                <ButtonText>VER PRÉVIA</ButtonText>
                            </>
                        ) : (
                            <>
                                <Icon
                                    name="download"
                                    size={15}
                                    color="#ffad00"
                                />
                                <ButtonText>DOWNLOAD PRÉVIA</ButtonText>
                            </>
                        )}
                    </WrapButton>
                </Button>

                <Label>E-book Kindle</Label>
                <PriceBox>
                    <WrapPrice>
                        <Cipher>R$</Cipher>
                        <Price>{handlePriceFormat(item.price)}</Price>
                    </WrapPrice>

                    <Debt>COMPRAR DO DÉBITO</Debt>

                    <BuyButton>
                        <Icon name="shoppingcart" size={15} color="#000" />
                        <BuyText>COMPRAR AGORA</BuyText>
                    </BuyButton>
                </PriceBox>

                <FavoriteButton onPress={handleAddToFavoriteList}>
                    {added ? (
                        <Icon name="check" size={20} color="#ffad00" />
                    ) : (
                        <Icon name="like2" size={20} color="#ffad00" />
                    )}
                </FavoriteButton>
            </Scroll>
        </Container>
    );
}

Product.navigationOptions = {
    title: 'Loja',
};

Product.propTypes = {
    navigation: PropTypes.shape({
        getParam: PropTypes.func,
    }).isRequired,
};
