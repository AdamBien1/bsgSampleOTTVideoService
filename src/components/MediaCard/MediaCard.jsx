import React, {useContext, useEffect} from 'react'
import { useHistory } from "react-router"
import BsgContext from '../../context/BSG/bsgContext'
import { palette } from '../../helpers/colorPalette.style'
import { Bold, Card, ImageTag, SubHeader, Submit, SubText } from '../../helpers/UtilStyledComponents.style'
import { FlexboxRowLayout } from '../../templates/FlexboxRowLayout.style'
import { InfoPill } from './MediaCard.style'

const MediaCard = ({ 
    id,
    title, 
    image, 
    description, 
    year, 
    duration, 
    ageRestriction
 }) => {
        // Context
        const bsgContext = useContext(BsgContext)
        const { userData, mediaPlayInfo, getMediaPlayInfo } = bsgContext;

        // Local
        const history = useHistory();

        // Lifecycle
        useEffect(() => {
            if(mediaPlayInfo === null) {}
            else if(mediaPlayInfo.MediaId === id) {
                history.push({
                    pathname: "/player",
                    state: {
                        mediaPlayInfo
                    }
                })
            }

            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [mediaPlayInfo])

    const handleClick = (e) => {
        e.preventDefault();

        getMediaPlayInfo(userData.AuthorizationToken.Token, id)
    }

    return (
        <Card 
            borderRadius="15px"
            borderWidth="2px"
            borderColor={palette.primary}
            boxShadow
        >
            <SubHeader
                color={palette.primary}
            >
                {title}
            </SubHeader>
            <ImageTag 
                borderRadius="15px"
                borderWidth="px"
                borderColor={palette.dark}
                size="large"
                src={image[0].Url}
            />
            <SubText>
                {description}
            </SubText>
            <br />
            <FlexboxRowLayout>
                <InfoPill 
                    borderRadius="25px"
                    borderWidth="2px"
                    borderColor={palette.primary}
                >
                    Year: <Bold>{year}</Bold>
                </InfoPill>
                <InfoPill 
                    borderRadius="25px"
                    borderWidth="2px"
                    borderColor={palette.primary}
                >
                    Duration: <Bold>{duration}</Bold>
                </InfoPill>
                <InfoPill 
                    borderRadius="25px"
                    borderWidth="2px"
                    borderColor={palette.primary}
                >
                    Age Restriction: <Bold>{ageRestriction}</Bold>
                </InfoPill>
            </FlexboxRowLayout>
            <br />
            <br />
            <Submit 
                value={"Watch Now!"}
                backgroundColor={palette.dark}
                block
                color={palette.primary}

                onClick={e => handleClick(e)}
            />
        </Card>
    )
}

export default MediaCard
