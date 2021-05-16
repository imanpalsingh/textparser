import React from 'react';
import "./Home.styles.css";
import UploadButton from "../Upload-button/UploadButton.component";

const Home = () => {

    return (
        <>
            <div className="flex-center">
                <h1 className="light">Welcome!</h1>
                <p className="flex-end">Text Parser helps you modify contents of your file using commands</p>
                <UploadButton />

            </div>
        </>
    );
}


export default Home;