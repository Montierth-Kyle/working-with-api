import React, { Component } from 'react';
import Products from'./components/Products';
import { Grid } from 'semantic-ui-react';
import Tweets from './components/Tweets';
import 'semantic-ui-css/semantic.min.css';

const App = () => (
 	<div>
		<Grid container columns={16}>
			<Grid.Row>
				<Grid.Column computer={8} mobile={16} tablet={16}>
					<Products />
				</Grid.Column>
				<Grid.Column computer={8} mobile={16} tablet={16}>
					<Tweets />
				</Grid.Column>
			</Grid.Row>
		</Grid>
	</div>
);

export default App;
