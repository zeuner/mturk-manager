# from mturk_manager.models import m_Project
import json
from api.serializers import Serializer_HIT
from mturk_db.permissions import IsInstance, AllowOptionsAuthentication
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from api.helpers import add_database_object_project
from api.classes import Manager_HITs
from rest_framework.decorators import api_view, permission_classes

PERMISSIONS_INSTANCE_ONLY = (AllowOptionsAuthentication, IsInstance,)

class HITs(APIView):
    permission_classes = PERMISSIONS_INSTANCE_ONLY

    @add_database_object_project
    def get(self, request, slug_project, database_object_project, use_sandbox, format=None):
        list_ids = json.loads(request.query_params.get('list_ids', '[]'))

        queryset_hits = Manager_HITs.get_all(database_object_project=database_object_project, use_sandbox=use_sandbox, list_ids=list_ids)
        # queryset_projects = m_Project.objects.all()
        # serializer = Serializer_Project(queryset_projects, many=True, context={'request': request})
        serializer = Serializer_HIT(queryset_hits, many=True)
        return Response(serializer.data)