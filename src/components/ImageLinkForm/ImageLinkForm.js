import React from 'react';
import'./ImageLinkForm.css';

const ImageLinkForm = ({inputURL, onInputChange, onPictureSubmit, onClearSubmit}) => {
	return(
		<div>
			<p className='f3'>
			  {`This Smart Brain will detect face in your pictures. Let's give it a try!`}
			</p>
            <div className='backgroundpattern pa4 br3 shadow-5 center' style={{width:'900px'}}>
               <input 
               	className='f4 pa2 w-60' 
               	type='text' 
               	placeholder='Please paste a jpg link of your picture:' 
               	value={inputURL} 
               	onChange={onInputChange}/>
               <button 
               	className='w-20 grow f4 ph3 pv2 dib white bg-light-purple pointer'
               	onClick={onPictureSubmit}>Detect</button>
               <button 
               	className='w-20 grow f4 ph3 pv2 dib white bg-light-blue pointer'
               	onClick={onClearSubmit}>Clear</button>
            </div>
		</div>
	);
}

export default ImageLinkForm;