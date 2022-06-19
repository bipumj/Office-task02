import React from 'react';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';

const MenuItems = () => {
    return (
        <div className='container d-flex text-center'>
            <DropdownButton id="dropdown-item-button" variant="outline-dark" className='ms-2 fw-bold' title="Worldwide">
                <Dropdown.Item as="button">Middle East</Dropdown.Item>
                <Dropdown.Item as="button">Asia</Dropdown.Item>
                <Dropdown.Item as="button">Bangladesh</Dropdown.Item>
                <Dropdown.Item as="button">China</Dropdown.Item>
                <Dropdown.Item as="button">Europe</Dropdown.Item>
                <Dropdown.Item as="button">America</Dropdown.Item>
                <Dropdown.Item as="button">United kingdom</Dropdown.Item>
                <Dropdown.Item as="button">Africa</Dropdown.Item>
            </DropdownButton>
            <DropdownButton id="dropdown-item-button" variant="outline-dark" className='ms-2' title="Politics">
                <Dropdown.Item as="button">Asia Politics</Dropdown.Item>
                <Dropdown.Item as="button">Middle East Politics</Dropdown.Item>
                <Dropdown.Item as="button">Europe Politics</Dropdown.Item>
                <Dropdown.Item as="button">Geo Politics</Dropdown.Item>
            </DropdownButton>
            <DropdownButton id="dropdown-item-button" variant="outline-dark" className='ms-2' title="Economics">
                <Dropdown.Item as="button">U.S Markets</Dropdown.Item>
                <Dropdown.Item as="button">Asia Markets</Dropdown.Item>
                <Dropdown.Item as="button">Europe Markets</Dropdown.Item>
                <Dropdown.Item as="button">World Markets</Dropdown.Item>
                <Dropdown.Item as="button">Cryptocurrency</Dropdown.Item>
                <Dropdown.Item as="button">Economics</Dropdown.Item>
            </DropdownButton>
            <DropdownButton id="dropdown-item-button" variant="outline-dark" className='ms-2' title="Health">
                <Dropdown.Item as="button">Pharmaceuticals</Dropdown.Item>
                <Dropdown.Item as="button">Covid</Dropdown.Item>
                <Dropdown.Item as="button">Research</Dropdown.Item>
                <Dropdown.Item as="button">Skin Care</Dropdown.Item>
            </DropdownButton>
            <DropdownButton id="dropdown-item-button" variant="outline-dark" className='ms-2' title="Climate Change">
                <Dropdown.Item as="button">Energy</Dropdown.Item>
                <Dropdown.Item as="button">Solar</Dropdown.Item>
                <Dropdown.Item as="button">Environment</Dropdown.Item>
            </DropdownButton>
            <DropdownButton id="dropdown-item-button" variant="outline-dark" className='ms-2' title="Sports">
                <Dropdown.Item as="button">Cricket</Dropdown.Item>
                <Dropdown.Item as="button">Football</Dropdown.Item>
                <Dropdown.Item as="button">Tennis</Dropdown.Item>
                <Dropdown.Item as="button">Olympics</Dropdown.Item>
            </DropdownButton>
            <DropdownButton id="dropdown-item-button" variant="outline-dark" className='ms-2' title="Travel">
                {/* <Button variant="outline-dark" className='ms-2 mt-0'>Travel</Button> */}
            </DropdownButton>
            <DropdownButton id="dropdown-item-button" variant="outline-dark" className='ms-2' title="Exclusive">
                <Dropdown.Item as="button">Misinformation</Dropdown.Item>
                <Dropdown.Item as="button">Investigation</Dropdown.Item>
            </DropdownButton>
            <DropdownButton id="dropdown-item-button" variant="outline-dark" className='ms-2' title="Technology">
                <Dropdown.Item as="button">Ai Generator Content</Dropdown.Item>
                <Dropdown.Item as="button">Investigation</Dropdown.Item>
            </DropdownButton>
            <DropdownButton id="dropdown-item-button" variant="outline-dark" className='ms-2' title="Book Review">
                <Dropdown.Item as="button">Fiction</Dropdown.Item>
                <Dropdown.Item as="button">Thriller</Dropdown.Item>
                <Dropdown.Item as="button">Non-Fiction</Dropdown.Item>
            </DropdownButton>
            <DropdownButton id="dropdown-item-button" variant="outline-dark" className='ms-2' title="More">
                <Dropdown.Item as="button">Entertainment</Dropdown.Item>
                <Dropdown.Item as="button">Law</Dropdown.Item>
                <Dropdown.Item as="button">Life Style</Dropdown.Item>
                <Dropdown.Item as="button">Art and Literature</Dropdown.Item>
                <Dropdown.Item as="button">Agriculture</Dropdown.Item>
                <Dropdown.Item as="button">Interview</Dropdown.Item>
                <Dropdown.Item as="button">Open News</Dropdown.Item>
            </DropdownButton>
        </div>
    );
};

export default MenuItems;