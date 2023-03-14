import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useSelector } from 'react-redux';

const DarkDropDown = () => {

    const darkTheme = useSelector((state) => state.theme.darkTheme);
    const theme = darkTheme?'dark':'light';
  return (
    <>
      <DropdownButton
        id={`dropdown-button-dark-example2`}
        variant="secondary"
        menuVariant= {theme}
        title="Profile"
        className="m-2 "
      >
        <Dropdown.Item href="#/action-3">Change data</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-4">Log out</Dropdown.Item>
      </DropdownButton>
    </>
  );
}

export default DarkDropDown;