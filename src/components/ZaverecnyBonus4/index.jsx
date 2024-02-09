import React from 'react'

// Zadání: Pomocí dvou stavových proměnných s výchozí hodnotou 0, které se budou měnit podle vstupních políček, vypiš do `<output></output>` jejich součet.

export const ZaverecnyBonus4 = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  return (
    <>
      <input type="number" defaultValue="0" value={x} onChange={event => setX(event.target.valueAsNumber)} /> +{' '}
      <input type="number" defaultValue="0" value={y} onChange={event => setY(event.target.valueAsNumber)} /> ={' '}
      <output>{x+y}</output>
    </>
  )
}
