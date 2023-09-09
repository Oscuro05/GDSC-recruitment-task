import React from 'react'
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { fullscreen } from '@uiw/react-md-editor';

export const Content = () => {
    return (

        <Box>


            <Box className='mx-auto' sx={
                {width: {xs: '100%', md: '80%', lg: '30%'}, display: 'flex', justifyContent: 'center', mt: 7}
            }>
                <Typography sx={
                    {
                        fontSize: {xs: '3.25rem', md:'3.75rem', lg:'3.75rem'}
                    }
                } style={
                    {
                        color: '#5F5F5F',
                        fontFamily: 'Google Sans',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        lineHeight: '150%', /* 5.625rem */
                        letterSpacing: '-0.0825rem'
                    }
                }>
                    Get To Know Us! 
                </Typography>
            </Box>


            <Stack sx={
                {
                    flexDirection: 'column',
                    mt: 7
                }
            }>
                <Container maxWidth='xl' >
                    <Box className=' mx-auto' sx={
                    {width: {xs: '100%', md: '80%', lg: '30%'}, display: 'flex', justifyContent: 'center', mt: 3}
                    }>
                        <h1 style={
                            {
                                color: '#5F5F5F',
                                fontFamily: 'Product Sans Medium',
                                fontSize: '3.125rem',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: '150%', /* '4.6875rem' */
                                letterSpacing: '-0.06875rem',
                                textDecoration:'underline',
                                textDecorationColor:'#4285F4'
                            }
                        }>
                            Our mission
                        </h1>
                    </Box>

                    <Grid className='w-full p-0 m-0' container spacing={2} sx={{display: 'flex', justifyContent: 'center'}}>
                        <Grid item lg={4} md={10} xs={12} sx={
                            {
                                display: 'flex',
                                justifyContent: 'center'
                            }
                        }>
                            <img src='../images/mission-pic.svg' />
                        </Grid>

                        <Grid item lg={8} md={10} xs={12}>
                            <Typography sx={
                                {textAlign: {xs: 'center', md: 'center', lg: 'right'}, mr:{xs:'0', lg:'5%'}, ml:{xs:'0', lg:'30%'}, mt:{xs:'0', lg:'10%'},mb:{xs:'0', lg:'10%'}}
                            } style={
                                {
                                color: '#5F5F5F',
                                fontFamily: 'Product Sans Medium',
                                fontSize: '1.875rem',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: '150%', /* '2.8125rem' */
                                letterSpacing: '-0.04125rem'
                                }
                            }>
                            Our mission involves community engagement, leadership development, building strong tech foundation, while enabling all tech enthusiasts to contribute to the global society.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>



                <Container maxWidth='xl' >
                    <Box className=' mx-auto' sx={
                    {width: {xs: '100%', md: '80%', lg: '30%'}, display: 'flex', justifyContent: 'center', mt: 12}
                    }>
                        <h1 style={
                            {
                                color: '#5F5F5F',
                                fontFamily: 'Product Sans Medium',
                                fontSize: '3.125rem',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: '150%', /* '4.6875rem' */
                                letterSpacing: '-0.06875rem',
                                textDecoration:'underline',
                                textDecorationColor: '#0F9D56'
                            }
                        }>
                            Our Perspective
                        </h1>
                    </Box>

                    <Grid className='w-full p-0 m-0' container spacing={2} sx={{display: 'flex', justifyContent: 'center'}}>

                        <Grid item lg={8} md={10} xs={12}>
                            <Typography sx={
                                {textAlign: {xs: 'center', md: 'center', lg: 'left'}, ml:{xs:'0', lg:'5%'}, mr:{xs:'0', lg:'30%'}, mt:{xs:'0', lg:'10%'},mb:{xs:'0', lg:'10%'}}
                            } style={
                                {
                                color: '#5F5F5F',
                                fontFamily: 'Product Sans Medium',
                                fontSize: '1.875rem',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: '150%', /* '2.8125rem' */
                                letterSpacing: '-0.04125rem'
                                }
                            }>
                                We’re a community-driven initiative aiming to bridge the gap between research and practice , develop evolutionary thinking and network throughout the process. We believe in connecting fellow developers , spreading stimulative ideas and working for a solution driven team.
                            </Typography>
                        </Grid>

                        <Grid item lg={4} md={10} xs={12} sx={
                            {
                                display: 'flex',
                                justifyContent: 'center'
                            }
                        }>
                            <img src='../images/persp-pic.svg' />
                        </Grid>
                    </Grid>
                </Container>



                <Container maxWidth='xl' >
                    <Box className=' mx-auto' sx={
                    {width: {xs: '100%', md: '80%', lg: '40%'}, display: 'flex', justifyContent: 'center', mt:12}
                    }>
                        <h1 style={
                            {
                                color: '#5F5F5F',
                                fontFamily: 'Product Sans Medium',
                                fontSize: '3.125rem',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: '150%', /* '4.6875rem' */
                                letterSpacing: '-0.06875rem',
                                textDecoration:'underline',
                                textDecorationColor:'#DB4437'
                            }
                        }>
                            What keeps us going?
                        </h1>
                    </Box>

                    <Grid className='w-full p-0 m-0' container spacing={2} sx={{display: 'flex', justifyContent: 'center'}}>
                        <Grid item lg={4} md={10} xs={12} sx={
                            {
                                display: 'flex',
                                justifyContent: 'center'
                            }
                        }>
                            <img src='../images/going-pic.svg' />
                        </Grid>

                        <Grid item lg={8} md={10} xs={12} sx={{display: 'flex', justifyContent: {md: 'center'}}}>
                            <Typography sx={
                                {textAlign: {xs: 'center', md: 'center', lg: 'right'}, mr:{xs:'0', lg:'5%'}, ml:{xs:'0', lg:'30%'}, mt:{xs:'0', lg:'10%'},mb:{xs:'0', lg:'10%'}}
                            } style={
                                {
                                color: '#5F5F5F',
                                fontFamily: 'Product Sans Medium',
                                fontSize: '1.875rem',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: '150%', /* '2.8125rem' */
                                letterSpacing: '-0.04125rem'
                                }
                            }>
                            Our club helps students to connect, learn, empower and grow. Teamwork, innovative thinking, communication, and leading with solutions is what helps us achieve new heights.
                            The entire team works in coordination, to inspire and motivate the upcoming coding community to evolve their skills and broaden their horizons of knowledge.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>

            </Stack>


            <Grid className='circle-group' container spacing={12} sx={{mt:12,width:'80%',mr:'13%',ml:'7%'}}>
                <Grid className='circle-info' sx={{display:'flex',justifyContent:'center',flexDirection:'column'}} item lg={3} md={6} xs={12}>
                    <img className='circle' src='../images/gcircle.svg' />
                    <p className='circle-nums' style={{
                        position: 'absolute',
                        color: '#5F5F5F',
                        fontFamily: 'Google Sans',
                        fontSize: '4.6875rem',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        lineHeight: 'normal'
                    }}>
                        03+
                    </p>
                    <Typography className='circle-text' sx={{
                        color:'#353535',
                        fontFamily:'Google Sans',
                        fontSize:'2.625rem',
                        fontWeight: '800',
                        lineHeight:'normal'
                    }}>
                        Years
                    </Typography>


                </Grid>

                <Grid className='circle-info' sx={{display:'flex',justifyContent:'center',flexDirection:'column'}} item lg={3} md={6} xs={12}>
                    <img className='circle' src='../images/gcircle.svg' />
                    <p className='circle-nums' style={{
                        position: 'absolute',
                        color: '#5F5F5F',
                        fontFamily: 'Google Sans',
                        fontSize: '4.6875rem',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        lineHeight: 'normal'
                    }}>
                        10+
                    </p>
                    <Typography className='circle-text' sx={{
                        color:'#353535',
                        fontFamily:'Google Sans',
                        fontSize:'2.625rem',
                        fontWeight: '800',
                        lineHeight:'normal'
                    }}>
                        Events
                    </Typography>


                </Grid>

                <Grid className='circle-info' sx={{display:'flex',justifyContent:'center',flexDirection:'column',mt:5.4}} item lg={3} md={6} xs={12}>
                    <img className='circle' src='../images/gcircle.svg' />
                    <p className='circle-nums' style={{
                        position: 'absolute',
                        color: '#5F5F5F',
                        fontFamily: 'Google Sans',
                        fontSize: '4.6875rem',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        lineHeight: 'normal',
                        marginTop: '-3%'
                    }}>
                        1K+
                    </p>
                    <Typography className='circle-text' sx={{
                        color:'#353535',
                        fontFamily:'Google Sans',
                        fontSize:'2.625rem',
                        fontWeight: '800',
                        lineHeight:'normal'
                    }}>
                        Community Members
                    </Typography>


                </Grid>

                <Grid className='circle-info' sx={{display:'flex',justifyContent:'center',flexDirection:'column'}} item lg={3} md={6} xs={12}>
                    <img className='circle' src='../images/gcircle.svg' />
                    <p className='circle-nums' style={{
                        position: 'absolute',
                        color: '#5F5F5F',
                        fontFamily: 'Google Sans',
                        fontSize: '4.6875rem',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        lineHeight: 'normal'
                    }}>
                        200+
                    </p>
                    <Typography className='circle-text' sx={{
                        color:'#353535',
                        fontFamily:'Google Sans',
                        fontSize:'2.625rem',
                        fontWeight: '800',
                        lineHeight:'normal'
                    }}>
                        Attendees
                    </Typography>


                </Grid>

            </Grid>

        </Box>

    )
}

export default Content