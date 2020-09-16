# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Toast(Component):
    @_explicitize_args
    def __init__(
        self,
        children=None,
        toastType=Component.UNDEFINED,
        message=Component.UNDEFINED,
        **kwargs
    ):
        self._prop_names = [
            "children",
            "toastType",
            "message"
        ]
        self._type = "Toast"
        self._namespace = "dash_admin_components"
        self._valid_wildcard_attributes = []
        self.available_properties = [
            "children",
            "toastType",
            "message"
        ]
        self.available_wildcard_properties = []

        _explicit_args = kwargs.pop("_explicit_args")
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != "children"}

        for k in []:
            if k not in args:
                raise TypeError("Required argument `" + k + "` was not specified.")
        super(Toast, self).__init__(children=children, **args)
