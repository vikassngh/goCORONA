import React from 'react';
import './Page.css';
import { Container } from "react-bootstrap";
import {Card, CardHeader, CardContent , Typography , Button} from "@material-ui/core";

export class News extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            articles: []
        }
    }
    componentDidMount() {
        fetch('https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=8faddb689e0a41f2b47f195bca0797c8')
            .then( (response) => {
                return response.json();
            })
            .then( (myJson) => {
                this.setState({
                    articles: myJson.articles
                });
            });
    }

    render() {

        return (
            <Container fluid>
                <div className="newscontainer">
                        {this.state.articles.map((item, index) => {
                            return(
                                <div className="cardmain">
                                    <Card className="root" elevation={10}>
                                            <CardHeader
                                                title={item.author}
                                                subheader={new Date(item.publishedAt).toDateString()}
                                            />
                                            <CardContent>
                                                
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    {item.description}
                                                </Typography>
                                                <Typography><br/></Typography>
                                                <Button variant="contained" color="primary" size="small"
                                                        href={item.url} className="button">
                                                    READ ARTICLE
                                                </Button>
                                            </CardContent>
                                    </Card>
                                </div>
                            )
                        })}
                </div>
            </Container>
        );
    }
}