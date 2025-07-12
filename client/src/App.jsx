// import React from 'react'
// import { Routes, Route } from 'react-router-dom'
// import Home from './pages/Home'
// import Result from './pages/Result'
// import BuyCredit from './pages/BuyCredit'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'

// const App = () => {
//   return (
//     <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50'>
//     <Navbar />
//     <Routes>
//       <Route path='/' element={<Home/>}/>
//       <Route path='/result' element={<Result/>}/>
//       <Route path='/buy' element={<BuyCredit/>}/>
//     </Routes>
//     <Footer />
//     </div>
//   )
// }

// export default App

// import React, { useContext } from 'react'
// import { Routes, Route } from 'react-router-dom'
// import Home from './pages/Home'
// import Result from './pages/Result'
// import BuyCredit from './pages/BuyCredit'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
// import AppContextProvider, { AppContext } from './context/AppContext'
// import Login from './components/Login'

// const App = () => {
//   const {showLogin} = useContext(AppContext);
//   return (
//     <AppContextProvider>
//       <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50'>
//         <Navbar />
//         {showLogin && <Login />}
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/result' element={<Result />} />
//           <Route path='/buy' element={<BuyCredit />} />
//         </Routes>
//         <Footer />
//       </div>
//     </AppContextProvider>
//   )
// }

// export default App

import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { AppContext } from './context/AppContext'
import Login from './components/Login'

const App = () => {
  const { showLogin } = useContext(AppContext);

  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50'>
      <Navbar />
      {showLogin && <Login />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/result' element={<Result />} />
        <Route path='/buy' element={<BuyCredit />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
