import { FileMetadata } from "../components/common/FileComponent";

export interface Message {
    text: string;
    isoDate: string;
    files: FileMetadata[];
}

const createMessage = (text?: string, isoDate?: string, files?: FileMetadata[]): Message => {
    return {
        text: text ? text : "",
        isoDate: isoDate ? isoDate : new Date().toISOString(),
        files: files ? files : [],
    };
};

export default createMessage;
