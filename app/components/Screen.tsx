import React from 'react';
import { View, KeyboardAvoidingView, ViewStyle, Platform, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, support } from '../theme';

interface BaseScreenProps {
    children?: React.ReactNode;
    styleContent?: ViewStyle;
}

const isIos = Platform.OS === 'ios';

export function Screen(props: BaseScreenProps) {
    const $containerInsets = useSafeAreaInsets();

    return (
        <View style={[$conainerStyle, { paddingTop: $containerInsets.top }]}>
            <KeyboardAvoidingView
                behavior={isIos ? 'padding' : undefined}
                style={[$keyboardAvoidingViewStyle]}
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={$scrollView}
                    alwaysBounceHorizontal={false}
                    alwaysBounceVertical={false}
                    bounces={false}
                    contentContainerStyle={[$scrollContent, props.styleContent]}
                >
                    {props.children}
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
}

const $conainerStyle: ViewStyle = {
    flex: 1,
    // height: '100%',
    width: '100%',
};

const $keyboardAvoidingViewStyle: ViewStyle = {
    flex: 1,
};

const $scrollView: ViewStyle = {
    flex: 1,
    backgroundColor: colors.background,
};

const $scrollContent: ViewStyle = {
    paddingHorizontal: '5%',
    paddingBottom: '5%',
};
