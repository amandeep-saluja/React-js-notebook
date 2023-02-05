import Header from '../Header';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import { StaticRouter } from 'react-router-dom/server';
test('Logo should load on rendering header', () => {
    //Load Header
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>,
    );
    const logo = header.getAllByTestId('logo')[0].src;
    console.log(logo);
    //Check if logo is loaded
    expect(logo).toBe('http://localhost/dummy.png');
});

test('Online status should be green on rendering header', () => {
    //Load Header
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>,
    );
    const onlineStatus = header.getByTestId('online-status');
    //Check if logo is loaded
    expect(onlineStatus.innerHTML).toBe('✅');
});
test('Cart should have 0 items on rendering header', () => {
    //Load Header
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>,
    );
    const cart = header.getByTestId('cart');
    //Check if logo is loaded
    expect(cart.innerHTML).toBe('Cart 0 items');
});
