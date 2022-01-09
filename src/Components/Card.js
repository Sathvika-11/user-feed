import React,{useState} from 'react'  
 import './Card.css'

 
 function Card(){
    const [num,setNum]=useState(0);
    const [com,setCom]=useState(0);
    const [share,setShare]=useState(0);

    const incNum=()=>{
        setNum(num+1);
    };
    const incCom=()=>{
        setCom(com+1);
    };
    const incShare=()=>{
        setShare(share+1);
    };
//likes
    React.useEffect( ()=>{
        const data=localStorage.getItem("likeCount");
        if(data){
            setNum(JSON.parse(data));
        }
    },[] );

   React.useEffect( ()=>{
       localStorage.setItem("likeCount",JSON.stringify(num));
   } );
//comments
   React.useEffect( ()=>{
    const data1=localStorage.getItem("CommCount");
    if(data1){
        setCom(JSON.parse(data1));
    }
},[] );

React.useEffect( ()=>{
   localStorage.setItem("CommCount",JSON.stringify(com));
} );
//shares
React.useEffect( ()=>{
    const data2=localStorage.getItem("shareCount");
    if(data2){
        setShare(JSON.parse(data2));
    }
},[] );

React.useEffect( ()=>{
   localStorage.setItem("shareCount",JSON.stringify(share));
} );
 //return
      return(
     <div className='Card'>
         <div className='uppercontainer'>
             <div className='text'>
             <h4 className='name'>Horng H Chen</h4>
             <p className='about'>Alum | Finance,MBA | 2016 | Business Manager at Capgemini </p>
                 <p className='about1'> 1d | San fransisco</p>
             </div>

             <div className='image'>
                 <img src='https://www.oysterconnect.com/blogs/wp-content/uploads/2019/10/businesswoman2967123b.jpg' alt=''height='100px' width='130px'/>

             </div>

         </div>
         <div className='lowerConatiner'>
           <p className='about3'>The concept of Research: A cross-cultural study</p>
           <p>Oxford Nanopore has pulled in 100m from investers in the Asia-pacific region,as it completes a funding round that values the fast-growing UK biotechnology company.</p>
           <div className='count'>
               <p>{num} Likes | {com} Comments | {share} Shares</p>
               
             

           </div>
           <div className='btn'>
           <button className='b' onClick={incNum}>Like</button>
           <button className='b' onClick={incCom}>Comment</button>
           <button className='b' onClick={incShare}>Share</button>
           </div>
         </div>

     </div>
      );
 }
 export default Card 
   