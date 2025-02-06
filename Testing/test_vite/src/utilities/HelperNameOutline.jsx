import { useContext } from 'react';
import { NameContext } from './HelperName.jsx';



export default function Section({ children }) {
  const name = useContext(NameContext);
  return (
    <section className="section">
      <NameContext.Provider value={name + 1}>
        {children}
      </NameContext.Provider>
    </section>
  );
}