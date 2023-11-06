import AsyncStorage from '@react-native-async-storage/async-storage';
import { SnapshotIn, SnapshotOrInstance } from 'mobx-state-tree';
import { RootStore, RootStoreModel } from '../models/RootStore';

export async function saveString(key: string, value: string) {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (e) {
        // save error
        console.log(e);
    }

    console.log('SaveString.');
}

export async function loadString(key: string) {
    try {
        return await AsyncStorage.getItem(key);
    } catch (e) {
        // read error
        console.log(e);
    }

    console.log('LoadString.');
}

export async function save(key: string, value: SnapshotIn<typeof RootStoreModel>) {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
        // save error
        console.log(e);
    }

    console.log('Save.');
}

export async function load(key: string) {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // read error
        console.log(e);
    }

    console.log('Load.');
}

export async function remove(key: string) {
    try {
        await AsyncStorage.removeItem(key);
    } catch (e) {
        // remove error
        console.log(e);
    }

    console.log('Remove.');
}

export async function clear() {
    try {
        await AsyncStorage.clear();
    } catch (e) {
        // clear error
        console.log(e);
    }

    console.log('Clear.');
}
