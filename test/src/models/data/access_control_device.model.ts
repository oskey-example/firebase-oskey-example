//
// firebase-oskey-example
// Copyright (c) 2021-2023, OSkey SAS. MIT License.
//

export type OSKTAccessControlDevice = {
    id: string;
    data: {
        // apiServerConfig?: {
        //     hostname: string;
        //     port: number;
        // };
        makerAppName: string;
        makerDeviceName: string;
        makerDeviceUuid: string;
        makerDeviceUuidShort: string;
        makerName: string;
        // mqttConfig?: {
        //     provider: 'Mosquitto';
        //     hostname: string;
        //     port: number;
        //     protocol: string;
        // };
        manufacturingDate: Date;
        features: {
            secureBle: '2022-01' | 'none';
            iotEndpoint: 'node-iot-api' | 'none';
        };
    };
    keys?: {
        privateKey256: string;
    };
};
