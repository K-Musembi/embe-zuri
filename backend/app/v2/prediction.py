#!/usr/bin/python3
"""image prediction module"""

import tensorflow as tf
import numpy as np
from typing import BinaryIO, List
# import werkzeug

mango_disease_names = ['Anthracnose', 'Bacterial Canker', 'Cutting Weevil',
                       'Die Back', 'Gall Midge', 'Healthy', 'Powdery Mildew',
                       'Sooty Mould']


class Prediction():
    """predict leaf image status"""

    # load model once to prevent retracing
    def __init__(self) -> None:
        """initialize and load model"""

        '''self.is_mango_model = tf.keras.models.load_model(
            './static/mango_leaf_or_not.keras')'''
        self.prediction_model = tf.keras.models.load_model(
            './static/mango_disease_model_Dense169.keras')

    def img_to_tensor(self, image: BinaryIO) -> tf.Tensor:
        """convert image to Tensor object"""

        img = tf.keras.preprocessing.image.load_img(image)

        # convert image from PIL format to NumPy array for resizing
        img_array = tf.keras.preprocessing.image.img_to_array(img)

        # convert to a tensor for model predictions
        img_tensor = tf.convert_to_tensor(img_array, dtype=tf.float32)

        return img_tensor

    def preprocessing(self, image: tf.Tensor) -> tf.Tensor:
        """resize and normalize image"""

        # resize as required by the base model i.e ResNet50V2 or DenseNet
        resized_image = tf.image.resize(image, [224, 224])

        # reshape the data as required. NB: reshape after resizing
        reshaped_image = tf.reshape(resized_image, (1, 224, 224, 3))

        # normalize (rescale pixel values to between 0 and 1)
        normalized_image = reshaped_image / 255.0

        return normalized_image

    '''def is_mangoleaf(self, image: tf.Tensor) -> bool:
        """confirm if uploaded image is a mango leaf"""

        mango_leaf_prediction = self.is_mango_model.predict(image)

        # result is a Numpy array
        probability = mango_leaf_prediction[0][0]

        return probability'''
    
    def predict(self, image: tf.Tensor) -> str:
        """predict image class using deep learning model"""

        predicted = self.prediction_model.predict(image)

        # predicted is a NumPy array. Find index of largest probability
        index = np.argmax(predicted)
        confidence = round(np.max(predicted), 2)
        confidence *= 100
        # retrieve name corresponding to sub-folders / categories of data
        predicted_name = mango_disease_names[index]

        return {"prediction": predicted_name, "confidence": confidence}
