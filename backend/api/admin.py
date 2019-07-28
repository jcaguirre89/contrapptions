from django.contrib import admin

from api.models import Contraction
from users.models import User

# Register your models here.
class ContractionInline(admin.TabularInline):
    model = Contraction
    extra = 0


class UserAdmin(admin.ModelAdmin):
   inlines = [ContractionInline]


# admin.site.unregister(User)
admin.site.register(User, UserAdmin)
