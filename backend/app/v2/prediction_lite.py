#!/usr/bin/python3
"""prediction through tensoflow lite"""

import tflite_runtime.interpreter as tflite
import numpy as np
from PIL import Image
from typing import Dict

prediction_classes = ['Anthracnose', 'Bacterial Canker', 'Cutting Weevil',
                       'Die Back', 'Gall Midge', 'Healthy', 'Powdery Mildew',
                       'Sooty Mould']


class Prediction_Lite():
    """mango disease prediction lite"""

    def __init__(self) -> None:
        """initialize object"""
        
        # load the model
        self.model = tflite.Interpreter('app/v1/model_Dense169.tflite')
        self.model.allocate_tensors()

        # get input and output details for inference
        self.input = self.model.get_input_details()
        self.output = self.model.get_output_details()
    
    def preprocessing(self, image: Image.Image) -> np.ndarray:
        """preprocess image for inferencing"""

        # resize image
        image = image.resize((224, 224), Image.Resampling.BILINEAR)

        # convert image to Numpy array
        image_array = np.array(image)

        # normalize pixel values to range between 0 and 1
        img_array = image_array / 255.0

        # convert to Float 32 for Tensorflow Lite
        img_array = img_array.astype(np.float32)

        # reshape image, add batch dimension
        img_array = np.expand_dims(img_array, axis=0)

        return img_array
    
    def predict(self, image: np.ndarray) -> Dict:
        """perform inferencing (prediction)"""

        # set input tensor for the interpreter
        self.model.set_tensor(self.input[0]['index'], image)

        # make inference / predict
        self.model.invoke()

        # get the model output
        output_data = self.model.get_tensor(self.output[0]['index'])

        # get predicted class and score
        predicted_name = np.argmax(output_data[0])
        confidence = round(float(np.max(output_data[0])), 2)
        confidence *= 100

        predicted_name = prediction_classes[int(predicted_name)]

        return {"prediction": predicted_name, "confidence": confidence}
