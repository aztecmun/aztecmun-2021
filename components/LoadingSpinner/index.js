import React from 'react'

export default function LoadingSpinner() {
  return (
    <>
      <div>
        <img src="/Img/AZTECMUNcarga.gif" width="200" alt="Cargando..." />
      </div>

      <style jsx>{`
        div {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </>
  )
}
