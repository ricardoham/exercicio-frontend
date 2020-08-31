import React, { createContext, useState } from 'react';
import SnackBar, { SnackBarProps } from 'components/SnackBar';
import { createPortal } from 'react-dom';

interface SnackBarContext {
  insert: (text: string) => void;
}

interface PropsProvider {
  children?: JSX.Element;
}

const CreationContext = createContext({} as SnackBarContext);

const SnackBarProvider = ({ children }: PropsProvider) => {
  const [snacks, setSnacks] = useState<Array<{ randomId: string; text: string }>>([]);

  const insert = (text: string) => {
    const randomId = Math.random().toString(36).substring(7);

    setSnacks([...snacks, { randomId, text }]);
  };

  return (
    <CreationContext.Provider value={{ insert }}>
      <>{children}</>
      {createPortal(
        <>
          {snacks.map((item: SnackBarProps) => (
            <SnackBar
              key={item.randomId}
              text={item.text}
              remove={() => setSnacks(snacks.slice(1))}
            />
          ))}
        </>,
        document.body,
      )}
    </CreationContext.Provider>
  );
};

export { CreationContext, SnackBarProvider };
