import Circle from "./Circle";
import Container from './Container';
import Gradient from './Gradient';

import chartUtil from '../util/chart';

import { useRef, useEffect, useState } from 'react';
import mqtt from 'mqtt';

export default function Main() {
    const riverRef = useRef(null);
    const tempRef = useRef(null);
    const humidityRef = useRef(null);
    const titleRef = useRef(null);

    function mqttClient() {
        return mqtt.connect(process.env.PUBLIC_MQTT_BROKER);
    }

    const [level, setLevel] = useState("0");
    const [temp, setTemp] = useState("0");
    const [humidity, setHumidity] = useState("0");
    const [warning, setWarning] = useState(false);
    const [title, setTitle] = useState("Monitore o rio em tempo real.");
    const [connected, setConnected] = useState(false);

    var client;

    if (!connected) {
        client = mqttClient();

        client.on('connect', function () {
            setConnected(true);
            console.log("connected")
            client.subscribe('level');
            client.subscribe('temperature');
            client.subscribe('humidity');
        });


        client.on('message', function (topic, message) {
            if (topic == 'level') {
                setLevel(message.toString());
                const date = new Date();

                setWarning(level < 70);
        
                if (charts != null) {
                    charts[0].config.data.labels.push(chartUtil.time(date));
                    charts[0].config.data.datasets[0].data.push(level);
                    charts[0].update();
                    chartUtil.move(charts[0]);
                }
            }

            if (topic == 'temperature') {
                setTemp(message.toString());
                const date = new Date();

                if (charts != null) {
                    charts[1].config.data.labels.push(chartUtil.time(date));
                    charts[1].config.data.datasets[0].data.push(temp);
                    charts[1].update();
                    chartUtil.move(charts[1]);
                }
            }

            if (topic == 'humidity') {
                setHumidity(message.toString());
                const date = new Date();

                if (charts != null) {
                    charts[2].config.data.labels.push(chartUtil.time(date));
                    charts[2].config.data.datasets[0].data.push(humidity);
                    charts[2].update();
                    chartUtil.move(charts[2]);
                }
            }
        });
    }

    const [charts, setCharts] = useState(null);

    useEffect(() => {
        const chartsOptions = [
            {
                ctx: riverRef.current,
                title: 'Nível',
                colors: ['rgb(37,150,203)', 'rgba(37,150,203,0.2)']
            },
            {
                ctx: tempRef.current,
                title: 'Temperatura',
                colors: ['rgb(199,182,34)', 'rgba(199,182,34,0.2)']
            },
            {
                ctx: humidityRef.current,
                title: 'Umidade',
                colors: ['rgb(37,201,136)', 'rgba(37,201,136,0.2)']
            }
        ];

        setCharts(chartUtil.initCharts(chartsOptions));
    }, [riverRef.current, tempRef.current, humidityRef.current]);


    // useEffect(() => {
    //     const date = new Date();

    //     setWarning(level < 70);

    //     if (charts != null) {
    //         charts[0].config.data.labels.push(chartUtil.time(date));
    //         charts[0].config.data.datasets[0].data.push(level);
    //         charts[0].update();
    //         chartUtil.move(charts[0]);
    //     }
    // }, [level]);

    // useEffect(() => {
    //     const date = new Date();

    //     if (charts != null) {
    //         charts[1].config.data.labels.push(chartUtil.time(date));
    //         charts[1].config.data.datasets[0].data.push(temp);
    //         charts[1].update();
    //         chartUtil.move(charts[1]);
    //     }
    // }, [temp]);

    // useEffect(() => {
    //     const date = new Date();

    //     if (charts != null) {
    //         charts[2].config.data.labels.push(chartUtil.time(date));
    //         charts[2].config.data.datasets[0].data.push(humidity);
    //         charts[2].update();
    //         chartUtil.move(charts[2]);
    //     }
    // }, [humidity]);

    return (
        <div>
            <hr className="hr_first" />
            <Container id="river" className="blacktext">
                <div className="col">
                    <h1 className="chart_title__level"> Nível do rio: {level} cm</h1>
                    <div className="chart">
                        <canvas ref={riverRef}></canvas>
                    </div>
                </div>

            </Container>

            <hr className="hr_level" />

            <Container id="temperature" className="blacktext">
                <div className="col">
                    <h1 className="chart_title__temperature"> Temperatura: {temp}°C</h1>
                    <div className="chart">
                        <canvas ref={tempRef}></canvas>
                    </div>
                </div>
            </Container>

            <hr className="hr_temperature" />

            <Container id="humidity" className="blacktext">
                <div className="col">
                    <h1 className="chart_title__humidity"> Umidade relativa: {humidity}%</h1>
                    <div className="chart">
                        <canvas ref={humidityRef}></canvas>
                    </div>
                </div>
            </Container>

        </div>
    );
}
