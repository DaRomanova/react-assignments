import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { DISHES } from '../shared/dishes';


class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishlist: DISHES
        }
    }

    renderDish(dish) {
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

    renderComments(com){
        if(com != null){

            var ddd ;
            let options = {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            };

            const comlist = com.map((com) => {
                return(
                    <div key={com.id}>
                        <ul class="list-unstyled">
                            <li>{com.comment} </li>
                            <li>-- {com.author} ,     {ddd = new Date(com.date), ddd.toLocaleString('en-us', options)}</li>
                        </ul>
                    </div>
                );
            });

            return(
                <div>
                    <h4>Comments</h4>
                    {comlist}
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    render() {
        if (this.props.selectedDish != null) {
            return (
                <div  className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.selectedDish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.state.dishlist[this.props.selectedDish.id].comments)}  
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
}

export default DishDetail;