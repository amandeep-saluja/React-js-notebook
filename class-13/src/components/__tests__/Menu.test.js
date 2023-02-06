import { act, render, waitFor, fireEvent } from '@testing-library/react';
import Header from '../Header';
import RestaurantMenu from '../RestaurantMenu';
import { RESTAURANT_MENU } from '../mocks/data';
import { Provider } from 'react-redux';
import store from '../../store/store';
import { StaticRouter } from 'react-router-dom/server';

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(RESTAURANT_MENU),
    }),
);
test('Add items to cart', async () => {
    //which component to test - RestaurantMenu
    let menu;
    await act(() => {
        menu = render(
            <StaticRouter>
                <Provider store={store}>
                    <Header />
                    <RestaurantMenu />
                </Provider>
            </StaticRouter>,
        );
    });
    await waitFor(() => expect(menu.getAllByTestId('addBtn')));

    const addButton = menu.getAllByTestId('addBtn');

    fireEvent.click(addButton[0]);
    fireEvent.click(addButton[1]);

    const cart = menu.getByTestId('cart');
    expect(cart.innerHTML).toBe('Cart 2 items');
});
