// Review.tsx

import React from 'react';
import { IonItem, IonAvatar, IonLabel, IonText } from '@ionic/react';

interface ReviewProps {
  text: string;
  imageUrl?: string;
}

const Review: React.FC<ReviewProps> = ({ text, imageUrl }) => {
  return (
    <IonItem className="review-item">
      {imageUrl && <IonAvatar slot="start"><img src={imageUrl} alt="Reviewer" /></IonAvatar>}
      <IonText>{text}</IonText>
    </IonItem>
  );
};

export default Review;
