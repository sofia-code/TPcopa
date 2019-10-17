import React from 'react';
import Skeleton from 'react-loading-skeleton';
import {Container} from './styled';
 
const Loading = () => {
    return(
        <Container>
            <div>
                <Skeleton height={300} count={1}/>
                <Skeleton height={10} count={5}/>
            </div>
            <div>
                <Skeleton height={300} count={1}/>
                <Skeleton height={10} count={5}/>
            </div>
            <div>
                <Skeleton height={300} count={1}/>
                <Skeleton height={10} count={5}/>
            </div>
            <div>
                <Skeleton height={300} count={1}/>
                <Skeleton height={10} count={5}/>
            </div>
        </Container>
    )
}

export default Loading