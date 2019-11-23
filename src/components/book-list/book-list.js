import React, {Component} from 'react';
import {connect} from "react-redux";

import {withBookstoreService} from "../hoc";

import BookListItem from "../book-list-item";

class BookList extends Component {
    componentDidMount() {
        /*const {bookstoreService} = this.props;
        const data = bookstoreService.getData();
        console.log(data);*/
        console.log(this.props)
    }

    render() {
        const {books} = this.props;
        return (
            <ul>
                {
                    books.map(book => {
                        return (
                            <li key={book.id}>
                                <BookListItem book={book}/>
                            </li>
                        )
                    })
                }
            </ul>
        );
    }
}

const mapStateToProps = ({ books }) => {
    return { books }
};

export default withBookstoreService()(connect(mapStateToProps)(BookList));