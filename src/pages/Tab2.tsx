import {
  IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonText, IonIcon, IonChip, IonAvatar, IonLabel, IonButton, IonButtons, IonBackButton, IonCol
} from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import './Tab2.css';
import { fastFood, flame, imageOutline, paw, star, starHalfOutline, tv, wifi } from 'ionicons/icons';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router';

interface LocationState {
  room?: any; // Define the room property with type 'any'
}

const Tab2: React.FC = () => {
  const history = useHistory();

  const handleNavigate = (room: any) => {
    history.push('/room/' + room.RoomNo + '/review', { room }); // Navigate to the next page with selected room details
  }
  const location = useLocation<LocationState>(); // Specify the type of the location state
  const room = location.state?.room; // Access the room details passed as props

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Room Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      {room && (
        <IonContent fullscreen>
          <IonGrid>
            <IonRow>
              <Swiper modules={[Autoplay]}
                autoplay={true}
                effect='fade'
              >
                {room.RoomImages.map((img: string | undefined) => (
                  <SwiperSlide>
                  <div className='slider'>
                    <IonImg src={img} />
                  </div>
                </SwiperSlide>
                ))}
              </Swiper>
            </IonRow>
            <IonRow class="ion-justify-content-between ion-align-items-center">
              <IonCol size="6">
                <IonText color="white">
                  <h4>{room.RoomType} - €{room.RoomPrice}</h4>
                </IonText>
              </IonCol>
              <IonCol className='ion-text-end stars' size="6">
                <IonIcon icon={star} size='small'></IonIcon>
                <IonIcon icon={star} size='small'></IonIcon>
                <IonIcon icon={star} size='small'></IonIcon>
                <IonIcon icon={star} size='small'></IonIcon>
                <IonIcon icon={starHalfOutline} size='small'></IonIcon>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
              <IonChip>
                <IonIcon icon={wifi} size='small'></IonIcon>
                <IonLabel>Wifi</IonLabel>
              </IonChip>
              <IonChip>
                <IonIcon icon={paw} size='small'></IonIcon>
                <IonLabel>Pet Friendly</IonLabel>
              </IonChip>
              <IonChip>
                <IonIcon icon={fastFood} size='small'></IonIcon>
                <IonLabel>Breakfast</IonLabel>
              </IonChip>
              <IonChip>
                <IonIcon icon={flame} size='small'></IonIcon>
                <IonLabel>Heater</IonLabel>
              </IonChip>
              <IonChip>
                <IonIcon icon={tv} size='small'></IonIcon>
                <IonLabel>Tv</IonLabel>
              </IonChip>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonText color='white'>
                  {room.RoomDesc}
                </IonText>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
              <video controls width='100%'>
                <source src={room.RoomVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center ion-margin-top ion-margin-bottom">
              <IonButton className='ion-text-capitalize' size='small' onClick={() => handleNavigate(room)}>
                <IonIcon slot="start" icon={imageOutline} />
                Add Review
              </IonButton>
            </IonRow>
          </IonGrid>
        </IonContent>
      )}
    </IonPage>
  );
};

export default Tab2;
