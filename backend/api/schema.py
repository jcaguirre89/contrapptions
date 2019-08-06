import graphene

from graphene_django.types import DjangoObjectType

from api.models import Contraction
from users.models import User


class ContractionType(DjangoObjectType):
    class Meta:
        model = Contraction

    # Add properties as fields
    duration = graphene.Int()
    frequency = graphene.Int()


class UserType(DjangoObjectType):
    class Meta:
        model = User


class Query(object):
    all_contractions = graphene.List(ContractionType)
    all_users = graphene.List(UserType)
    contraction = graphene.Field(ContractionType, id=graphene.Int())
    user = graphene.Field(UserType, id=graphene.Int(), email=graphene.String())

    def resolve_all_users(self, info, **kwargs):
        return User.objects.all()

    def resolve_user(self, info, **kwargs):
        id = kwargs.get('id')
        email = kwarks.get('email')

        if id is not None:
            return User.objects.get(pk=id)

        if email is not None:
            return User.objects.get(email=email)

        return None

    def resolve_all_contractions(self, info, **kwargs):
        return Contraction.objects.select_related('user').all()

    def resolve_contraction(self, info, **kwargs):
        id = kwargs.get('id')

        if id is not None:
            return Contraction.objects.get(pk=id)

        return None

