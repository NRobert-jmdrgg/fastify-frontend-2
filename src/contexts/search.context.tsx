import { createContext, useState, ReactNode } from 'react';

type SearchType = {
  open: boolean;
  setOpen: (b: boolean) => void;
};

export const SearchContext = createContext<SearchType>({
  open: false,
  setOpen: () => {},
});

interface Props {
  children?: ReactNode;
}

export const SearchProvider = ({ children }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <SearchContext.Provider value={{ open, setOpen }}>
      {children}
    </SearchContext.Provider>
  );
};
