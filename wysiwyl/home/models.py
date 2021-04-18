from django.db import models

from wagtail.core.models import Page
from wagtail.core.fields import RichTextField, StreamField
from wagtail.admin.edit_handlers import StreamFieldPanel
from wagtail.api import APIField

from ml import blocks as custom_blocks
from wysiwyl.serializers import StreamFieldGraphsSerializer 


class HomePage(Page):
    content = StreamField([
        ("box_plot_chart_block", custom_blocks.BoxPlotChartBlock()),
        ("doughnut_chart_block", custom_blocks.DoughnutChartBlock()),
        ("scatter_plot_chart_block", custom_blocks.ScatterPlotChartBlock()),
        ("bar_chart_block", custom_blocks.BarChartBlock()),
        ("roc_curve_chart_block", custom_blocks.ROCCurveChartBlock()),
        ("validation_curve_chart_block", custom_blocks.ValidationCurveChartBlock())
        ],
        null=True, blank=True)

    content_panels = Page.content_panels + [
            StreamFieldPanel("content")
            ]

    api_fields = [
            APIField("content", serializer=StreamFieldGraphsSerializer()),
            ]
