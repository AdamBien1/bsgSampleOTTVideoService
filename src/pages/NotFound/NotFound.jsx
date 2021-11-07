import React, { Fragment } from 'react'
import { palette } from '../../helpers/colorPalette.style'
import { Card, Center, Container, Overlay, SubHeader } from '../../helpers/UtilStyledComponents.style'

const NotFound = () => {
    return (
        <Fragment>
            <Overlay>
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
                                Sorry, page your looking for doesn't exist :(
                            </SubHeader>
                        </Card>
                    </Center>
                </Container>
            </Overlay>
        </Fragment>
    )
}

export default NotFound
