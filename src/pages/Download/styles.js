import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
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
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-top: 20px;
`;

export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`
    padding: 0 20px;
`;

export const Book = styled(RectButton)`
    width: 100%;
    height: 170px;
    background: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    overflow: hidden;
    margin: 20px 0;
    border-radius: 5px;
`;

export const WrapInfo = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Info = styled.View`
    width: 210px;
    padding: 0px;
    padding: 0 10px;
`;

export const Poster = styled.Image`
    width: 110px;
    height: 100%;
    background: #808080;
`;

export const BookTitle = styled.Text.attrs({
    numberOfLines: 2,
})`
    font-size: 18px;
    font-weight: bold;
    color: #000;
`;

export const Description = styled.Text.attrs({
    numberOfLines: 2,
})`
    font-size: 15px;
    margin-top: 5px;
    text-align: justify;
    color: #000;
`;

export const TrashButton = styled(RectButton)`
    width: 90%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e1e1e1;
    border-radius: 5px;
    margin-top: 10px;
`;
