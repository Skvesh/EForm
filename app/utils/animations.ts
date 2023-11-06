import { Animated } from 'react-native/types';

export const mapAnimation = (opacity: Animated.Value, transform: Animated.Value) => {
    const frontOpacity = opacity.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
    });
    const backOpacity = opacity.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0],
    });
    const setInterpolate = transform.interpolate({
        inputRange: [0, 180],
        outputRange: ['180deg', '360deg'],
    });

    const opacityFrontAnimatedStyle = {
        opacity: frontOpacity,
    };
    const opacityBackAnimatedStyle = {
        opacity: backOpacity,
    };
    const transformAnimatedStyle = {
        transform: [{ rotateY: setInterpolate }],
    };

    return {
        opacityFrontAnimatedStyle,
        opacityBackAnimatedStyle,
        transformAnimatedStyle,
    };
};
