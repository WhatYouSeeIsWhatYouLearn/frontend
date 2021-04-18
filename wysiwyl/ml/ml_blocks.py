from django.db import models
from django.core.exceptions import ValidationError
from django.forms.utils import ErrorList

from wagtail.core import blocks

# preprocessing
import pandas as pd
from sklearn.impute import KNNImputer

# model training
from tpot import TPOTClassifier


# class DataChooserBlock(blocks.StructBlock):
#     data = models.ForeignKey(
#             "wagtaildocs.Document",
#             null=True,
#             on_delete=models.SET_NULL,
#             related_name="mltraindata",
#             )

#     def clean(self, value):
#         result = super().clean(value)
#         errors = {}

#         # tries to load the data
#         try:
#             data_df = pd.read_csv(value["data"])
#         except:
#             raise ValidationError("Data was unable to be loaded by pd.read_csv")




class BaseMLBlock(blocks.StructBlock):
    _for_categorical_data = True
    _for_numeric_data = True


# preprocessing
class KNNImputerBlock(BaseMLBlock):
    """
    Block to use the k-nearest-neighbors to replace missing values with a value
    found by a euclidean distance algorithm
    """
    _for_categorical_data = False
    name = "knn_imputer"

    _object = KNNImputer
    n_neighbors = blocks.IntegerBlock(help_text="The number of neighbors to base the imputation on. Leave blank for sqrt(n)",
            required=False)

    class Meta:
        verbose_name = "K-Nearest-Neighbors Imputation"


# model training
class TPOTBaseBlock(BaseMLBlock):
    generations = blocks.IntegerBlock(default=5, min_value=0, help_text="The number of evolutionary generations")
    population_size = blocks.IntegerBlock(default=20, min_value=0, help_text="The number of algorithms in each generation")
    cv = blocks.IntegerBlock(label="Cross Validation Folds", default=5, min_value=0, help_text="The number of folds to split your data into when cross validating. For example, a fold of 5 will test against each 1/5 of the data")
    max_time_mins = blocks.IntegerBlock(label="Train time", min_value=0, help_text="The number of minutes to train the model for (blank for until complete)",
                                     required=False)
    verbosity = blocks.IntegerBlock(default=2)

class TPOTClassifierBlock(TPOTBaseBlock):
    _object = TPOTClassifier
    name = "tpot_classifier"
