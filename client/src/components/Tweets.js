import React, { Component } from 'react';
import { Header, Form, List, Icon, Button} from 'semantic-ui-react';

class Tweets extends Component {
	state = { tweets: [], handle: '', tweet: '' };
	
	getTweets = (e) => {
		e.preventDefault();
		let { handle } = this.state;
		fetch(`/api/tweets/${handle}`)
			.then( res => res.json() )
			.then( tweets => this.setState({ tweets, handle: '' }));
	}

	  tweets = () => {
    return this.state.tweets.map( tweet => {
      return (
        <List.Item key={tweet.id}>
          <List.Icon 
            name="twitter" 
            size="large" 
            verticalAlign="middle" 
          />
          <List.Content>
           {tweet.text}
          </List.Content>
        </List.Item>
      )
    });
  }
		
		postTweet = (e) => {
  e.preventDefault();
  let { tweet } = this.state;

  fetch('/api/tweets', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ tweet })
  }).then( res => res.json() )
    .then( result => {
      console.log(result)
      this.setState({ tweet: '' })
    })
}

 render() {
  let { handle, tweet } = this.state;
  return (
    <div>
      <Header as="h3" textAlign="center">Tweets</Header>
      <Form onSubmit={this.postTweet}>
        <Form.Input
          label='Tweet at the world!'
          value={tweet}
          onChange={ e => this.setState({ tweet: e.target.value }) }
        />
        <Button primary fluid>Post A Tweet</Button>
      </Form>
        <Form onSubmit={this.getTweets}>
        <Form.Input
         label="Twitter Handle"
         value={handle}
         onChange={ e => this.setState({ handle: e.target.value }) }
        />
      </Form>
      <List divided relaxed>
       {this.tweets()}
      </List>
    </div>
   )
  }
}

export default Tweets;