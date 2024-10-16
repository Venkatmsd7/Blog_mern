import { Button } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function DashPosts() {
    const {currentUser}=useSelector((state)=>state.user)
    const [items,setItems]=useState([])
    const [isLoading,setIsLoading]=useState(false)
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);

   
    const fetchData= async()=>{
        setIsLoading(true)

        try {
           const res= await fetch(`http://localhost:8000/api/post/getposts?userId=${currentUser._id}&page=${page}`);
           console.log(res);
           if(res.ok){
            const data = await res.json()
            console.log(data);
            setItems([...items,...data]);
            // setPage(prevPage => prevPage + 1);
            setIsLoading(false)

           }

            
        } catch (error) {
            setError(error)
            setIsLoading(false)
            throw new Error(error)
        }
        
    }
    const handleDelete= async(postId)=>{
      try {
        const res= await fetch(`http://localhost:8000/api/post/deletepost?postId=${postId}`,
        {
          method:'DELETE'
        });
        setItems(items=>items.filter(item=>item._id!=postId))
      } catch (error) {
        
      }
    }
    const handleClick=()=>{
      setPage(prev=>prev+1)
      fetchData()
    }
    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
          return;
        }
        fetchData();
      };
    useEffect(()=>{fetchData()},[]) 
    // useEffect(() => {
    //   window.addEventListener('scroll', handleScroll);
    //   return () => window.removeEventListener('scroll', handleScroll);
    // }, [isLoading]);

  return (
    <div className='flex flex-col w-full'>
      {items.map((post,idx)=>(<div key={idx} className='border rounded-md border-green-600 min-h-20 my-3 max-w-screen-xl mx-3 flex flex-row space-x-10 justify-between'>
      <div className='w-20 pt-5'>{post.title}</div>
      <div className='pt-5'><img className='w-10 h-10' src={post.image}/></div>
      <div className='pt-5'>{post.category}</div>
      <Button gradientDuoTone='greenToBlue' className='w-20 h-10 m-auto' onClick={()=>handleDelete(post._id)}>Delete</Button>
      <Button gradientDuoTone='greenToBlue' className='w-20 h-10 m-auto'>Edit</Button>

      </div>))}
      
        
      <Button className='w-30 mx-auto mb-4' onClick={handleClick}><span>Load more</span> </Button>

    </div>

  )
}

export default DashPosts







