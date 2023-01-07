// import React, { useState, useEffect } from 'react'
// import { slice } from 'lodash'
// function Posts() {
//   const [post, setPost] = useState([])
//   const [isCompleted, setIsCompleted] = useState(false)
//   const [index, setIndex] = useState(2)
//   const initialPosts = slice(post, 0, index)
//   const getData = () => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((res) => res.json())
//       .then((json) => setPost(json))
//       .catch((e) => console.log(e))
//   }
//   const loadMore = () => {
//     setIndex(index + 1)
//     console.log(index)
//     if (index >= post.length) {
//       setIsCompleted(true)
//     } else {
//       setIsCompleted(false)
//     }
//   }
//   useEffect(() => {
//     getData()
//   }, [])
//   return (
//     <div>
//       <h2 className="mb-3">React Js Load More Example</h2>
//       {initialPosts.map((item) => {
//         return (
//           <div
//             className="mb-3 card bg-primary p-2 text-dark bg-opacity-25"
//             key={item.id}
//           >
//             <div className="card-body">{item.title}</div>
//           </div>
//         )
//       })}
//       <div className="d-grid mt-3 mb-5">
//         {isCompleted ? (
//           <button
//             onClick={loadMore}
//             type="button"
//             className="btn btn-danger disabled"
//           >
//             That's It
//           </button>
//         ) : (
//           <button onClick={loadMore} type="button" className="btn btn-danger">
//             Load More +
//           </button>
//         )}
//       </div>
//     </div>
//   )
// }
// export default Posts


/////half working


// import axios from "axios";
// import { withTranslation } from "react-i18next";
// import { Redirect } from "react-router";
// import CONFIG from "../../config.json";

// import DataTable from './DisplayDataTable';
// import GetApis from "../pages/GetApis";
// import AssetOptionalPage from "./AssetOptionalPage";

// import React, { useState, useEffect } from 'react';
// import { slice } from 'lodash';


// function Posts() {
//   const [post, setPost] = useState([])
//   const [isCompleted, setIsCompleted] = useState(false)
//   const [index, setIndex] = useState(2)
//   const initialPosts = slice(post, 0, index)



//   const getApiPath = () => {
//     //  return"http://localhost/dev/koneautoci/src/server/messages/retrievecontactmessages.php";   
//     return GetApis().RETRIEVEASSET;
//     //return CONFIG.DIRECT_LIVE.RETRIEVEMYMESSAGES;
//   }
//   const getData = () => {
//     axios.get('http://localhost/htdocdev/ritab/src/server/assets/retrieveasset.php')

//       .then(res => { 
//         setPost(res.data)
//         console.log("response in LMA: ", res.data)       
//       })      
//       .catch((e) => console.log(e))
//   }

//   const loadMore = () => {
//     setIndex(index + 1)
//     console.log(index)
//     if (index >= post.length) {
//       setIsCompleted(true)
//     } else {
//       setIsCompleted(false)
//     }
//   }
//   useEffect(() => {
//     getData()
//   }, [])

//   // const mainimage = require(`../../server/assets/${this.props.obj.PathMainImage}`).default;
//   return (
//     <div>

//       <h2 className="mb-3">React Js Load More Example</h2>
//       {initialPosts.map((item) => {
//         return (
//           <div
//             className="mb-3 card bg-primary p-2 text-dark bg-opacity-25"
//             key={item.Id}
//           >
//             <div className="card-body">{item.Name}</div>

//             <div><img src={require(`../../server/assets/${item.PathMainImage}`).default} width="300" height="auto" /> </div>
//           </div>
//         )
//       })}
//       <div className="d-grid mt-3 mb-5">
//         {isCompleted ? (
//           <button
//             onClick={loadMore}
//             type="button"
//             className="btn btn-danger disabled"
//           >
//             That's It
//           </button>
//         ) : (
//           <button onClick={loadMore} type="button" className="btn btn-danger">
//             Load More +
//           </button>
//         )}
//       </div>
//     </div>
//   )
// }
// export default Posts




import axios from "axios";
import { withTranslation } from "react-i18next";
import { Redirect } from "react-router";
import CONFIG from "../../config.json";

import DataTable from './DisplayDataTable_redundant';
import GetApis from "../pages/GetApis";
import AssetOptionalPage from "./AssetOptionalPage";

import React, { useState, useEffect } from 'react';
import { slice } from 'lodash';
import { NavLink, Link, HashRouter } from "react-router-dom";

function Posts() {
  const [post, setPost] = useState([])
  const [isCompleted, setIsCompleted] = useState(false)
  const [index, setIndex] = useState(2)
  const initialPosts = slice(post, 0, index)



  const getApiPath = () => {
    //  return"http://localhost/dev/koneautoci/src/server/messages/retrievecontactmessages.php";   
    return GetApis().RETRIEVEASSET;
    //return CONFIG.DIRECT_LIVE.RETRIEVEMYMESSAGES;
  }
  const getData = () => {
    //axios.get('http://localhost/htdocdev/ritab/src/server/assets/retrieveasset.php')
    axios.get('http://groupakwabatech.com/retrieveasset.php')
      .then(res => {
        setPost(res.data)
        console.log("response in LMA: ", res.data)
      })
      .catch((e) => console.log(e))
  }

  const loadMore = () => {
    setIndex(index + 1)
    console.log(index)
    if (index >= post.length) {
      setIsCompleted(true)
    } else {
      setIsCompleted(false)
    }
  }
  useEffect(() => {
    getData()
  }, [])



  // const mainimage = require(`../../server/assets/${this.props.obj.PathMainImage}`).default;
  return (
    <div>

      <h2 className="mb-3">Available properties</h2>
      {initialPosts.map((item) => {

        const mainimage = require(`../../server/assets/${item.PathMainImage}`).default;
        const opt1image = require(`../../server/assets/${item.PathFirstOptionalImage}`).default;
        const opt2image = require(`../../server/assets/${item.PathSecondOptionalImage}`).default;
        const opt3image = require(`../../server/assets/${item.PathThirdOptionalImage}`).default;
        const assetNote = item.Sellernote;
        const assetDescription = item.Description;
        const assetName = item.Name;
        const assetPrice = item.Price;

        return (
          <div
            className="mb-3 card bg-primary p-2 text-dark bg-opacity-25"
            key={item.Id}
          >
            <div className="">
              <span Style='color: white; font-weight: bold; font-size: 16px'>{item.Name}  </span>
              <Link to={{
                pathname: "/assetoptionals", state: {
                  mainimage, opt1image, opt2image, opt3image,
                  assetNote, assetDescription, assetName, assetPrice
                }
              }}>
              </Link>
            </div>
            <Link to={{
              pathname: "/assetoptionals", state: {
                mainimage, opt1image, opt2image, opt3image,
                assetNote, assetDescription, assetName, assetPrice
              }
            }}>
              <img src={mainimage} width="300" height="auto" />
            </Link>
          </div>
        )
      })}
      <div className="d-grid mt-3 mb-5">
        {isCompleted ? (
          <button
            onClick={loadMore}
            type="button"
            className="btn btn-danger disabled"
          >
            That's It
          </button>
        ) : (
          <button onClick={loadMore} type="button" className="btn btn-danger">
            Load More +
          </button>
        )}
      </div>
    </div>
  )
}
export default Posts