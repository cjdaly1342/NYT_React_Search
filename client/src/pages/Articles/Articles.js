import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Articles extends Component {
	state = {
		articles: []
	};

	componentDidMount() {
		this.loadArticles();
	}

	loadArticles = () => {
		API.getBooks()
			.then(res => this.setState({ articles: res.data }))
			.catch(err => console.log(err));
	};

	render() {
		return (
			<Container fluid>
				<Row>
					<Col size="md-6">
						<Jumbotron>
							<h1>NYT Article Scrapper</h1>
						</Jumbotron>
					</Col>
					<Col size="md-6">
						<Jumbotron>
							<h1>Articles</h1>
						</Jumbotron>
						{this.state.articles.length ? (
							<List>
								{this.state.article.map(article => (
									<ListItem key={article._id}>
										<a href={"/articles/" + article._id}>
										  <strong>
										  	{article.title} by {article.author}
										  </strong>
										</a>
										<DeleteBtn />
									</ListItem>
								))}
							</List>	
						) : (
							<h3>No Results to Display</h3>
					)}
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Articles;