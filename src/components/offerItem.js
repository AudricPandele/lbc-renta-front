import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEuroSign,
  faMoneyBillAlt,
  faBuilding
} from '@fortawesome/free-solid-svg-icons';

class offerItem extends Component {
  numberPrettier(num) {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
      : Math.sign(num) * Math.abs(num);
  }

  render() {
    const offer = this.props.offer;
    return (
      <div className='card mb-3'>
        <div className='row no-gutters'>
          <div className='col-md-4'>
            <img src={offer.image} className='card-img' alt='avatar img'></img>
          </div>
          <div className='col-md-6'>
            <div className='card-body'>
              <a
                rel='noopener noreferrer'
                href={offer.link}
                className='card-link'
                target='_blank'
              >
                <h5 className='card-title'>{offer.city}</h5>
              </a>
              <p className='card-text'>
                {offer.square} m2, {offer.type}, {offer.owner}
              </p>
              <p className='card-text'>
                <small className='text-muted'>
                  <FontAwesomeIcon icon={faEuroSign} />
                  &nbsp;
                  {this.numberPrettier(offer.price)}
                </small>
                &nbsp;
                <small className='text-muted'>
                  <FontAwesomeIcon icon={faBuilding} />
                  &nbsp;
                  {offer.monthly}€
                </small>
                &nbsp;
                <small className='text-muted'>
                  <FontAwesomeIcon icon={faMoneyBillAlt} />
                  &nbsp;
                  {offer.profit}€
                </small>
              </p>
            </div>
          </div>
          <div className='col-md-2 rentability-content bg-primary'>
            <h2 className='rentability-h2'>{offer.rentabilityPretty}%</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default offerItem;
