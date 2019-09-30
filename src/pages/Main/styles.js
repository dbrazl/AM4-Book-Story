import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
`;

export const Background = styled.Image`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

export const Title = styled.Text`
    font-size: 32px;
    color: #fff;
    font-weight: bold;
    margin-top: 60px;
    text-align: center;
`;

export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})``;

export const Book = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 250px;
    height: 400px;
`;

export const Poster = styled.Image`
    width: 110px;
    height: 170px;
    background: #808080;
    z-index: 1;
    border-radius: 5px;
`;

export const Info = styled.View`
    width: 220px;
    height: 270px;
    background: #e1e1e1;
    border-radius: 10px;
    position: absolute;
    top: 200px;
    padding: 0 20px;
`;

export const Description = styled.Text.attrs({
    numberOfLines: 2,
})`
    font-size: 15px;
    text-align: justify;
    color: #000;
`;

export const BookTitle = styled.Text.attrs({
    numberOfLines: 2,
})`
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    margin-top: 100px;
    color: #000;
`;

export const WrapPrice = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    align-items: baseline;
    margin-top: 20px;
    background: #ffac00;
    border-radius: 5px;
    padding: 5px;
`;

export const Cipher = styled.Text`
    font-size: 15px;
    font-weight: bold;
`;

export const Price = styled.Text`
    font-size: 32px;
    font-weight: bold;
    margin-left: 15px;
    margin-right: 25px;
    color: #000;
`;
