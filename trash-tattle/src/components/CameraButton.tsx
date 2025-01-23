import React from 'react';
import { IonButton, IonIcon, IonContent, IonPage } from '@ionic/react';
import { camera } from 'ionicons/icons';

const CameraButton: React.FC = () => {
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      console.log('Camera started', stream);
    } catch (error) {
      console.error('Error starting camera:', error);
    }
  };

  return (
    <IonPage>
      <IonContent>
        <div style={{ position: 'absolute', top: '16px', right: '16px', zIndex: 10 }}>
          <IonButton onClick={startCamera}>
            <IonIcon slot="start" icon={camera} />
            Start Camera
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CameraButton;

