import axios from "axios";

const UpdateFile = async (file) => {

    const formData = new FormData();
    formData.append("FileContent", file.content);
    formData.append("FileName", file.name)
    const response = await axios.put("/api/file", formData)

    return response
}

export default UpdateFile;