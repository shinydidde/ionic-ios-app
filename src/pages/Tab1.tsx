import { IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar, IonCol, IonGrid, IonRow, IonIcon, IonText,
  IonCard, IonCardContent, IonCardHeader, IonButton, IonCardTitle
 } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { bonfireOutline, homeOutline, sparklesOutline } from 'ionicons/icons';
import 'swiper/css';
import 'swiper/css/effect-fade';
import './Tab1.css';
import { useState } from 'react';
import { useHistory } from 'react-router';
import roomsData from '../rooms.json';

const Tab1: React.FC = () => {
  const history = useHistory();

  const handleNavigate = (room: any) => {
    history.push('/room/'+ room.RoomNo, {room}); // Navigate to the next page with selected room details
}
  const [items, setItems] = useState(roomsData);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle><IonIcon icon={bonfireOutline} size="small" color="white"></IonIcon> Horse Valley Resort</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
            <IonRow>
              <Swiper modules={[Autoplay, EffectFade]}
                autoplay = {true}
                effect='fade'
                >
                  <SwiperSlide>
                    <div className='slider'>
                      <IonImg src="https://luxuryescapes.com/inspiration/wp-content/uploads/2023/02/Mystical-Jungle-Pool.jpg"/>
                      <h1 className='caption' color='white'>Welcome to Horse Valley</h1>
                      <p>Resort</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='slider'>
                      <IonImg src="https://i.pinimg.com/originals/01/f5/06/01f50616b7f8cee4f515128e6423220b.gif"/>
                      <h1 className='caption' color='white'>Welcome to Horse Valley</h1>
                      <p>Join Us</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='slider'>
                      <IonImg src="https://i.pinimg.com/originals/18/de/e0/18dee0509bd07b020034bc8330c27e4e.gif"/>
                      <h1 className='caption' color='white'>Welcome to Horse Valley</h1>
                      <p>In Nature</p>
                    </div>
                  </SwiperSlide>
                </Swiper>
          </IonRow>
          </IonGrid>
          <IonText className='title'>
            <h1>Our Rooms</h1>
          </IonText>
          <IonGrid fixed={true}>
            <IonRow>
              {items.map(item => {
                return (
                  <IonCol size="12" key={item.RoomNo}>
                    <IonCard>
                      <img alt={item.RoomType} src={item.RoomImage} />
                      <IonCardHeader>
                        <IonCardTitle><span className='ion-float-left'>{item.RoomType}</span> <span className='ion-float-right'>€{item.RoomPrice}</span></IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent>
                        <p className='ion-text-left'>{item.RoomTitle}</p>
                        <IonButton onClick={()=>handleNavigate(item)} size='small' className='viewButton ion-margin-bottom ion-margin-top ion-text-capitalize'>View Details</IonButton>
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                )
              })}
            </IonRow>
          </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
