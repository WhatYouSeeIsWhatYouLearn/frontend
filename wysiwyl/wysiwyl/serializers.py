from rest_framework import serializers

from ml.models import MLProject


# serializer to convert from a graph reference to actual values
class StreamFieldGraphsSerializer(serializers.Serializer):
    ml_project = serializers.SerializerMethodField()

    class Meta:
        fields = ("ml_project")

    def get_ml_project(self, obj):
        # iterates over all graphs
        to_serialize = []
        for graph in obj:
            graph_vals = dict(graph.value)

            # gets the graph title and type
            graph_type = graph.block.name
            graph_title = graph_vals["title"]

            # gets the pk and fetched the object
            ml_project = graph_vals["ml_project"]

            # gets the x and y data for this graph
            x_data = ml_project.x_train_df_as_csv
            y_data = ml_project.y_train_df_as_csv

            # constructs the object to serialize
            to_serialize.append({
                    "graph_type": graph_type, 
                    "graph_title": graph_title,
                    "x_data": x_data,
                    "y_data": y_data,
                    })

        return to_serialize
