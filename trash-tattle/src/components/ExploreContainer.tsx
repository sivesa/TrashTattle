import React from 'react';
import './ExploreContainer.css';
import { IonButton, IonIcon } from '@ionic/react';
import { camera } from 'ionicons/icons';
import CameraButton from './CameraButton';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
const startCamera = async () => {
try {
const stream = await navigator.mediaDevices.getUserMedia({ video: true });
console.log('Camera started:', stream);
} catch (error) {
console.error('Error starting camera:', error.message);
alert('Unable to access the camera. Please check permissions.');
}
};
  


return (
<div className="container">

<div style={{ marginTop: '16px' }}>
<IonButton onClick={startCamera}>
  <IonIcon slot="start" icon={camera} />
  Start Camera
</IonButton>
</div>
<strong>{name}</strong>
{/* Camera Button */}
{/*<CameraButton />*/}
<p>
Explore{' '}
<a
  target="_blank"
  rel="noopener noreferrer"
  href="https://ionicframework.com/docs/components"
>
  UI Components
</a>
</p>
</div>
);
};

export default ExploreContainer;

