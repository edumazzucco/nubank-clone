import React from 'react';

import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';


import { Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText } from './styles';

export default function Menu({ translateY }) {
    return (
        <Container style={{
            opacity: translateY.interpolate({
                inputRange: [0, 150],
                outputRange: [0, 1],
            }),
        }}>
            <Code>
                <QRCode
                value="nuapp://cpf/05383816984"
                size={80}
                color="#8B10AE"
                backgroundColor="#FFF"
                />
            </Code>
            <Nav>
                <NavItem>
                <Icon name="help-outline" size={20} color="#FFF" />
                <NavText>Me ajuda</NavText>
                </NavItem>
                <NavItem>
                <Icon name="person-outline" size={20} color="#FFF" />
                <NavText>Perfil</NavText>
                </NavItem>
                <NavItem>
                <Icon name="monetization-on" size={20} color="#FFF" />
                <NavText>Configurar NuConta</NavText>
                </NavItem>
                <NavItem>
                <Icon name="credit-card" size={20} color="#FFF" />
                <NavText>Configurar Cartão</NavText>
                </NavItem>
                <NavItem>
                <Icon name="card-giftcard" size={20} color="#FFF" />
                <NavText>Configurar Rewards</NavText>
                </NavItem>
                <NavItem>
                <Icon name="smartphone" size={20} color="#FFF" />
                <NavText>Configurações do app</NavText>
                </NavItem>
            </Nav>

            <SignOutButton onPress={() => {}}>
                <SignOutButtonText>SAIR DO APP</SignOutButtonText>
            </SignOutButton>
        </Container>
    );
}