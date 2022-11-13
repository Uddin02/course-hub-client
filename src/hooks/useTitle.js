import { useEffect } from "react";

const useTitle = title =>{
    useEffect(()=>{
        document.title = `CourseHub | ${title}`;
    },[title])
}

export default useTitle;