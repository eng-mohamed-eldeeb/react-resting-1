import Greeting from './Greeting.js'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


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

test('renders good to see you if the button was NOT clicked', () => {
  render(<Greeting/>);

  const sc = screen.getByText("it's good to see you", {exact: false})

  expect(sc).toBeInTheDocument();
})

test('renders good to see you if the button WAS clicked', () => {
  //Arrange
  render(<Greeting/>);
  //Act
  const btn = screen.getByRole('button');
  userEvent.click(btn);
  //Assert
  const chan = screen.getByText("Changed")
  expect(chan).toBeInTheDocument();
})
test('dose Not render good to see u if the btn dosent clicked', () => {
  //Arrange
  render(<Greeting/>);
  //Act
  const btn = screen.queryByRole('button');
  userEvent.click(btn);
  //Assert
  const outPut = screen.queryByText("it's good to see you")
  expect(outPut).toBeNull();
})
})


