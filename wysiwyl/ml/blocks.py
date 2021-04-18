from django.db import models
from django import forms

from wagtail.core import blocks
from wagtailmodelchooser.blocks import ModelChooserBlock

from .models import MLProject


class BaseChartBlock(blocks.StructBlock):
    title = blocks.CharBlock(max_length=200)
    ml_project = ModelChooserBlock("ml.MLProject")
    

class BoxPlotChartBlock(BaseChartBlock):
    pass


class DoughnutChartBlock(BaseChartBlock):
    pass


class ScatterPlotChartBlock(BaseChartBlock):
    pass


class BarChartBlock(BaseChartBlock):
    pass


class LineChartBlock(BaseChartBlock):
    pass


class ROCCurveChartBlock(BaseChartBlock):
    pass


class ValidationCurveChartBlock(BaseChartBlock):
    pass
