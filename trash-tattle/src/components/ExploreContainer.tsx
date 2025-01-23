import React, { useRef, useState } from 'react';
import './ExploreContainer.css';
import { IonButton, IonIcon } from '@ionic/react';
import { camera } from 'ionicons/icons';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isCameraActive, setIsCameraActive] = useState(false);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setIsCameraActive(true);
      }
    } catch (error) {
      console.error('Error starting camera:', error.message);
      alert('Unable to access the camera. Please check permissions.');
    }
  };

  const takePicture = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        canvasRef.current.width = videoRef.current.videoWidth;
        canvasRef.current.height = videoRef.current.videoHeight;
        context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
      }
    }
  };

  return (
    <div className="container">
      <div style={{ marginTop: '10px' }}>
        {!isCameraActive ? (
          <IonButton onClick={startCamera}>
            <IonIcon slot="start" icon={camera} />
            Start Camera
          </IonButton>
        ) : (
          <div style={{ position: 'relative', width: '100%', textAlign: 'center' }}>
            {/* Video Feed */}
            <video
              ref={videoRef}
              style={{
                width: 'calc(100% - 32px)', // Adds left and right margin
                maxHeight: '300px',
                marginTop: '16px',
                marginLeft: '16px',
                marginRight: '16px',
                borderRadius: '8px',
                backgroundColor: '#000',
              }}
            />
            {/* Round Button */}
            <button
              onClick={takePicture}
              style={{
                position: 'absolute',
                bottom: '-30px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '60px',
                backgroundColor: '#007aff',
                border: 'none',
                borderRadius: '50%',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <IonIcon icon={camera} style={{ fontSize: '24px' }} />
            </button>
          </div>
        )}
      </div>
      <canvas
        ref={canvasRef}
        style={{
          width: 'calc(100% - 32px)', // Adds left and right margin
          maxHeight: '300px',
          marginTop: '40px',
          marginLeft: '16px',
          marginRight: '16px',
          border: '1px solid #ccc',
          borderRadius: '8px',
        }}
      ></canvas>
    </div>
  );
};

export default ExploreContainer;

