import React, { useState } from 'react';
import {
    View,
    TouchableOpacityProps,
    TouchableOpacity,
    Text,
    ViewStyle,
    TextStyle,
} from 'react-native';
import { SeparatedCheckboxes, SingleCheckbox } from './Checkbox';
import { Language } from '../i18n/sk';
import { RecursiveKeyOfPathof, naming } from '../utils/naming';
import { observer } from 'mobx-react-lite';
import { UnderlineInputBoxes } from './UnderlineInput';
import { ButtonAddList } from './ButtonAddList';
import { block, colors, support } from '../theme';
import { Divider } from './Divider';

interface CheckboxListProps<T> extends TouchableOpacityProps {
    source: T;
    data: keyof T;
    options: RecursiveKeyOfPathof<Language>;
    style?: ViewStyle;
    backgroundColor?: ViewStyle;
    subTitle?: string;
    leftSubTitle?: string;
    rightSubTitle?: string;
}
export const CheckboxList = observer(function CheckboxList<T extends { [key: string]: any }>(
    props: CheckboxListProps<T>,
) {
    const [showed, setShowed] = useState(false);

    return (
        <View style={[$checkboxList, props.style, props.backgroundColor]}>
            <TouchableOpacity onPress={() => setShowed(!showed)} style={$checkboxContainer}>
                <View style={$checkboxTitleContainer}>
                    <Text style={$checkboxTitle}>{naming(props.options).title}</Text>
                </View>

                {(props.subTitle || props.leftSubTitle || props.rightSubTitle) && (
                    <>
                        <Divider style={$divider} />
                        <View style={$checkboxSubTitleContainer}>
                            <View style={$square}>
                                <Text style={$checkboxSubTitle}>{props.leftSubTitle}</Text>
                            </View>
                            <Text style={$checkboxSubTitle}>{props.subTitle}</Text>
                            <View style={$square}>
                                <Text style={$checkboxSubTitle}>{props.rightSubTitle}</Text>
                            </View>
                        </View>
                    </>
                )}
            </TouchableOpacity>
            {showed &&
                Object.keys(props.source[props.data]).map((key, index) => {
                    return (
                        (props.source[props.data][key].side && (
                            <SingleCheckbox
                                side={props.source[props.data][key].side}
                                state={props.source[props.data][key].checked}
                                onPress={() => props.source[props.data][key].toggle()}
                                title={naming(props.options)[key]}
                                key={key}
                                style={[$checkbox(index), props.backgroundColor]}
                                styleText={$checkboxText}
                            />
                        )) ||
                        (typeof props.source[props.data][key].left === 'boolean' && (
                            <SeparatedCheckboxes
                                leftState={props.source[props.data][key].left}
                                state={props.source[props.data][key].right}
                                onLeftPress={() => props.source[props.data][key].updateLeft()}
                                onPress={() => props.source[props.data][key].updateRight()}
                                title={naming(props.options)[key]}
                                key={key}
                                style={[$checkbox(index), props.backgroundColor]}
                                styleText={$checkboxText}
                            />
                        )) ||
                        (Array.isArray(props.source[props.data][key]) && (
                            <ButtonAddList
                                styleButton={$button}
                                styleCheckbox={$checkbox(index)}
                                styleCheckboxText={$checkboxText}
                                backgroundColor={props.backgroundColor}
                                title="Pridať"
                                list={props.source[props.data][key]}
                                key={key}
                                onPress={(id: string, side: string) =>
                                    props.source[props.data].addAdditionalProperty(id, side)
                                }
                                onLongPress={property =>
                                    props.source[props.data].removeAdditionalProperty(property)
                                }
                            />
                        )) || (
                            <UnderlineInputBoxes
                                leftValue={props.source[props.data][key].left}
                                value={props.source[props.data][key].right}
                                onLeftChangeText={text =>
                                    props.source[props.data][key].updateLeft(text)
                                }
                                onChangeText={text =>
                                    props.source[props.data][key].updateRight(text)
                                }
                                title={naming(props.options)[key]}
                                key={key}
                                style={[$checkbox(index), props.backgroundColor]}
                                styleText={$checkboxText}
                            />
                        )
                    );
                })}
        </View>
    );
});

const $divider: ViewStyle = {
    marginVertical: '2%',
    backgroundColor: colors.componentBackground,
};

const $checkboxList: ViewStyle = {
    marginBottom: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
};
const $checkboxContainer: ViewStyle = {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    flex: 1,
    paddingVertical: '5%',
    paddingHorizontal: '6%',
    // padding: 8,
};
const $checkboxTitleContainer: ViewStyle = {
    flex: 1,
    alignItems: 'center',
};
const $checkboxSubTitleContainer: ViewStyle = {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
};

const $checkbox = (index: number): ViewStyle => ({
    flexDirection: 'row',
    paddingVertical: '3%',
    paddingHorizontal: '6%',
    borderTopWidth: 0.5,
    backgroundColor: '#FFF',
    justifyContent: 'space-between',
    borderBottomLeftRadius: index && 10,
    borderBottomRightRadius: index && 10,
});

const $square: ViewStyle = {
    minWidth: 35,
    // height: 35,
    ...block.alignCenter,
};

const $button: ViewStyle = {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
};

const $checkboxTitle: TextStyle = {
    textAlign: 'center',
    color: '#000',
    fontSize: 20,
    fontWeight: '500',
};
const $checkboxSubTitle: TextStyle = {
    textAlign: 'center',
    color: '#000',
    fontSize: 18,
    fontWeight: '500',
};

const $checkboxText: TextStyle = {
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 1.5,
};
