from api.models import Contraction
from users.models import User
from api.serializers import ContractionSerializer, UserSerializer

from rest_framework import viewsets
from rest_framework import permissions

class ContractionViewSet(viewsets.ModelViewSet):
    """
    `list`, `create`, `retrieve`, `update` and `destroy` actions for
    the Contraction model.
    """
    queryset = Contraction.objects.all()
    serializer_class = ContractionSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, )

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class UserViewSet(viewsets.ModelViewSet):
    """
    `list`, `create`, `retrieve`, `update` and `destroy` actions for
    the User model.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer

