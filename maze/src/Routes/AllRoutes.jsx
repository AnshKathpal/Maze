import React from 'react'
import {Route,Routes} from "react-router-dom"
import { Maze } from '../Components/Maze'
import { Maze2 } from '../Components/Maze2'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path = "/maze1" element = {<Maze/>}   />
        <Route path = "/maze2" element = {<Maze2/>}   />
    </Routes>
  )
}
