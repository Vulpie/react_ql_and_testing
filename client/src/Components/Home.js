import React from 'react'
import LinkButton from './Partials/LinkButton'

const Home = () => {
	const views = ['author', 'authorList', 'book', 'bookList']
	return (
		<div className='home'>
			{views.map((view) => (
				<LinkButton type={view} key={'menu_item_' + view} />
			))}
		</div>
	)
}

export default Home
