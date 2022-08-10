import './App.css';
import { useEffect, useState } from 'react';
import { storage, database, dbref } from './firebase';
import { ref, getDownloadURL, uploadBytesResumable} from 'firebase/storage';
import { v4 } from 'uuid';
import { onValue, set } from 'firebase/database';


function App() {
  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);

  const ValidateInput = (event) => {
    const fileInput = document.getElementById('file');
    const filePath = fileInput.value;

    const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
     
    if (!allowedExtensions.exec(filePath)) {
        alert('Only .jpg /.jpeg and .png types are allowed');
        fileInput.value = '';
        return false;
    }
    else
    {
      setImage(event.target.files[0]);
      alert("Image ready for uploading");
    }
  };

  const uploadImage = () => {
    if (image == null) return;
    
    const nameAppend = v4();
    const imageRef = ref(storage, `images/${image.name + nameAppend}`);
    const uploadTask = uploadBytesResumable(imageRef, image);
    
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      error => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(url => {
          writeUrlToDatabase(url)
          alert("Image uploaded successfully!");
        })
      }
    );  
  };

  const writeUrlToDatabase = (url) => {
    const uuid = v4();
    set(dbref(database, `${uuid}`), {
      url
    });
  }
  
  useEffect(() => {
    onValue(dbref(database), (snapshot) => {
      const data = snapshot.val();
      console.log("data ",  data);
      console.log("object ", Object.values(data));
      setImages(Object.values(data));
    });
  }, []);
  
  return (
    <div className="App">
      <h1 className='Title'>Image Uploader</h1>
      <div className='container'>
        <input type="file" id="file" onChange={(event) => {ValidateInput(event)}}/>
        <label htmlFor="file">choose image</label>

        <button id='upload' onClick={uploadImage}>Upload Image</button>
        <label htmlFor='upload'>Upload Image</label>
      </div>

      <div className='imgContainer'>
        {images.map(({url}) => {
          return (<img src={url} key={url} />)
        })};
        </div>
    </div>
  );
}

export default App;
