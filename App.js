import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
} from 'native-base';

const URI = 'http://10.0.2.2:3100/details';

const App = () => {
  const [state, setState] = useState('');

  const connect = async () => {
    try {
      const response = await fetch(URI);
      if (response.status === 200) {
        const responseText = await response.text();
        console.log('response', response);
        setState(responseText);
      } else {
        throw new Error('Cannot connect.');
      }
    } catch {
      (err) => {
        console.log('Hata: ', err);
      };
    }
  };
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Header</Title>
        </Body>
        <Right />
      </Header>
      <Content
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}>
        <Button style={{alignSelf: 'center'}} onPress={connect}>
          <Text>Getir</Text>
        </Button>
        <Text> {state} </Text>
      </Content>
      <Footer>
        <FooterTab>
          <Button full>
            <Text>Footer</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

const styles = StyleSheet.create({});

export default App;
