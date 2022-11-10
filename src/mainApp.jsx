import React, { Suspense,  useState, useEffect  } from "react";
import i18n from "./services/i18n";
import { withTranslation } from "react-i18next";
import Main from "./mainbody";
import Footer from "./clientapp/footer/Footer";
import "./mainApp.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Stylesheets/css/StyleSheet.css";
import NavBar from "./clientapp/responsive/NavBar";



function App({ t }) {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');


  // useEffect(() => {
  //   const loadUsers = async () => {
  //     try {
  //       setIsLoading(true);
  //       const response = await axios.get(
  //         `https://randomuser.me/api/?page=${page}&results=10`
  //       );

  //       setUsers([...users, ...response.data.results]);
  //       setErrorMsg('');
  //     } catch (error) {
  //       setErrorMsg('Error while loading data. Try again later.');
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   loadUsers();
  // }, [page]);

  // const loadMore = () => {
  //   setPage((page) => page + 1);
  // };

  return (
    <div>
      
      <div className="akwaba-lang">
        <button onClick={() => changeLanguage("fr")} className="btn-sm">
          Fr
        </button>
        <button onClick={() => changeLanguage("en")} className="btn-sm">
          En
        </button>
      </div> 
      <div className = "header-akwaba">
      <NavBar /> 
      </div>
      <Suspense fallback={<div>Loading</div>}>
      <Main />
      {/* <div className="loadmore">
        <button onClick={loadMore} className="btn-grad">
          {isLoading ? 'Loading...' : 'Load More'}
        </button>
        </div> */}
      
      </Suspense>
      <Footer />
    </div>
  );
}

export default withTranslation()(App);
