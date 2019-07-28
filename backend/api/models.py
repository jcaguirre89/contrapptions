from django.db import models
from users.models import User
from django.utils import timezone

# Create your models here.
class Contraction(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='contractions')
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    start = models.DateTimeField(default=timezone.now)
    end = models.DateTimeField(blank=True, null=True)
    pain = models.PositiveSmallIntegerField(blank=True, null=True, default=5)

    class Meta:
        ordering=('start',)
        get_latest_by = ('end', )

    def __str__(self):
        username = getattr(self.user, self.user.USERNAME_FIELD)
        return f'Contraction for {username} at {self.start: %Y-%m-%d}'

    @property
    def duration(self):
        """ contraction duration, in seconds """
        return (self.end - self.start).seconds

    @property
    def frequency(self):
        """ time diff (in seconds) between start of this contraction and
        start of previous one """
        try:
            previous = self.get_previous_by_start(user=self.user)
            return (self.start - previous.start).seconds 
        except self.DoesNotExist:
            return 
