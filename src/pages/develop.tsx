import React, { useState, useRef } from "react";
import "./css/develop.css";

const Develop = (): JSX.Element => {
    return (
        <div className="container">
            <div className="mt-3">カメラ接続テスト</div>
            <CameraDeviceTest />
        </div>
    );
};

const CameraDeviceTest = (): JSX.Element => {
    const [stream, setStream] = useState<MediaStream | null>(null);

    const refVideo = useRef<HTMLVideoElement | null>(null);
    const refCanvas = useRef<HTMLCanvasElement | null>(null);

    const constraints = {
        audio: false,
        video: {
            width: 360,
            height: 640,
            facingMode: "user", // front camera
            // facingMode: { exact: "environment" }, // rear camera
        },
    };

    const handleOpenCamera = () => {
        if (stream !== null) {
            stream.getVideoTracks().forEach((camera) => {
                camera.stop();
            });
        }

        const video = refVideo.current;
        if (!video) return;
        navigator.mediaDevices
            .getUserMedia(constraints)
            .then((stream) => {
                setStream(stream);
                video.srcObject = stream;
                video.onloadedmetadata = (e) => {
                    video.play();
                };
            })
            .catch((err) => {
                console.log(err.name + ": " + err.message);
            });
    };

    const handleCameraShooting = () => {
        const video = refVideo.current;
        const canvas = refCanvas.current;
        if (!canvas || !video) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    };

    return (
        <div className="test">
            <div className="d-flex flex-row mt-3">
                <div className="d-flex flex-column justify-content-center">
                    <video id="camera" width="360" height="640" ref={refVideo} className="border rounded"></video>
                    <button onClick={handleOpenCamera} className="btn btn-outline-dark camera mt-3">
                        カメラ起動
                    </button>
                </div>
                <div className="d-flex flex-column justify-content-center">
                    <canvas
                        id="picture"
                        width="360"
                        height="640"
                        ref={refCanvas}
                        className="border rounded ml-3"
                    ></canvas>
                    <button onClick={handleCameraShooting} className="btn btn-outline-dark camera mt-3">
                        カメラ撮影
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Develop;
