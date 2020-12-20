import React from 'react';
import {Image, ImageBackground} from 'react-native';
import {images} from "../assets/images";

const Splash = () => {
    return (
        <ImageBackground
            source={images.splashBG}
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image
                source={images.appIcon}/>

        </ImageBackground>
    );
};
export default Splash;