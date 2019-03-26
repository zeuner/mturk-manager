from api.helpers import raise_not_implemented_exception
from api.models import Project
from rest_framework.request import Request

from django.db.models import QuerySet, Model


class Interface_Manager_Items(object):
    @staticmethod
    def get_all(database_object_project: Project, request: Request, fields: list=None) -> QuerySet:
        """
        Args:
            database_object_project: The project
            request: The project
            fields: The project
        """
        raise_not_implemented_exception('get_all', __class__)

    @staticmethod
    def filter(queryset: QuerySet, request: Request) -> QuerySet:
        raise_not_implemented_exception('filter', __class__)

    @staticmethod
    def annotate(queryset: QuerySet) -> QuerySet:
        raise_not_implemented_exception('annotate', __class__)

    @staticmethod
    def sort_by(queryset: QuerySet, request: Request) -> QuerySet:
        sort_by = request.query_params.get('sort_by')

        if sort_by is not None:
            descending = request.query_params.get('descending', 'false') == 'true'
            queryset = queryset.order_by(
                ('-' if descending else '') + sort_by
            )

        return queryset

    @staticmethod
    def get(id_item: object) -> object:
        raise_not_implemented_exception('get', __class__)

    @staticmethod
    def create(data: object) -> object:
        raise_not_implemented_exception('create', __class__)

    @staticmethod
    def update(instance: Model, data: dict) -> Model:
        raise_not_implemented_exception('update', __class__)

    @staticmethod
    def delete(id_item: int) -> None:
        raise_not_implemented_exception('delete', __class__)