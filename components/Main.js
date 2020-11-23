import Circle from "./Circle";
import Container from './Container';
import Gradient from './Gradient';

import mqtt from 'mqtt';

function mqttClient() {
    return mqtt.connect(process.env.NEXT_PUBLIC_MQTT_BROKER);
}

function mqttSubscribe() {
    const client = mqttClient();

    client.on('connect', function () {
        client.subscribe('temperature');
    });

    client.on('message', function (topic, message) {
        console.log(topic, message.toString());
    });
}
export default function Main() {
    return (
        <div>
            <Gradient>
                <div className="col">
                    <h1 className="phrase tlt">
                        Monitore o rio em tempo real.
                    </h1>

                    <Container>
                        <Circle
                            className="circle--first"
                            href="#river"
                            id="value-nivel"
                            title="Nível do rio"
                            value_name="Nível do rio" >

                            <svg className="river" id="Layer_1" enable-background="new 0 0 496 496" height="24"
                                viewBox="0 0 496 496" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="m280.345 267.662c-1.248-5.005-3.826-9.668-7.882-14.257-5.852-6.622-5.228-16.733 1.394-22.585s16.732-5.229 22.585 1.394c7.436 8.414 12.466 17.735 14.952 27.706 2.513 10.077-5.11 19.875-15.536 19.875-7.174 0-13.7-4.859-15.513-12.133zm25.813-89.075c-14.607-8.109-31.163-17.302-31.158-23.586.001-1.788 1.916-17.974 66.847-42.011h138.153c8.837 0 16-7.163 16-16s-7.163-16-16-16c-5.499 0-455.144 0-464 0-8.837 0-16 7.163-16 16s7.163 16 16 16h151c-26.56 16.368-40.357 34.693-40.992 54.486-1.682 52.432 86.773 68.701 92.128 109.591 3.589 27.407-33.804 65.817-105.289 108.156-7.604 4.503-10.116 14.317-5.613 21.92s14.314 10.117 21.92 5.613c86.815-51.418 126.301-97.162 120.711-139.844-4.271-32.616-32.453-52.105-57.317-69.3-17.162-11.867-34.907-24.14-34.555-35.109.196-6.128 7.155-28.103 87.647-55.514h24.283c-18.16 13.119-26.913 26.924-26.923 41.988-.049 70.239 182.882 44.036 102.228 237.865-4.408 10.593 3.449 22.15 14.766 22.15 6.27 0 12.221-3.708 14.779-9.857 27.411-65.877 29.844-120.009 7.229-160.891-18.802-33.987-50.431-51.547-75.844-65.657zm23.988 116.197c-8.731-1.261-16.862 4.794-18.129 13.541-1.945 13.427-6.436 27.901-13.347 43.021-4.863 10.639 2.987 22.655 14.542 22.655 6.069 0 11.874-3.472 14.562-9.353 8.177-17.89 13.531-35.296 15.913-51.736 1.267-8.744-4.795-16.86-13.541-18.128zm-39.276 88.516c-12.886 2.784-17.001 18.18-8.181 27 10.59 10.59 28.657 2.033 27.23-12.88-.888-9.276-9.635-15.96-19.049-14.12zm-193.87-159.31c0-8.837-7.163-16-16-16h-51c-8.837 0-16 7.163-16 16s7.163 16 16 16h51c8.837 0 16-7.163 16-16zm60 69c0-8.837-7.163-16-16-16h-80c-8.837 0-16 7.163-16 16s7.163 16 16 16h80c8.837 0 16-7.163 16-16zm224-153c-8.837 0-16 7.163-16 16s7.163 16 16 16h67c8.837 0 16-7.163 16-16s-7.163-16-16-16zm99 83h-34c-8.837 0-16 7.163-16 16s7.163 16 16 16h34c8.837 0 16-7.163 16-16s-7.163-16-16-16zm-30 84h-12c-8.837 0-16 7.163-16 16s7.163 16 16 16h12c8.837 0 16-7.163 16-16s-7.163-16-16-16z" />
                            </svg>
                        </Circle>

                        <Circle
                            className="circle--second"
                            href="#river"
                            id="value-nivel"
                            title="Nível do rio"
                            value_name="Temperatura">

                            <svg className="ph" viewBox="-25 0 512 512.00004" xmlns="http://www.w3.org/2000/svg" height="24"
                                width="24">
                                <path
                                    d="m107.621094 388.816406h-21.886719c-4.980469 0-8.882813 3.398438-8.882813 7.722656v67.246094c0 10.449219 22 10.441406 22 0v-20.09375h7.710938c31.195312 0 28.648438-27.503906 28.761719-27.804687 0-17.199219-10.101563-27.070313-27.703125-27.070313zm-1.058594 36.6875h-7.710938v-16.804687c7.378907.457031 14.464844-2.328125 14.464844 7.820312-.191406.484375 1.316406 8.984375-6.753906 8.984375zm0 0" />
                                <path
                                    d="m182.78125 396.539062v23.148438h-15.539062v-23.148438c0-10.347656-21.996094-10.359374-21.996094 0v67.246094c0 10.449219 21.996094 10.441406 21.996094 0v-25.902344h15.539062v25.902344c0 10.449219 21.996094 10.441406 21.996094 0v-67.246094c0-10.347656-21.996094-10.359374-21.996094 0zm0 0" />
                                <path
                                    d="m239.640625 211.230469c-.042969-2.21875.210937-7.71875-.675781-15.125-5.71875-49.09375-47.554688-87.316407-98.15625-87.316407-50.597656 0-92.4375 38.222657-98.152344 87.316407-.886719 7.378906-.628906 12.757812-.675781 15.125 0 8.355469 6.773437 15.121093 15.121093 15.121093h167.414063c8.347656 0 15.125-6.765624 15.125-15.121093zm-67.910156-56.953125c-7.351563-3.980469-16.523438-1.257813-20.507813 6.082031l-19.40625 35.746094h-58.625c5.484375-32.359375 33.722656-57.070313 67.617188-57.070313 33.894531 0 62.132812 24.710938 67.617187 57.070313h-42.199219l11.574219-21.320313c3.992188-7.339844 1.269531-16.523437-6.070312-20.507812zm0 0" />
                                <path
                                    d="m86.289062 237.359375c-25.335937 0-45.953124 20.609375-45.953124 45.945313 0 25.332031 20.617187 45.949218 45.953124 45.949218 25.335938 0 45.941407-20.617187 45.941407-45.949218 0-25.335938-20.605469-45.945313-45.941407-45.945313zm0 61.652344c-8.660156 0-15.707031-7.046875-15.707031-15.707031 0-8.652344 7.046875-15.699219 15.707031-15.699219 8.648438 0 15.695313 7.046875 15.695313 15.699219 0 8.660156-7.046875 15.707031-15.695313 15.707031zm0 0" />
                                <path
                                    d="m195.339844 237.359375c-25.332032 0-45.949219 20.609375-45.949219 45.945313 0 25.332031 20.617187 45.949218 45.949219 45.949218 25.328125 0 45.941406-20.617187 45.941406-45.949218 0-25.335938-20.613281-45.945313-45.941406-45.945313zm0 61.652344c-8.660156 0-15.707032-7.046875-15.707032-15.707031 0-8.652344 7.046876-15.699219 15.707032-15.699219 8.652344 0 15.699218 7.046875 15.699218 15.699219 0 8.660156-7.046874 15.707031-15.699218 15.707031zm0 0" />
                                <path
                                    d="m412.832031 85.792969h-13.226562v-39.839844c0-25.335937-20.609375-45.953125-45.941407-45.953125h-177.597656c-25.335937 0-45.941406 20.617188-45.941406 45.953125v14.234375h-91.460938c-21.324218 0-38.664062 17.339844-38.664062 38.664062v371.484376c0 21.324218 17.339844 38.664062 38.664062 38.664062h204.292969c21.320313 0 38.671875-17.339844 38.671875-38.664062 0-15.964844 0-355.597657 0-371.484376 0-21.324218-17.351562-38.664062-38.671875-38.664062h-82.589843v-14.234375c0-8.660156 7.039062-15.707031 15.699218-15.707031h177.597656c8.660157 0 15.695313 7.046875 15.695313 15.707031v39.839844h-8.539063c-26.714843 0-48.441406 21.738281-48.441406 48.445312v101.488281c0 13.914063 7.832032 26.042969 19.316406 32.191407v144.601562c0 24.234375 16.199219 44.761719 38.351563 51.292969v33.066406c0 8.351563 6.769531 15.121094 15.121094 15.121094 8.351562 0 15.125-6.769531 15.125-15.121094v-33.066406c22.148437-6.53125 38.355469-27.058594 38.355469-51.292969v-143.039062c13.269531-5.464844 22.625-18.539063 22.625-33.753907v-101.488281c0-26.707031-21.726563-48.445312-48.441407-48.445312zm-161.449219 13.058593v246.535157h-221.136718c0-9.957031 0-236.59375 0-246.535157 0-4.640624 3.769531-8.417968 8.417968-8.417968h204.292969c4.648438 0 8.425781 3.777344 8.425781 8.417968zm-8.425781 379.902344h-204.292969c-4.648437 0-8.417968-3.78125-8.417968-8.417968v-94.707032h221.136718v94.707032c0 4.636718-3.777343 8.417968-8.425781 8.417968zm99.667969-344.515625c0-10.03125 8.164062-18.199219 18.195312-18.199219h52.011719c10.039063 0 18.195313 8.167969 18.195313 18.199219v101.488281c0 3.449219-2.800782 6.25-6.25 6.25-28.675782 0-48.273438 0-75.902344 0-3.449219 0-6.25-2.800781-6.25-6.25 0-12.558593 0-90.53125 0-101.488281zm42.542969 301.519531c-12.804688 0-23.226563-10.425781-23.226563-23.238281v-140.296875h46.464844v140.296875c0 12.8125-10.425781 23.238281-23.238281 23.238281zm0 0" />
                            </svg>
                        </Circle>

                        <Circle
                            className="circle--third"
                            href="#river"
                            id="value-nivel"
                            title="Umidade"
                            value_name="Umidade relativa">

                            <svg className="water" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 16c2.947 0 5.333-2.365 5.333-5.284 0-2.917-2.087-5.918-5.333-10.716-3.246 4.798-5.332 7.799-5.332 10.716 0 2.919 2.385 5.284 5.332 5.284zm-.018-12.587c.311.484.685 1.325.685 2.213 0 2.606-2.667 3.033-2.667 1.447 0-1.088 1.326-2.696 1.982-3.66zm.018 16.587c-2.367 0-5.711-.614-7.285-2.356.473-.294 1.15-.61 2.021-.889.923.589 2.702 1.245 5.264 1.245s4.341-.656 5.265-1.245c.87.278 1.548.595 2.022.889-1.574 1.742-4.92 2.356-7.287 2.356zm11.997-2c0 3.313-5.37 6-11.997 6-6.625 0-11.997-2.687-11.997-6l.003-.126c.043-1.009.615-1.921 1.505-2.398s1.965-.448 2.829.074l.023.014c-1.513.763-2.361 1.678-2.361 2.436 0 1.631 3.895 4 9.998 4s9.998-2.369 9.998-4c0-.757-.847-1.671-2.358-2.436l.021-.012c.877-.529 1.969-.548 2.864-.052s1.458 1.434 1.472 2.458v.042zm-4.999-4.031c1.453-1.406 3.064-.182 4.402-1.477.418-.403.603-.902.603-1.384 0-1.279-1.481-2.261-3.021-1.436-1.234.661-1.921 2.349-1.984 4.297zm.178-5.067c.63-1.037 1.749-.57 2.329-1.524.688-1.133-.729-2.29-1.829-1.269-.615.57-.76 1.654-.5 2.793zm-16.153.77c-1.539-.825-3.021.157-3.021 1.436 0 .482.185.98.602 1.384 1.338 1.295 2.95.071 4.402 1.477-.062-1.948-.748-3.636-1.983-4.297zm1.307-3.563c-1.1-1.021-2.518.136-1.83 1.269.58.954 1.699.487 2.33 1.524.259-1.139.115-2.223-.5-2.793z" />
                            </svg>
                        </Circle>
                    </Container>
                </div>
            </Gradient>

            {mqttSubscribe()}
        </div>
    );
}
