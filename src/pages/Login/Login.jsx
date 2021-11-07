import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from "react-router"
import BsgContext from '../../context/BSG/bsgContext'
import { Card, Center, LeadingText, Overlay, StyledForm, StyledInput, Submit, SubText } from '../../helpers/UtilStyledComponents.style'
import { FlexboxRowLayout } from "../../templates/FlexboxRowLayout.style"
import { palette } from "../../helpers/colorPalette.style";

const Login = () => {
    // Context
    const bsgContext = useContext(BsgContext)
    const { login, userData } = bsgContext;

    // Local
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    // Lifecycle
    useEffect(() => {
        if(typeof userData?.AuthorizationToken?.Token === "string" && userData?.AuthorizationToken?.Token.length) {
            console.log(userData?.AuthorizationToken?.Token)
            history.push({
                pathname: "/home"
            })
        }
    }, [userData?.AuthorizationToken?.Token])

    const handleLogin = (e) => {
        e.preventDefault();

        login(username, password)
    }

    return (
        <Overlay>
            <Center>
                <Card
                    borderRadius="25px"
                    borderWidth="2px"
                    boxShadow
                    borderColor={palette.primary}
                >
                    <LeadingText color={palette.dark}>Login</LeadingText>
                    <StyledForm>
                        <StyledInput 
                            value={username}
                            onChange={e => setUsername(e.target.value)}

                            color={palette.dark}
                            borderWidth="2px"
                            borderColor={palette.dark} 
                            borderRadius="15px"
                            borderActive={palette.primary}
                        />
                        <SubText color={palette.dark}>Username</SubText>
                        <StyledInput 
                            value={password}
                            onChange={e => setPassword(e.target.value)}

                            color={palette.dark} 
                            borderWidth="2px"
                            borderColor={palette.dark}
                            borderRadius="15px"
                            borderActive={palette.primary}
                        />
                        <SubText color={palette.dark}>Password</SubText>
                        <br/>
                        <FlexboxRowLayout evenly>
                            <Submit 
                                value={"Log in"}
                                disabled={!(username && password)}
                                onClick={e => handleLogin(e)}
                                
                                backgroundColor={palette.primary}
                                disabledBgColor={palette.dark}
                                />
                            <Submit 
                                value={"Enter as guest"}
                                onClick={e => handleLogin(e)}
                                
                                color={palette.dark}
                                backgroundColor={palette.highlight}
                                />
                        </FlexboxRowLayout>
                    </StyledForm>
                </Card>
            </Center>
        </Overlay>
    )
}

export default Login
