import './ContactUs.css';

import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
  IonIcon,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
} from '@ionic/react';
import { callOutline, copyOutline, locationOutline, mailOutline } from 'ionicons/icons';
import Review from './Review';
import reviewsData from '../reviews.json';
import { Toast } from '@capacitor/toast';
import { Clipboard } from '@capacitor/clipboard';

const ContactUsPage: React.FC = () => {

  const copyToClipboard = async (text: string) => {
    await Clipboard.write({ string: text }); // Write text to clipboard
  };

  const showToast = async () => {
    try {
      await Toast.show({
        text: 'Details submitted successfully!',
        position: 'bottom'
      });
    } catch (error) {
      console.error('Error showing toast:', error);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    const mailtoLink = `mailto:shinymrudula@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0D%0A%0D%0AReply to: ${encodeURIComponent(email)}`;
    window.open(mailtoLink);
    showToast();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contact Us</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonImg src="https://cdn.pixabay.com/animation/2023/09/08/17/58/17-58-17-314_512.gif" />

            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <h5>About Us</h5>
              <IonText>
                Horse Valley Resort is a luxurious retreat nestled amidst the serene landscaIonTextes of nature. With breathtaking views, comfortable accommodations, and world-class amenities, your stay at our resort will be an unforgettable experience.
              </IonText>
              <h5>Reviews</h5>
              <IonList lines="none" className="horizontal-list">
                {reviewsData.map((review, index) => (
                  <Review key={index} text={review.text} imageUrl={review.imageUrl} />
                ))}
              </IonList>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <h5>Address</h5>
              <IonList>
                <IonItem>
                  <IonLabel position="stacked">Location</IonLabel>
                  <IonText><IonIcon icon={locationOutline} /> Maredumilli Forest, Tulasipaka</IonText>
                </IonItem>
                <IonItem>
                  <IonLabel position="stacked">Email</IonLabel>
                  <IonText><IonIcon icon={mailOutline} /> horsevalleyresort@gmail.com</IonText>
                  <IonButton fill="clear" slot="end" onClick={() => copyToClipboard('horsevalleyresort@gmail.com')}>
                    <IonIcon icon={copyOutline}/>
                  </IonButton>
                </IonItem>
                <IonItem>
                  <IonLabel position="stacked">Mobile</IonLabel>
                  <IonText><IonIcon icon={callOutline} /> +353 999999999</IonText>
                  <IonButton fill="clear" slot="end" onClick={() => copyToClipboard('+353 999999999')}>
                    <IonIcon icon={copyOutline}/>
                  </IonButton>
                </IonItem>
              </IonList>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <h5>Contact Form</h5>
              <form onSubmit={handleSubmit}>
                <IonList>
                  <IonItem>
                    <IonLabel position="stacked">Your Name</IonLabel>
                    <IonInput type="text" required />
                  </IonItem>
                  <IonItem>
                    <IonLabel position="stacked">Your Email</IonLabel>
                    <IonInput type="email" required />
                  </IonItem>
                  <IonItem>
                    <IonLabel position="stacked">Message</IonLabel>
                    <IonTextarea rows={5} required />
                  </IonItem>
                </IonList>
                <IonRow className='ion-justify-content-center'>
                  <IonButton size='small' className='ion-margin-bottom ion-margin-top ion-text-capitalize' type="submit">
                    <IonIcon slot="start" icon={mailOutline} />
                    Send Message
                  </IonButton>
                </IonRow>
              </form>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ContactUsPage;
