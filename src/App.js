import { Routes, Route } from 'react-router-dom';
import { GlobalContext } from './hooks/useGlobalContext';
import useApi from './hooks/useApi';

import JobBoardList from './components/JobBoardList';
import JobDetail from './components/JobDetail';
import Pagination from './components/Pagination';

function App() {
  const [data, loading, error] = useApi("https://api.json-generator.com/templates/ZM1r0eic3XEy/data")

  if (loading) { 
    return <p>Loading...</p> 
  } 
  
  if (error) {
    return <p>ERROR</p>
  }

  return (
    <GlobalContext.Provider value={{data}}>
      <div className="container">
        <Routes>
          <Route path='/' element={<><JobBoardList /><Pagination/></>} />
          <Route path='/detail/:id' element={<JobDetail/>} />
        </Routes>        
      </div>
    </GlobalContext.Provider>
  )
}
export default App;