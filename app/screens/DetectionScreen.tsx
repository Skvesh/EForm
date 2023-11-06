import React, { FC } from 'react';
import { ViewStyle } from 'react-native';
import { CheckboxList, Screen } from '../components';
import { observer } from 'mobx-react-lite';
import { FormTabScreenProps } from '../types/navigator.types';
import { Divider } from '../components/Divider';
import { useStores } from '../models/helpers';
import { DetectionStore } from '../models';
import { colors } from '../theme';

export const DetectionScreen: FC<FormTabScreenProps<'FormDetection'>> = observer(
    function DetectionScreen() {
        const {
            rootStore: { detectionStore },
        } = useStores();

        return (
            <Screen styleContent={$screen}>
                <CheckboxList<DetectionStore>
                    source={detectionStore}
                    data="eyesOpening"
                    options="DetectionScreen.eyesOpening"
                    backgroundColor={$grey}
                />
                <CheckboxList<DetectionStore>
                    source={detectionStore}
                    data="verbalContact"
                    options="DetectionScreen.verbalContact"
                    backgroundColor={$grey}
                />
                <CheckboxList<DetectionStore>
                    source={detectionStore}
                    data="motorSkills"
                    options="DetectionScreen.motorSkills"
                    backgroundColor={$grey}
                />
                <CheckboxList<DetectionStore>
                    source={detectionStore}
                    data="eyeReflexes"
                    options="DetectionScreen.eyeReflexes"
                    leftSubTitle="R"
                    rightSubTitle="Ľ"
                />
                <CheckboxList<DetectionStore>
                    source={detectionStore}
                    data="pain"
                    options="DetectionScreen.pain"
                />
                <CheckboxList<DetectionStore>
                    source={detectionStore}
                    data="abdomen"
                    options="DetectionScreen.abdomen"
                />
                <CheckboxList<DetectionStore>
                    source={detectionStore}
                    data="airways"
                    options="DetectionScreen.airways"
                    backgroundColor={$blue}
                />
                <CheckboxList<DetectionStore>
                    source={detectionStore}
                    data="breathing"
                    options="DetectionScreen.breathing"
                    backgroundColor={$blue}
                />
                <CheckboxList<DetectionStore>
                    source={detectionStore}
                    data="auscultationFindingBlue"
                    options="DetectionScreen.auscultationFindingBlue"
                    leftSubTitle="R"
                    rightSubTitle="Ľ"
                    backgroundColor={$blue}
                />
                <CheckboxList<DetectionStore>
                    source={detectionStore}
                    data="neurologicalFinding"
                    options="DetectionScreen.neurologicalFinding"
                    backgroundColor={$grey}
                />
                <CheckboxList<DetectionStore>
                    source={detectionStore}
                    data="circulation"
                    options="DetectionScreen.circulation"
                    subTitle="Pulz"
                    leftSubTitle="Perif."
                    rightSubTitle="Cent."
                    backgroundColor={$pink}
                />
                <CheckboxList<DetectionStore>
                    source={detectionStore}
                    data="auscultationFindingPink"
                    options="DetectionScreen.auscultationFindingPink"
                    subTitle="Akcia srdca"
                    backgroundColor={$pink}
                />
                <CheckboxList<DetectionStore>
                    source={detectionStore}
                    data="skin"
                    options="DetectionScreen.skin"
                    backgroundColor={$pink}
                />
            </Screen>
        );
    },
);

const $screen: ViewStyle = {
    paddingTop: '3%',
};

const $blue: ViewStyle = {
    backgroundColor: colors.blue,
};

const $pink: ViewStyle = {
    backgroundColor: colors.pink,
};

const $grey: ViewStyle = {
    backgroundColor: colors.darkGrey,
};
