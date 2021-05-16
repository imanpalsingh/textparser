import axios from "axios";

const UploadFile = async(file)=> {

    const formData = new FormData();
    formData.append("formfile", file);
    formData.append("fileName", file.name)
    const response = await axios.post("/api/file", formData)

    return response
}

const UploadFiles = async (files, updateError) => {
    for (let i = 0; i < files.length; ++i) {
        var response = UploadFile(files[i])
    }

    return response;
}

export default UploadFiles;