import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/EvilIcons';

import { useSelector, useDispatch } from 'react-redux';
import { deleteItemInDownload } from '../../store/modules/download/action';

import bg from '../../assets/bg-main.png';

import EmptyList from '../../components/EmptyList';
import {
    Container,
    Title,
    List,
    Book,
    Poster,
    WrapInfo,
    Info,
    BookTitle,
    Description,
    TrashButton,
    Background,
} from './styles';

export default function Download() {
    const data = useSelector(state => state.download.previews);
    const dispatch = useDispatch();

    function handleDeleteOnDownloadList(item) {
        dispatch(deleteItemInDownload(item));
    }

    return (
        <Container>
            <Background source={bg} />
            <Title>Download</Title>
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
                                        handleDeleteOnDownloadList(item)
                                    }
                                >
                                    <Icon2
                                        name="trash"
                                        size={30}
                                        color="#000"
                                    />
                                </TrashButton>
                            </WrapInfo>
                        </Book>
                    )}
                />
            ) : (
                <EmptyList listType="download" />
            )}
        </Container>
    );
}

Download.navigationOptions = {
    tabBarLabel: 'DOWNLOAD',
    tabBarIcon: ({ tintColor }) => (
        <Icon name="download" size={20} color={tintColor} />
    ),
};
