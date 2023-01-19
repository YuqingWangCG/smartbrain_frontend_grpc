import React from 'react';
import FaceRecognition from '../FaceRecognition/FaceRecognition';


const MultiFacesDetection = ({boxes, inputURL}) =>{
	return(
		<div>
			{boxes.map((box) => {
	          	return (<FaceRecognition box={box}, inputURL= {inputURL}/>);
	          })
	        }
		</div>
	)
}

export default MultiFacesDetection; 