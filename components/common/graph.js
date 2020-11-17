import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js'
import styled from 'styled-components'

const Canvas = styled.canvas`
  margin-top: 40px;
  width: 100%;
  max-width: 750px;
  height: auto;
  margin: auto;
`

function Graph(props) {
  const colors = {
    green: {
      fill: '#e0eadf',
      stroke: '#5eb84d',
    },
    lightBlue: {
      stroke: '#6fccdd',
    },
    darkBlue: {
      fill: '#92bed2',
      stroke: '#3282bf',
    },
    purple: {
      fill: '#8fa8c8',
      stroke: '#75539e',
    },
    red: {
      fill: '#de9797',
      stroke: '#ED4B4B',
    }
  };
  const canvasEl = useRef(null)
  const xData = ['May', 'Jun', 'Jul', 'Agos', 'Sep', 'Oct', 'Nov']
  const confirmadosDataSet = [100, 220, 250, 200, 150, 120, 80]
  const recuperadosDataSet = [60, 150, , 187, 180, 110, 78]
  const defuncionesDataSet = [10, 23, 14, 23, 10, 6, 2]
  useEffect(() => {
    new Chart(canvasEl.current, {
      type: 'line',
      data: {
        labels: xData,
        datasets: [
          {
            label: "Defunciones",
            fill: true,
            backgroundColor: colors.red.fill,
            pointBackgroundColor: colors.red.stroke,
            borderColor: colors.red.stroke,
            pointHighlightStroke: colors.red.stroke,
            borderCapStyle: 'square',
            data: defuncionesDataSet,
          },
          {
            label: "Recuperados",
            fill: true,
            backgroundColor: colors.green.fill,
            pointBackgroundColor: colors.green.stroke,
            borderColor: colors.green.stroke,
            pointHighlightStroke: colors.green.stroke,
            borderCapStyle: 'butt',
            data: recuperadosDataSet,
          },
          {
            label: "Confirmados",
            fill: true,
            backgroundColor: colors.purple.fill,
            pointBackgroundColor: colors.purple.stroke,
            borderColor: colors.purple.stroke,
            borderCapStyle: 'butt',
            data: confirmadosDataSet,
          },
        ]
      },
      options: {
        responsive: true,
        scales: {
          yAxes: [{ stacked: true }],
        },
        animation: {
          duration: 750
        }
      }

    }) 
  })
  return <Canvas ref={canvasEl} />
}

export default Graph