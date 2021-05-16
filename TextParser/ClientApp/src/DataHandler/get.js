import Axios from "axios";

const UploadedFileNames = async() => {

    const response = Axios.get("api/file/names");
    return response;
}

const CurrentFileContent = async (filename) => {
    const response = Axios.get(`api/file/content/${filename}`);
    return response;
} 

export {
    UploadedFileNames,
    CurrentFileContent
}