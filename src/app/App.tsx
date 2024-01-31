
import { Route, Routes } from 'react-router-dom'
import { Main } from '../modules/main'
import { Catalog } from '../modules/catalog'
import './App.css'
import { Layout } from './Layout'
import { Post } from '../modules/post/Post'

export const App = () => {
  
    return (
     <>        
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Main />} />
                <Route path="/post/*" element={<Post />}/>
                <Route path="/catalog/*" element={<Catalog />}/>
            </Route>
        </Routes>
     </>
    )
}