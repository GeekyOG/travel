import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';
import { Post, SkeletonWrapper } from '../blog/style/style';



function LoadingSkeleton() {
  return (
    <>
        <Grid  item xs={12} lg={5} md={6}> 
         <SkeletonWrapper style={{padding: 10}}>

            <Skeleton animation="wave" variant="circular" width={40} height={40} />
            <Skeleton
            animation="wave"
            height={10}
            width="80%"
            style={{ marginBottom: 6 }}
            className='mt-2'/>
            <Skeleton animation="wave" height={10} width="40%"   className='mt-2'/>

            <Skeleton sx={{ height: 150 }} animation="wave" variant="rectangular" style={{borderRadius: 10}}  className='mt-2' />
        </SkeletonWrapper>
         </Grid>

    
        
    
    </>
  )
}

export default LoadingSkeleton