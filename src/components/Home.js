import React, {Fragment, useState, useEffect} from 'react'
import Courses from './layout/courses';
import Corosal from './layout/corosal';
import Profile from './layout/profile';
import MetaData from './layout/MetaData' 
import Loader from './layout/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert';
import { getStudents } from '../actions/studentActions'

const Home = () => {
    
    const alert = useAlert();
    const dispatch = useDispatch();
    const { loading,students, error, studentsCount } = useSelector(state => state.students)

    useEffect(() => {
        dispatch( getStudents());

        if (error) {}{
            alert.error(error)
        }
    }, [dispatch,error])
    return (
        <Fragment>
             <MetaData title={'Placement aid for students'}/>
         {/* <h1>Homepage </h1> 
          */}
          
          
          <div>
            <Corosal/>
            <div class="card-header" id="Home">
            <span class="card-text">HOME</span>
            </div>
            <Profile/>
            <div class="card-header" id="courses">
            <span class="card-text">COURSES</span>
            </div>
            <Courses/>
        </div>
          
          
          </Fragment>
    

    )
}
 export default Home