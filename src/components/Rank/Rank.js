import React from 'react';

const Rank = ({username, entries})=> {
	
	return(
		<div>
			<div className='white f1'>
				{/*{`${username}, sign in successfully! your current entry count is...`}*/}
				{`${username}, sign in successfully!`}
			</div>
            {/*<div className='white f1'>
				{entries}
			</div>*/}
		</div>
	);

}


export default Rank;