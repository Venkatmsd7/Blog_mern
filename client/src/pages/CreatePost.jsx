import React, { useState } from 'react'
import { TextInput,Select,FileInput, Button,Alert } from 'flowbite-react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { app } from '../firebase';
function CreatePost() {
    const [title,setTitle]=useState("");
    const [category,setCategory]=useState("No category");
    const [file, setFile] = useState(null);
    const [content,setContent]=useState("")
    const [UploadError,setUploadError]=useState(null);
    const [loading,setLoading]=useState(false)
    const handleSubmit=async (e)=>{
        e.preventDefault();
        setLoading(true)
        const formData = new FormData();
        formData.append('title',title);
        formData.append('category',category);
        formData.append('file',file);
        formData.append('content',content);
        console.log(formData);
        console.log(title);
        console.log(category);
        try {
            const res= await fetch("http://localhost:8000/api/post/create",{
                method:"POST",
                body:formData,
                // headers: {
                //      'Content-Type':'multipart/form-data',
                     
                //    }
                credentials:"include",
            });
            if(res.ok){
                console.log("Data uploaded");
                setLoading(false)
                            }
            else{
                setLoading(false)
            }                
        } catch (error) {
            console.log(error);
            setLoading(false)
            setUploadError(`Unable to create Post : ${error}`)

        }
    }
    
    
  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>
        <h1 className='text-center text-3xl mb-5'>Create a post</h1>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div className='flex flex-col gap-2 sm:flex-row'>
            <TextInput
            type='text'
            placeholder='Title'
            id='title'
            className='flex-1'
            onChange={(e)=>setTitle(e.target.value)}
            />
            <Select onChange={(e)=>setCategory(e.target.value)}>
                <option value='No category'>Select a category </option>
                <option value='Javscript'> Javascript</option>
                <option value='Python'>Python </option>
                <option value='Reactjs'>React.js</option>
            </Select>
            </div>
            <div className='flex flex-col gap-2 items-center justify-between p-3 sm:flex-row border-4 border-cyan-300 border-dotted'>
            <FileInput
                type='file'
                accept='image/*'
                onChange={(e)=>setFile(e.target.files[0])}

            />
            <Button gradientDuoTone='purpleToPink' outline>Upload </Button>
            </div>
            
            <ReactQuill className='h-72 mb-20' onChange={(value)=>setContent(value)}/>

            <Button gradientDuoTone='greenToBlue' type='submit' disabled={loading}>
                {
                    !loading? "Create": "Creating..."

            }
                </Button>
            {UploadError && (<Alert>{UploadError}</Alert>)}
        </form>

    </div>
  )
}

export default CreatePost