import React, { useEffect, useState } from 'react'


const App = () => {
  const [articles, setarticles] = useState([]);
  useEffect(()=>{
    const fetchData =async()=>{
  let url ='https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0b84fdc73a324b859645e6fcb6ce25f0';
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);
  setarticles(parsedData.articles);
    }
   fetchData();
},[]) 

// useEffect(() => {
//   const fetchData = async () => {
//     const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0b84fdc73a324b859645e6fcb6ce25f0`);
//     const newData = await response.json();
//     setarticles(newData.articles);
//   };

//   fetchData();
// },[]) 
  

  return (
    <div>
      {articles.map((e)=>{
        return <div className="" key={e.url}>
          <h1>{e.title}</h1>
          <p>{e.description}</p>
        </div>
      })}
    </div>
  )
}

export default App






// ---------------------------------------------------------------------


// // import React, { useEffect, useState } from 'react'


// // const App = () => {
// //   const [count, setCount] = useState(0)
// //   useEffect(()=>{
// //     console.log('useEffect called')
// //   })
// //   return (
// //     <div>
// //       <h1>{count}</h1>
// //       <button onClick={()=>{setCount(count+1)}}>Increment</button>
// //     </div>
// //   )
// // }

// // export default App

// //in the example shows that useEffect will we called at every render and re rendering
// //so initially it will be rendered twice once for render and then for re rendering
// //whenever we changed the count useEffect will be get called every time 


// // -----------------------------------------------------------------------

// import React, { useEffect, useState } from 'react'


// const App = () => {
//   const [count, setCount] = useState(0);
//   const [count2, setCount2] = useState(0);
//   useEffect(()=>{
//     console.log('useEffect called')
//   },[])
//   return (
//     <div>
//       <h1>Count No1.....{count}</h1>
//       <button onClick={()=>{setCount(count+1)}}>Increment</button>
//       <h1>Count No2.....{count2}</h1>
//       <button onClick={()=>{setCount2(count2+1)}}>Increment</button>
//     </div>
//   )
// }

// export default App


// //in this example we give the dependency in the useEffect hook that is count  
// // useEffect hook will only be called in case of dependency that we provide and cases will be ignored
// // it is clear that when we doing something with the setCount2 that is not mentioned in the useEffect hook dependencied when we do something with it useeffect will not be called