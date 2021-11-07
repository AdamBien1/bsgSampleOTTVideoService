import React, { Fragment } from 'react'
import { useHistory } from 'react-router'
import Navbar from '../../components/Navbar/Navbar'
import ResponsivePlayer from '../../components/ResponsivePlayer/ResponsivePlayer'
import { palette } from '../../helpers/colorPalette.style'
import { Bold, Card, Center, Container, SubHeader, Submit } from '../../helpers/UtilStyledComponents.style'
import { VideoPlayer } from './Player.style'

const Player = ({ location }) => {
    // Local
    let history = useHistory();

    return (
        <Fragment>
            <Navbar />
            <Container>
                <Center>
                    <Card
                         borderRadius="15px"
                         borderWidth="5px"
                         borderColor={palette.primary}
                         backgroundColor={palette.dark}
                         boxShadow
                    >
                        <SubHeader
                            color={palette.primary}
                        >
                            Now Watching: <Bold>{location.state.mediaPlayInfo.Title}</Bold>
                        </SubHeader>
                        <VideoPlayer 
                            controls
                            data-dashjs-player 
                            autoplay
                            src={location.state.mediaPlayInfo.ContentUrl}
                            >
                        </VideoPlayer>
                        {/* <ResponsivePlayer url={location.state.mediaPlayInfo.ContentUrl}/> */}

                        <Submit 
                            value="Go Back"
                            onClick={(e) => {
                                e.preventDefault();
                                history.goBack();
                            }}

                            backgroundColor={palette.primary}
                            block
                            color={palette.dark}
                        />
                    </Card>
                </Center>
            </Container>
        </Fragment>
    )
}

export default Player
