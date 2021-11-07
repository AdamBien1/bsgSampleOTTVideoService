import React, {Component} from 'react';
import BsgContext from '../../context/BSG/bsgContext'
import { Card, Center, LeadingText, Overlay } from '../UtilStyledComponents.style';
import { SplashScreen, LoadingDot } from "./withSplashScreen.style"
import { palette } from "../colorPalette.style";

function LoadingMessage() {
  return (
      <Overlay>
        <Center>
          <Card 
            borderRadius="25px" 
            borderWidth="4px" 
            borderColor={palette.primary}
            // backgroundColor={palette.light}
            boxShadow
            >
            <SplashScreen>
                <LeadingText color={palette.dark}>
                  Wait a moment while we load your app.
                </LeadingText>
              <LoadingDot>.</LoadingDot>
            </SplashScreen>
          </Card>
        </Center>
      </Overlay>
  );
}

function withSplashScreen(WrappedComponent) {


  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    // Context
    static contextType = BsgContext;

    async componentDidMount() {
      try {
        this.context.getMediaList(this.context.userData?.AuthorizationToken?.Token)
      } catch (err) {
        alert("sorry, something went wrong!");
      }
    }

    render() {
      // while checking user session, show "loading" message
      if (this.context.loading) return LoadingMessage();

      // otherwise, show the desired route
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withSplashScreen;