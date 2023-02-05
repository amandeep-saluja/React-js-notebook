import { act, render } from '@testing-library/react';
import RestaurantMenu from '../RestaurantMenu';
import { RESTAURANT_MENU } from '../mocks/data';
import { Provider } from 'react-redux';
import store from '../../store/store';

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
            <Provider store={store}>
                <RestaurantMenu />
            </Provider>,
        );
    });
    const menuItems = menu.getByTestId('menu-items');
    console.log(menuItems);
});
