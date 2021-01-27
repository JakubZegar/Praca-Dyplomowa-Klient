import React, {useState, useEffect} from 'react'
import {useTranslation} from 'react-i18next'
import { Stage, Layer, Image, Rect, Circle } from 'react-konva';
import useImage from 'use-image';
import {HeatmapContainer} from './HeatmapElements';

function Heatmap(apiKey, userDetails) {
    const [token, setToken] = useState("");
    const [t, i18n] = useTranslation();
    const [properties, setProperties] = useState({});
    const [heatmap, setHeatmap] = useState({});
    const [heatmapData, setHeatmapData] = useState([]);
    const [heatmapDataReady, setHeatmapDataReady] = useState(false);
    const [backgorundImage, setBackgroundImage] = useImage('https://i.imgur.com/ZekxZFr.png');

    useEffect(() => {
        setProperties(() => {return JSON.parse(localStorage.getItem('login'));})
    }, [])

    useEffect(() => {
        if (properties !== {} ) {
            getHeatmap(apiKey.apiKey);
        }
    }, [properties])

    useEffect(() => {
      
      if (heatmap.heatmapId !== undefined) {
        getHeatmapData(apiKey.apiKey);
      }
    }, [heatmap])

    useEffect(() => {
      if (heatmapData.length > 0) {
        setHeatmapDataReady(true);
      }
    }, [heatmapData])

    const getHeatmap = async (apiKey) => {
        fetch('http://127.0.0.1:8080/api/heatmap/get', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + properties.token
            },
            body: apiKey,
          })
            .then(response => response.json())
            .then(responseData => {
              setHeatmap(() => {return responseData;})

            })
            .catch(err => {
              console.log('error : ' + err);
            });    
    }

    const getHeatmapData = async (apiKey) => {
        fetch('http://127.0.0.1:8080/api/heatmapData/get', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + properties.token
            },
            body: apiKey,
          })
            .then(response => response.json())
            .then(responseData => {
              setHeatmapData(() => {return responseData;})
            })
            .catch(err => {
              console.log('error : ' + err);
            });    
    }

    return (
      <>
        {
          heatmapDataReady === true ? 
          <HeatmapContainer>
            <Stage width={1360} height={620}>
              <Layer>
              <Rect width={1360} height={620} fillPatternImage={backgorundImage} fillPatternScale={{x:0.7,y:0.7}}></Rect>

                {
                  heatmapData.map((data) => 
                    <Circle x={parseInt(data.coordinateX)*0.9} y={parseInt(data.coordinateY)*0.9} fill="rgba(255,255,0,0.2)" radius={32} />
                  )
                }
              </Layer>
            </Stage>
          </HeatmapContainer> : <></>
        }
      </>
    )
}

export default Heatmap
