import Share from 'react-native-share';
import RNFS from 'react-native-fs';
import { FILE_PATH } from './constants';

const writeJSONFile = async (fileName: string, data: object): Promise<string | null> => {
    try {
        const path = `${FILE_PATH}/${fileName}.json`;
        const JSONFile = JSON.stringify(data);
        await RNFS.writeFile(path, JSONFile, 'utf8');
        console.log('JSON file written successfully!');
        return path;
    } catch (error) {
        console.log('Error writing JSON file: ', error);
        return null;
    }
};

const readJSONFile = async (filePath: string): Promise<object | null> => {
    try {
        const fileContent = await RNFS.readFile(filePath, 'utf8');
        const jsonData = JSON.parse(fileContent);
        console.log('JSON data:', jsonData);
        return jsonData;
    } catch (error) {
        console.log('Error reading JSON file:', error);
        return null;
    }
};

const writeFile = async (fileName: string, data: string): Promise<string | null> => {
    try {
        const path = `${FILE_PATH}/${fileName}.json`;
        await RNFS.writeFile(path, data, 'utf8');
        console.log('JSON file written successfully!');
        return path;
    } catch (error) {
        console.log('Error writing JSON file: ', error);
        return null;
    }
};

const readFile = async (filePath: string): Promise<string | null> => {
    try {
        const fileContent = await RNFS.readFile(filePath, 'utf8');
        console.log('JSON data:', fileContent);
        return fileContent;
    } catch (error) {
        console.log('Error reading JSON file:', error);
        return null;
    }
};

const deleteFile = async (filePath: string): Promise<void> => {
    console.log(filePath);

    try {
        await RNFS.unlink(filePath);
        console.log('FILE DELETED');
    } catch (error) {
        console.log(error);
    }
};

const shareFile = async (filePath: string, fileName: string, mimeType: string): Promise<void> => {
    try {
        const options = {
            type: mimeType,
            url: `file://${filePath}`,
            failOnCancel: false,
        };
        await Share.open(options);
    } catch (error) {
        console.log('Error sharing file: ', error);
    }
};

// type MkdirOptions = {
//     NSURLIsExcludedFromBackupKey?: boolean; // iOS only
// };

const getListOfNames = async (filePath: string): Promise<string[]> => {
    try {
        // if (!(await RNFS.exists(filePath))) {
        //     await RNFS.mkdir(filePath);
        //     console.log('Folder created');
        // }
        const fileNames = await RNFS.readdir(filePath);
        return fileNames;
    } catch (error) {
        console.log('Error getting file names: ', error);
        return [];
    }
};

// const isExisted = async (filePath: string): Promise<boolean> => {
//     try {
//         return await RNFS.exists(filePath);
//     } catch (error) {
//         console.log('Error checking file existence: ', error);
//         return false;
//     }
// };

const writeAndShareJSONFile = async (
    fileName: string,
    data: object,
    mimeType: string,
): Promise<void> => {
    const filePath = await writeJSONFile(fileName, data);
    if (filePath) await shareFile(filePath, fileName, mimeType);
};

export default {
    writeFile,
    readFile,
    deleteFile,
    shareFile,
    writeAndShareJSONFile,
    writeJSONFile,
    readJSONFile,
    getListOfNames,
};
