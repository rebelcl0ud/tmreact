import React from 'react'
import {
	Link,
	Route
} from 'react-router-dom'

/** if this...
	function Topic(props) {
		console.log(props); <-- would console all diff props that React passes to component; ie: match.params
		return <h3>{props.match.params.topicId}</h3>
	}
**/

function Topic({match}) {
	return <h3>{match.params.topicId}</h3>
}

export default function Topics({match}) {
	return (
		<div>
			<h2>Topics</h2>
			<ul>
				<li>
					<Link to={`${match.url}/rendering`}>Rendering with React</Link>
				</li>
				<li>
					<Link to={`${match.url}/component`}>Components</Link>
				</li>
				<li>
					<Link to={`${match.url}/props-v-state`}>Props vs State</Link>
				</li>
			</ul>

			<hr />
			{/* why 3 diff routes if rendering same component? 
			<Route path='/topics/rendering' component={Topic} />
			<Route path='/topics/components' component={Topic} />
			<Route path='/topics/props-v-state' component={Topic} />
			*/}

			{/* instead, use :topicId (url parameter) --will be dynamic; see Topic fn above */}
			<Route path={`${match.path}/:topicId`} component={Topic} />
			
			
			{/** 
				how can you pass a prop to a component being rendered by React router? 
					<Route path={`${match.path}/:topicId`} render={() => {
						return <Topic anyprop='jo' />
					}}/>
			**/}


			{/* for minor text can use 'render' prop; only render this when on this exact path*/}
			<Route exact path={match.path} render={() => {
				return <h3>Please select a topic</h3>
			}} />
		</div>
	)
}

/**

- what were to happen if route path were to be changed?

ex: <Link to='/topics/rendering'>Rendering with React</Link> to 
<Link to='/t/rendering'>Rendering with React</Link>

when building nested link components: u want to use match.url,
when building nested route components: use match.path


- if you want to pass routing props to comp that isnt rendered by react router 
	use `withRouter` higher order comp; you import like Link or Route above

	some adv topics not covered
	higher order components
	render props
	new context api
	more adv state management librariesredux/mobx
	react router protected routes; post
	portals/err boundaries

**/









