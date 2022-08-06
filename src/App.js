import './App.css';
import { useState } from 'react';
import { storage } from './firebase';
import { ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';

function App() {
  const [imageUpload, setImageUpload] = useState(null);
  
  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      alert("Image uploaded");
    })
  };

  const ValidateInput = (event) => {

      let fileInput = document.getElementById('file');
      let filePath = fileInput.value;

      const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
       
      if (!allowedExtensions.exec(filePath)) {
          alert('Only .jpg /.jpeg and .png types are allowed');
          fileInput.value = '';
          return false;
      }
      else
      {
        setImageUpload(event.target.files[0])
        alert("Image ready for uploading");
      }
  };

  return (
    <div className="App">
      <h1 className='Title'>Image Uploader</h1>
      <div className='container'>
        <input type="file" id="file" onChange={(event) => {ValidateInput(event)}}/>
        <label htmlFor="file">choose image</label>

        <button id='upload' onClick={uploadImage}>Upload Image</button>
        <label htmlFor='upload'>Upload Image</label>
      </div>
    </div>
  );
}

export default App;
