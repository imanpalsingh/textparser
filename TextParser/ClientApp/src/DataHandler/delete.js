import Axios from "axios";

const DeleteFile = async (filename) => {

    const opts = {
        headers: {
            "filename": filename
        }
    }
    const response = Axios.delete('api/file/',opts);
    return response;
}

export default DeleteFile;