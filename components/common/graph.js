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
  };
  const canvasEl = useRef(null);
  const xData = ['Abr', 'May', 'Jun', 'Agos', 'Sep', 'Oct', 'Nov'];
  const unavailable = [5, 9, 10, 9, 18, 19, 20];
  const availableForExisting = [16, 13, 25, 33, 40, 33, 45];
  useEffect(() => {
    const chart = new Chart(canvasEl.current, {
      type: 'line',
      data: {
        labels: xData,
        datasets: [
          {
            label: "Confirmados",
            fill: true,
            backgroundColor: colors.purple.fill,
            pointBackgroundColor: colors.purple.stroke,
            borderColor: colors.purple.stroke,
            borderCapStyle: 'butt',
            data: unavailable,
          },
          {
            label: "Sospechosos",
            fill: true,
            backgroundColor: colors.green.fill,
            pointBackgroundColor: colors.green.stroke,
            borderColor: colors.green.stroke,
            pointHighlightStroke: colors.green.stroke,
            borderCapStyle: 'butt',
            data: availableForExisting,
          }
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