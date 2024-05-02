import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonItem, IonPage, IonRow, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import { Toast } from '@capacitor/toast';
import { Camera, CameraResultType } from '@capacitor/camera';
import './Tab3.css';
import { useState } from 'react';
import { useLocation } from 'react-router';

interface LocationState {
  room?: any; // Define the room property with type 'any'
}

const Tab3: React.FC = () => {

  const location = useLocation<LocationState>(); // Specify the type of the location state
  const room = location.state?.room; // Access the room details passed as props

  const [photoUrl, setPhotoUrl] = useState<string | null>(null);

  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri
    });

    const imageUrl = image.webPath;
    if (imageUrl) {
      setPhotoUrl(imageUrl);
      showToast();
    }
  };

  const showToast = async () => {
    try {
      await Toast.show({
        text: 'Photo Added Successfully!',
        position: 'center'
      });
    } catch (error) {
      console.error('Error showing toast:', error);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref={room ? 'room/'+ room.RoomNo : '/' } />
          </IonButtons>
          <IonTitle>Add Review</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Add Review</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol className='ion-padding'>
              <IonTextarea label="Comment Here" labelPlacement="floating" placeholder="Enter text"></IonTextarea>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center">
            {photoUrl && <IonImg className='ion-margin-bottom' src={photoUrl} alt="Captured Image" />}
            <IonButton className='ion-margin-top ion-text-capitalize' size='small' onClick={takePicture}>
              Add photo
            </IonButton>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
