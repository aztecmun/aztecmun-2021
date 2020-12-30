import { React, useState } from 'react'

export default function index() {
  const [section, setSection] = useState(undefined)

  return (
    <>
      <button onClick={() => setSection('Antecedentes')}>Antecedentes</button>
      <button onClick={() => setSection('Mision')}>Misión</button>
      <button onClick={() => setSection('Vision')}>Visión</button>

      <div>
        {(section === undefined || section === 'Antecedentes') && (
          <section>
            <h2>Antecedentes</h2>
            <p>Estos son los antecedentes, bla bla bla</p>
          </section>
        )}

        {section === 'Mision' && (
          <section>
            <h2>Misión</h2>
            <p>Nuestra misión es hacer que la Web App jale</p>
          </section>
        )}

        {section === 'Vision' && (
          <section>
            <h2>Visión</h2>
            <p>No se cuál sea nuestra visión jaja</p>
          </section>
        )}
      </div>
    </>
  )
}
