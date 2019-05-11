from rest_framework import serializers
from api.models import MessageReject

class Serializer_Message_Reject(serializers.ModelSerializer):
    count_usage = serializers.IntegerField(required=False)

    class Meta:
        model = MessageReject
        fields = (
            'id', 
            'message', 
            'message_lowercase',
            'count_usage',
        )
        extra_kwargs = {
            'id': {
                'read_only': False,
                'required': False,
            },
            # 'message': {
            #     'validators': [],
            # },
        }