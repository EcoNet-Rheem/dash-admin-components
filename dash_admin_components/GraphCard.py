# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class GraphCard(Component):
    @_explicitize_args
    def __init__(
        self,
        children=None,
        id=Component.UNDEFINED,
        style=Component.UNDEFINED,
        className=Component.UNDEFINED,
        type=Component.UNDEFINED,
        src=Component.UNDEFINED,
        elevation=Component.UNDEFINED,
        image_elevation=Component.UNDEFINED,
        color=Component.UNDEFINED,
        title=Component.UNDEFINED,
        subtitle=Component.UNDEFINED,
        width=Component.UNDEFINED,
        loading_state=Component.UNDEFINED,
        tag=Component.UNDEFINED,
        innerRef=Component.UNDEFINED,
        textColor=Component.UNDEFINED,
        borderColor=Component.UNDEFINED,
        align=Component.UNDEFINED,
        accentColor=Component.UNDEFINED,
        bodyContent=Component.UNDEFINED,
        cardTextContent=Component.UNDEFINED,
        cardNumberContent=Component.UNDEFINED,
        graphContent=Component.UNDEFINED,
        arrowContent=Component.UNDEFINED,
        arrowIcon=Component.UNDEFINED,
        arrowIconColor=Component.UNDEFINED,
        chartData=Component.UNDEFINED,
        chartOptions=Component.UNDEFINED,
        icon=Component.UNDEFINED,
        chartLabel=Component.UNDEFINED,
        showFooter=Component.UNDEFINED,
        footerContent=Component.UNDEFINED,
        n_clicks=Component.UNDEFINED,
        n_clicks_timestamp=Component.UNDEFINED,
        **kwargs
    ):
        self._prop_names = [
            "children",
            "id",
            "style",
            "className",
            "type",
            "src",
            "elevation",
            "image_elevation",
            "color",
            "title",
            "subtitle",
            "width",
            "loading_state",
            "tag",
            "innerRef",
            "textColor",
            "borderColor",
            "align",
            "accentColor",
            "bodyContent",
            "cardTextContent",
            "cardNumberContent",
            "graphContent",
            "arrowContent",
            "chartOptions",
            "chartData",
            "icon",
            "arrowIcon",
            "arrowIconColor",
            "chartLabel",
            "showFooter",
            "footerContent",
            "n_clicks",
            "n_clicks_timestamp",
        ]
        self._type = "GraphCard"
        self._namespace = "dash_admin_components"
        self._valid_wildcard_attributes = []
        self.available_properties = [
            "children",
            "id",
            "style",
            "className",
            "type",
            "src",
            "elevation",
            "image_elevation",
            "color",
            "title",
            "subtitle",
            "width",
            "loading_state",
            "tag",
            "innerRef",
            "textColor",
            "borderColor",
            "align",
            "accentColor",
            "bodyContent",
            "cardTextContent",
            "cardNumberContent",
            "graphContent",
            "arrowContent",
            "chartOptions",
            "chartData",
            "icon",
            "chartLabel",
            "arrowIcon",
            "arrowIconColor",
            "showFooter",
            "footerContent",
            "n_clicks",
            "n_clicks_timestamp",
        ]
        self.available_wildcard_properties = []

        _explicit_args = kwargs.pop("_explicit_args")
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != "children"}

        for k in []:
            if k not in args:
                raise TypeError("Required argument `" + k + "` was not specified.")
        super(GraphCard, self).__init__(children=children, **args)
