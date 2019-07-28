from rest_framework import serializers
from api.models import Contraction
from users.models import User


class ContractionSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = Contraction
        fields = ('id', 'user', 'created', 'modified', 'start', 'end',
                  'duration', 'frequency', 'pain')


class UserSerializer(serializers.ModelSerializer):
    contractions = ContractionSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'email', 'date_joined', 'contractions')
