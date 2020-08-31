import { useContext } from 'react';
import { CreationContext } from 'contexts/snackContext';

const useSnackBar = () => useContext(CreationContext);

export default useSnackBar;
