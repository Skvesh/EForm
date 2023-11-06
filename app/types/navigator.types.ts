// import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type AppStackParamList = {
    Home: undefined;
    Form: NavigatorScreenParams<FormTabParamList>;
};

export type AppStackScreenProps<T extends keyof AppStackParamList> = NativeStackScreenProps<
    AppStackParamList,
    T
>;

export type FormTabParamList = {
    FormSession: undefined;
    FormPatient: undefined;
    FormDetection: undefined;
    FormTable: undefined;
    FormMapper: undefined;
    FormSection: undefined;
    FormHandover: undefined;
    FormLast: undefined;
};

export type FormTabScreenProps<T extends keyof FormTabParamList> = CompositeScreenProps<
    MaterialTopTabScreenProps<FormTabParamList, T>,
    AppStackScreenProps<keyof AppStackParamList>
>;
