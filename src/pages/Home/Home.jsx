import React, { Fragment, useContext } from 'react'
import withSplashScreen from '../../helpers/withSplashScreen/withSplashScreen';
import MediaCard from '../../components/MediaCard/MediaCard';
import Navbar from '../../components/Navbar/Navbar';
import BsgContext from '../../context/BSG/bsgContext'
import { Container } from '../../helpers/UtilStyledComponents.style';

const Home = () => {
    // Context
    const bsgContext = useContext(BsgContext)
    const { mediaList } = bsgContext;

    return (
        <Fragment>
            <Navbar />
            <Container>
                {mediaList?.Entities && mediaList.Entities.map(entity => (
                    <MediaCard 
                        key={entity.Id}
                        id={entity.Id}
                        title={entity.Title}
                        image={entity.Images.filter(img => img.ImageTypeCode === "FRAME")}
                        description={entity.Description}
                        year={entity.Year > 0 ?
                            entity.Year :
                            "We don't know :)"}
                        // duration={entity.Duration}
                        duration={
                            entity.Duration > 0 ?
                            new Date(entity.Duration).toISOString().substr(11, 8) :
                            "We don't know :)"
                        }
                        ageRestriction={entity.MediaAgeRestrictionValueMin}
                    />
                ))}
            </Container>
        </Fragment>
    )
}

export default withSplashScreen(Home)
