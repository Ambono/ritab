import axios from "axios";
import { withTranslation } from "react-i18next";
import { Redirect } from "react-router";
import CONFIG from "../../config.json";
import React, { useState, useEffect } from 'react';
import { slice } from 'lodash';
import { NavLink, Link, HashRouter } from "react-router-dom";
import GetUrl from "../services/urlService";

function Posts() {
  const [post, setPost] = useState([])
  const [isCompleted, setIsCompleted] = useState(false)
  const [index, setIndex] = useState(2) 
  const [search,  setSearch] = useState(false)
  const [isSearchValid,  setIsSearchValid] = useState(true)
  const [siteSearch,  setSiteSearch] = useState('')
  const [siteSearchIndex,  setSiteSearchIndex] = useState('')
  const initialPosts = slice(post, 0, index)
  

  function getApiPath () {     
    return GetUrl("retrieveAsset");   
  }

  const getData = () => {   
    const url =  getApiPath();
    //axios.get('http://localhost/htdocdev/ritab/src/server/assets/retrieveasset.php')
        //   axios.get('http://groupakwabatech.com/retrieveasset.php')
        axios.get(url)
      .then(res => {
        setPost(res.data)
      })
      .catch((e) => console.log(e)) 
  }

  const loadMore = () => {
    setIndex(index + 1)
    console.log(index)
    if(index >= post.length){
      setIsCompleted(true)      
    } else {
      setIsCompleted(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const  startSearch = (e) =>{

    const url = getApiPath();
    if(siteSearch=="")
    {
      setIndex(0);
      setIsSearchValid(false);
      return
    }
      //axios.post('http://localhost/htdocdev/ritab/src/server/assets/retrieveassetwithsearch.php', {      
    //  axios.post('http://groupakwabatech.com/retrieveassetwithsearch.php', { 
      axios.post(url, {         
       siteSearch: siteSearch           
          })
          .then(res => {  
           setPost(res.data);
           setSearch(true); 
           setSiteSearch('');
       })
       .catch((e) => console.log(e))    
  }
  // const mainimage = require(`../../server/assets/${this.props.obj.PathMainImage}`).default;
  return (
    <div>
      <row>
        <div class="col-md4 col-offset-0"><h2 className="mb-3">Recent hit backs</h2></div>
        <div class="col-md3 col-offset-2"><label for="site-search">Search the site:</label>
        <input type="search"   value={siteSearch} id="siteSearch"
          onChange={event => setSiteSearch(event.target.value)}
         ></input>
        <button className="home-search-button" onClick ={startSearch}>Search</button>
        </div>
      </row>
      <p></p>
      {initialPosts.map((item) => {
        /////////dev env
        const mainimage = require(`../../server/assets/${item?.PathMainImage}`).default;
        const opt1image = require(`../../server/assets/${item?.PathFirstOptionalImage}`).default;
        const opt2image = require(`../../server/assets/${item?.PathSecondOptionalImage}`).default;
        const opt3image = require(`../../server/assets/${item?.PathThirdOptionalImage}`).default;
        const emptyText = ""; // falsy
        var videosrc =  item?.Videopath ?? "videos/thesun.earthrotating.mp4video.mp4"
        const video = require(`../../server/assets/${videosrc}`).default;
      
        ////live       // 
///"videos/modpleh12345/thesun.earthrotating.mp4video.mp4"
        // const myApp ="groupakwabatech.com";
        // const mainimage = `/${item.PathMainImage}`;
        // const opt1image = `/${item.PathFirstOptionalImage}`;
        // const opt2image = `/${item.PathSecondOptionalImage}`;
        // const opt3image = `/${item.PathThirdOptionalImage}`;
        // const video = `/${item?.Videopath}`??'';
        
        const assetNote = item?.Sellernote;
        const assetDescription = item?.Description;
        const assetName = item?.Name;
        const assetPrice = item?.Price;
        const reply = item?.Sellernote;
        const replyerName = item?.ShopOwnerTitle +' '+item?.ShopOwnerName+' '+item?.ShopOwnerSurname;
              
        localStorage.clear();// need this to ensure redirect destination in detail page can reload

        //  localStorage.setItem('mainimage', mainimage);
        //  localStorage.setItem('opt1image', opt1image);
        //  localStorage.setItem('opt2image', opt2image);
        //  localStorage.setItem('opt3image', opt3image);
        //  localStorage.setItem('video', video);
        //  localStorage.setItem('assetNote', assetNote);
        //  localStorage.setItem('assetDescription', assetDescription);
        //  localStorage.setItem('assetName', assetName);
        //  localStorage.setItem('assetPrice', assetPrice);
        //  localStorage.setItem('reply', reply);
        //  localStorage.setItem('replyerName', replyerName); 
        return (
          <div>         
          <div
            class="mb-3 card bg-secondary p-2 text-dark bg-opacity-25"
            key={item.Id}
          >
            {/* <AssetOptionalVideos propsvideopath ={video}  /> */}
            {/* <AssetOptionalPage  prop_mainimage = {mainimage} prop_opt1image ={opt1image} prop_opt2image ={opt2image} prop_opt3image ={opt3image} 
            prop_assetNote ={assetNote}  prop_assetDescription ={assetDescription}  prop_assetName ={assetName}  prop_assetPrice ={assetPrice}  
            prop_reply ={reply}  prop_replyerName ={replyerName} 
            /> */}                   
              <div className =""  Style='color: white; font-weight: bold; font-size: 16px'><h1>{item.Name}  published an article about {item.Description} </h1></div>
              <div className ="" >               
                <Link to={{
                  pathname: "/assetoptionals", state: {
                    mainimage, opt1image, opt2image, opt3image,
                    assetNote, assetDescription, assetName, assetPrice, reply, replyerName, video
                  }
            }}>
              <img src={mainimage} className="home-page-image" width="100%" height="100%" />                           
               <div Style='color: white;' className=""> <h4>See {replyerName}'s reply.</h4></div>
            </Link>
            </div>
            </div>           
            </div>          
        )
      })}

{isSearchValid && ( <div className="d-grid mt-3 mb-5">
        {isCompleted ? (
          <button
            onClick={loadMore}
            type="button"
            className="btn btn-danger disabled"
          >
            No more Hit back
          </button>
        ) : (
          <button onClick={loadMore} type="button" className="btn btn-danger">
            More Hit backs
          </button>
        )}
      </div>
      )}
    </div>
  )
}
export default Posts


