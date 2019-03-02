import React, { Component } from 'react';
import Head from './Head';
import Body from './Body';
import './style.scss';
import { connect } from 'react-redux';
import { removeProductAction, toggleShowCartAction } from '../../../actions/cart'


class Cart extends Component {

    componentDidMount() {
        const container = document.querySelector('body');
        container.onclick = (event) => {
            const isCart = !!event.path.find((el) => {
                if (el.id === 'cart' || el.className === 'btn-add-product') {
                    return true
                }
                return false;
            });
            if (!isCart) {

                this.props.toggle('hide');
            }
        }
    }

    componentDidUpdate() {
        const {
            quantity,
            isShow,
            toggle,
        } = this.props;

        if (!quantity && isShow) {
            toggle('hide')
        }

    }

    render() {
        const {
            products,
            remove,
            sum,
            quantity,
            isShow,
            toggle,
        } = this.props;


        return (
            <div id='cart'>

                <Head
                    sum={sum}
                    quantity={quantity}
                    toggle={toggle}
                />
                {
                    isShow && quantity ?

                        <Body
                            products={products}
                            remove={remove}
                        />
                        : ''
                }
            </div>

        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        remove: (product) => removeProductAction(dispatch, product),
        toggle: (value) => toggleShowCartAction(dispatch, value)

    }
}

const mapStateToProps = (state) => {
    return {
        products: state.cart.products,
        quantity: state.cart.quantity,
        sum: state.cart.sum,
        isShow: state.cart.isShow,
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Cart);