import Hamburger from 'hamburger-react';
import { useContext } from 'react';
import { AllContext } from '../AllProvider/AllProvider';

const MobileMenu = () => {
  const { isOpen, setOpen } = useContext(AllContext);

  return (
    <div>
      <Hamburger toggled={isOpen} toggle={setOpen} />
    </div>
  );
};

export default MobileMenu;
