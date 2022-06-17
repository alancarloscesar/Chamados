import Lottie from "lottie-react";
import loadingAnimation from "../../assets/loading.json";

import {Container} from './styles'

function LottieFile(){
    return(
        <Container>

        <Lottie
            animationData={loadingAnimation}
            autoPlay
            loop
            
            style={{height: 200, width:200}}
            />
        </Container>
    )
}


export default LottieFile;