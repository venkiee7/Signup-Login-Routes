import React from 'react';
import { useState } from 'react';
import { FileUploader } from './FileUploader';
import { Preview } from './Preview';

export const Home = (props) => {
    const { showAlert } = props
    const [files, setFiles] = useState([]);
    const onSuccess = (savedFiles) => {
        setFiles(savedFiles)
    }
        return (
            <div>
                {showAlert}
                <FileUploader onSuccess={onSuccess} />
                <Preview files={files} />
            </div>
        )
}    

export default Home;