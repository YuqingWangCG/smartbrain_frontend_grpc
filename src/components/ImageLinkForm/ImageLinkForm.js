import React from 'react';
import'./ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onPictureSubmit}) => {
	return(
		<div>
			<p className='f3'>
			  {`This Smart Brain will detect faces in your pictures. Let's give it a try!`}
			</p>
            <div className='backgroundpattern pa4 br3 shadow-5 center' style={{width:'700px'}}>
               <input className='f4 pa2 w-70' type='text' onChange={onInputChange}/>
               <button 
               	className='w-30 grow f4 ph3 pv2 dib white bg-light-purple pointer'
               	onClick={onPictureSubmit}>Detect</button>
            </div>
		</div>
	);
}

export default ImageLinkForm;