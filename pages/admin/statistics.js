// React and next imports
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Bar } from 'react-chartjs-2'

// Firebase and user auth
import useUser, { USER_STATES } from 'hooks/useUser'
import {
  queryUNWTOdelegates,
  queryUNICEFdelegates,
  queryONUmujeresDelegates,
  querySenadoDelegates,
  queryCorteDelegates,
} from 'firebase/client'

export default function statistics() {
  const user = useUser()
  const router = useRouter()

  const [numUNWTO, setNumUNWTO] = useState(null)
  const [numUNICEF, setNumUNICEF] = useState(null)
  const [numONUmujeres, setnumONUmujeres] = useState(null)
  const [numSENADO, setNumSENADO] = useState(null)
  const [numCORTE, setNumCORTE] = useState(null)

  useEffect(() => {
    user === USER_STATES.NOT_LOGGED && router.replace('/login')
  }, [user])

  useEffect(() => {
    if (user) {
      queryUNWTOdelegates().then(setNumUNWTO)
      queryUNICEFdelegates().then(setNumUNICEF)
      queryONUmujeresDelegates().then(setnumONUmujeres)
      querySenadoDelegates().then(setNumSENADO)
      queryCorteDelegates().then(setNumCORTE)
    }
  }, [user])

  return (
    <>
      <Bar
        data={{
          labels: [
            'UNWTO',
            'UNICEF',
            'ONU Mujeres',
            'Senado',
            'Corte Internacional',
          ],
          datasets: [
            {
              label: 'Delegados registrados',
              data: [numUNWTO, numUNICEF, numONUmujeres, numSENADO, numCORTE],
              backgroundColor: [
                '#496EA7',
                '#14bdfc',
                '#019DDC',
                '#266847',
                '#BE9439',
              ],
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </>
  )
}
