import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';

import { Container, Content, Card, CardHeader, CardContent, Title, Description, CardFooter, Annotation } from './styles';

export default function Main() {
  let offset = 0;
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true },
  )

  function onHandlerStateChanged(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY} = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      }

      Animated.timing(translateY, {
        toValue: 380,
        duration: 200,
        useNativeDriver: true,
      }).start();
      // translateY.setOffset(offset);
      // translateY.setValue(0);
    }
  }

  return (
    <Container>
      <Header />

      <Content>
        <Menu translateY={translateY} />

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}
        >

          <Card style={{
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [-350, 0, 380],
                outputRange: [-50, 0, 380],
                extrapolate: 'clamp',
              }),
            }],
          }}>
            <CardHeader>
              <Icon name="attach-money" size={28} color="#667" />
              <Icon name="visibility-off" size={28} color="#667" />
            </CardHeader>
            <CardContent>
              <Title>Saldo disponível</Title>
              <Description>R$ 7.545.100,55</Description>
            </CardContent>
            <CardFooter>
              <Annotation>
                Transferência de R$ 250.000,00 recebida de Boostin LTDA às 08:01h.
          </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>

      </Content>
      <Tabs translateY={translateY} />
    </Container>
  );
}
