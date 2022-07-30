import Greeting from './Greeting.js'
import { render, screen } from '@testing-library/react';


describe('greeting component', () => {

    
  test('renders hallo world as a text', () => {
    //Arrange
    render(<Greeting/>);

    //Act
    //...nothing

    //Assert
    const hello = screen.getByText('hello worled', {exact: false});
    expect(hello).toBeInTheDocument();
})   

})


