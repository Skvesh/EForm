import {
    Modal,
    TouchableWithoutFeedback,
    View,
    Text,
    Pressable,
    StyleSheet,
    TextInput,
    Alert,
    ViewStyle,
    TextStyle,
} from 'react-native';
// import store from '../../rematch/store';
// import RadioButton from '../RadioButton';
// import Title from '../Title';
import HandImage from './HandImage';
import { SingleCheckbox } from './Checkbox';
import { MapperStore, PartOfBodySnapshot, PartOfBodyStore } from '../models/MapperStore';
import { mapSide } from '../types/common';
import { observer } from 'mobx-react-lite';

const HandList = observer(function HandList(props: { onPress: (wound: string) => void }) {
    return (
        <>
            <HandImage
                text="Porvrchová rana"
                source={'x'}
                onPress={wound => props.onPress(wound)}
            ></HandImage>
            <HandImage
                text="Tepenné krvácanie"
                source={'o'}
                onPress={wound => props.onPress(wound)}
            ></HandImage>
            <HandImage
                text="Otvorená zlomenina"
                source={'om'}
                onPress={wound => props.onPress(wound)}
            ></HandImage>
            <HandImage
                text="Zlomenina"
                source={'mm'}
                onPress={wound => props.onPress(wound)}
            ></HandImage>
            <HandImage
                text="Amputácia"
                source={'mmx'}
                onPress={wound => props.onPress(wound)}
            ></HandImage>
            <HandImage
                text="Popalenina st."
                source={'lines'}
                onPress={wound => props.onPress(wound)}
            ></HandImage>
        </>
    );
});

function Overlay(props: { toggleModalVisibilty: (state: boolean) => void }) {
    return (
        <TouchableWithoutFeedback onPress={() => props.toggleModalVisibilty(false)}>
            <View style={$overlay} />
        </TouchableWithoutFeedback>
    );
}

function ModalContent(props: {
    toggleModalVisibilty: (state: boolean) => void;
    onSinePress: () => void;
    onHandPress: (wound: string) => void;
    area: PartOfBodySnapshot;
}) {
    return (
        <View style={$modalContainer}>
            <Overlay toggleModalVisibilty={props.toggleModalVisibilty} />
            <View style={$modal}>
                <Text style={$modalText}>Poranenia</Text>
                <SingleCheckbox
                    state={props.area.sine}
                    onPress={props.onSinePress}
                    style={{
                        alignSelf: 'stretch',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        height: 55,
                        paddingHorizontal: 20,
                        paddingVertical: 3,
                        borderBottomWidth: 1,
                        borderBottomColor: '#000',
                    }}
                    title={'Sine'}
                    side={'left'}
                />
                <HandList onPress={props.onHandPress} />
            </View>
        </View>
    );
}

interface MapperModalProps {
    area: PartOfBodySnapshot;
    isVisible: boolean;
    toggleModalVisibilty: (state: boolean) => void;
    onHandPress: (wound: string) => void;
    onSinePress: () => void;
}

function MapperModal(props: MapperModalProps) {
    return (
        <View style={$container}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={props.isVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    props.toggleModalVisibilty(!props.isVisible);
                }}
            >
                <ModalContent
                    onSinePress={props.onSinePress}
                    onHandPress={props.onHandPress}
                    area={props.area}
                    toggleModalVisibilty={props.toggleModalVisibilty}
                />
            </Modal>
        </View>
    );
}

export default MapperModal;

const $container: ViewStyle = {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
};

const $modalContainer: ViewStyle = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
};

const $modal: ViewStyle = {
    // margin: 20,
    // padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
};

const $overlay: ViewStyle = {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
};
const $modalText: TextStyle = {
    // height: 55,
    alignSelf: 'stretch',
    paddingTop: 5,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    textAlign: 'center',
    fontSize: 25,
};
