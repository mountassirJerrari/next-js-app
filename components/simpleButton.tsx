"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
export default  function SimpleButton() {
    const router  =  useRouter();
    const logoutHandler = async (event : any) => {
        event.preventDefault();
    
        try {
          const response = await axios.post('/api/logout', {});
          console.log(response.data); 
          // handle success response
          router.push('/login')
        } catch (error) {
          console.error(error); // handle error response
        }
      };
    return(
        <div onClick={logoutHandler} className="bg-red-600 mx-4 px-4 hover:bg-red-400 rounded cursor-pointer text-white p-2" >logout</div>
    )
    
}