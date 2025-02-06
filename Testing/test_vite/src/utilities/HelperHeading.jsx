import { useContext } from 'react';
import { NameContext } from './HelperName.jsx';

const names = [
  "Sandy",
  "Rebecca",
  "Margo",
  "Allison",
  "Julia"
]

export default function Heading({ children }) {
  const name = useContext(NameContext);
  switch (name) {
    case 0:
      return <h6>{names[name]}: {children}</h1>;
    case 1:
      return <h1>{names[name]}: {children}</h1>;
    case 2:
      return <h2>{names[name]}: {children}</h2>;
    case 3:
      return <h3>{names[name]}: {children}</h3>;
    case 4:
      return <h4>{names[name]}: {children}</h4>;
    default:
      throw Error('Unknown name: ' + names[name]);
  }
}
