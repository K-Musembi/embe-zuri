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

        self.model = tf.keras.models.load_model(
            'app/v1/mango_disease_model_Dense169.keras')

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

    # @tf.function(reduce_retracing=True) - reduce number of tracings
    def predict(self, image: tf.Tensor) -> str:
        """predict image class using deep learning model"""

        predicted = self.model.predict(image)

        # convert Tensor (or NumPy) object to Python list
        # result is a list of probabilities / scores for each class
        #   results = predicted.tolist()

        # class_predictions = {}

        # for name, score in zip(mango_disease_names, results):
        #    class_predictions.update({name: score})

        # predicted is a NumPy array. Find index of largest probability
        index = np.argmax(predicted)

        # retrieve name corresponding to sub-folders / categories of data
        predicted_name = mango_disease_names[index]

        return predicted_name