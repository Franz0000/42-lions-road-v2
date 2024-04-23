
import React, { useState , useEffect} from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [image, setImage] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('image', selectedFile);
      // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
      axios.post('http://ec2-13-231-167-201.ap-northeast-1.compute.amazonaws.com:3000/uploads/single', formData)
        .then((response) => {
          console.log('Image uploaded successfully:', response.data);
          // Handle success (e.g., show a success message)
          setTimeout(() => {
            window.location.reload(false);
        }, 500)
        })
        .catch((error) => {
          console.error('Error uploading image:', error);
          // Handle error (e.g., show an error message)
        });
    }
  };

  useEffect(() => {
    axios.get('http://ec2-13-231-167-201.ap-northeast-1.compute.amazonaws.com:3000/uploads/all/image')
    .then((response) => {
      console.log('Image retrieve successfully:' , response.data.imageData)
      setImage(response.data.imageData)
    })
    .catch(error => console.error('Error uploading image:', error))
  }, [])

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Image</button>
      {image.map((item) =>{
        console.log(item)
        return <img src={`http://ec2-13-231-167-201.ap-northeast-1.compute.amazonaws.com:3000/images/`+item.filename }/>
      })}
       
    </div>
  );
};

export default ImageUpload;