import React, { Component } from 'react';
import OfferItem from './offerItem';
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

class offersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offersList: [],
      isLoading: false,
      pageCount: 10,
      currentPageOffset: 0
    };
  }

  getOffers = () => {
    let page = this.state.currentPageOffset + 1;
    fetch('http://localhost:8080/last-offers?page=' + page)
      .then(res => res.json())
      .then(result => {
        this.setState({
          offersList: result,
          isLoading: false
        });
      });
  };

  componentDidMount = props => {
    this.setState({ isLoading: true });
    this.getOffers();
  };

  handlePageClick = pageOffset => {
    let currentPageOffset = pageOffset.selected;
    this.setState(
      {
        currentPageOffset,
        isLoading: true
      },
      () => {
        this.getOffers();
      }
    );
  };

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return <FontAwesomeIcon icon={faSpinner} size='6x' spin />;
    }

    return (
      <div>
        <div className='row justify-content-md-center mt-4'>
          <div className='col-lg-8'>
            {this.state.offersList.map((item, index) => (
              <OfferItem key={index} offer={item} />
            ))}
          </div>
        </div>
        <div className='row justify-content-md-center'>
          <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            pageCount={this.state.pageCount}
            forcePage={this.state.currentPageOffset}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            subContainerClassName={'pages pagination'}
            containerClassName={'pagination'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextClassName={'page-item'}
            nextLinkClassName={'page-link'}
            activeClassName={'active'}
          />
        </div>
      </div>
    );
  }
}

export default offersList;
