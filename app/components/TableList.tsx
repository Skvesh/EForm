import { observer } from 'mobx-react-lite';
import { ScrollView, ViewStyle } from 'react-native';
import { TherapyStore, TimeStore, UpvStore } from '../models';
import { Circle } from './common';

type sreensType = TimeStore | UpvStore | TherapyStore;

interface TableListProps<T> {
    data: T;
    listTitle: keyof T & (T[keyof T] extends Array<any> ? keyof T : never);
    itemTitle: keyof TimeStore | keyof UpvStore | keyof TherapyStore;
    onItemPress?: (item: sreensType) => void;
    onItemLongPress?: (item: sreensType) => void;
}

export const TableList = observer(function TableList<T>(props: TableListProps<T>) {
    return (
        <>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                contentContainerStyle={$tableList(
                    (props.data[props.listTitle] as Array<any>).length === 0,
                )}
            >
                {(props.data[props.listTitle] as Array<any>).map((item: sreensType) => (
                    <Circle
                        onPress={() => props.onItemPress && props.onItemPress(item)}
                        onLongPress={() => props.onItemLongPress && props.onItemLongPress(item)}
                        title={item[props.itemTitle as keyof sreensType]}
                        key={item.id}
                    />
                ))}
            </ScrollView>
        </>
    );
});

const $tableList = (isEmpty: boolean): ViewStyle => {
    return isEmpty
        ? {}
        : {
              paddingVertical: 10,
              paddingHorizontal: 15,
          };
};
