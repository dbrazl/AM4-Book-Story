import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    padding: 0 20px;
    display: flex;
    align-items: center;
`;

export const Background = styled.Image`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

export const PageTitle = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    margin: 10px 0;
`;

export const Book = styled.TouchableOpacity`
    width: 100%;
    height: 170px;
    background: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    overflow: hidden;
    margin-top: 20px;
    border-radius: 5px;
`;

export const Info = styled.View`
    width: 210px;
    padding: 20px;
    /* background: red; */
`;

export const Poster = styled.Image`
    width: 110px;
    height: 100%;
    background: #808080;
`;

export const Title = styled.Text.attrs({
    numberOfLines: 2,
})`
    font-size: 15px;
    font-weight: bold;
    color: #000;
`;

export const Genre = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: 15px;
    color: #000;
`;

export const Age = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: 15px;
    color: #000;
`;

export const Button = styled.TouchableOpacity`
    width: 100%;
    height: 30px;
    margin-top: 10px;
    border: 1px solid #ffad00;
    border-radius: 22px;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const WrapStar = styled.View`
    width: 90px;
    margin-top: 10px;
`;

export const WrapButton = styled.View`
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const ButtonText = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: 10px;
    margin: 5px;
    color: #ffad00;
`;

export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`
    padding-bottom: 20px;
`;
