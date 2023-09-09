import React from 'react'
import {Box, Typography} from '@mui/material'

export const Welcome = () => {



    return (
        <Box>

            <Box className='heading-text mx-auto' sx={
                {width: {xs: '100%', md: '90%', lg: '70%'}, justifyContent: 'center', mt: {sm: 1, md: 10}}
            }>
                <img src = '../images/GDSC-text.png' className="w-full h-full object-cover" />
            </Box>

            <div className='plane'>
                <img src='../images/plane.svg' />
            </div>

            <div className='thread'>
                <img src='../images/thread.svg' />
            </div>

            <Box className='chapter mx-auto' sx={
                {width: {xs: '20%', md: '20%', lg: '30%'}, justifyContent: 'center'}
            } >
                <h1>
                    RCOEM Chapter
                </h1>
            </Box>

            <div className='people'>
                <img src='../images/people.svg'/>
            </div>

            <Box className="definition mx-auto mt-5" sx={
                {width: {xs:'100%', md:'75%', lg:'50%'}}
            }>
                <p>Google Developer Student Clubs are community groups for college and university students interested in Google developer technologies.</p>
            </Box>

            <Box className='join-us' 
            sx={
                {
                    mt: 9.5,
                    display: 'flex',
                    justifyContent: 'center'
                }
            }>
            <button type="button" class="btn btn-primary btn-lg">Join us</button>
            </Box>

            <Box className='arrows mx-auto' 
            sx={
                {
                    display: 'flex',
                    justifyContent: 'center',
                    pr: 4,
                    mt: 8
                }
            }>
                <ul>
                <li>
                    <img src='../images/Vector (1).svg' />
                </li>
                <li>
                    <img src='../images/Vector (2).svg' />
                </li>
                <li>
                    <img src='../images/Vector (3).svg' />
                </li>
                </ul>
            </Box>

        </Box>



    )
}
