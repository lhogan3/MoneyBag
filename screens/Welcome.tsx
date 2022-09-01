import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

//custom components
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import BigText from "../components/Texts/BigText";
import SmallText from "../components/Texts/SmallText";

const WelcomeContainer = styled(Container)`
    background-color: ${colors.secondary};
    justify-content: space-between;
    height: 100%;
    width: 100%
`;

const TopSection = styled.View`
    width: 100%;
    flex: 1;
    max-height: 55%;
`;

const TopImage = styled.Image`
    width: 100%;
    height: 100%;
    resize-mode: stretch;
`;

const BottomSection = styled.View`
    width: 100%;
    padding: 25px;
    flex: 1;
`;

//image
import background from "./../assets/bgs/background_v1.png";

const Welcome: FunctionComponent = () => {
    return (
        <>
            <StatusBar style="light" />
            <WelcomeContainer>
                <TopSection>
                    <TopImage source={background} />
                </TopSection>
                <BottomSection>
                    <BigText textStyles={{ width: "70%", marginBottom: 25 }}>
                        Best way to track your money
                    </BigText>
                    <SmallText textStyles={{ width: "70%", marginBottom: 25 }}>
                        Best payment method, connects your money to your friends, family.
                    </SmallText>
                </BottomSection>
            </WelcomeContainer>
        </>
    );
};

export default Welcome;