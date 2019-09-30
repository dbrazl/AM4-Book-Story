import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    padding: 0 20px;
`;

export const Title = styled.Text`
    color: #ffad00;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    margin-top: 20px;
`;

export const Book = styled.View`
    width: 100%;
    height: 170px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    margin: 20px 0;
`;

export const Scroll = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})``;

export const Poster = styled.Image`
    width: 110px;
    height: 100%;
    background: #808080;
`;

export const Info = styled.View`
    width: 100%;
    height: 100%;
    margin-left: 15px;
`;

export const Label = styled.Text`
    font-size: 13px;
    font-weight: bold;
    color: #000;
`;

/*
 * Preferir deixar os campos de textos separados so por legibilidade
 * e possiveis modificacoes
 */
export const OriginalTitle = styled.Text.attrs({
    numberOfLines: 2,
})`
    font-size: 13px;
    color: #000;
`;

export const Genre = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: 13px;
    color: #000;
`;

export const Author = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: 13px;
    color: #000;
`;

export const Origin = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: 13px;
    color: #000;
`;

export const WrapStars = styled.View`
    width: 90px;
    margin-top: 10px;
`;

export const Description = styled.Text`
    font-size: 13px;
    text-align: justify;
    margin-top: 10px;
    margin-bottom: 20px;
    color: #000;
`;

export const Preview = styled.Text`
    font-size: 13px;
    margin-top: 10px;
    color: #000;
`;

export const Button = styled.TouchableOpacity`
    width: 200px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ffad00;
    border-radius: 15px;
    margin: 20px auto;
`;

export const WrapButton = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const ButtonText = styled.Text`
    color: #ffad00;
    font-size: 15px;
    margin-left: 10px;
`;

export const PriceBox = styled.View`
    width: 100%;
    height: 130px;
    background: #eee;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: 100px;
    margin-top: 10px;
`;

export const WrapPrice = styled.View`
    display: flex;
    align-items: baseline;
    justify-content: center;
    flex-direction: row;
`;

export const Cipher = styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: #000;
`;

export const Price = styled.Text`
    font-size: 32px;
    font-weight: bold;
    margin-left: 15px;
    margin-right: 25px;
    color: #000;
`;

export const Debt = styled.Text`
    font-size: 15px;
    margin-top: 10px;
    color: #000;
`;

export const BuyButton = styled(RectButton)`
    width: 200px;
    height: 30px;
    border-radius: 15px;
    background: #ffad00;
    position: absolute;
    bottom: -15px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const BuyText = styled.Text`
    font-size: 15px;
    margin-left: 10px;
    color: #000;
`;

export const FavoriteButton = styled(RectButton)`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    right: 0;
    margin-bottom: 20px;
`;
