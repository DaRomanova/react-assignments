import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, BreadcrumbItem, Breadcrumb } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderDish({dish}) {
    return (
        <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle heading>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}

function RenderComments({comments}){
    if(comments != null){

        let options = {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        };
        return(
            <div>
                <h4>Comments</h4>
                <ul class="list-unstyled">
                {comments.map((comment) => {
                    return(
                        <div key={comment.id}>
                                <li>{comment.comment} </li>
                                <li>-- {comment.author} ,     { new Date(comment.date).toLocaleString('en-us', options)}</li>         
                        </div>
                    );
                })}
            </ul>
            </div>
        );
    }
    else{
        return(
            <div></div>
        );
    }
}

const DishDetail = (props) => {
    if (props.dish != null) {
        return (
            <div class="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div  className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} /> 
                    </div>
                </div>
            </div>
        );
    }
    else {
        return(
            <div></div>
        );
    }
}

export default DishDetail;