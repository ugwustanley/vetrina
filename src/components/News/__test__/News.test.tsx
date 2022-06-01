import React from 'react';
import { render, screen , cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect'
import News from '../News';

afterEach(cleanup)

const data =  {
    author: "stanley",
    category: "General",
    country: "Nigeria",
    description: "This is a test description",
    image: "example.svg",
    language: "en",
    published_at: "Nigerian publisher",
    source: "cnn.com",
    title: "Example",
    url: "example.com/url",
  }


it('renders element without any error', () => {

  const div = document.createElement('div')

  ReactDOM.render(<News data={data} />, div)

});



// it('renders element without any error', () => {
   
//     render(<News data={data} />);
  
//     const linkElement = screen.getByText(/learn react/i);
  
//     expect(linkElement).toBeInTheDocument();
  
//   });


it("renders news item correctly", () =>{

    const {getByTestId} = render(<News data={data} />)

    expect(getByTestId("news-item")).toHaveTextContent("General")
})

//snapshot testing
it("matches snapshot", () =>{

    const tree = renderer.create(<News data={data} />).toJSON()

    expect(tree).toMatchSnapshot()
})





